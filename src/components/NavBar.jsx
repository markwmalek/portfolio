import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const isDesignSection = location.pathname === '/' || location.pathname.startsWith('/project');
  const isBrandSection = location.pathname.startsWith('/brand');

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">
          Mark Wilson Malek
        </NavLink>
        <div className="navbar-links">
          <NavLink
            to="/"
            className={`navbar-link ${isDesignSection ? 'navbar-link--active' : ''}`}
            end
          >
            Product
          </NavLink>
          <NavLink
            to="/brand"
            className={`navbar-link ${isBrandSection ? 'navbar-link--active' : ''}`}
          >
            Brand
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link--active' : ''}`
            }
          >
            Art
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
