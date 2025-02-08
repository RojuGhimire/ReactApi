// import React from "react";

//images
import bgImage from "./../assets/images/banner/bnr1.jpg";
import pic1 from "./../assets/images/main-slider/slider2/pic1.png";
import about from "./../assets/images/about/pic1.jpg";
import signature from "./../assets/images/about/signature.png";
import bg4 from "./../assets/images/background/bg4.jpg";

const iconBlog = [{ title: "Trusted Partner" }, { title: "Responsibility" }];

const wrapperBlog = [
  { icon: "flaticon-vr-glasses", title: "Quo Maxime Qui Impedit Odio Soluta" },
  {
    icon: "flaticon-transformation",
    title: "Ut Nisi Ea Vero Itaque Error Magnam",
  },
  { icon: "flaticon-doctor-bag", title: "Quaerat Nobis Est" },
  { icon: "flaticon-open-book", title: "Deleniti Iure Ipsa Eos Eaque Under" },
];

const AboutUs = () => {
  return (
    <>
      <div className="page-content bg-white overflow-x-hidden">
        {/* <PageBanner maintitle="Home" pagetitle="About" background={bgImage} /> */}
        <div className="relative">
          <img
            src={bgImage}
            alt=""
            className="w-full h-[20rem] md:h-[32rem] object-cover"
          />
          {/* Background color overlay */}
          <div className="absolute inset-0 bg-[#cb3580] bg-opacity-50"></div>
          {/* Content */}
          <span className="absolute md:bottom-[12rem] bottom-[8rem] flex bg-transparent w-full md:h-20 p-2 rounded text-center text-black font-extrabold text-2xl md:text-6xl justify-center mx-4">
            <div className="dz-bnr-inr-entry  w-full">
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">About</li>
                </ul>
              </nav>
            </div>
          </span>
        </div>

        <section className="content-inner section-wrapper5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-head">
                  <h5 className="font-bold text-black text-[24px]">
                    WHO WE ARE
                  </h5>
                  <h2 className="font-normal">
                    Experienced more than 25 Years in Crowdfunding
                  </h2>
                  <p className="m-t20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip{" "}
                  </p>
                </div>
                {iconBlog.map((data, index) => (
                  <div
                    className="icon-bx-wraper box-hover style-2 m-b30"
                    key={index}
                  >
                    <div className="icon-lg">
                      {/* <Link to={"/services-details"} className="icon-cell">
                        <i className="flaticon-shield"></i>
                      </Link> */}
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b5 text-capitalize">
                        {data.title}
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-5 m-b30">
                <div className="dz-media">
                  <img src={pic1} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner-2 overlay-primary-dark about-wrapper2 bg-img-fix"
          style={{
            backgroundImage: "url(" + bg4 + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="about-bx2">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="dz-media">
                    <img src={about} alt="image" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="dz-info">
                    <h2 className="title m-b30 m-md-b20">
                      Fundraising is the gentle art of teaching the joy of
                      giving
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <div className="signature">
                      <img src={signature} alt="image" />
                      <p className="text-dark m-t15 mb-0">William Durant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="m-b20 font-bold">Why choose Quba</h2>
            </div>
            <div className="row">
              {wrapperBlog.map((item, ind) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={ind}>
                  <div className="icon-bx-wraper box-hover style-2 m-b30">
                    <div className="icon-lg">
                      {/* <Link to={"/services-details"} className="icon-cell">
                        <i className={item.icon}></i>
                      </Link> */}
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b10 text-capitalize">
                        {item.title}
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-inner-2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Quba News</h2>
            </div>
            {/* <NewsSlider /> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
