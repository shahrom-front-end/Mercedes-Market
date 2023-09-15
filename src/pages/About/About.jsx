import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import odamak from "./odamak.svg";
import foto1 from './img11.svg'
import foto2 from './img22.svg'
import foto3 from './img33.svg'
import foto4 from './img44.svg'
import foto5 from './img55.svg'

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section >
        <br />
        <br />
        <br />
        <section>
          <div className="bg2 p-[40px] rounded-[40px]">
            <br />
            <br />
            <br />
            <br />
            <h1 className="md:text-[50px] text-white sm:text-[40px] sd:text-[30px] font-bold text-center">
              {t("Booking")}
            </h1>
            <p className="text-[20px] text-center text-white">{t("buk")}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="bg-[#333] rounded-2xl p-[30px]">
            <div className="xl:flex xl:justify-between md:grid md:grid-cols-2 md:gap-10 w-[70%] m-auto sd:grid sd:grid-cols-1 sd:gap-10">
              <img className="m-auto" src={icon1} alt="" />
              <img className="m-auto" src={icon2} alt="" />
              <img className="m-auto" src={icon3} alt="" />
              <img className="m-auto" src={icon4} alt="" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="xl:flex xl:justify- sd:grid sd:grid-cols-1 sd:gap-16">
            <div className="bg-[#333] dark:text-white p-[15px] rounded-xl sm:w-[290px] sd:w-[270px] sd:m-auto sd:text-center xl:text-start xl:m-0">
              <h1 className="font-bold">{t("Summary")}</h1>
              <br />
              <p className="text-[#818181]">{t("SERVICE")}</p>
              <br />
              <h1 className="font-bold">{t("Hourly")}</h1>
              <br />
              <br />
              <br />
              <p className="text-[#818181]">{t("PICKUP")}</p>
              <br />
              <h1 className="font-bold">{t("Switzerland")}</h1>
              <br />
              <br />
              <br />
              <p className="text-[#818181]">{t("DROP")}</p>
              <br />
              <p className="font-bold">{t("Switzerland")}</p>
              <br />
              <br />
              <br />
              <p className="text-[#818181]">{t("PICKUP2")}</p>
              <br />
              <p className="font-bold">17-05-2022, 8:00</p>
              <br />
              <br />
              <br />
              <p className="text-[#818181]">{t("TOTAL")}</p>
              <br />
              <p className="font-bold">0 km</p>
            </div>

            <div className="grid gap-10 sd:m-auto">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <div>
                  <div className="md:flex md:gap-10 sd:text-center">
                    <div className="bg-[#333] p-[0px] rounded-2xl">
                      <img className="m-auto" src={img2} alt="" />
                    </div>

                    <div>
                      <br />
                      <div className="sm:flex gap-10 sd:justify-center xl:justify-start">
                        <h1 className="text-[22px]">{t("Mersedes")}</h1>
                        <button className="bg-[#fff] dark:bg-[#333] dark:text-white p-[15px] text-black rounded-xl">
                          {t("Select")}
                        </button>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-[20px] font-bold">$445.00</h1>
                          <br />
                          <h1>More Info</h1>
                        </div>
                        <div>
                          <img src={odamak} alt="" />
                          <br />
                          <img src={odamak} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  data-aos="zoom-in" data-aos-duration="2000">
                <div>
                  <div className="md:flex md:gap-10 sd:text-center">
                    <div className="bg-[#333] p-[0px] rounded-2xl">
                      <img className="m-auto" src={img3} alt="" />
                    </div>

                    <div>
                      <br />
                      <div className="sm:flex gap-10 sd:justify-center xl:justify-start">
                        <h1 className="text-[22px]">{t("Mersedes")}</h1>
                        <button className="bg-[#fff] dark:bg-[#333] dark:text-white p-[15px] text-black rounded-xl">
                          {t("Select")}
                        </button>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-[20px] font-bold">$445.00</h1>
                          <br />
                          <h1>More Info</h1>
                        </div>
                        <div>
                          <img src={odamak} alt="" />
                          <br />
                          <img src={odamak} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  data-aos="zoom-in" data-aos-duration="2000">
                <div>
                  <div className="md:flex md:gap-10 sd:text-center">
                    <div className="bg-[#333] p-[0px] rounded-2xl">
                      <img className="m-auto" src={img1} alt="" />
                    </div>

                    <div>
                      <br />
                      <div className="sm:flex gap-10 sd:justify-center xl:justify-start">
                        <h1 className="text-[22px]">{t("Mersedes")}</h1>
                        <button className="bg-[#fff] dark:bg-[#333] dark:text-white p-[15px] text-black rounded-xl">
                          {t("Select")}
                        </button>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-[20px] font-bold">$445.00</h1>
                          <br />
                          <h1>More Info</h1>
                        </div>
                        <div>
                          <img src={odamak} alt="" />
                          <br />
                          <img src={odamak} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-wrap justify-around bg-[white] dark:bg-[#1B1B1B] p-[30px] rounded-xl gap-10">
            <img className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto1} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto2} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto3} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto4} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto5} alt="" />
          </div>
          </div>
        </section>
        <br /><br /><br /><br /><br /><br />
      </section>
    </>
  );
};

export default About;
