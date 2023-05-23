import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

const MainSlider = () => {
  const [slide, setSlide] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => {
      setSlide(prevSlide => (prevSlide % 6) + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    changeBackground(slide);
  }, [slide]);

  const changeBackground = (slide) => {
    const images = [
      'https://staging.3li.global/wp-content/uploads/2023/03/retail.png',
      'https://staging.3li.global/wp-content/uploads/2023/03/communication.png',
      'https://staging.3li.global/wp-content/uploads/2023/03/public-sector-1.png',
      'https://staging.3li.global/wp-content/uploads/2023/03/construction.png',
      'https://staging.3li.global/wp-content/uploads/2023/03/education-1.png',
      'https://staging.3li.global/wp-content/uploads/2023/03/banking-1.png',
    ];

    setBackgroundImage(images[slide - 1]);
  };

  const next = () => {
    setSlide(prevSlide => (prevSlide % 6) + 1);
  };

  const back = () => {
    setSlide(prevSlide => prevSlide === 1 ? 6 : prevSlide - 1);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>

      <section
        data-particle_enable="false"
        data-particle-mobile-disabled="false"
        className="elementor-section elementor-top-section elementor-element elementor-element-60f4c3f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="60f4c3f"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-65befce"
            data-id="65befce"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-34822ef elementor-widget elementor-widget-html"
                data-id="34822ef"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\n        :root {\n            --delay: 2s;\n        }\n\n        .Slider-main-container {\n            height: 650px;\n            width: 100%;\n            display: flex;\n        }\n\n        .container {\n            display: flex;\n            height: 650px;\n            width: 100%;\n            overflow-x: auto;\n            background-position: center center;\n             background-size: cover; \n            background-repeat: no-repeat;\n            overflow: hidden;\n            transition: background-image 0.9s;\n            margin-left: -50px;\n        }\n\n        .industries{\n            margin-bottom: -190px;\n            padding-left: 100px;\n            padding-top: 50px;\n            position: absolute;\n        }\n        .industries h4{\n            font-size: 100px;\n            font-weight: 800;\n            color: #fff;\n            font-family: poppins;\n            opacity: 0.6;\n        }\n        .swiper-slide {\n            flex-shrink: 0;\n            height: 650px;\n            display: flex;\n            position: relative;\n            width: var(--widths);\n            margin-left: 5px;\n            background: rgba(0, 0, 0, 0.2);\n            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n            backdrop-filter: blur(0px);\n            -webkit-backdrop-filter: blur(0px);\n        }\n\n        .main {\n            background: rgba(0, 0, 0, 0.5);\n        }\n\n        .main .img-text {\n            margin-top: 320px;\n            transition: margin-top 0.5s;\n            padding-left: 50px;\n            padding-right: 50px;\n            text-align: left;\n        }\n\n        .main .img-text p {\n            display: block;\n            padding-top: 30px;\n            font-size: 16px;\n        }\n\n        .main .img-text .learnmore {\n            display: flex;\n            margin-top: 20px;\n        }\n        .learnmore p{\n            font-size: 22px !important;\n        }\n\n         .slider-svg {\n            height: 20px;\n            width: 20px;\n            margin-left: 10px;\n        }\n        \n        .content {\n            height: 600px;\n            width: 100%;\n        }\n\n        .img-text {\n            width: 100%;\n            height: auto;\n            margin-top: 450px;\n            position: relative;\n            line-height: 25px;\n            transition: 0.5s ease;\n            display: inline-block;\n            text-align: center;\n            color: #fff;\n            transition: margin-top 0.5s;\n        }\n\n        .img-text p {\n            display: none;\n            \n        }\n\n        .img-text h4 {\n            line-height: 15px;\n            padding: 0;\n            margin: 16px 0;\n            font-size: 28px;\n            color: #fff;\n            font-weight: 800;\n        }\n\n        .img-text .learnmore {\n            font-size: 18px;\n            font-weight: bold;\n            color: #9628E5;\n            justify-content: left;\n            align-items: center;\n            display: none;\n            margin-top: -30px !important;\n        }\n\n        .back {\n            height: 600px;\n            width: 50px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        .next {\n            height: 600px;\n            width: 50px;\n            margin-left: -50px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        \n        .btnlabel {\n            z-index: 10;\n            cursor: pointer;\n        }\n\n        .pre {\n            animation: pre var(--delay);\n        }\n\n        @keyframes pre {\n            0% {\n                margin-left: var(--margin);\n            }\n\n            100% {\n                margin-left: 0px;\n            }\n        }\n        .slide-active {\n            animation: slide-active var(--delay) none;\n            margin-left: var(--margin);\n        }\n\n\n        @keyframes slide-active {\n            0% {\n                margin-left: 0px;\n            }\n\n            100% {\n                margin-left: var(--margin);\n            }\n        }\n\n        @media only screen and (min-width: 0px) {\n            :root {\n                --widths: 100%;\n                --margin: -100%;\n            }\n         \n        }\n        \n        @media only screen and (max-width: 480px) {\n            .industries{\n            margin-bottom: -190px;\n            padding-left: 20px;\n        }\n        .industries h4{\n            font-size: 50px;\n\n        }\n      \n        }\n         @media only screen and (max-width: 600px) {\n            .industries{\n            margin-bottom: -190px;\n            padding-left: 20px;\n        }\n        .industries h4{\n            font-size: 50px;\n\n        }\n      \n        }\n        @media only screen and (min-width: 600px) {\n            .industries{\n            margin-bottom: -190px;\n            padding-left: 40px;\n        }\n        .industries h4{\n            font-size: 80px;\n\n        }\n      \n        }\n\n\n        @media only screen and (min-width: 900px) {\n            :root {\n                --widths: 50%;\n                --margin: -50%;\n            }\n            .industries{\n            margin-bottom: -190px;\n            padding-left: 80px;\n        }\n        .industries h4{\n            font-size: 100px;\n\n        }\n        }\n\n\n        @media only screen and (min-width: 1100px) {\n            :root {\n                --widths: 33%;\n                --margin: -33%;\n            }\n              .industries{\n            margin-bottom: -190px;\n            padding-left: 100px;\n        }\n        .industries h4{\n            font-size: 100px;\n\n        }\n        }\n\n\n        @media only screen and (min-width: 1500px) {\n            :root {\n                --widths: 25%;\n                --margin: -25%;\n            }\n        }\n    "
                    }}
                  />
                  <div className="industries">
                    <h4>Industries</h4>
                  </div>
                  <div className="Slider-main-container">
                    <div className="back">
                      <label onclick="back()" className="btnlabel">
                        <svg
                          className=""
                          style={{ transform: "rotate(180deg)" }}
                          width={28}
                          height={26}
                          viewBox="0 0 28 26"
                          fill="none"
                        >
                          <path
                            d="M15 2L26 13M26 13L15 24M26 13L2 13"
                            stroke="white"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                    <div
                      className="container"
                      id="container"
                      style={{ backgroundImage: `url('${backgroundImage}')` }}
                    >
                      <div className="swiper-slide main" id="Slide1" data-slide={1}>
                        <div
                          className="content"
                          onmouseover="Mhover(1,true)"
                          onmouseleave="Mhover(1,false)"
                        >
                          <span className="img-text">
                            <h4>Retail</h4>
                            <p>
                              3li Global provides integrated digital business
                              solutions to leading retail brands, enabling them to
                              maintain a competitive edge over their rivals.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="swiper-slide" id="Slide2" data-slide={2}>
                        <div
                          className="content"
                          onmouseover="Mhover(2,true)"
                          onmouseleave="Mhover(2,false)"
                        >
                          <span className="img-text">
                            <h4>Communications</h4>
                            <p>
                              By leveraging innovation and disruptive technologies
                              within the telecom industry, we help businesses increase
                              their value and maintain relevance with customers.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="swiper-slide" id="Slide3" data-slide={3}>
                        <div
                          className="content"
                          onmouseover="Mhover(3,true)"
                          onmouseleave="Mhover(3,false)"
                        >
                          <span className="img-text">
                            <h4>Public Sector</h4>
                            <p>
                              Our efforts are directed toward driving transformation
                              in public services through the implementation of smart,
                              inclusive, and resilient solutions.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="swiper-slide pre" id="Slide4" data-slide={4}>
                        <div
                          className="content"
                          onmouseover="Mhover(4,true)"
                          onmouseleave="Mhover(4,false)"
                        >
                          <span className="img-text">
                            <h4>Construction</h4>
                            <p>
                              We provide value through execution and operational
                              efficiency gains, productivity and safety improvements,
                              enhanced user experiences, and unique go-to-market
                              propositions.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="swiper-slide pre" id="Slide5" data-slide={5}>
                        <div
                          className="content"
                          onmouseover="Mhover(5,true)"
                          onmouseleave="Mhover(5,false)"
                        >
                          <span className="img-text">
                            <h4>Education</h4>
                            <p>
                              We support organizations in designing, customizing,
                              implementing, managing, and improving various systems
                              such as student information systems (SIS), learning
                              management systems, and CRM.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="swiper-slide" id="Slide6" data-slide={6}>
                        <div
                          className="content"
                          onmouseover="Mhover(6,true)"
                          onmouseleave="Mhover(6,false)"
                        >
                          <span className="img-text">
                            <h4>Banking</h4>
                            <p>
                              3li Global assists banks and financial institutions in
                              enhancing efficiency and profitability by providing
                              enterprise integration, business process management, and
                              robotic process automation solutions.
                            </p>
                            <div className="learnmore">
                              <p>Learn More</p>
                              <svg
                                className="slider-svg"
                                width={20}
                                height={20}
                                viewBox="0 0 28 26"
                                fill="none"
                              >
                                <path
                                  d="M15 2L26 13M26 13L15 24M26 13L2 13"
                                  stroke="#9628E5"
                                  strokeWidth={4}
                                />
                              </svg>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="next">
                      <label onclick="next()" className="btnlabel">
                        <svg
                          className=""
                          width={28}
                          height={26}
                          viewBox="0 0 28 26"
                          fill="none"
                        >
                          <path
                            d="M15 2L26 13M26 13L15 24M26 13L2 13"
                            stroke="white"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  )
}

export default MainSlider