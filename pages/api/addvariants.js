// import connectToDb from "../../middleware/db";

// // import multer from "multer";

// // // Returns a Multer instance that provides several methods for generating
// // // middleware that process files uploaded in multipart/form-data format.
// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: "./public/uploads",
// //     filename: (req, file, cb) => cb(null, file.originalname),
// //   }),
// // });

// // const uploadMiddleware = upload.single("img");

// // export const config = {
// //   api: {
// //     bodyParser: false
// //   }
// // }
// const handler = async(req, res)=> {
//   if (req.method === "POST") {
//     console.log(req.body);
//     console.log(req.body.data)
//     // console.log(req.file);
//     // for (let i = 0; i < req.body.length; i++) {
//     //   let p = new Product({
//     //     title: req.body[i].title,
//     //     slug: req.body[i].slug,
//     //     desc: req.body[i].desc,
//     //     img: req.body[i].img,
//     //     category: req.body[i].category,
//     //     size: req.body[i].size,
//     //     color: req.body[i].color,
//     //     price: req.body[i].price,
//     //     availableQty: req.body[i].availableQty,
//     //   });
//     //   await p.save();
//     // }
//     res.status(200).json({ success: true });
//   } else {
//     res.status(400).json({ error: "Internal Server Error" });
//   }
// }

// export default connectToDb(handler);

import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import baseUrl from "../../helpers/baseUrl";
import { nanoid } from "nanoid";
import Variants from "../../models/Variants";
import Product from "../../models/Product";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      console.log("req.files", file);
      // console.log("req bojec", req);
      console.log("files names", file.fieldname);
      cb(
        null,
        file.fieldname +
          "_variant" +
          "_" +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// apiRoute.use(upload.array("img", 5));
// apiRoute.use(upload.single("mainImage"));
apiRoute.use(
  upload.fields([
    { name: "img", maxCount: 5 },
    { name: "mainImage", maxCount: 1 },
  ])
);
// apiRoute.use(connectToDb);

apiRoute.post(async (req, res) => {
  const id = req.query.productId;
  console.log(req.body, "id", id);
  let product = await Product.findById(id);
  console.log("product", product);
  // console.log("reqfiles",req.files);
  // console.log(req);
  let filenames = req.files.img.map((file) => {
    return `${baseUrl}/uploads/${file.filename}`;
  });

  let filename = req.files.mainImage.map((file) => {
    return `${baseUrl}/uploads/${file.filename}`;
  });

  // console.log("filenames: ", filenames);
  // console.log("filename: ", filename);
  if (product) {
    let variant = new Variants({
      title: req.body.title,
      slug: req.body.title + "_variant" + "_" + nanoid(),
      desc: req.body.desc,
      productsID: product._id,
      img: filenames,
      mainImage: filename[0],
      status: req.body.status,
      category: product.category,
      size: req.body.size,
      color: req.body.color,
      price: req.body.price,
      availableQty: req.body.availableQty,
    });
    await variant.save((err, variant) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        Product.findByIdAndUpdate(
          id,
          {
            availableQty: product.availableQty + variant.availableQty,
            $push: { variants: variant._id },
          },
          (error) => {
            if (error) {
              res.status(500).json({ message: error.message });
            } else {
              // res.json({ message: 'Variant successfully added', variant });
              res.status(200).json({ success: true, variant });
            }
          }
        );
      }
    });
    // let updatedproduct = await Product.findByIdAndUpdate(id, { $push: { variants: variant._id } })
  } else {
    res.status(400).json({
      success: false,
      error: "You cannot add variants to this product",
    });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
