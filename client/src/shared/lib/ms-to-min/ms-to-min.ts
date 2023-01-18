export const msToMin = (ms: number) => {
  const sec = Math.floor((ms % 60000) / 1000);
  const min = Math.floor(ms / 60000);
  return `${min}:${sec < 10 ? sec + "0" : sec}`;
};
