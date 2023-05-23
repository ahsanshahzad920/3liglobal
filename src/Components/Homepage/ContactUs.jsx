import React from "react";
import backgroundVideo from "../Sourcefiles/wp-content/uploads/2023/01/video-1.mp4";
import Hero from "./Hero";
import Services from "./Services";
import Technologies from "./Technologies";
import TechnologiesUsed from "./TechnologiesUsed";
import OurClients from "./OurClients";
import MainSlider from "./MainSlider";
import HowTo from "./HowTo";

const ContactUs = () => {
  return (
    <div>
      <div id="content" className="site-content">
        <div className="">
          <div id="primary" className="content-area primary">
            <main id="main" className="site-main">
              <article
                className="post-32 page type-page status-publish ast-article-single"
                id="post-32"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={32}
                    className="elementor elementor-32"
                  >
                    {/* video section */}

                    <Hero />

                    <Services />


                    <Technologies />


                    <TechnologiesUsed />


                    <OurClients />


                    <MainSlider />


                    <HowTo />


                    <section
                      data-particle_enable="false"
                      data-particle-mobile-disabled="false"
                      className="elementor-section elementor-top-section elementor-element elementor-element-17c8d61 elementor-section-full_width elementor-hidden-mobile elementor-section-height-default elementor-section-height-default"
                      data-id="17c8d61"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9ccf0a6"
                          data-id="9ccf0a6"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                              data-particle_enable="false"
                              data-particle-mobile-disabled="false"
                              className="elementor-section elementor-inner-section elementor-element elementor-element-956f138 elementor-section-full_width sliding-text elementor-section-height-default elementor-section-height-default"
                              data-id="956f138"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-aa8160f"
                                  data-id="aa8160f"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-9b86f44 sliding-text elementor-widget elementor-widget-heading"
                                      data-id="9b86f44"
                                      data-element_type="widget"
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                          Contact us.{" "}
                                        </h2>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <div
                              className="elementor-element elementor-element-d3eb4b8 elementor-widget elementor-widget-html"
                              data-id="d3eb4b8"
                              data-element_type="widget"
                              data-widget_type="html.default"
                            >
                              <div className="elementor-widget-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


                    <section
                      data-particle_enable="false"
                      data-particle-mobile-disabled="false"
                      className="elementor-section elementor-top-section elementor-element elementor-element-f3ffde2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="f3ffde2"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0bb7649"
                          data-id="0bb7649"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-7e798cb elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading"
                              data-id="7e798cb"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Contact us.{" "}
                                </h2>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-32ff3d8 elementor-widget elementor-widget-html"
                              data-id="32ff3d8"
                              data-element_type="widget"
                              data-widget_type="html.default"
                            >
                              <div className="elementor-widget-container">
                                <div id="Maindiv">
                                  <form
                                    action="#"
                                    method="post"
                                    id="contact_form"
                                  >
                                    <div className="databeysform">
                                      <div className="fname">
                                        <label htmlFor="fname" />
                                        <input
                                          type="text"
                                          placeholder="First Name*"
                                          name="name"
                                          id="lname_input"
                                          required
                                        />
                                      </div>
                                      <div className="lname">
                                        <label htmlFor="lname" />
                                        <input
                                          type="text"
                                          placeholder="Last Name*"
                                          name="name"
                                          id="fname_input"
                                          required
                                        />
                                      </div>
                                      <div className="lname">
                                        <label htmlFor="Jobt" />
                                        <input
                                          type="text"
                                          placeholder="Job Title*"
                                          name="name"
                                          id="jobt_input"
                                          required
                                        />
                                      </div>
                                      <div className="cname">
                                        <label htmlFor="cname" />
                                        <input
                                          type="text"
                                          placeholder="Company Name*"
                                          name="name"
                                          id="name_input"
                                          required
                                        />
                                      </div>
                                      <div className="telephone">
                                        <label htmlFor="name" />
                                        <input
                                          type="text"
                                          placeholder="Phone Number*"
                                          name="telephone"
                                          id="telephone_input"
                                          required
                                        />
                                      </div>
                                      <div className="email">
                                        <label htmlFor="email" />
                                        <input
                                          type="email"
                                          placeholder="Email Address*"
                                          name="email"
                                          id="email_input"
                                          required
                                        />
                                      </div>
                                      <div className="message">
                                        <label htmlFor="message" />
                                        <textarea
                                          name="message"
                                          placeholder="Type Your Message *"
                                          id="message_input"
                                          rows={1}
                                          cols={30}
                                          required
                                          defaultValue={""}
                                        />
                                      </div>
                                      <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          className="myCheck"
                                          name="test"
                                          required
                                        />
                                        I consent to processing of my personal
                                        data entered above for 3li Global to
                                        contact me *
                                      </div>
                                      <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          className="myCheck"
                                          name="test"
                                          required
                                        />
                                        I would like to receive details about
                                        products, services and events from 3li
                                        Global
                                      </div>
                                      <div className="myCheck">
                                        <p>
                                          For further details on how you
                                          personal data will be processed and
                                          how your consent can be managed, refer
                                          to the 3li Global Privacy Notice.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bbt">
                                      <main>
                                        <div className="contact-form home-contact-form">
                                          <div className="content">
                                            <div className="form-button">
                                              <div
                                                className="circle-button-container"
                                                id="circle-button"
                                              >
                                                <button
                                                  className="text is-movable"
                                                  type="submit"
                                                  style={{
                                                    transform:
                                                      "translateX(1.71232px) translateY(39.7983px)",
                                                  }}
                                                >
                                                  <span>Send</span>
                                                </button>
                                                <div
                                                  className="button-wrapper is-movable"
                                                  style={{
                                                    transform:
                                                      "translateX(1.41015px) translateY(32.7751px)",
                                                  }}
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </main>
                                    </div>
                                  </form>
                                  {/* // End form */}
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
