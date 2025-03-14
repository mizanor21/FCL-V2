import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import Link from "next/link";

// Certificate data
const certificates = [
  {
    title: "Certificate of Incorporation",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "E-Trade License",
    logoURL: "https://i.postimg.cc/YqQdc4pV/dhaSouth.png",
  },

  {
    title: "Taxpayer's Identification Number (TIN) Certificate",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Value Added Tax Registration Certificate",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Export Registration Certificate (ERC)",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Import Registration Certificate (IRC)",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Clearance Certificate from DGFI",
    logoURL: "https://i.postimg.cc/RZRGFjJL/army.png",
  },

  {
    title: "Dhaka Chamber of Commerce & Industry",
    logoURL: "https://i.postimg.cc/XY3QnVqv/DCCI.png",
  },
];

const Page = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://i.postimg.cc/hvL2Qk6k/Cover.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold"> About Us</h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-[1400px] px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                  Farees Construction Limited (FCL)
                </h2>
                <div className="text-justify">
                  <p>
                    <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
                    independent engineering construction company with an
                    objective to provide complete and international standard
                    technical approach in the construction industry of
                    Bangladesh. Man Enterprise ventured into the construction
                    area as early as 2012 and Farees Construction Limited (FCL)
                    was formed in 2017 to join the venture. The company was
                    created out of a vision of Brigadier General AKM Mahfuzul
                    Haque (Retd.), the CEO & MD of Farees Construction Limited,
                    to serve the nation with top-quality professionals.
                  </p>
                  <br />
                  <p>
                    <strong>FCL</strong> consists of a professionals, experts in
                    the development sectors, and experienced management. The
                    organization have launched country-wide nation-building
                    activities by completing several multi-storied buildings,
                    hydraulic structures, deep tube wells, water purification
                    plants, irrigation, flood control projects, etc.{" "}
                    <strong>FCL</strong> is also experienced in constructing
                    piling (situ/bored/caisson), pile cap & retaining structures
                    etc.
                  </p>
                  <br />
                  <p>
                    Over the short period after its establishment,{" "}
                    <strong>FCL</strong> gathered experience in different
                    fields, working with local and foreign experts and
                    management professionals in both government & foreign funded
                    projects and delivered mentionable construction services.
                    Combining experience with quality, <strong>FCL</strong>{" "}
                    emerged as one of the top construction firms in Bangladesh.
                    With workmanship and refinement, it earned a reputation in
                    several sectors involving engineering and technological
                    inputs.
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                  <img
                    className="ml-auto rounded-md"
                    src="https://i.postimg.cc/xjJgzzL0/Screenshot-from-2024-08-25-18-12-28.png"
                    alt=""
                  />

                  <img
                    className="absolute -top-4 -left-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div className="absolute -bottom-10 -left-16">
                    <div className="bg-yellow-300">
                      <div className="px-8 py-10">
                        <span className="block text-4xl font-bold text-black lg:text-5xl">
                          8+
                        </span>
                        <span className="block mt-2 text-base leading-tight text-black">
                          Years Of
                          <br />
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section 02  */}
      <div className="hidden lg:block relative w-full h-[80vh]">
        {/* Background Image */}
        <img
          src="https://i.postimg.cc/1z11kSPF/a-7.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Section with Content */}
        <div className="  absolute top-0 left-0 bg-green-800 bg-opacity-50 max-w-[500px] mx-10 lg:ml-64 h-[80vh] ">
          <div className="text-white p-10">
            <p>OUR VALUE</p>
            <h1 className="text-4xl font-bold mb-4">
              Quality care from quality experts.
            </h1>
            <p className="text-lg mb-6">
              Explore our amazing content and features.
            </p>
            <div className="flex mb-10">
              <div>
                <IoCompassOutline className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mission</h3>

                <p>
                  In order to fulfill our mission to deliver high-quality,
                  reliable services, we strive to stay on top of current
                  industry trends and practices.
                </p>
              </div>
            </div>

            <div className="flex mb-10">
              <div>
                <TbTargetArrow className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vision</h3>

                <p>
                  Our vision is to be a leading player in the construction
                  industry, known for our commitment to excellence and customer
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <TbTargetArrow className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vision</h3>

                <p>
                  Our vision is to be a leading player in the construction
                  industry, known for our commitment to excellence and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 04  */}
      <div className="bg-gray-800 py-10 ">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1400px] mt-10 mb-20">
          <h2 class="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-4xl mb-4">
            Organogram
          </h2>
          <img
            src="https://i.ibb.co/L85nJpy/ORGANOGRAM.png"
            className="w-full"
          ></img>
        </div>
      </div>

      {/* Certificates Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1400px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-8">
              Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={cert.logoURL}
                  alt={cert.title}
                  className="w-20 h-20 mb-4 object-cover"
                />
                <h3 className="text-lg text-center font-semibold mb-2">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
