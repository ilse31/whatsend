import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { CheckAuth } from "../store/users";

const Authenticated = (props) => {
  const history = useHistory();
  const auth = useRecoilValue(CheckAuth);
  useEffect(() => {
    if (!auth.check) {
      history.push("/login");
    }
  }, [auth.check, history]);
  return props.children;
};

export default Authenticated;
