import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const HideFooter = ({children}) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    console.log("this is footer location:", location);
    const hideFooterPaths = ["/Login", "/Register"];
    setShowFooter(!hideFooterPaths.includes(location.pathname));
  }, [location]);
  return <div>{showFooter && children}</div>;
};

export default HideFooter;
