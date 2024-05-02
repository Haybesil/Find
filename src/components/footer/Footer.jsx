import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { BsSendFill } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-[5rem] px-[14vw] mt-[4rem] bg-[#00203F]">
      <div className="flex flex-col md:flex-col lg:flex-row gap-[37px] lg:justify-between">
        <div className="flex flex-col gap-[20px]">
          <div>
            <h1 className="text-[20px] md:text-[33px] lg:text-[33px] text-[#00588A] font-[600] font-[Poppins]">
              Send us an email
            </h1>
          </div>

          <div className="flex gap-[20px] items-center">
            <textarea
              cols={35}
              rows={4}
              placeholder="Enter message"
              className="text-[20px] pl-[5px] border border-black "
            />
            <button className="text-[38px]">
              <BsSendFill color="blue" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div>
            <h1 className="text-[20px] md:text-[33px] lg:text-[33px] text-[#00588A] font-[600] font-[Poppins]">
              Subscribe to our newsletter
            </h1>
          </div>

          <div className="flex gap-[10px] items-center">
            <input
              type="text"
              placeholder="Enter email"
              className="border border-black pl-[5px] py-[5px]"
            />
            <button className="text-[38px]">
              <IoMdSend color="blue" />
            </button>
          </div>
        </div>
      </div>

      <div className='flex gap-[30px] pt-[3rem]'>
        <FaInstagram size={25} className="white" />
        <LuFacebook size={25} className="white" />
        <RiTwitterXLine size={25} className="white" />
        <FaLinkedin size={25} className="white" />
      </div>
    </div>
  );
};

export default Footer;
