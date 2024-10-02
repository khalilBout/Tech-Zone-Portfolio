import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import logo from "../assets/images/Contact/logo.png";

// icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const social_media_data = [
  {
    text: "codeaprogram@gmail.com",
    icon: GrMail,
    link: "mailto:codeaprogram@gmail.com",
  },
  {
    text: "+91 1234 56778",
    icon: MdCall,
    link: "https://wa.me/1234567890",
  },
  {
    text: "codeaprogram",
    icon: BsInstagram,
    link: "https://www.instagram.com/codeaprogram/",
  },
];

const Contact = () => {
  const form = useRef();
  const lng = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
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
              name="user_email"
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
          <div dir="ltr" className="flex-1 flex flex-col gap-5">
            {social_media_data.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
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
