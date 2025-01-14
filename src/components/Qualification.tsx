import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h2 className="text-white text-4xl font-bold text-center mb-2">
        Qualification
      </h2>
      <span className="block text-lg text-center text-gray-500 mb-10">
        My personal journey
      </span>

      {/* Tabs Navigation */}
      <div className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap space-x-4 mb-14 px-6 py-2 scrollbar-hide rounded-lg shadow">
        <div
          className={`inline-flex items-center cursor-pointer px-3 py-2 rounded-lg ${
            toggleState === 1
              ? "text-indigo-600 font-semibold bg-gray-700"
              : "text-gray-300"
          }`}
          onClick={() => toggleTab(1)}
        >
          <span className="mr-2 text-lg md:text-2xl">🎓</span>
          <span className="text-sm md:text-base">Education</span>
        </div>
        <div
          className={`inline-flex items-center cursor-pointer px-3 py-2 rounded-lg ${
            toggleState === 2
              ? "text-indigo-600 font-semibold bg-gray-700"
              : "text-gray-300"
          }`}
          onClick={() => toggleTab(2)}
        >
          <span className="mr-2 text-lg md:text-2xl">💼</span>
          <span className="text-sm md:text-base">Experience</span>
        </div>
        <div
          className={`inline-flex items-center cursor-pointer px-3 py-2 rounded-lg ${
            toggleState === 3
              ? "text-indigo-600 font-semibold bg-gray-700"
              : "text-gray-300"
          }`}
          onClick={() => toggleTab(3)}
        >
          <span className="mr-2 text-lg md:text-2xl">🎖️</span>
          <span className="text-sm md:text-base">Certificate</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 px-4 md:px-8 lg:px-16">
        {/* Central Divider */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Education Section */}
        {toggleState === 1 && (
          <>
            {/* Left-Right Layout */}
            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">
                  SMK AL-AQsyar Islamic School
                </h3>
                <p className="text-gray-100">
                  {" "}
                  Bogor - Senior & Junior High School (Teknik Komputer &
                  Jaringan)
                </p>
                <span className="text-gray-200 text-sm">2021 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">DiCoding</h3>
                <p className="text-gray-100">Yogyakarta - Online Courses</p>
                <span className="text-gray-200 text-sm">2023 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">ID - Networkers</h3>
                <p className="text-gray-100">Jakarta - Online Course</p>
                <span className="text-gray-200 text-sm">2023 - 2024</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">CODEPOLITAN</h3>
                <p className="text-gray-100">Bandung - Online Courses</p>
                <span className="text-gray-200 text-sm">2023 - Present</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>
          </>
        )}

        {/* Experience Section */}
        {toggleState === 2 && (
          <>
            <div className="flex justify-end items-center md:col-start-1">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 ml-auto md:mr-4">
                <h3 className="text-xl font-semibold">
                  PT. Kredit Pintar Indonesia
                </h3>
                <p className="text-gray-100">
                  SCBD - Magang (Junior Web Developer)
                </p>
                <span className="text-gray-200 text-sm">2023 - 2023</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>

            <div className="flex justify-start items-center md:col-start-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-xs lg:max-w-sm relative z-10 mr-auto md:ml-4">
                <h3 className="text-xl font-semibold">Freelancer</h3>
                <p className="text-gray-100">Bogor - Web Developer</p>
                <span className="text-gray-200 text-sm">2024 - Present</span>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
            </div>
          </>
        )}

        {/* Sertificate Section */}
        {toggleState === 3 && (
          <>
            <div className="flex justify-center items-center md:col-span-2">
              <div className="glassmorphism p-4 md:p-6 rounded-lg w-full md:max-w-6xl relative z-10">
                <h3 className="text-xl font-semibold text-center mb-4">
                  Sertifikat Saya
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-2">
                    <img
                      src="/sertificate/Guntur-Alamsyah-Putra-Cisco-Dasar-Sertifikat-Cisco-Dasar-LMS-ID-Networkers-1.png"
                      alt="Certificate 1"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Guntur-Alamsyah-Putra-Cisco-Dasar-Sertifikat-Cisco-Dasar-LMS-ID-Networkers-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Guntur-Alamsyah-Putra-Webinar-Network-Engineer-Career-Path-23-September-2024-Sertifikat-Webinar-Network-Engineer-Career-Path-23-September-2024-LMS-ID-Networkers-1.png"
                      alt="Certificate 2"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Guntur-Alamsyah-Putra-Webinar-Network-Engineer-Career-Path-23-September-2024-Sertifikat-Webinar-Network-Engineer-Career-Path-23-September-2024-LMS-ID-Networkers-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Guntur-Alamsyah-Putra-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers-1.png"
                      alt="Certificate 3"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Guntur-Alamsyah-Putra-Cisco-Dasar-Sertifikat-Cisco-Dasar-LMS-ID-Networkers-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/E-Sertifikat Guntur Alamsyah Putra Telah mengikuti kelas FrontEnd Developer By Pijar Camp-1.png"
                      alt="Certificate 4"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/E-Sertifikat Guntur Alamsyah Putra Telah mengikuti kelas FrontEnd Developer By Pijar Camp-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Sertifikat Fundamental JavaScript Untuk Pemula-1.png"
                      alt="Certificate 5"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Sertifikat Fundamental JavaScript Untuk Pemula-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Sertifikat Workshop Basic Web Development - Membuat Website Portofolio untuk Pemula-1.png"
                      alt="Certificate 6"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Sertifikat Workshop Basic Web Development - Membuat Website Portofolio untuk Pemula-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Sertifikat Workshop Fundamental React JS - Membuat Website Manajemen Keuangan Menggunakan React JS-1.png"
                      alt="Certificate 7"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Sertifikat Workshop Fundamental React JS - Membuat Website Manajemen Keuangan Menggunakan React JS-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Sertifikat Workshop JavaScript - Membuat Website Pemutar Musik Sederhana Menggunakan JavaScript-1.png"
                      alt="Certificate 8"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Sertifikat Workshop JavaScript - Membuat Website Pemutar Musik Sederhana Menggunakan JavaScript-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/Sertifikat Workshop Node JS - Membuat CRUD Basic RESTful API Menggunakan Node JS-1.png"
                      alt="Certificate 9"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/Sertifikat Workshop Node JS - Membuat CRUD Basic RESTful API Menggunakan Node JS-1.png"
                        )
                      }
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/sertificate/bootcamp-full-stack-javascript-developer-mern-website-event-guntur-alamsyah-putra-1.png"
                      alt="Certificate 10"
                      className="rounded-lg shadow-lg object-cover w-full max-w-lg lg:max-w-2xl"
                      onClick={() =>
                        openModal(
                          "/sertificate/bootcamp-full-stack-javascript-developer-mern-website-event-guntur-alamsyah-putra-1.png"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Modal Section */}
              {isModalOpen && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                  onClick={(e) => {
                    // Tutup modal jika klik di luar konten
                    if (e.target === e.currentTarget) closeModal();
                  }}
                >
                  <div className="relative max-w-4xl w-full p-4  rounded-lg">
                    {/* Tombol Close */}
                    <button
                      className="absolute top-4 right-4 text-white text-xl font-bold hover:text-black transition-all duration-300 rounded-full p-2"
                      onClick={closeModal}
                    >
                      ✕
                    </button>

                    {/* Gambar dan Overlay */}
                    <div className="preview-image-container relative">
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="preview-image w-full h-auto rounded-lg shadow-lg"
                      />
                      <div className="preview-image-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
                        Preview
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Qualification;
