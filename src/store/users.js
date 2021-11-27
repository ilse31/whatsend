import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(
  -["authenticatd"], // no need for specifying atoms keys
  {
    key: "user", // configuration stay the same too
    storage: localStorage,
  }
);

const CheckAuth = atom({
  key: "authenticatd",
  default: {
    check: false,
    user: "",
    imgUrl: "",
    tokenId: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export { CheckAuth };
