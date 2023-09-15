import React from "react";
import "./Home";
import csshome from "./Home.css";
import { useTranslation } from "react-i18next";
import mers from "./mercedes.svg";
import foto1 from "./foto1.svg";
import Card from "../../components/Card/Card";
import photo1 from "./photo1.svg";
import photo2 from "./photo2.svg";
import photo3 from "./photo3.svg";
import photo4 from "./photo4.svg";
import mers2 from "./mercedes2.svg";
//swiper
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import car1 from "./car1.svg";
import car2 from "./car2.svg";
import car3 from "./car3.svg";

import im1 from "./im1.svg";
import im2 from "./im2.svg";
import im3 from "./im3.svg";
import im4 from "./im4.svg";
import im5 from "./im5.svg";
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import Cord from "../../components/Cord/Cord";
import fotooxiron1 from './fotosec1.svg'

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="overflow-hidden">
        <br />
        <br />
        <br />
        <section className="bg-[white] dark:bg-[#1B1B1B] dark:text-white text-[#1B1B1B] lg:p-[70px] md:p-[45px] sd:p-[30px] rounded-xl ">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[900px] sd:text-center lg:text-start">
              <h1 className="2xl:text-[100px] xl:text-[90px] lg:text-[70px] md:text-[55px] sm:text-[35px] sd:text-[25px] font-bold">
                {t("global")}
              </h1>
              <br />
              <p className="text-[21px]">{t("Offering")}</p>
              <br />
              <button className="p-[15px] rounded-xl w-[150px] bg-[#000] text-white">
                {t("Booking")}
              </button>
            </div>
            <div className="lg:mt-[70px] xl:mt-0">
              <img className="rounded-xl" src={mers} alt="" />
            </div>
          </div>
          <br />
          <br />
          <div className="flex sd:justify-center lg:justify-start rounded-full sd:text-center">
            <h1 className="bg-[#272727] p-[15px] text-white rounded-tl-xl ">
              {t("Distance")}
            </h1>
            <h1 className="bg-[#484848] p-[15px] text-white rounded-tr-xl">
              {t("Hourly")}
            </h1>
          </div>
          <br className="sd:block lg:hidden" />
          <div className="xl:flex xl:justify-between sd:m-auto bg-[#484848] md:grid md:grid-cols-2  sd:rounded-xl lg:rounded-none">
            <div className="bg-[#484848]  p-[20px] sd:rounded-xl sd:text-center md:text-start ">
              <h1 className="text-[#CBCBCB]">{t("Pick")}</h1>
              <h1 className="text-[white]">{t("From")}</h1>
            </div>
            <div className="bg-[#484848] p-[20px] sd:rounded-xl sd:text-center md:text-start ">
              <h1 className="text-[#CBCBCB]">{t("Pick")}</h1>
              <h1 className="text-[white]">{t("From")}</h1>
            </div>
            <div className="bg-[#484848] p-[20px] sd:rounded-xl sd:text-center md:text-start ">
              <h1 className="text-[#CBCBCB]">{t("Pick")}</h1>
              <h1 className="text-[white]">{t("From")}</h1>
            </div>
            <div className="bg-[#484848] p-[20px] sd:rounded-xl sd:text-center md:text-start  md:flex md:gap-6 sd:grid sd:grid-cols-1 sd:gap-6">
              <div>
                <h1 className="text-[#CBCBCB]">{t("Pick")}</h1>
                <h1 className="text-[white]">{t("From")}</h1>
              </div>
              <div className="">
                <button className="bg-[white] dark:text-black p-[15px] rounded-lg w-[100px]">
                  {t("Search")}
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="bg">
            <div>
              <h1 className="md:text-[70px] sm:text-[45px] sd:text-[35px] sd:text-center lg:text-start">
                {t("About")}
              </h1>
              <br />
              <p className="text-[20px] sd:text-center lg:text-start">
                {t("best")}
              </p>
            </div>
            <br />
            <br />
            <br />
            <div  className="bg-[#333] p-[25px] rounded-xl xl:flex xl:justify-around sd:gap-10">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img className="m-auto" src={foto1} alt="" />
              </div>
              <br className="sd:block xl:hidden" />
              <div data-aos="zoom-in" data-aos-duration="2000" className="md:w-[744px] sd:grid sd:text-center sd:m-auto xl:text-start xl:m-0 dark:text-white">
                <p>{t("Chauffeur")}</p>
                <br />
                <p>{t("Recognized")}</p>
                <br />
                <p>{t("have")}</p>
                <br />
                <p>{t("Thanks")}</p>
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
            <h1 className="md:text-[70px] sm:text-[45px] sd:text-[30px] sd:text-center xl:text-start">
              {t("Services")}
            </h1>
            <br />
            <h1 className="text-[25px] text-[#9F9F9F] sd:text-center xl:text-start">
              {t("Worldwide")}
            </h1>
          </div>
          <br />
          <br />
          <br />
          <div className="2xl:grid 2xl:grid-cols-4 xl:flex xl:flex-wrap xl:gap-10 md:grid md:grid-cols-2 md:gap-10 sd:grid sd:grid-cols-1 sd:gap-10">
            <Card
              img={photo1}
              txt1={t("transfers")}
              txt2={t("additional")}
              btn1={t("Booking")}
            />
            <Card
              img={photo2}
              txt1={t("transfers")}
              txt2={t("additional")}
              btn1={t("Booking")}
            />
            <Card
              img={photo3}
              txt1={t("transfers")}
              txt2={t("additional")}
              btn1={t("Booking")}
            />
            <Card
              img={photo4}
              txt1={t("transfers")}
              txt2={t("additional")}
              btn1={t("Booking")}
            />
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
          <div className="bg">
            <div>
              <h1 className="md:text-[70px] sm:text-[45px] sd:text-[30px] font-bold sd:text-center 2xl:text-start">
                {t("Fleets2")}
              </h1>
              <br />
              <p className="text-[25px] text-[9F9F9F] sd:text-center 2xl:text-start">
                {t("Choose")}
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="deg p-[30px] rounded-xl">
              <div className="xl:flex sd:grid sd:grid-cols-1 sd:gap-10">
                <div className="xl:mt-[60px] sd:text-center xl:text-start dark:text-white">
                  <h1 className="md:text-[60px] sm:text-[45px] sd:text-[30px] ">
                    {t("Mersedes")}
                  </h1>
                  <br />
                  <p className="text-[28px] ">{t("Passengers")}</p>
                  <br />
                  <p className="text-[28px] ">{t("Transmission")}</p>
                  <br />
                  <br />
                  <button className="bg-[white] p-[20px] text-black rounded-xl font-bold">
                    {t("Limousine")}
                  </button>
                </div>
                <div>
                  <img className="m-auto" src={mers2} alt="" />
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
        <div data-aos="zoom-in" data-aos-duration="2000">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={car1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="flex flex-wrap justify-around bg-[white] dark:bg-[#1B1B1B] p-[30px] rounded-xl gap-10">
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={im1} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={im2} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={im3} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={im4} alt="" />
            <img className="m-auto dark:bg-white p-[10px] rounded-xl" src={im5} alt="" />
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
            <h1 className="md:text-[70px] sm:text-[45px] sd:text-[30px] font-bold sd:text-center xl:text-start">{t("Choose2")}</h1>
            <br />
            <p className="text-[#818181] sd:text-center xl:text-start">{t("main")}</p>
          </div>
          <br /><br /><br /><br /><br />
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 sd:grid sd:grid-cols-1 sd:gap-10 ">
          <Cord img={icon1} text1={t("Reservation")} text2={t("need")}/>
          <Cord img={icon2} text1={t("Reservation")} text2={t("need")}/>
          <Cord img={icon3} text1={t("Reservation")} text2={t("need")}/>
          <Cord img={icon4} text1={t("Reservation")} text2={t("need")}/>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /><br /><br /><br />
        <section>
          <div>
            <h1 className="md:text-[70px] sm:text-[50px] sd:text-[30px] font-bold sd:text-center xl:text-start">{t("Contact")}</h1>
            <br />
            <p className="text-[#818181] text-[20px] sd:text-center xl:text-start">{t("Perhaps")}</p>
          </div>
          <br /><br /><br /><br /><br /><br />
          <div className="2xl:flex 2xl:justify-around sd:grid sd:grid-cols-1 sd:gap-10">
          <div data-aos="flip-up" data-aos-duration="2500" className="grid place-items-center">
          <input className="md:w-[636px] sm:w-[550px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("Name")} />
            <br /><br />
            <input className="md:w-[636px] sm:w-[550px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder={t("primer")} />
            <br /><br />
            <input className="md:w-[636px] sm:w-[550px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" type="text" placeholder="+998 90 901  54 55" />
            <br /><br /><br />
            <textarea className="md:w-[636px] sm:w-[550px] sd:w-[268px] bg-[#3A3A3A] p-[15px] rounded-lg text-white" cols="30" rows="10" placeholder={t("Message")}></textarea>
            <br /><br /><br />
            <div className="md:flex md:gap-16 sd:grid sd:grid-cols-1 sd:gap-10">
            <div className="flex gap-6 items-center">
              <input type="checkbox" />
              <h1>{t("agree")}</h1>
              </div>
              <div className="sd:flex sd:justify-center">
                <button className="bg-[#fff] text-black p-[15px] rounded-xl">{t("Submit")}</button>
              </div>
              </div>

          </div>
          <div data-aos="flip-up" data-aos-duration="2500">
            <img className="m-auto" src={fotooxiron1} alt="" />
          </div>


          </div>
        </section>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <section>
          <div>

          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
