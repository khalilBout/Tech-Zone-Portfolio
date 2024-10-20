// import content
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Hero_person from "../assets/images/Hero/person.png";

// import { content } from "../Content";

const heroData = {
  title: "Web Developer",
  firstName: "TECH",
  LastName: "ZONE",
  image: Hero_person,
};

const Hero = () => {
  const { t } = useTranslation();
  // const { hero } = content;
  const lng = cookies.get("i18next") || "en";

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] bg-red-300">
            {heroData.firstName}{" "}
            <span className="text-dark_primary">{heroData.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 " data-aos="fade-down">
          <h2 className={lng === "ar" ? "font-titleAr2" : ""}>
            {t("hero.title")}
          </h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{t("hero.btnText")}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {/* {hero.hero_content.map((content, i) => (
              
            ))} */}
            <div
              data-aos="fade-down"
              data-aos-delay={0 * 300}
              className={`flex items-center w-80 gap-5 flex-row-reverse text-right `}
            >
              <h3 className="flex">
                4 <span>+</span>
              </h3>
              <p
                className={
                  lng === "ar"
                    ? "font-titleAr2 text-xl"
                    : "font-Poppins text-xl"
                }
              >
                {t("hero.experience")}
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-delay={1 * 300}
              className={`flex items-center w-80 gap-5 flex-row-reverse text-right`}
            >
              <p
                className={
                  lng === "ar"
                    ? "font-titleAr2 text-xl"
                    : "font-Poppins text-xl"
                }
              >
                {t("hero.projects")}
              </p>
              <h3 className="flex">
                15 <span>+</span>
              </h3>
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={heroData.image}
            data-aos="slide-up"
            alt="photo portfolio"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
