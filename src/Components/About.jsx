import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();

  const gotoContact = () => {
    Navigate("/contact"); //always give relative path//
  };
  return (
    <>
      <section>
        <h1 className="text-xl font-semibold ">About Page</h1>
        <button
          className="border-2 border-black bg-black text-white font-bold mt-8 mb-10 rounded-xl p-2"
          onClick={gotoContact}
        >
          Go to Contact Page
        </button>
        <br />
        <button
          className="border-2 border-black bg-black text-white font-bold mt-8 mb-10 rounded-xl p-2"
          onClick={() => {
            Navigate(-1);
          }}
        >
          Go_Back
        </button>
      </section>
    </>
  );
};

export default About;
