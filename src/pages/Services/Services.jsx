import React from "react";
import { useTranslation } from "react-i18next";
import text1 from './text1.svg'
import text2 from './text2.svg'
import foto1 from './img11.svg'
import foto2 from './img22.svg'
import foto3 from './img33.svg'
import foto4 from './img44.svg'
import foto5 from './img55.svg'

const Services = () => {
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
        <br />
        <br />
        <br />
        <section className="xl:flex xl:justify-around sd:gap-14">
          <div data-aos="zoom-in" data-aos-duration="2000">
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
<br /><br />

          <div data-aos="zoom-in" data-aos-duration="2000">
            <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-20 sd:grid sd:grid-cols-1 sd:gap-10 sd:place-items-center">
            <input className="sm:w-[500px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("FirstName")} /> 
            <input className="sm:w-[500px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("Lastname")} /> 
            <input className="sm:w-[500px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("addres")} /> 
            <input className="sm:w-[500px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("Phone")} /> 
          
            </div>
            <br /><br /><br />
            <div  className="sd:grid sd:place-items-center">
              <textarea className="sm:w-[500px] sd:w-[268px] 2xl:w-[1100px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" name="" id="" cols="30" rows="10" placeholder={t("com")}></textarea>
            </div>
          </div>
          <br /><br />
        </section>
        <br /><b></b>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={text1} alt="" />
            <img src={text2} alt="" />
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <section>
          <div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-wrap justify-around bg-[white] dark:bg-[#1B1B1B] p-[30px] rounded-xl gap-10">
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={foto1} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={foto2} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={foto3} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={foto4} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={foto5} alt="" />
          </div>
          </div>
        </section><br /><br /><br /><br /><br /><br /><br />


      </section>
    </>
  );
};

export default Services;
