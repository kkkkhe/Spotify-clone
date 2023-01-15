export const onTrackResize = (width: any, setGrids: (grid: string) => void) => {
  if (width > 791) {
    setGrids("grid-cols-[40px,6fr,4fr,3fr,minmax(20px,50px)]");
    return;
  } else if (width > 536 && width <= 791) {
    setGrids("grid-cols-[40px,6fr,4fr,minmax(20px,50px)]");
    return;
  } else setGrids("grid-cols-[40px,1fr,minmax(20px,50px)]");
};
