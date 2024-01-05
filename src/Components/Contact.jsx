import { useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";

const Contact = () => {
  const Naviagate = useNavigate();
  const GotoHomePage = () => {
    Naviagate("/");
  };
  return (
    <>
      <div className=" mt-7">
        <button
          className="bg-orange-500 text-white font-bold text-lg rounded-lg p-1"
          onClick={GotoHomePage}
        >
          Go to Home Page
        </button>
      </div>
      <div className="">
        <div className="">
          <h1 className="Get in tounch"></h1>
          <p className="">Fill the form to Start a Conversation</p>
          <p className="">
            <span className="">
              <ImLocation2 />
              Arihant City Phase 1 near sai Baba Mandir
            </span>
          </p>
          <p className="">
            <span className="">
              <IoCallSharp />
            </span>
            +9702343218
          </p>
          <p className="">
            <span className="">
              <IoIosMailUnread />
            </span>
            info@acme.org
          </p>
        </div>
        <div className="">
          <form action="">
            <label htmlFor="" className="">
              <input type="text" className="" />
            </label>
            <label htmlFor="" className="">
              <input type="text" className="" />
            </label>
            <label htmlFor="" className="">
              <input type="text" className="" />
            </label>
            <button type="submit" className="">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
