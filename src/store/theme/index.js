import { atom } from "recoil";

const theme = atom({
  key: "switching-theme",
  default: "dark",
});

export default theme;
