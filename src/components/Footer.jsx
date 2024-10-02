import { FaFacebookF } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-3 text-center">
      <h6 className="text-2xl">TECH ZONE</h6>
      <div className=" flex justify-center gap-4 py-2">
        <div className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary ">
          <FaFacebookF size={24} className=" hover:text-white duration-200" />
        </div>

        <div className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary ">
          <TiSocialInstagram
            size={24}
            className=" hover:text-white duration-200"
          />
        </div>

        <div className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary ">
          <BsTwitterX size={22} className=" hover:text-white duration-200" />
        </div>

        <div className="flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full p-1 hover:scale-110 duration-200 bg-gray hover:bg-dark_primary ">
          <FaYoutube size={24} className=" hover:text-white duration-200" />
        </div>
      </div>
      <p>codeaprogram © All CopyRights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
