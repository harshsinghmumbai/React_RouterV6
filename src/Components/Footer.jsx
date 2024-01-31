const Footer = () => {
  return (
    <>
      <footer className="w-full h-[10rem] flex justify-center items-center border-t-2">
        <div className="flex w-full justify-around">
          <p className="h-[5.78rem]">
            <img
              className="w-[17.75rem] h-[5.75rem]"
              src="../Images/logo_1.png"
              alt=""
            />
          </p>
          <div className="w-[42rem] flex justify-evenly h-[5rem] ">
            <p className="inline-block w-[10rem]">
              <h1 className="text-lg font-semibold ml-2 uppercase">Resource</h1>
              <ul className="font-semibold ml-2 font-serif mt-1 leading-8">
                <li>Home</li>
                <li>About</li>
              </ul>
            </p>
            <p className="inline-block w-[10rem]">
              <h1 className="text-lg font-semibold ml-2 uppercase">
                Follow us
              </h1>
              <ul className="font-semibold ml-2 font-serif mt-1 leading-8">
                <li>Github</li>
                <li>Discord</li>
              </ul>
            </p>
            <p className="inline-block w-[12rem]">
              <h1 className="text-lg font-semibold ml-2 uppercase">legal</h1>
              <ul className="font-semibold ml-2 font-serif mt-1 leading-8">
                <li>Privacy Policy</li>
                <li>Terms and Coditions</li>
              </ul>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
