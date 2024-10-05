import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import logo from "../assets/images/Contact/logo.png";

// icons
// import { GrMail } from "react-icons/gr";
// import { MdCall } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";

// image
import instagram from "../assets/images/Icon/instagram.png";
import facebook from "../assets/images/Icon/facebook.png";
import email from "../assets/images/Icon/email.png";
import whatsapp from "../assets/images/Icon/whatsapp.png";
import tiktok from "../assets/images/Icon/tiktok.png";

const social_media_data = [
  {
    text: "Tech.Zone.Team.Dz@gmail.com",
    icon: email,
    link: "mailto:tech.zone.team.dz@gmail.com",
  },
  {
    text: "Tech Zone",
    icon: facebook,
    link: "https://www.facebook.com/people/Tech-Zone/61556776194452/?locale=fr_FR",
  },
  {
    text: "Tech Zone Team",
    icon: instagram,
    link: "https://www.instagram.com/tech_zone_team/",
  },
];
const contactMore = [
  {
    icon: whatsapp,
    link: "https://wa.me/213670000320",
  },
  {
    icon: tiktok,
    link: "https://www.tiktok.com/@tech_zone_taem",
  },
];
// link:,

const Contact = () => {
  const form = useRef();
  const lng = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2zb8fra",
        "template_hwdyq4f",
        form.current,
        "e50fOr2aDksjQF0QY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2
          className={
            lng === "ar"
              ? "font-titleAr2 title !text-white"
              : "title !text-white"
          }
          data-aos="fade-down"
        >
          {t("contact.title")}
        </h2>
        <h4
          className={lng === "ar" ? "font-titleAr2 subtitle" : "subtitle"}
          data-aos="fade-down"
        >
          {t("contact.subTitle")}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className={
              lng === "ar"
                ? "font-titleAr2 flex-1 flex flex-col gap-5"
                : "flex-1 flex flex-col gap-5"
            }
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder={lng === "ar" ? "الإسم" : "Name"}
              required
              className={
                lng === "ar"
                  ? "font-titleAr2 border border-slate-600 p-3 rounded"
                  : "border border-slate-600 p-3 rounded"
              }
            />
            <input
              type="email"
              name="from_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder={lng === "ar" ? "الإيمايل" : "Email"}
              required
              className={
                lng === "ar"
                  ? "font-titleAr2 border border-slate-600 p-3 rounded"
                  : "border border-slate-600 p-3 rounded"
              }
            />
            <textarea
              name="message"
              placeholder={lng === "ar" ? "الرسالة " : "Message"}
              className={
                lng === "ar"
                  ? "font-titleAr2 border border-slate-600 p-3 rounded h-44"
                  : "border border-slate-600 p-3 rounded h-44 "
              }
              required
            ></textarea>
            <button
              className={
                lng === "ar"
                  ? "font-titleAr2 btn self-start bg-white text-dark_primary"
                  : "btn self-start bg-white text-dark_primary "
              }
            >
              {t("contact.btnSubmit")}
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {social_media_data.map((content, i) => (
              <a
                href={content.link}
                target="_blank"
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-3 group"
              >
                <img
                  src={content.icon}
                  className="w-12 h-10 cursor-pointer group-hover:scale-110 duration-300 "
                />
                <p className=" text-white group-hover:scale-105 duration-300">
                  {content.text}
                </p>
                {/* <p className="font-Poppins group-hover:scale-105 duration-300">
                  
                </p> */}
              </a>
            ))}
            <div className="flex gap-4">
              {contactMore.map((elm, i) => (
                <a
                  href={elm.link}
                  target="_blank"
                  className=" "
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                >
                  <img
                    src={elm.icon}
                    className="w-12 h-10 cursor-pointer hover:scale-110 duration-300"
                  />
                </a>
              ))}
            </div>

            <div className="w-[160px] h-[160px] mx-auto">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
