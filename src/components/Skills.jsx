import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

// images
import figma from "../assets/images/Skills/figma.png";
import frm from "../assets/images/Skills/frm.jpg";
import mongodb from "../assets/images/Skills/mdb.png";
import reactjs from "../assets/images/Skills/react.png";
import js from "../assets/images/Skills/js.jpg";
import tailwind from "../assets/images/Skills/tcss.jpg";
import next from "../assets/images/Skills/next.png";
import github from "../assets/images/Skills/github.jpg";

const skills_content = [
  {
    name: "Figma",
    logo: figma,
  },
  {
    name: "JavaScript",
    logo: js,
  },
  {
    name: "React",
    logo: reactjs,
  },
  {
    name: "Nextjs",
    logo: next,
  },
  {
    name: "MongoDB",
    logo: mongodb,
  },
  {
    name: "Tailwind Css",
    logo: tailwind,
  },
  {
    name: "Framer Motion",
    logo: frm,
  },
  {
    name: "Github",
    logo: github,
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const lng = cookies.get("i18next") || "en";

  const listKey = [
    "Figma",
    "JavaScript",
    "React",
    "Nextjs",
    "Tailwind Css",
    "MongoDB",
    "Framer Motion",
    "Github",
  ];

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* content */}
      <div className="md:container px-5  py-14">
        <h2
          className={lng === "ar" ? "font-titleAr2 title" : "title"}
          data-aos="fade-down"
        >
          {t("skills.title")}
        </h2>
        <h4
          className={lng === "ar" ? "font-titleAr2 subtitle" : "subtitle"}
          data-aos="fade-down"
        >
          {t("skills.subTitle")}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className={lng === "ar" ? "font-titleAr2 " : " italic"}>
                  {t(
                    `skills.skillsData.${listKey.find(
                      (elm) => elm === skill.name
                    )}.desc`
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
