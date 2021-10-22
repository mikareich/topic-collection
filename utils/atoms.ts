import { atom } from "recoil";

import { CollectionColor } from "./collections";

export const headingsState = atom<HTMLHeadingElement[]>({
  key: "position",
  default: [],
});

export const colorState = atom<CollectionColor>({
  key: "color",
  default: "blue",
});

export const showDrawerState = atom<boolean>({
  key: "showDrawer",
  default: false,
});
