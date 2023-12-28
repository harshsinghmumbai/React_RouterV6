import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl text-blue-600">Contact Page</h1>
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
        <section>
          <h1 className="text-xl font-semibold ">Conatct Page</h1>
        </section>
      </div>
    </>
  );
};

export default Contact;
