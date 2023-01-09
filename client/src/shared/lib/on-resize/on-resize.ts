export const onResize = (width: any, setElems: any) => {
  if (width < 727) {
    setElems(3);
    return;
  } else if (width < 983) {
    setElems(4);
    return;
  } else if (width < 1230) {
    setElems(5);
    return;
  } else if (width < 1481) {
    setElems(6);
    return;
  } else if (width < 1732) {
    setElems(7);
    return;
  } else if (width < 1983) {
    setElems(8);
    return;
  } else {
    setElems(9);
  }
};
