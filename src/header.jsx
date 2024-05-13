import React from "react";
// import {Link} from "react-router-dom";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button.jsx";

import {Component} from "@/components/component.jsx";
const Header = ({ user, handleGoogle, signOut }) => {
  return (
    <header className="flex items-center h-14 px-4 border-b-2 border-[#9900FE]  md:h-20 md:px-6 mb-10">
      <div className="flex items-center space-x-4">
        <Link className="font-semibold" to="/">
          UnMute
        </Link>
      </div>
      <nav className="flex-1 justify-end hidden space-x-4 md:flex">
        <Link
          className="font-semibold hover:underline decoration-[#9900FE] decoration-2 underline-offset-8"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-semibold hover:underline decoration-[#9900FE] decoration-2 underline-offset-8"
          to="/about"
        >
          About Us
        </Link>
          <Component/>
        {user === null ? (
          <Button onClick={handleGoogle}>Login</Button>
        ) : (
          <Button onClick={signOut}>Sign Out</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;