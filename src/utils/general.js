export function createObjWithDefaultValues(self, defaults, options) {
  const res = Object.assign({}, defaults, options);
  Object.keys(defaults).forEach((k) => {
    self[k] = res[k];
  });
}
