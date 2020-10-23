import React from "react";
import Aox from "../../hoc/Aox";

const Layout = (props) => (
  <Aox>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aox>
);

export default Layout;
