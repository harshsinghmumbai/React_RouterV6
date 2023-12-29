 import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex">
        <h1 className="text-xl text-green-600 font-semibold mr-16">Logo</h1>
        <header>
          <nav>
            <ul className="flex space-x-9 text-xl font-bold text-gray-600 cursor-pointer">
              <li>
                <NavLink to="/"> Home</NavLink>
                {/* Navlink comp is type Achor tag compulsory href="" */}
              </li>
              <li>
                <NavLink to={"/about"}> About </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}> Contact </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header
