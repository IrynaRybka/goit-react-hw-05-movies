import { Appbar } from "components/AppBar/Appbar";

import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return <div className="homePage">
    <Appbar/>
    <Outlet/>
  </div>;
  }


