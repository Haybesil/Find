import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { MdOutlineCloseFullscreen } from "react-icons/md";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="pt-[2rem]">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-[25px] font-[600]">
              <Link to="/">Exclusive</Link>
            </h1>
          </div>
          <div className="hidden lg:block sm:hidden md:hidden">
            <ul className="flex gap-[30px] text-[20px] font-[400] font-[Poppins]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[20px] font-[400] font-[Poppins] border border-black rounded-2xl px-[20px] py-[3px]">
              <Link to="/login">Login</Link>
            </p>
          </div>

          <div className="lg:hidden">
            <CiMenuFries size={30} onClick={toggle} />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="relative bottom-[38px] bg-[#00203F] z-10 py-[34px]">
            <MdOutlineCloseFullscreen onClick={closeModal} size={50} className='pl-[1rem] pb-[1rem] text-[#00588A]' />
          <div>
          <ul className="flex flex-col gap-[2rem] text-[20px] font-[400] text-white text-center font-[Poppins]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
            </ul>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Navbar;
