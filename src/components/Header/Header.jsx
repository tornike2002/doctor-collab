import { navLinks } from "../../lib/libNavbar";
import Navbar from "./Navbar/Navbar";
export default function Header() {
  return (
    <div className="bg-[#004682]">
      <Navbar links={navLinks} />
    </div>
  );
}
