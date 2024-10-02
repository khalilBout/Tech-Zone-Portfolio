// import { content } from "../Content";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

import services_logo1 from "../assets/images/Services/logo1.png";
import services_logo2 from "../assets/images/Services/logo2.png";
import services_logo3 from "../assets/images/Services/logo3.png";

const Services = () => {
  // const { services } = content;
  const lng = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const servicesData = [
    {
      key: "webDevelopment",
      logo: services_logo1,
    },
    {
      key: "ui-ux",
      logo: services_logo2,
    },
    {
      key: "consulting",
      logo: services_logo3,
    },
  ];
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2
          className={lng === "ar" ? "font-titleAr2 title" : "title"}
          data-aos="fade-down"
        >
          {t("services.title")}
        </h2>
        <h4
          className={lng === "ar" ? "font-titleAr2 subtitle" : "subtitle"}
          data-aos="fade-down"
        >
          {t("services.subTitle")}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {servicesData.map((elm, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={elm.logo} alt="..." className="mx-auto max-w-[4rem]" />
              <h6 className={lng === "ar" ? "font-titleAr2 my-3" : "my-3"}>
                {" "}
                {t(`services.servicesData.${elm.key}.title`)}
              </h6>
              <p
                className={
                  lng === "ar" ? "font-titleAr2 leading-7" : "leading-7"
                }
              >
                {t(`services.servicesData.${elm.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
