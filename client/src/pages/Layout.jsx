import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="header">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>{" "}
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>{" "}
          <li>
            <Link to="/programs/create">Create Program</Link>
          </li>{" "}
          <li>
            <Link to="/exercises/create">Create Exercise</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
