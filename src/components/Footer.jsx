import { FaFacebookF } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-3 text-center">
      <h6 className="text-2xl">TECH ZONE</h6>
      <div className=" flex justify-center gap-4 py-2">
        <a
          href="https://www.facebook.com/people/Tech-Zone/61556776194452/?locale=fr_FR"
          target="_blank"
          className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary "
        >
          <FaFacebookF size={24} className=" hover:text-white duration-200" />
        </a>

        <a
          href="https://www.instagram.com/tech_zone_team/"
          target="_blank"
          className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary "
        >
          <TiSocialInstagram
            size={24}
            className=" hover:text-white duration-200"
          />
        </a>

        <a
          href="https://www.tiktok.com/@tech_zone_taem"
          target="_blank"
          className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary "
        >
          <FaTiktok size={22} className=" hover:text-white duration-200" />
        </a>

        <a
          href="https://wa.me/213670000320"
          target="_blank"
          className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary "
        >
          <FaWhatsapp size={24} className=" hover:text-white duration-200" />
        </a>
      </div>
      <p>Tech Zone © All CopyRights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
