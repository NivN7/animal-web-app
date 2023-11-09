import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

import Button from "./Button";
import IcSunSVG from "./svgs/IcSunSVG";
import IcMoonSVG from "./svgs/IcMoonSVG";
import IcMenuSVG from "./svgs/IcMenuSVG";
import IcCloseSVG from "./svgs/IcCloseSVG";
import { ThemeContext } from "../contexts";
import { ThemeContextInterface } from "../types";
import {
  navlistStyle,
  darkButtonTextColor,
  lightButtonTextColor,
  ic_width,
  ic_height,
} from "../constants";
import { UserStateInterface } from "../redux/user/userSlice";

const Navbar = () => {
  const navigate = useNavigate();

  const { darkTheme, toggleTheme } = useContext(
    ThemeContext
  ) as ThemeContextInterface;

  const [toggle, setToggle] = useState(false);

  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  return (
    <nav
      className="
        w-full
        flex
        justify-between
        items-center
        bg-backgroundColor
        sm:px-12
        sm:py-6
        px-4
        py-2
      "
    >
      <Link to="/">
        <div
          className="
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-primaryColor
            to-accentColor
            font-extrabold
            text-xl
          "
        >
          ANIMAL
        </div>
      </Link>

      <div className="flex gap-4 sm:gap-8">
        <ul className="gap-4 sm:gap-8 items-center sm:flex hidden">
          <Link to="/">
            <li className={navlistStyle}>Home</li>
          </Link>
          <Link to="/search">
            <li className={navlistStyle}>Search</li>
          </Link>

          {Object.keys(currentUser).length !== 0 ? (
            <Link to="/profile">
              <img
                className="rounded-full h-10 w-10 object-cover"
                src={currentUser?.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <li>
              <Button onClick={() => navigate("/sign-in")} primaryColor={true}>
                Sign in
              </Button>
            </li>
          )}
        </ul>

        <Button
          onClick={toggleTheme}
          accentColor={true}
          rounded="rounded-lg"
          px="px-3"
          py="py-2"
        >
          {darkTheme ? (
            <IcMoonSVG
              color={darkButtonTextColor}
              width={ic_width}
              height={ic_height}
            />
          ) : (
            <IcSunSVG
              color={lightButtonTextColor}
              width={ic_width}
              height={ic_height}
            />
          )}
        </Button>

        {/* mobile menu */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Button
            onClick={() => setToggle(!toggle)}
            accentColor={true}
            rounded="rounded-lg"
            px="px-3"
            py="py-2"
          >
            {toggle ? (
              darkTheme ? (
                <IcCloseSVG
                  color={darkButtonTextColor}
                  width={ic_width}
                  height={ic_height}
                />
              ) : (
                <IcCloseSVG
                  color={lightButtonTextColor}
                  width={ic_width}
                  height={ic_height}
                />
              )
            ) : darkTheme ? (
              <IcMenuSVG
                color={darkButtonTextColor}
                width={ic_width}
                height={ic_height}
              />
            ) : (
              <IcMenuSVG
                color={lightButtonTextColor}
                width={ic_width}
                height={ic_height}
              />
            )}
          </Button>

          {toggle && (
            <div
              className={`
                ${toggle ? "flex" : "hidden"}
                bg-cardColor
                p-6
                absolute
                top-20
                right-8
                text-center
                w-32
                rounded-xl
              `}
            >
              <ul className="flex flex-col gap-4 items-start ">
                <Link to="/" onClick={() => setToggle(false)}>
                  <li className={navlistStyle}>Home</li>
                </Link>
                <Link to="/search" onClick={() => setToggle(false)}>
                  <li className={navlistStyle}>Search</li>
                </Link>

                {Object.keys(currentUser).length !== 0 ? (
                  <Link to="/profile" onClick={() => setToggle(false)}>
                    <li className={navlistStyle}>Profile</li>
                  </Link>
                ) : (
                  <Link to="/sign-in" onClick={() => setToggle(false)}>
                    <li className={navlistStyle}>Sign-in</li>
                  </Link>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
