import { useEffect, useState } from "react";
// import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

import i18n from "i18next";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import cookies from "js-cookie";

// icons
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FcServices } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { RiMailSendFill } from "react-icons/ri";

const navbarData = [
  {
    link: "#home",
    icon: FaHome,
  },
  {
    link: "#skills",
    icon: GiSkills,
  },
  {
    link: "#services",
    icon: FcServices,
  },
  {
    link: "#projects",
    icon: GrProjects,
  },
  {
    link: "#contact",
    icon: RiMailSendFill,
  },
];
const Navbar = () => {
  // const { nav } = content;

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const leng = ["ar", "en"];
  const lng = cookies.get("i18next") || "en";

  const changeDir = () => {
    window.document.dir = i18n.dir();
  };
  useEffect(() => {
    changeDir();
  }, [lng]);
  return (
    <div className="w-full flex justify-center">
      <div
        dir="ltr"
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] p-2 flex gap-2 bg-slate-200/60 rounded-full"
      >
        <button
          className=" hover:bg-slate-200 rounded-full p-1 duration-300"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={32} />
        </button>
        <div
          className=" hover:bg-slate-200 rounded-full p-1 duration-300"
          // onClick={() => setShowMenu(!showMenu)}
        >
          {/* chenge Leng  */}
          <div className="group relative cursor-pointer ">
            <div className="flex h-[30px] items-center justify-center gap-[2px] p-1 ">
              <IoLanguageOutline size={16} />
              <ul className=" gap-2 px-2 hidden group-hover:flex transition-all duration-200">
                {/* {leng.map((item, ind) => ( */}
                <li className=" rounded-full bg-green-100 hover:bg-green-200 duration-300 cursor-pointer w-7 h-7 flex justify-center items-center">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      changeDir();
                    }}
                    // className={lng === "ar" ? " hidden" : " block"}
                  >
                    {/* {item.toUpperCase()} */}
                    Ar
                  </button>
                </li>
                <li className=" rounded-full bg-green-200 hover:bg-green-300 duration-200 cursor-pointer w-7 h-7 flex justify-center items-center">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      changeDir();
                    }}
                    // className={lng === "en" ? " hidden" : " block"}
                  >
                    {/* {item.toUpperCase()} */}
                    En
                  </button>
                </li>
                {/* ))} */}
              </ul>
              <FaCaretDown className="transition-all duration-200 -rotate-90 group-hover:rotate-90" />
            </div>

            {/* list of leng  */}
            <div className="absolute top-7 -left-3 z-[50] hidden rounded-md p-2 text-black group-hover:block"></div>
          </div>
        </div>
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {navbarData.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className="absolute top-7 -left-3 z-[50] hidden rounded-md p-2 text-black group-hover:block">
              <ul className="space-y-2 bg-slate-200 p-1 rounded-md ">
                {leng.map((item, ind) => (
                  <li key={ind}>
                    <button
                      onClick={() => {
                        i18n.changeLanguage(item);
                        changeDir();
                      }}
                      className="inline-block rounded-md p-2 hover:bg-primary/20"
                    >
                      {item.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */
}
