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
      <div className="">
        {/* ---------------------------------Home Button--------------------------- */}
        <div className=" mt-7 ml-5">
          <button
            className="bg-orange-500 text-white font-bold text-lg rounded-lg p-1"
            onClick={GotoHomePage}
          >
            Go to Home Page
          </button>
        </div>

        {/* --------------------------------Conatct page------------------------------ */}
        <div className=" flex p-5 mt-5 justify-evenly mb-10">
          <div className="border w-[28.5rem] h-[16.5rem] p-5 rounded-lg bg-gray-300">
            <h1 className="text-5xl font-extrabold mb-2">Get in tounch:</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Fill the form to Start a Conversation
            </h2>
            <div className="flex mt-1 ml-1">
              <p className="text-xl pt-1 mr-1">
                <ImLocation2 />
              </p>
              <p className="text-xl font-semibold mb-1"> Arihant City</p>
            </div>
            <div className="flex mt-1 ml-1">
              <p className="text-xl pt-1 mr-1">
                <IoCallSharp />
              </p>
              <p className="text-xl font-semibold mb-1">+9702343218</p>
            </div>
            <div className="flex mt-1 ml-1">
              <p className="text-xl pt-1 mr-1">
                <IoIosMailUnread />
              </p>
              <p className="text-xl font-semibold"> info@acme.org</p>
            </div>
          </div>
          <div className="w-[25rem] h-[15.75rem]">
            <form action="" className="flex flex-col space-y-2">
              <label htmlFor="" className="">
                <input
                  type="text"
                  className="border-2 border-black w-[20.5rem] h-[3.5rem] rounded-md text-2xl font-semibold pl-5"
                  placeholder="Full Name"
                />
              </label>
              <label htmlFor="" className="">
                <input
                  type="text"
                  className="border-2 border-black w-[20.5rem] h-[3.5rem] rounded-md text-2xl font-semibold pl-5 "
                  placeholder="Email"
                />
              </label>
              <label htmlFor="" className="">
                <input
                  type="number"
                  className="border-2 border-black w-[20.5rem] h-[3.5rem] rounded-md text-2xl font-semibold pl-5"
                  placeholder="Mobile Number"
                />
              </label>
              <button
                type="submit"
                className=" w-[11rem] h-[3rem] rounded-md text-2xl font-semibold bg-orange-500 text-white hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
