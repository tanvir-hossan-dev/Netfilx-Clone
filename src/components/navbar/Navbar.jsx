import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div
      className={`navbar flex justify-between fixed top-0 w-full px-[20px] py-[15px] transition-all delay-500  ${
        show && "bg-[#111]"
      } z-101`}
    >
      <img
        className="w-[80px] object-contain "
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netfilx-logo"
      />
      <img
        className="w-[30px] object-contain "
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netfilx-logo"
      />
    </div>
  );
};

export default Navbar;
