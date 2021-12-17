import { createObjWithDefaultValues } from "../utils/general";

export class Directory {
  constructor(options) {
    const defaults = {
      id: null,
      title: null,
      parent: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}
