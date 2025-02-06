import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { navLinks } from "../../lib/libNavbar";
import Navbar from "./Navbar/Navbar";
export default function Header() {
  return (
    <div className="bg-[#004682]">
      <Navbar links={navLinks} />
    </div>
  );
}
