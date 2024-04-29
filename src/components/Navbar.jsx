import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toogleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky px-14 top-0 z-10 py-3 backdrop-blur-lg border-b-[1px] border-b-stone-400/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />

            <span className="bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text text-xl tracking-tight">
              InnovateIT
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Workflow</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toogleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed left-0 z-10 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <a href="#">Features</a>
              </li>
              <li className="py-4">
                <a href="#">Workflow</a>
              </li>
              <li className="py-4">
                <a href="#">Pricing</a>
              </li>
              <li className="py-4">
                <a href="#">Testimonials</a>
              </li>
            </ul>
            <div className="flex flex-col gap-4 p-5">
              <a href="#" className="mx-auto py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
