import React from 'react';
import Logo from '../images/logo.svg';

const Footer = () => {
  return (
    <div className="bg-veryDarkBlackBlue text-white py-16 rounded-tr-[75px]">
      <div className="w-4/5 m-auto flex flex-col gap-12 items-center md:items-start md:flex-row justify-around flex-wrap text-center md:text-left">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <h1 className="font-bold mb-8">Product</h1>
          <ul className="text-grayishBlue flex flex-col gap-2">
            <li className="hover:underline cursor-pointer">Overview</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Marketplace</li>
            <li className="hover:underline cursor-pointer">Features</li>
            <li className="hover:underline cursor-pointer">Integrations</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-8">Company</h1>
          <ul className="text-grayishBlue flex flex-col gap-2">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Team</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-8">Connect</h1>
          <ul className="text-grayishBlue flex flex-col gap-2">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Newsletter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
