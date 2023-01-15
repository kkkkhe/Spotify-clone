export const onTrackResize = (width: any, setGrids: (grid: string) => void) => {
  console.log(width);
  if (width > 791) {
    console.log(width);
    setGrids("grid-cols-[25px,6fr,4fr,3fr,minmax(20px,50px)]");
    return;
  } else if (width > 536 && width <= 791) {
    setGrids("grid-cols-[25px,6fr,4fr,minmax(20px,50px)]");
    return;
  } else setGrids("grid-cols-[25px,1fr,minmax(20px,50px)]");
};
