import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/PichPiseyLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navLink = [
    { label: "home", path: "/" },
    { label: "feature", path: "feature" },
    { label: "Category", path: "category" },
    { label: "Shop", path: "shop" },
    { label: "Blog", path: "blog" },
  ];
  const contact = [
    {
      icon: <i className="bx bx-user-circle"></i>,
    },

    {
      icon: <i className="bx bx-shopping-bag"></i>,
    },
  ];
  const optionLanguege = [
    {
      label: "English",
      flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      label: "Cambodia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png",
    },
  ];

  const money = [{ Pon: "USA" }, { Pon: "KHMER" }];
  const product = [{ Pon: "KOREA" }, { Pon: "KHMER" }];

  const [selecFlag, setSelectFlag] = useState(optionLanguege[0]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const match = navLink.find((i) =>
      i.path === "/"
        ? location.pathname === "/"
        : location.pathname === `/${i.path}`
    );
    document.title = match ? `Pich Pisey | ${match.label}` : "Homepage";
  }, [location.pathname]);
  return (
    <>
      <div className="bg-[#f5f5f5] font-popinse h-[140px] fixed top-0 left-0 right-0 shadow-lg z-[9999]">
        <nav className="fixed flex  top-0 left-0 right-0 justify-between items-center z-[9999] px-[90px] bg-[#fdecec] font-popinse h-[80px]  ">
          <section>
            {/* right */}

            <div className="flex justify-center items-center">
              <div>
                <img className="w-[20px]" src={selecFlag.flag} alt="" />
              </div>
              <div>
                <select
                  name=""
                  id=""
                  onClick={(e) => {
                    const lang = optionLanguege.find(
                      (langs) => langs.label === e.target.value
                    );
                    setSelectFlag(lang);
                  }}
                >
                  {optionLanguege.map((op) => (
                    <option key={op.label}>{op.label}</option>
                  ))}
                </select>
                <select>
                  {money.map((mo, ind) => (
                    <option key={ind}>{mo.Pon}</option>
                  ))}
                </select>
                <select name="" id="">
                  {product.map((mo, ind) => (
                    <option key={ind}>{mo.Pon}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          {/* center */}
          <div className=" flex justify-center items-center font-NT">
            <img
              onClick={() => navigate("/")}
              className="w-[300px] pt-[20px] object-cover h-fit"
              src={logo}
              alt=""
            />
          </div>

          {/* left  */}
          <section className="flex  justify-center items-center gap-2">
            <div>
              <input
                type="text"
                name=""
                placeholder="Search..."
                className="bg-[#ffc7df] px-[5px] w-[140px] placeholder-white  cursor-pointer text-[15px] py-[5px] rounded-[5px]"
                id=""
              />
              <i className="bx bx-search absolute text-white right-[165px] top-[33px]"></i>
            </div>
            <div className="flex justify-center items-center gap-2">
              {contact.map((ct, ind) => (
                <span className="text-[25px]" key={ind}>
                  {ct.icon}
                </span>
              ))}
            </div>
          </section>
        </nav>

        <main className="flex justify-center items-center pt-[101px] fixed top-0 left-0   right-0 z-[99]">
          <ul className="flex justify-center items-center  gap-15 cursor-pointer uppercase list-style font-semibold font-popinse text-[14px]">
            {navLink.map((nav, ind) => (
              <Link key={ind} to={nav.path}>
                <li
                  className={`cursor-pointer transition-all duration-300 ease-in-out 
    ${
      location.pathname === nav.path || location.pathname === `/${nav.path}`
        ? "text-[#fd84cf] style-list "
        : ""
    }`}
                >
                  {nav.label}
                </li>
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Navbar;
