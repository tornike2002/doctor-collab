import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
export default function NavbarText({ links }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = async () => {
    sessionStorage.removeItem("adminLogin", true);

    navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <div className="lg:hidden z-50 relative">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          color="white"
        />
      </div>

      <ul
        className={`fixed right-0 top-[100px] h-full w-full bg-[#004682] flex flex-col items-center gap-4 p-5 duration-500  ${
          isOpen ? "translate-x-0" : "translate-x-full "
        } lg:relative lg:translate-x-0 lg:flex-row lg:w-auto lg:bg-transparent lg:top-0`}
      >
        {links.map((link) => (
          <li key={link.id} className="text-white">
            <NavLink
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                `py-2 px-4 text-[#C4C4C4] font-extrabold text-[18px] hover:text-[#ff4a4a] transition-transform lg:hover:scale-125 duration-500 ${
                  isActive ? "rounded-lg w-full bg-gray-700" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            onClick={onSubmit}
            className="text-white w-[80px] p-[10px] rounded-full bg-[#ff0f0f]"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}
