import { atom } from "recoil";

const CheckAuth = atom({
  key: "authenticatd",
  default: {
    check: false,
    user: "",
    imgUrl: "",
  },
});

export { CheckAuth };
