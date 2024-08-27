import React, { useState } from "react";
import LogoImage from "@/assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "@/shad/ui/button";

const Header: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  return (
    <>
      <nav className="w-full z-10 h-22 bg-[#f4f4f4]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 my-auto">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={LogoImage} alt="" />
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-0"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setActiveNavbar(!activeNavbar)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66732 10.6666C5.93094 10.6666 5.33398 11.2636 5.33398 12C5.33398 12.7363 5.93094 13.3333 6.66732 13.3333H25.334C26.0704 13.3333 26.6673 12.7363 26.6673 12C26.6673 11.2636 26.0704 10.6666 25.334 10.6666H6.66732Z"
                fill="#777E91"
              />
              <path
                d="M6.66732 18.6666C5.93094 18.6666 5.33398 19.2636 5.33398 20C5.33398 20.7363 5.93094 21.3333 6.66732 21.3333H25.334C26.0704 21.3333 26.6673 20.7363 26.6673 20C26.6673 19.2636 26.0704 18.6666 25.334 18.6666H6.66732Z"
                fill="#777E91"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              activeNavbar
                ? "block h-screen bg-[#f4f4f4] fixed top-0 left-0"
                : "hidden"
            }`}
            id="navbar-default"
          >
            <div className="hidden max-md:block">
              <div className="flex items-center justify-between px-10 py-4">
                <NavLink
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img src={LogoImage} alt="" />
                </NavLink>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={() => setActiveNavbar(!activeNavbar)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.94281 21.1421C7.42211 21.6628 7.42214 22.5071 7.94286 23.0278C8.4635 23.5485 9.30776 23.5485 9.82845 23.0278L23.0278 9.82845C23.5485 9.30774 23.5484 8.46353 23.0278 7.94288C22.5071 7.42217 21.6629 7.4221 21.1421 7.94281L7.94281 21.1421Z"
                      fill="#777E91"
                    />
                    <path
                      d="M9.94281 8.02777C9.42211 7.50708 8.57786 7.5071 8.05714 8.02782C7.5365 8.54846 7.53647 9.39272 8.05717 9.91342L21.2565 23.1128C21.7772 23.6335 22.6214 23.6334 23.1421 23.1128C23.6628 22.592 23.6629 21.7478 23.1421 21.2271L9.94281 8.02777Z"
                      fill="#777E91"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex max-md:block items-center justify-between gap-3 w-full">
              <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-start">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `block p-3 font-medium text-md max-md:text-start transition ease-in-out delay-150 ${
                        isActive
                          ? "text-primary "
                          : "text-gray-900 hover:text-[#00CC61]"
                      }`
                    }
                    to="/products"
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `block p-3 font-medium text-md max-md:text-start transition ease-in-out delay-150 ${
                        isActive
                          ? "text-primary "
                          : "text-gray-900 hover:text-[#00CC61]"
                      }`
                    }
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `block p-3 font-medium text-md max-md:text-start transition ease-in-out delay-150 ${
                        isActive
                          ? "text-primary "
                          : "text-gray-900 hover:text-[#00CC61]"
                      }`
                    }
                    to="/company"
                  >
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `block p-3 font-medium text-md max-md:text-start transition ease-in-out delay-150 ${
                        isActive
                          ? "text-primary "
                          : "text-gray-900 hover:text-[#00CC61]"
                      }`
                    }
                    to="/resources"
                  >
                    Recources
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `block p-3 font-medium text-md max-md:text-start transition ease-in-out delay-150 ${
                        isActive
                          ? "text-primary "
                          : "text-gray-900 hover:text-[#00CC61]"
                      }`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="flex max-md:gap-4 p-4 md:p-0 md:flex-row md:space-x-4 rtl:space-x-reverse">
                <Button
                  className="bg-white border border-[#DCDCDC] text-black text-md w-auto max-md:w-full p-4 rounded-lg"
                  variant="outline"
                >
                  Log In
                </Button>
                <Button
                  className="bg-[#004050] text-white text-md w-auto max-md:w-full p-4 rounded-lg"
                  variant="outline"
                >
                  Try for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
