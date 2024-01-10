import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const About = () => {
  const Naviagte = useNavigate();
  const GoBack = () => {
    Naviagte(-1);
  };
  return (
    <>
      <div className="flex justify-between w-[95%] h-[4.5rem] m-auto">
        <p className="inline-block text-2xl mt-5">
          <FaArrowCircleLeft onClick={GoBack} />
        </p>
      </div>

      <div className=" flex justify-evenly">
        <img
          src="Images/img-3.jpg"
          alt=""
          className="border w-[30rem] h-[20rem] rounded-3xl"
        />
        <p className="ml-8 w-[38rem] h-[21rem]">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Lorem ipsum dolor sit amet, amet consectetur adipisicing elit. amet
            Sapiente
          </h1>
          <p className="text-lg font-semibold font-mono text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            porro ex odit assumenda, sed neque quaerat delectus alias molestias
            similique magni reprehenderit quibusdam fugiat dignissimos
            perferendis magnam qui quidem? Aliquam doloribus ipsum consequuntur
            quam deleniti at, similique, optio voluptates vero blanditiis veniam
          </p>
        </p>
      </div>
    </>
  );
};

export default About;
