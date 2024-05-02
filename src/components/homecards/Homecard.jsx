import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import Medicine from '../../assets/images/homecard/Medicine.png';
import Dine from '../../assets/images/homecard/Dish.png';
import Cars from '../../assets/images/homecard/Cars.png';
import Electro from '../../assets/images/homecard/Electronics.png';

const Card = (props) => {
  return (
    <div
      className="flex flex-col gap-[10px] items-center rounded-2xl text-center py-[34px] px-[45px]"
      style={{ backgroundColor: props.bgColor }}
    >
      <img src={props.src} alt="" className={`w-[130px] ${props.isSpinning ? 'spin-animation' : ''}`} />
      <h1
        className="text-[20px] md:text-[28px] lg:text-[28px] font-[700] text-[#00588A] font-[Inter]"
        style={{ color: props.headColor }}
      >
        {props.head}
      </h1>
      <p
        className="text-[15px] md:text-[23px] lg:text-[18px] text-[#233E60] font-[Poppins] font-[400]"
        style={{ color: props.pColor }}
      >
        {props.p}
      </p>
      <Link to={props.buttonLink}>
        <button
          className="text-[13px] bg-[#00588A] rounded-2xl px-[20px] py-[5px] text-white font-[600] font-[Inter] mt-[12px]"
          style={{ backgroundColor: props.buttonBgColor }}
        >
          {props.button}
        </button>
      </Link>
    </div>
  );
};

const Homecard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 px-[5vw] md:px-[10vw] lg:px-[18vw] pt-[7rem]">
      <div>
        <Card
          src={Medicine}
          head="Medicine"
          p="Welcome to Heal Hub, where wellness meets convenience on your terms..."
          button="Visit Page"
          bgColor="#00E0FF"
          headColor="#00588A"
          pColor="#233E60"
          buttonBgColor="#00588A"
          buttonLink="/medicine"
          // isSpinning={true}
        />
      </div>
      <div>
        <Card
          src={Dine}
          head="Dine Ease"
          p="Dine Ease, ultimate and best destination, Ease brings you your favorite flavors..."
          button="Visit Page"
          bgColor="#FFC700"
          headColor="#000000"
          pColor="#742D06"
          buttonBgColor="#665E40"
          buttonLink="/medicine"
          isSpinning={true}
        />
      </div>
      <div>
        <Card
          src={Cars}
          head="Find Cars"
          p="AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle..."
          button="Visit Page"
          bgColor="#FF7A00"
          headColor="#000000"
          pColor="#742D06"
          buttonBgColor="#664D36"
          buttonLink="/medicine"
          // isSpinning={true}
        />
      </div>
      <div>
        <Card
          src={Electro}
          head="Electronics"
          p="ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience."
          button="Visit Page"
          bgColor="#42FF00"
          headColor="#000000"
          pColor="#742D06"
          buttonBgColor="#4A6640"
          buttonLink="/medicine"
          // isSpinning={true}
        />
      </div>
    </div>
  );
};

export default Homecard;
