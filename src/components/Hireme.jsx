// import { content } from "../Content";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

import person from "../assets/images/Hireme/person.png";

const Hireme = () => {
  // const { Hireme } = content;
  const lng = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2
          data-aos="fade-down"
          className={lng === "ar" ? "font-titleAr2 title" : "title"}
        >
          {t("hireme.title")}
        </h2>
        <h4
          className={lng === "ar" ? "font-titleAr2 subtitle" : "subtitle"}
          data-aos="fade-down"
        >
          {t("hireme.subTitle")}
        </h4>
        <br />
        <div className="flex items-center justify-center gap-4 md:flex-row flex-col-reverse ">
          <div
            data-aos="fade-left"
            className=" m-4 border-2 border-dark_primary 
           p-6 shadow-sm rounded-xl rounded-br-[8rem] "
          >
            <p
              className={
                lng === "ar" ? "font-titleAr2 leading-7 py-2" : "leading-7 py-1"
              }
            >
              <span className="block">{t("hireme.hiremeData.sec1.title")}</span>

              {t("hireme.hiremeData.sec1.desc")}
            </p>
            <p
              className={
                lng === "ar" ? "font-titleAr2 leading-7 py-2" : "leading-7 py-1"
              }
            >
              <span className="block">{t("hireme.hiremeData.sec2.title")}</span>

              {t("hireme.hiremeData.sec2.desc")}
            </p>
            <p
              className={
                lng === "ar" ? "font-titleAr2 leading-7 py-2" : "leading-7 py-1"
              }
            >
              <span className="block">{t("hireme.hiremeData.sec3.title")}</span>
              {t("hireme.hiremeData.sec3.desc")}
            </p>
            <p
              className={
                lng === "ar" ? "font-titleAr2 leading-7 py-2" : "leading-7 py-1"
              }
            >
              {t("hireme.hiremeData.sec4.desc")}
            </p>

            <br />
            <button
              className={
                lng === "ar"
                  ? "font-titleAr2 btn bg-dark_primary text-white float-left"
                  : "btn bg-dark_primary text-white float-left"
              }
            >
              {t("hireme.btnText")}
            </button>
          </div>

          <img
            src={person}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
