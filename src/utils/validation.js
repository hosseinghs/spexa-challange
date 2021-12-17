export const emailFormatRule = (v) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
  !v ||
  "please enter a valid email";

export const mustFillRule = (v) => !!v || "please enter some value";
