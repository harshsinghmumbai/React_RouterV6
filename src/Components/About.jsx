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

      <div className=" border-t-2 border-orange-700 mt-4 p-5 flex justify-evenly">
        <img
          src="Images/img-3.jpg"
          alt=""
          className="border w-[38rem] h-[23.75rem] rounded-3xl"
        />
        <p className="ml-8 w-[38rem] h-[23.75rem]">
          <h1 className="text-4xl font-bold text-left mb-2">
            Lorem ipsum dolor sit amet, amet consectetur adipisicing elit. amet
            Sapiente, dolorum!
          </h1>
          <p className="text-lg font-semibold font-mono text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            porro ex odit assumenda, sed neque quaerat delectus alias molestias
            similique magni reprehenderit quibusdam fugiat dignissimos
            perferendis magnam qui quidem? Aliquam doloribus ipsum consequuntur
            quam deleniti at, similique, optio voluptates vero blanditiis veniam
            eos, corrupti laboriosam laudantium ducimus harum accusamus nisi
            itaque facilis. Vel similique nesciunt ipsam esse, natus, aliquam
          
          </p>
        </p>
      </div>
    </>
  );
};

export default About;
