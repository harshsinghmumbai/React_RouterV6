import { NavLink } from "react-router-dom";
//it help when user click on any Navlink(Home-About-Contact-Service) it redirect to respective-place(where user want to go on WebApp) & also provide active class(customized color) //

const Header = () => {
  return (
    <>
      <header className=" w-full h-[4.10rem] border-b-0 shadow-lg flex justify-center sticky top-0 left-0 bg-white ">
        <div className="w-full flex justify-around items-center ">
          <p className="inline-block">
            <img
              src="/Images/logo_1.png"
              alt=""
              className="w-[14.25rem] h-[3.75rem]"
            />
          </p>
          <nav className="inline-block">
            <ul className="flex space-x-9 text-xl font-bold text-gray-600 cursor-pointer">
              <li>
                <NavLink to="/"> Home</NavLink>
                {/* Navlink comp. is type Achor tag compulsory href="" */}
              </li>
              <li>
                <NavLink to={"about"}> About </NavLink>
              </li>
              <li>
                <NavLink to={"contact"}> Contact </NavLink>
              </li>
            </ul>
          </nav>
          <p className="inline-block">
            <button className="border bg-gray-200 p-1 rounded-md mr-5 font-semibold">
              Log in
            </button>
            <button className="bg-orange-600 text-white font-semibold p-2 rounded-lg">
              Get started
            </button>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
