export const convertToTime = (seconds: number) => {
  if (seconds < 0) {
    return "Invalid input";
  }

  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format the result as MM:SS
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const ringBell = async () => {
  const audio = new Audio(
    "https://freesound.org/data/previews/80/80921_1022651-lq.mp3",
  );

  for (let i = 0; i < 4; i++) {
    await audio.play();
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
};
