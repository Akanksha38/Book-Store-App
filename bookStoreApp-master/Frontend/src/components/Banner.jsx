import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-12 px-4 flex flex-col md:flex-row my-6">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold" >
              Hello,welcome here to learn something{" "}<br/>
              <span className="text-[#A0522D]">new everyday!!!</span>
            </h1>
            <p className="text-xl md:text-3xl md:pb-4 md:mt-0 font-dancing ">
              Welcome to your online bookstore! Browse various books across categories, from timeless classics to the latest releases. Enjoy free reads instantly, or log in to access premium collections. Whether you’re here to learn, escape, or be inspired—there’s a book waiting for you.
            </p>
            <label className="input input-bmrdered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow bg-white text-black border-[#A0522D]" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-outline mt-10" style={{ color: '#A0522D', borderColor: '#A0522D' }}>Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2 rounded-half">
          <img 
          src="/cozybookphto.png" 
          alt="Cozy Book" 
          className="md:w-[550px] md:h-[460px] md:ml-20 mt-12 rounded-2xl"
        />

        </div>
      </div>
    </>
  );
}

export default Banner;
