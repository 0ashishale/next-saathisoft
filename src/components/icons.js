import { MdOutlineLocalPhone } from 'react-icons/md';
import { IoMailOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";


export const Facebook = ({ size = 22, }) => {
  return <FaFacebookF size={size}  />;
};
export const Instagram = ({ size = 22, }) => {
  return <FaInstagram size={size}  />;
};
export const LinkedIn = ({ size = 22, }) => {
  return <FaLinkedinIn size={size}  />;
};

export const TwitterX = ({ size = 22, }) => {
  return <FaXTwitter size={size}  />;
};
export const Mail = ({ size = 22, }) => {
  return <IoMailOutline size={size}  />;
};
export const Phone = ({ size = 22, }) => {
  return <MdOutlineLocalPhone size={size}  />;
};

export const Location = ({size}) =>{
  return <FaLocationDot size={size} />
}
