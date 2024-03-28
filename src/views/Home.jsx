import React from "react";
import Button from "../elements/Button";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCommentDots, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="hero pt-48 pb-28 mb-16">
        <div className="flex">
          <div className="w-1/2">
            <video
              autoPlay
              muted
              loop
              className="rounded-3xl border-8 border-primary-grey shadow-[0_0px_10px_0px_rgba(0,0,0,0.5)]"
            >
              <source
                src="https://www.caliana.id/wp-content/uploads/2023/06/Edit-Caliana-Visitor-Management-System-Indonesia-1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-1/2 p-6">
            <div className="title-hero mb-2">
              <h2 className="font-bold text-[40px] text-black leading-none">
                <span className="text-primary-light-blue">Secure</span> Visitor
                Management
              </h2>
              <h2 className="font-bold text-[40px] text-black">
                with Caliana!
              </h2>
            </div>
            <h3 className="font-medium text-base mb-6 leading-relaxed">
              Effortlessly manage visitor check-ins, track guest activity, and
              ensure a secure environment.
            </h3>
            <Button placeholder={"Simulasi Disini"} />
          </div>
        </div>
      </div>
      <div className="features grid gap-y-20 mb-48">
        <h2 className="p-3 text-primary-light-blue font-bold text-3xl text-center">
          Momen Kemudahan Digitalisasi
        </h2>
        <div className="flex content-1 items-center">
          <img
            src="https://www.caliana.id/wp-content/uploads/2023/06/Ilustrasi-Digitalisasi-Buku-Tamu.svg"
            alt="caliana-content1.png"
            className="w-1/2 p-3"
          />
          <div className="w-1/2 p-3">
            <h3 className=" text-2xl font-bold mb-4">Digitalisasi Buku Tamu</h3>
            <h4 className=" text-base mb-10">
              Catat pengunjung dengan cara yang lebih sederhana dan efisien
              dengan Caliana. Sekarang Anda dapat dengan mudah memonitor siapa
              saja yang berkunjung ke bisnis Anda lengkap beserta waktu dan
              tujuan pengunjung tersebut
            </h4>
            <Button placeholder={"Mulai Catat"} />
          </div>
        </div>
        <div className="flex content-2 flex-row-reverse items-center">
          <img
            src="https://www.caliana.id/wp-content/uploads/2023/06/Ilustrasi-Integrasi-Dengan-Sistem-Yang-Anda-Miliki.svg"
            alt="caliana-content2.png"
            className="w-1/2 p-3"
          />
          <div className="w-1/2 p-3">
            <h3 className=" text-2xl font-bold mb-4">
              Integrasi Dengan Sistem Yang Anda Miliki
            </h3>
            <h4 className=" text-base mb-10">
              Maksimalkan sistem dan infrastruktur yang telah anda miliki dengan
              Caliana. Caliana dapat dintegrasikan dengan berbagai sistem dan
              infrastruktur yang sudah anda miliki seperti CCTV, door acces,
              HRIS, swing gate, dll.
            </h4>
            <Button placeholder={"Mulai Integrasi"} />
          </div>
        </div>
        <div className="flex content-1 items-center">
          <img
            src="https://www.caliana.id/wp-content/uploads/2023/06/Ilustrasi-Pantau-Area-dengan-Surveillance-System_.svg"
            alt="caliana-content1.png"
            className="w-1/2 p-3"
          />
          <div className="w-1/2 p-3">
            <h3 className=" text-2xl font-bold mb-4">
              Pantau Area dengan Surveillance System​
            </h3>
            <h4 className=" text-base mb-10">
              Integrasikan Caliana VMS dengan CCTV di perusahaan Anda. Dengan
              teknologi Artificial Intelligence, Anda dapat memantau siapa yang
              berada di area tersebut dan bagaimana kondisi area sekitar secara
              real-time.
            </h4>
            <Button placeholder={"Mulai Pantau"} />
          </div>
        </div>
        <div className="flex content-2 flex-row-reverse items-center">
          <img
            src="https://www.caliana.id/wp-content/uploads/2023/06/Ilustrasi-Pantau-Area-dengan-Surveillance-System_.svg"
            alt="caliana-content2.png"
            className="w-1/2 p-3"
          />
          <div className="w-1/2 p-3">
            <h3 className=" text-2xl font-bold mb-4">Dashboard Report</h3>
            <h4 className=" text-base mb-10">
              Dapatkan insight mendalam dari Dashboard Reporting Caliana,
              ketahui volume pengunjung pada waktu tertentu, tujuan pengunjung,
              hingga waktu berkunjung sehingga Anda dapat membuat kebijakan yang
              lebih efektif dengan data yang akurat.
            </h4>
            <Button placeholder={"Lihat Informasi"} />
          </div>
        </div>
      </div>
      <div className="products grid mb-32">
        <h2 className="p-3 text-primary-light-blue font-semibold text-3xl text-center mb-40">
          Produk Kami
        </h2>
        <div className="grid grid-cols-3 gap-20">
          <div className="pb-8 pt-40 shadow-md rounded-2xl justify-items-center grid relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Mockup-VMS.png"
              alt="caliana-product1.png"
              className="absolute -top-28"
            />
            <h4 className=" text-xl font-semibold mb-10 text-center">
              Visitor Management System
            </h4>
            <Button placeholder={"Selengkapnya"} />
          </div>
          <div className="px-12 pb-8 pt-40 shadow-md rounded-2xl justify-items-center grid relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Mockup-SMS-1-1.svg"
              alt="caliana-product1.png"
              className="absolute -top-28"
            />
            <h4 className=" text-xl font-semibold mb-10 text-center">
              Surveillance & Monitoring System
            </h4>
            <Button placeholder={"Selengkapnya"} />
          </div>
          <div className="pb-8 pt-40 shadow-md rounded-2xl justify-items-center grid relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Mockup-ACS.png"
              alt="caliana-product1.png"
              className="absolute -top-28"
            />
            <h4 className=" text-xl font-semibold mb-10 text-center">
              Access Control System
            </h4>
            <Button placeholder={"Selengkapnya"} />
          </div>
        </div>
      </div>
      <div className="support-industries grid mb-32">
        <h2 className="p-3 text-primary-light-blue font-semibold text-3xl text-center mb-24">
          Kami Mendukung Berbagai Industri
        </h2>
        <div className="grid grid-cols-6 w-full justify-items-center gap-y-10">
          <div className="support-image-container col-span-2 relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Gambar-kawasan-industri.png"
              alt="caliana-support1.png"
            />
            <h4 className="text-white absolute bottom-2 left-4 font-medium">
              Kawasan Industri
            </h4>
          </div>
          <div className="support-image-container col-span-2 relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Gambar-gedung-perkantoran.png"
              alt="caliana-support2.png"
            />
            <h4 className="text-white absolute bottom-2 left-4 font-medium">
              Gedung Perkantoran
            </h4>
          </div>
          <div className="support-image-container col-span-2 relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Gambar-komplek-perumahan.png"
              alt="caliana-support3.png"
            />
            <h4 className="text-white absolute bottom-2 left-4 font-medium">
              Komplek Perumahan
            </h4>
          </div>
          <div className="support-image-container col-span-3 relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Gambar-area-publik.png"
              alt="caliana-support1.png"
            />
            <h4 className="text-white absolute bottom-2 left-4 font-medium">
              Area Publik
            </h4>
          </div>
          <div className="support-image-container col-span-3 relative">
            <img
              src="https://www.caliana.id/wp-content/uploads/2023/06/Gambar-instalansi-militer-1.png"
              alt="caliana-support1.png"
            />
            <h4 className="text-white absolute bottom-2 left-4 font-medium">
              Instansi Militer
            </h4>
          </div>
        </div>
      </div>
      <div className="what-they-talk grid mb-48">
        <h2 className="p-3 text-primary-light-blue font-semibold text-3xl text-center mb-20">
          Apa Kata Mereka
        </h2>
        <div className="grid grid-cols-2">
          <ReactPlayer url="https://www.youtube.com/watch?v=zM7xqOqIcdw" />
          <ReactPlayer url="https://www.youtube.com/watch?v=gePPu-boBgw" />
        </div>
      </div>
      <div className="easy-step-caliana mb-28 relative">
        {/* <img
          src="https://www.caliana.id/wp-content/uploads/2023/06/Ilustrasi-Pantau-Area-dengan-Surveillance-System_.svg"
          alt="background-step.png"
          className="absolute w-full top-0"
        /> */}
        <h2 className="p-3 text-primary-light-blue font-semibold text-3xl text-center mb-20">
          4 Langkah Mudah Untuk Coba Caliana
        </h2>
        <div className="justify-items-center grid mx-auto ">
          <div className="px-28 pb-24 pt-16 rounded-2xl shadow-md grid w-5/12 bg-white z-10">
            <div className="mb-24 px-16 flex items-center">
              <div className="rounded-full border-2 border-primary-light-blue w-8 h-8 relative ">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-sm text-primary-light-blue absolute m-auto left-0 right-0 top-0 bottom-0"
                />
              </div>
              <div className="border-2 border-gray-300 h-1 w-14"></div>
              <div className="rounded-full border-2 border-gray-300 w-8 h-8 relative ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm text-gray-300 absolute m-auto left-0 right-0 top-0 bottom-0"
                />
              </div>
              <div className="border-2 border-gray-300 h-1 w-14"></div>
              <div className="rounded-full border-2 border-gray-300 w-8 h-8 relative ">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-sm text-gray-300 absolute m-auto left-0 right-0 top-0 bottom-0"
                />
              </div>
              <div className="border-2 border-gray-300 h-1 w-14"></div>
              <div className="rounded-full border-2 border-gray-300 w-8 h-8 relative ">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-sm text-gray-300 absolute m-auto left-0 right-0 top-0 bottom-0"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder={"Masukkan Nama Perusahaan"}
              className="py-3 px-6 border border-gray-300 text-sm mb-10 rounded-lg"
            />
            <Button placeholder={"Selanjutnya"} isFull />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
