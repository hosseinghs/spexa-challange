export const emailFormatRule = (v) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
  !v ||
  "فرمت ایمیل وارد شده صحیح نیست";

export const mustFillRule = (v) => !!v || "پر کردن این بخش الزامیست";

