import PlayIcon from "../../../../assets/icons/PlayIcon";
import MonitorStopIcon from "../../../../assets/icons/MonitorStopIcon";
import useTimer from "../../../../hooks/use-timer";
import Button from "../../../button";

const Main = () => {
  const { isActive, time, startTimer, stopTimer } = useTimer();

  return (
    <main className="flex flex-col items-center justify-center flex-grow p-4 md:p-6 bg-neutral-100 dark:bg-neutral-700">
      <section className="w-full max-w-md p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold dark:text-white">Timer</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Keep track of your time.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl font-bold dark:text-white">{time}</div>
        </div>
        <div className="flex justify-center">
          {!isActive ? (
            <Button onClick={startTimer}>
              Start
              <PlayIcon />
            </Button>
          ) : (
            <Button onClick={stopTimer}>
              Stop
              <MonitorStopIcon />
            </Button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
