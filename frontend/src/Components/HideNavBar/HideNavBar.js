import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const HideNavBar = ({children}) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);
  useEffect(() => {
    console.log("this is nav location:", location);
    const hideNavPaths = ["/Login", "/Register"];
    setShowNavBar(!hideNavPaths.includes(location.pathname));
  }, [location]);

  return <div>{showNavBar && children}</div>;
};

export default HideNavBar;
