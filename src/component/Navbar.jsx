
import { NavLink } from 'react-router-dom';
import { UseAuth } from './Auth';



export const Navbar=()=> {
  const auth = UseAuth()
  return (
    <div id="div">
      <>
        <div className="nav-links">
          <NavLink
            to="/singin"
            className="links
          "
          >
            Home
          </NavLink>
          <NavLink
            to="/pages1"
            className="links
          "
          >
            Pages
          </NavLink>
          <NavLink to="/dashboard" className="links">
            Dashdoard
          </NavLink>

          {!auth.use && (
            <NavLink to="/Singin" className="Signin">
              Sign in
            </NavLink>
          )}
        </div>
      </>
    </div>
  );
}

export default Navbar