import { useTranslation } from "react-i18next";
import Testimonials from "../components/Testimonials";
import cookies from "js-cookie";
import ImgPrson from "../assets/images/Projects/person.png";

const Projects = () => {
  const lng = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-bg_light_primary min-h-[100vh]" id="projects">
        <div className="md:container px-5 pt-6 flex flex-col justify-between ">
          <div>
            <h2
              className={lng === "ar" ? "font-titleAr2 title" : "title"}
              data-aos="fade-down"
            >
              {t("project.title")}
            </h2>
            <h4
              className={lng === "ar" ? "font-titleAr2 subtitle" : "subtitle"}
              data-aos="fade-down"
            >
              {t("project.subtitle")}
            </h4>
            <br />
          </div>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
            <img
              src={ImgPrson}
              alt="..."
              data-aos="fade-right"
              className="max-w-[25vw] min-w-[18rem]"
            />

            <div className="rounded-3xl min-h-[65vh] grow max-sm:w-[90vw] overflow-y-hidden ">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
