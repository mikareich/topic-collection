import { atom } from "recoil";

const headingsState = atom<HTMLHeadingElement[]>({
  key: "position",
  default: [],
});

export default headingsState;
