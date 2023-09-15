//AOS ANIMATE
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";
import logo from "./logo1.svg";
import logo2 from "./logo2.svg";

import { Link, Outlet, useLocation } from "react-router-dom";
import Switcher from "../components/Switcher/Switcher";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import Burger from "../components/burger/burger";

const Layout = () => {
  //translate
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#1B1B1B] dark:bg-[white] dark:text-black text-white overflow-hidden">
      <br />
      <br />
      <section className="w-[90%] m-auto">
        <div className="flex justify-between">
          <div>
            <Link to="/">
            <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex gap-36">
            <ul className=" dark:text-black text-white xl:flex xl:items-center xl:gap-10 xl:text-[18px] xl:block sd:hidden">
              <Link to={"/"}>
                <li >{t("Home")}</li>
              </Link>
              <Link to={"/About"}>
                <li>{t("About")}</li>
              </Link>
              <Link to={"/Services"}>
                <li>{t("Services")}</li>
              </Link>
              <Link to="/Fleets">
                <li>{t("Fleets")}</li>
              </Link>
            </ul>
            <div className="md:flex md:gap-10 md:items-center ">
              <h1 className="sd:hidden md:block">+41 79 896 96 96</h1>
              <select
                className="bg-[#1B1B1B] dark:bg-white sd:hidden xl:block "
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">ENG</option>
                <option value="ru">RUS</option>
              </select>
              <button className="p-[15px] sd:hidden md:block bg-[white] dark:bg-[#1B1B1B] dark:text-white rounded-xl text-black">
                {t("Contact")}
              </button>
              <div className="sd:hidden xl:block">
              <Switcher />
              </div>
            </div>
          </div>
          <div className="sd:flex sd:items-center">
              <Burger/>
              </div>
        </div>
        <Outlet />
      </section>

      <section className="bg-[#fff]"> 
        <br />
        <br />
        <br />
        <div className="lg:flex lg:justify-around sd:grid sd:grid-cols-1">
          <div className="text-black sd:m-auto lg:m-0">
            <h1 className="text-[30px] font-bold">{t("Subscribe")}</h1>
            <br />
            <p className="text-[20px]">{t("know")}</p>
            <br />
            <br />
            <div className="flex sd:justify-center lg:justify-start">
              <input
                className="bg-[#F0F0F0] rounded-lg text-white dark:text-black p-[10px]"
                type="text"
                placeholder={t("primer")}
              />
              <button className="p-[15px] rounded-xl bg-[black] text-white">
                {t("Subscribe2")}
              </button>
            </div>
          </div>
          <br className="sd:block lg:hidden" />
          <br className="sd:block lg:hidden" />
          <div>
            <img className="m-auto" src={logo2} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-black lg:grid lg:grid-cols-4 gap-10 md:grid md:grid-cols-2 md:gap-10 sd:grid sd:grid-cols-1 sd:gap-10">
          <div data-aos="zoom-in" data-aos-duration="2000" className="m-auto">
            <img className="m-auto" src={icon1} alt="" />
            <br />
            <h1 className="font-bold">+41 79 896 96 96</h1>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="m-auto">
            <img className="m-auto" src={icon2} alt="" />
            <br />
            <h1 className="font-bold">{t("Saules")}</h1>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="m-auto">
            <img className="m-auto" src={icon3} alt="" />
            <br />
            <h1 className="font-bold">info@limogroup.ch</h1>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="m-auto">
            <img className="m-auto" src={icon4} alt="" />
            <br />
            <h1 className="font-bold">{t("Every")}</h1>
          </div>
        </div>
        <br /><br /><br /><br />
        <div>
          <h1 className="text-center text-black">{t("n")}</h1>
        </div>
        <br /><br />
      </section>
    </section>
  );
};

export default Layout;
