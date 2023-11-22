import { Link } from "react-router-dom";

import { navlistStyle } from "../constants";

const Footer = () => {
  return (
    <section>
      <div
        className="
          flex 
          sm:px-16
          sm:py-6
          px-4
          py-2
        "
      >
        <ul className="gap-4 sm:gap-8 items-center sm:flex ">
          <Link to="#">
            <li className={navlistStyle}>Privacy policy</li>
          </Link>
          <Link to="#">
            <li className={navlistStyle}>
              Copyright Ⓒ 2023 animal. All Rights Reserved.
            </li>
          </Link>
          <Link to="/credits">
            <li className={navlistStyle}>Credits</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
