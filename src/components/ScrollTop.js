import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation(); //This basically menas that will find the pathname property in useLocation, if we don't use {} it will returns the whole object.
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;