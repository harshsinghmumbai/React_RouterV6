import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex">
        <h1 className="text-xl text-green-600 font-semibold mr-16">Logo</h1>
        <header>
          <nav>
            <ul className="flex space-x-9 text-xl font-bold text-gray-600 cursor-pointer">
              <li>
                <Link to="/"> Home</Link>
                {/* link comp is type Achor tag compulsory href="" */}
              </li>
              <li>
                <Link to="about"> About </Link>
              </li>
              <li>
                <Link to="contact"> Contact </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Home;
