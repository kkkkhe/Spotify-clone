export const msToMin = (ms: number) => {
  const sec = ((ms % 60000) / 1000).toFixed(0);
  const min = (ms / 60000).toFixed(0);
  return `${min}:${sec.length == 1 ? sec + "0" : sec}`;
};
