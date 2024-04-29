import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-auto text-white py-6 mt-20">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Download our InnovateIT app </h3>
          <p> Explore World 😎 Through VR 🤖 From Home. </p>
          <div className="flex flex-col gap-5 sm:flex-row justify-center my-10">
            <div className="flex items-center justify-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div className="flex items-center justify-center border sm:w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 mx-auto flex flex-col-reverse gap-5 md:flex-row md:justify-between items-center text-sm text-gray-400 max-w-2xl ">
          <p className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text text-lg font-semibold">
            &copy; Durjoy Barua, 2024.{" "}
          </p>
          <div className="flex gap-3 text-white">
            <a href="https://durjoybarua.netlify.app/home" type="_blank">
              <span className="">About me</span>
            </a>
            <a href="https://github.com/durjoy1971" type="_blank">
              <span className="border-l pl-2">Github</span>
            </a>
            <a href="mailto:durjoybarua1971@gmail.com" type="_blank">
              <span className="border-l pl-2">Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
