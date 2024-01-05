import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="flex justify-evenly w-full h-[19rem] mt-10 mb-7">
        <img src="/Images/img-1.jpg" alt="" className="border rounded-lg" />
        <p className="w-[24.5rem]">
          <h1 className="text-5xl font-extrabold">Download Now</h1>
          <h2 className="text-4xl font-semibold">Lorem, ipsum.</h2>
          <br />
          <button className="bg-orange-600 text-xl font-semibold text-white p-2 rounded-lg flex">
            <span className="pt-1 mr-2">
              <IoLogoGooglePlaystore />
            </span>
            Download Now
          </button>
        </p>
      </div>
      <div className="border-t-2 border-orange-700 mb-2">
        <div className="ml-72">
          <img
            src="/Images/img-2.png"
            alt=""
            className="border rounded-lg w-[36rem] h-[24.25rem] mt-2 "
          />
          <p className="text-4xl font-semibold ml-2">
            Lorem, ipsum Lorem, ipsum..
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
