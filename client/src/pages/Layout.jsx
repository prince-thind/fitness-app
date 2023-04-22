import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      layout stuff
      <Outlet />
    </div>
  );
}

export default Layout;
