import { useCallback, useEffect, useState } from "react";
const Timer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  // useEffect(() => {
  //   startCountDown();
  // }, [startCountDown]);
  return (
    <div className=" rounded-md flex justify-center items-center flex-col">
      <div className="flex justify-between  sm:px-4">
        <div className="flex flex-col m-2 justify-center items-center">
          {/* <p className="px-1.5 md:px-3 flex justify-center items-center bg-orange-300 text-[#112D32] text-xs md:text-xl font-semibold rounded-md">
            {countDownTime?.days}
          </p> */}
          <p
            className={
              countDownTime?.days <= 0
                ? "flex items-center justify-center bg-red-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
                : "flex items-center justify-center bg-emerald-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
            }
          >
            {countDownTime?.days}
          </p>
        </div>
        <p className="text-md font-semibold flex items-center text-orange-300">
          :
        </p>
        <div className="flex flex-col justify-center items-center m-2">
          {/* <p className="px-1.5 md:px-3 bg-orange-300 text-[#112D32] text-xs md:text-xl font-semibold rounded-md">
            {countDownTime?.hours}
          </p> */}
          <p
            className={
              countDownTime?.hours <= 0
                ? "flex items-center justify-center bg-red-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
                : "flex items-center justify-center bg-emerald-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
            }
          >
            {countDownTime?.hours}
          </p>
        </div>
        <p className="text-md font-semibold flex items-center text-orange-300">
          :
        </p>
        <div className="flex flex-col justify-center items-center m-2">
          {/* <p className="px-1.5 md:px-3 bg-orange-300 text-[#112D32] text-xs md:text-xl font-semibold rounded-md">
            {countDownTime?.minutes}
          </p> */}
          <p
            className={
              countDownTime?.minutes <= 0
                ? "flex items-center justify-center bg-red-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
                : "flex items-center justify-center bg-emerald-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
            }
          >
            {countDownTime?.minutes}
          </p>
        </div>
        <p className="text-md font-semibold flex items-center text-orange-300">
          :
        </p>
        <div className="flex flex-col justify-center items-center m-2">
          {/* <p className="px-1.5 md:px-3 bg-orange-300 text-[#112D32] text-xs md:text-xl font-semibold rounded-md">
            {countDownTime?.seconds}
          </p> */}
          <p
            className={
              countDownTime?.seconds <= 0
                ? "flex items-center justify-center bg-red-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
                : "flex items-center justify-center bg-emerald-500 text-white  text-sm font-semibold px-2 py-1 rounded mx-1"
            }
          >
            {countDownTime?.seconds}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Timer;
