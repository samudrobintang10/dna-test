import React from "react";
import { Outlet } from "react-router-dom";
import NavTab from "../elements/NavTab";
import {
  faLocationDot,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function DefaultLayout() {
  return (
    <div id="defaultLayout ">
      <header className="caliana-header fixed top-0 w-full bg-white px-10 z-20">
        <div className="wrapper-header flex justify-between">
          <div className="py-4 px-8 grid items-center">
            <img
              src="https://www.caliana.id/wp-content/uploads/2021/02/caliana-color.png"
              alt="caliana-logo.png"
              width={128}
              height={30}
            />
          </div>
          <div className="py-4 px-8">
            <div className="flex gap-x-7 pr-6">
              <NavTab placeholder={"Home"} />
              <NavTab placeholder={"Product"} />
              <NavTab placeholder={"Plan & Pricing"} />
              <NavTab placeholder={"Contact Sales"} />
              <NavTab placeholder={"Caliana Help"} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#f9f9f9] pt-24 ">
        <div className="flex items-start">
          <img
            src="https://www.caliana.id/wp-content/uploads/2021/02/logo-caliana-512x512-22-1.svg"
            alt="caliana-logo.png"
            width={87}
            height={87}
            className="pt-8"
          />
          <div className="grid grid-cols-4 w-full">
            <div className="grid p-8 h-fit">
              <h4 className="text-base text-primary-light-blue font-semibold mb-8">
                Connect with us
              </h4>
              <div className="grid gap-y-5 mb-8">
                <div className="flex gap-x-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-xl text-gray-400"
                  />
                  <h5 className=" text-sm">
                    Graha Mas Fatmawati, Ruko B9 Lantai 3, RT.2/RW.5, Cipete
                    Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus
                    Ibukota Jakarta 12150
                  </h5>
                </div>
                <div className="flex gap-x-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl text-gray-400"
                  />
                  <h5 className=" text-sm">0811-9152-066</h5>
                </div>
                <div className="flex gap-x-4">
                  <FontAwesomeIcon
                    icon={faAt}
                    className="text-xl text-gray-400"
                  />
                  <h5 className=" text-sm">info@datanusantara.com</h5>
                </div>
              </div>
              <h4 className="text-base text-primary-light-blue font-semibold mb-8">
                Official Whatsapp Number
              </h4>
              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-2xl text-gray-400"
                />
                <h5 className=" text-sm">0811-1992-5330</h5>
              </div>
            </div>
            <div className="grid p-8 h-fit">
              <h4 className="text-base text-primary-light-blue font-semibold mb-8">
                Products
              </h4>
              <div className="grid gap-y-5">
                <h5 className=" text-sm">Visitor Management System</h5>
                <h5 className=" text-sm">Surveillance & Monitoring System</h5>
                <h5 className=" text-sm">Event Management System</h5>
              </div>
            </div>
            <div className="grid p-8 h-fit">
              <h4 className="text-base text-primary-light-blue font-semibold mb-8">
                Company
              </h4>
              <div className="grid gap-y-5">
                <h5 className=" text-sm">About us</h5>
                <h5 className=" text-sm">Contact us</h5>
              </div>
            </div>
            <div className="grid p-8 h-fit">
              <h4 className="text-base text-primary-light-blue font-semibold mb-8">
                Quick Link
              </h4>
              <div className="grid gap-y-5">
                <h5 className=" text-sm">Data Nusantara Adhikarya</h5>
                <h5 className=" text-sm">Cailana Brochure</h5>
                <h5 className=" text-sm">VMS Guideline 2022</h5>
                <h5 className=" text-sm">Cailana Survey 2023</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-8">
          <h5 className="text-xs">Copyright © 2024 Caliana</h5>
          <h5 className="text-xs">Term & Condition</h5>
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
