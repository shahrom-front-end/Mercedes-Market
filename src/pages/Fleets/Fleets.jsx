import React from "react";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import foto1 from "./img11.svg";
import foto2 from "./img22.svg";
import foto3 from "./img33.svg";
import foto4 from "./img44.svg";
import foto5 from "./img55.svg";
import { useTranslation } from "react-i18next";
import map from './map.svg'
import mers from './mers.svg'

const Fleets = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section>
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
        <section>
          <div className="xl:flex xl:justify-evenly sd:grid sd:grid-cols-1 sd:gap-10">
          <div data-aos="flip-down" data-aos-duration="2000">
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
          </div>
          <div  data-aos="flip-down" data-aos-duration="2000" className="bg-[#333] rounded-xl dark:text-white dark:rounded-2xl sm:w-[450px] p-[20px] sd:w-[275px] sd:m-auto xl:m-0">
            <img className="w-[100%]" src={map} alt="" />
            <br /><br />
            <div className="p-[30px]">
            <h1 className="fotn-bold text-[20px]">{t("Details")}</h1>
            <br />
            <p className="text-[#818181]">{t("SERVICE")}</p>
            <br />
            <p className="fotn-bold text-[20px]">{t("Hourly")}</p>
            <br /><br /><br />
            <p className="text-[#818181]">{t("PICKUP")}</p><br />
            <p>{t("Uzbekistan")}</p>
            <br />
            <br /><br />
            <p className="text-[#818181]">{t("DROP")}</p>
            <br />
            <p className="fotn-bold text-[20px]">{t("Uzbekistan")}</p>
            <br /><br />
            <br />
            <p className="text-[#818181]">{t("PICKUP2")}</p>
            <br />
            <p className="fotn-bold text-[20px]">17-05-2022, 8:00</p>
            <br /><br /><br />
            <p className="text-[#818181]">{t("TOTAL")}</p>
            <br />
            <p className="fotn-bold text-[20px]">4.9 km</p>
            </div>
          </div>
          <div  data-aos="flip-down" data-aos-duration="2000" className="sd:m-auto xl:m-0">
            <div>
          <div className="bg-[#333] p-[20px] rounded-xl sm:w-[450px] sd:w-[275px]">
            <button className="p-[15px] bg-[#fff] rounded-xl text-black font-bold">{t("EDIT")}</button>
            <img src={mers} alt="" />
          </div>
          <div className="sm:w-[450px] sd:w-[275px]">
            <h1 className="text-[30px] font-bold">{t("Mersedes")}</h1>
            <br /><br />
            <div className="flex justify-between">
              <h1 className="text-[22px] font-bold">{t("Selected")}</h1>
              <h1>$450.00</h1>
            </div>
            <br /><br />
            <div className="flex justify-between">
              <h1 className="text-[20px] font-bold">{t("total")}</h1>
              <h1>$450.00</h1>
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
        <section>
          <div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-wrap justify-around bg-[white] dark:bg-[#1B1B1B] p-[30px] rounded-xl gap-10">
              <img  className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto1} alt="" />
              <img  className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto2} alt="" />
              <img  className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto3} alt="" />
              <img  className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto4} alt="" />
              <img  className="m-auto dark:bg-white p-[10px] rounded-xl"src={foto5} alt="" />
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
      </section>
    </>
  );
};

export default Fleets;
