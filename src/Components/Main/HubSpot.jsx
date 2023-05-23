import React, { useEffect } from 'react'
import Script from '../Sourcefiles/Links/Script';
import Style from '../Sourcefiles/Links/Style';
import  "../Sourcefiles/Links/Style.css";
import $ from "jquery"

const HubSpot = () => {
function table__cell (){
    $(this).addClass('active').siblings().removeClass('active');
  
}
$(".table__cell").on("click",function(){
  $(this).addClass('active').siblings().removeClass('active');
});
useEffect(() => {
  table__cell()

  $(".table__cell").on("click",function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
}, [])

    return (
      <>

<Style/>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-dark-grayscale">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 0.49803921568627" />
          <feFuncG type="table" tableValues="0 0.49803921568627" />
          <feFuncB type="table" tableValues="0 0.49803921568627" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-grayscale">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-purple-yellow">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.54901960784314 0.98823529411765"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB
            type="table"
            tableValues="0.71764705882353 0.25490196078431"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-blue-red">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0 0.27843137254902" />
          <feFuncB
            type="table"
            tableValues="0.5921568627451 0.27843137254902"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-midnight">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0 0" />
          <feFuncG type="table" tableValues="0 0.64705882352941" />
          <feFuncB type="table" tableValues="0 1" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-magenta-yellow">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0.78039215686275 1" />
          <feFuncG type="table" tableValues="0 0.94901960784314" />
          <feFuncB
            type="table"
            tableValues="0.35294117647059 0.47058823529412"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-purple-green">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR
            type="table"
            tableValues="0.65098039215686 0.40392156862745"
          />
          <feFuncG type="table" tableValues="0 1" />
          <feFuncB type="table" tableValues="0.44705882352941 0.4" />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0 0"
    width={0}
    height={0}
    focusable="false"
    role="none"
    style={{
      visibility: "hidden",
      position: "absolute",
      left: "-9999px",
      overflow: "hidden"
    }}
  >
    <defs>
      <filter id="wp-duotone-blue-orange">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
        />
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="table" tableValues="0.098039215686275 1" />
          <feFuncG type="table" tableValues="0 0.66274509803922" />
          <feFuncB
            type="table"
            tableValues="0.84705882352941 0.41960784313725"
          />
          <feFuncA type="table" tableValues="1 1" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
  <a
    className="skip-link screen-reader-text"
    href="#content"
    role="link"
    title="Skip to content"
  >
    Skip to content
  </a>
  <div className="hfeed site" id="page">
    <div
      data-elementor-type="header"
      data-elementor-id={16}
      className="elementor elementor-16 elementor-location-header"
    >
      <section
        data-particle_enable="false"
        data-particle-mobile-disabled="false"
        className="elementor-section elementor-top-section elementor-element elementor-element-f8906a9 elementor-section-full_width main-div elementor-section-height-default elementor-section-height-default"
        data-id="f8906a9"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5fa3a38 logo1"
            data-id="5fa3a38"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-958bfe8 elementor-widget elementor-widget-html"
                data-id="958bfe8"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <a href="/">
                    <img className="imagetag" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f941baf nav1"
            data-id="f941baf"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-08b2ee4 elementor-widget elementor-widget-ekit-nav-menu"
                data-id="08b2ee4"
                data-element_type="widget"
                data-widget_type="ekit-nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="ekit-wid-con ekit_menu_responsive_tablet"
                    data-hamburger-icon=""
                    data-hamburger-icon-type="icon"
                    data-responsive-breakpoint={1024}
                  >
                    <button
                      className="elementskit-menu-hamburger elementskit-menu-toggler"
                      type="button"
                      aria-label="hamburger-icon"
                    >
                      <span className="elementskit-menu-hamburger-icon" />
                      <span className="elementskit-menu-hamburger-icon" />
                      <span className="elementskit-menu-hamburger-icon" />
                    </button>
                    <div
                      id="ekit-megamenu-main-menu"
                      className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default elementskit_line_arrow ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"
                    >
                      <ul
                        id="menu-main-menu"
                        className="elementskit-navbar-nav elementskit-menu-po-right submenu-click-on-icon"
                      >
                        <li
                          id="menu-item-11"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-megamenu-has elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a
                            href="#"
                            className="ekit-menu-nav-link ekit-menu-dropdown-toggle menu-link"
                          >
                            Services
                            <i className="icon icon-down-arrow1 elementskit-submenu-indicator" />
                          </a>
                          <ul className="elementskit-dropdown elementskit-submenu-panel">
                            <li
                              id="menu-item-57"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-57 nav-item elementskit-mobile-builder-content"
                              data-vertical-menu="750px"
                            >
                              <a href="#" className=" dropdown-item menu-link">
                                test
                              </a>
                            </li>
                          </ul>
                          <div className="elementskit-megamenu-panel">
                            <div
                              data-elementor-type="wp-post"
                              data-elementor-id={1044}
                              className="elementor elementor-1044"
                            >
                              <section
                                data-particle_enable="false"
                                data-particle-mobile-disabled="false"
                                className="elementor-section elementor-top-section elementor-element elementor-element-48a95c2 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                data-id="48a95c2"
                                data-element_type="section"
                                data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                              >
                                <div className="elementor-container elementor-column-gap-default">
                                  <div
                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4483642"
                                    data-id={4483642}
                                    data-element_type="column"
                                  >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-da7f185 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="da7f185"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-e693b56"
                                            data-id="e693b56"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap" />
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1a67ea9"
                                            data-id="1a67ea9"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-8dc6f73 elementor-widget elementor-widget-heading"
                                                data-id="8dc6f73"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <style
                                                    dangerouslySetInnerHTML={{
                                                      __html:
                                                        "\n                                                                                                            /*! elementor - v3.13.1 - 09-05-2023 */\n                                                                                                            .elementor-heading-title {\n                                                                                                                padding: 0;\n                                                                                                                margin: 0;\n                                                                                                                line-height: 1\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n                                                                                                                color: inherit;\n                                                                                                                font-size: inherit;\n                                                                                                                line-height: inherit\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-small {\n                                                                                                                font-size: 15px\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n                                                                                                                font-size: 19px\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-large {\n                                                                                                                font-size: 29px\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n                                                                                                                font-size: 39px\n                                                                                                            }\n\n                                                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n                                                                                                                font-size: 59px\n                                                                                                            }\n                                                                                                        "
                                                    }}
                                                  />
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Engineering services
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-ae357e7 elementor-widget elementor-widget-heading"
                                                data-id="ae357e7"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    IT consulting
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-bfe6e53 elementor-widget elementor-widget-heading"
                                                data-id="bfe6e53"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Software engineering
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-e41079e elementor-widget elementor-widget-heading"
                                                data-id="e41079e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Product development
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-9694ad9 elementor-widget elementor-widget-heading"
                                                data-id="9694ad9"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Managed IT services
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-84a94be elementor-widget elementor-widget-heading"
                                                data-id="84a94be"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Quality engineering
                                                    &amp;testing
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-18f62e1 elementor-widget elementor-widget-heading"
                                                data-id="18f62e1"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    DevOps
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-4aaebda elementor-widget elementor-widget-heading"
                                                data-id="4aaebda"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Smart teams
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-e8e3417"
                                            data-id="e8e3417"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-c749c35 elementor-widget elementor-widget-heading"
                                                data-id="c749c35"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Smart automation
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-be9aa52 elementor-widget elementor-widget-heading"
                                                data-id="be9aa52"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Digital enterprise
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-c2e44d7 elementor-widget elementor-widget-heading"
                                                data-id="c2e44d7"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Digital commerce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-68346e2 elementor-widget elementor-widget-heading"
                                                data-id="68346e2"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Machine learning
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-765a785 elementor-widget elementor-widget-heading"
                                                data-id="765a785"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Data management
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-1a805f6 elementor-widget elementor-widget-heading"
                                                data-id="1a805f6"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    RPA
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-834357e elementor-widget elementor-widget-heading"
                                                data-id="834357e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    AR &amp;VR
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-dce9c88 elementor-widget elementor-widget-heading"
                                                data-id="dce9c88"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Internet of things [IoT]
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-b7df12b"
                                            data-id="b7df12b"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-cc9a662 elementor-widget elementor-widget-heading"
                                                data-id="cc9a662"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Technology advisory
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-641cba3 elementor-widget elementor-widget-heading"
                                                data-id="641cba3"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Salesforce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-4e6db5c elementor-widget elementor-widget-heading"
                                                data-id="4e6db5c"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Microsoft
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-4f3854c elementor-widget elementor-widget-heading"
                                                data-id="4f3854c"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    SAP Commerce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-4096f4e elementor-widget elementor-widget-heading"
                                                data-id="4096f4e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Odoo
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-71e8bca"
                                            data-id="71e8bca"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-3633b02 elementor-widget elementor-widget-spacer"
                                                data-id="3633b02"
                                                data-element_type="widget"
                                                data-widget_type="spacer.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <style
                                                    dangerouslySetInnerHTML={{
                                                      __html:
                                                        "\n                                                                                                            /*! elementor - v3.13.1 - 09-05-2023 */\n                                                                                                            .elementor-column .elementor-spacer-inner {\n                                                                                                                height: var(--spacer-size)\n                                                                                                            }\n\n                                                                                                            .e-con {\n                                                                                                                --container-widget-width: 100%\n                                                                                                            }\n\n                                                                                                            .e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer {\n                                                                                                                width: var(--container-widget-width,var(--spacer-size));\n                                                                                                                --align-self: var(--container-widget-align-self,initial);\n                                                                                                                --flex-shrink: 0\n                                                                                                            }\n\n                                                                                                            .e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer {\n                                                                                                                height: 100%\n                                                                                                            }\n\n                                                                                                            .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner {\n                                                                                                                height: var(--container-widget-height,var(--spacer-size))\n                                                                                                            }\n                                                                                                        "
                                                    }}
                                                  />
                                                  <div className="elementor-spacer">
                                                    <div className="elementor-spacer-inner" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-97f1372 elementor-widget elementor-widget-heading"
                                                data-id="97f1372"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Cloud
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-a520f4a elementor-widget elementor-widget-heading"
                                                data-id="a520f4a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Blockchain
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-5d7b237 elementor-widget elementor-widget-heading"
                                                data-id="5d7b237"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Atlassian
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-7acd750 elementor-widget elementor-widget-heading"
                                                data-id="7acd750"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Cyber security
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </li>
                        <li
                          id="menu-item-34"
                          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-34 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-megamenu-has elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a
                            href="#"
                            className="ekit-menu-nav-link ekit-menu-dropdown-toggle menu-link"
                          >
                            Tools
                            <i className="icon icon-down-arrow1 elementskit-submenu-indicator" />
                          </a>
                          <ul className="elementskit-dropdown elementskit-submenu-panel">
                            <li
                              id="menu-item-4768"
                              className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4678 current_page_item menu-item-4768 nav-item elementskit-mobile-builder-content active"
                              data-vertical-menu="750px"
                            >
                              <a
                                href="https://staging.3li.global/tools/hubspot/"
                                className=" dropdown-item active menu-link"
                              >
                                Hubspot
                              </a>
                            </li>
                          </ul>
                          <div className="elementskit-megamenu-panel">
                            <div
                              data-elementor-type="wp-post"
                              data-elementor-id={4765}
                              className="elementor elementor-4765"
                            >
                              <section
                                data-particle_enable="false"
                                data-particle-mobile-disabled="false"
                                className="elementor-section elementor-top-section elementor-element elementor-element-e3b43dc elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                data-id="e3b43dc"
                                data-element_type="section"
                                data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                              >
                                <div className="elementor-container elementor-column-gap-default">
                                  <div
                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-616cfa6"
                                    data-id="616cfa6"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-55288da elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="55288da"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-b262630"
                                            data-id="b262630"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap" />
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-ca049e5"
                                            data-id="ca049e5"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-1039cad elementor-widget elementor-widget-heading"
                                                data-id="1039cad"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Engineering services
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-d2cf2c1 hubs elementor-widget elementor-widget-heading"
                                                data-id="d2cf2c1"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    <a href="https://staging.3li.global/tools/hubspot">
                                                      Hubspot
                                                    </a>
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-12965fa elementor-widget elementor-widget-heading"
                                                data-id="12965fa"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Software engineering
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-0076738 elementor-widget elementor-widget-heading"
                                                data-id={'0076738'}
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Product development
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-8b3b073 elementor-widget elementor-widget-heading"
                                                data-id="8b3b073"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Managed IT services
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-a94a5e4 elementor-widget elementor-widget-heading"
                                                data-id="a94a5e4"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Quality engineering
                                                    &amp;testing
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-d51a57e elementor-widget elementor-widget-heading"
                                                data-id="d51a57e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    DevOps
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-55de605 elementor-widget elementor-widget-heading"
                                                data-id="55de605"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Smart teams
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-07ebc10"
                                            data-id="07ebc10"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-3e6c80d elementor-widget elementor-widget-heading"
                                                data-id="3e6c80d"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Smart automation
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-cf7175e elementor-widget elementor-widget-heading"
                                                data-id="cf7175e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Digital enterprise
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-5787e14 elementor-widget elementor-widget-heading"
                                                data-id="5787e14"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Digital commerce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-388f934 elementor-widget elementor-widget-heading"
                                                data-id="388f934"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Machine learning
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-c5e2315 elementor-widget elementor-widget-heading"
                                                data-id="c5e2315"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Data management
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-5925814 elementor-widget elementor-widget-heading"
                                                data-id={5925814}
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    RPA
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-266efd7 elementor-widget elementor-widget-heading"
                                                data-id="266efd7"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    AR &amp;VR
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-3c3b668 elementor-widget elementor-widget-heading"
                                                data-id="3c3b668"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Internet of things [IoT]
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-d2a3e99"
                                            data-id="d2a3e99"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-9324c4f elementor-widget elementor-widget-heading"
                                                data-id="9324c4f"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Technology advisory
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-9a2eb5b elementor-widget elementor-widget-heading"
                                                data-id="9a2eb5b"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Salesforce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-01ec1c1 elementor-widget elementor-widget-heading"
                                                data-id="01ec1c1"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Microsoft
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-69aae7e elementor-widget elementor-widget-heading"
                                                data-id="69aae7e"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    SAP Commerce
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-5cba4a6 elementor-widget elementor-widget-heading"
                                                data-id="5cba4a6"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Odoo
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-5274fcc"
                                            data-id="5274fcc"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-8a6f150 elementor-widget elementor-widget-spacer"
                                                data-id="8a6f150"
                                                data-element_type="widget"
                                                data-widget_type="spacer.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <div className="elementor-spacer">
                                                    <div className="elementor-spacer-inner" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-e62af27 elementor-widget elementor-widget-heading"
                                                data-id="e62af27"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Cloud
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-905407f elementor-widget elementor-widget-heading"
                                                data-id="905407f"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Blockchain
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-216cc8a elementor-widget elementor-widget-heading"
                                                data-id="216cc8a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Atlassian
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-cb84aef elementor-widget elementor-widget-heading"
                                                data-id="cb84aef"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    Cyber security
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </li>
                        <li
                          id="menu-item-49"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-49 nav-item elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a href="#" className="ekit-menu-nav-link menu-link">
                            Our Company
                          </a>
                        </li>
                        <li
                          id="menu-item-50"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-50 nav-item elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a href="#" className="ekit-menu-nav-link menu-link">
                            Case Studies
                          </a>
                        </li>
                        <li
                          id="menu-item-51"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-51 nav-item elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a href="#" className="ekit-menu-nav-link menu-link">
                            Blog
                          </a>
                        </li>
                        <li
                          id="menu-item-2670"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2670 nav-item elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a href="#" className="ekit-menu-nav-link menu-link">
                            Case Studies
                          </a>
                        </li>
                      </ul>
                      <div className="elementskit-nav-identity-panel">
                        <div className="elementskit-site-title">
                          <a
                            className="elementskit-nav-logo"
                            href="https://staging.3li.global"
                            target="_self"
                            rel=""
                          >
                            <img src="" title="" alt="" />
                          </a>
                        </div>
                        <button
                          className="elementskit-menu-close elementskit-menu-toggler"
                          type="button"
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-41fba5d elementor-hidden-tablet elementor-hidden-mobile test2"
            data-id="41fba5d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-a234234 elementor-widget elementor-widget-ekit-nav-menu"
                data-id="a234234"
                data-element_type="widget"
                data-widget_type="ekit-nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="ekit-wid-con ekit_menu_responsive_tablet"
                    data-hamburger-icon=""
                    data-hamburger-icon-type="icon"
                    data-responsive-breakpoint={1024}
                  >
                    <button
                      className="elementskit-menu-hamburger elementskit-menu-toggler"
                      type="button"
                      aria-label="hamburger-icon"
                    >
                      <span className="elementskit-menu-hamburger-icon" />
                      <span className="elementskit-menu-hamburger-icon" />
                      <span className="elementskit-menu-hamburger-icon" />
                    </button>
                    <div
                      id="ekit-megamenu-translate"
                      className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default elementskit_fill_arrow ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"
                    >
                      <ul
                        id="menu-translate"
                        className="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-icon"
                      >
                        <li
                          id="menu-item-303"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-303 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"
                          data-vertical-menu="750px"
                        >
                          <a
                            href="#"
                            className="ekit-menu-nav-link ekit-menu-dropdown-toggle menu-link"
                          >
                            EN
                            <i className="icon icon-down-arrow1 elementskit-submenu-indicator" />
                          </a>
                          <ul className="elementskit-dropdown elementskit-submenu-panel">
                            <li
                              id="menu-item-301"
                              className="trp-language-switcher-container menu-item menu-item-type-post_type menu-item-object-language_switcher menu-item-301 nav-item elementskit-mobile-builder-content"
                              data-vertical-menu="750px"
                            >
                              <a
                                href="https://staging.3li.global/ar/tools/hubspot/"
                                className=" dropdown-item menu-link"
                              >
                                <span data-no-translation="">
                                  <span className="trp-ls-language-name">
                                    AR
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-302"
                              className="trp-language-switcher-container menu-item menu-item-type-post_type menu-item-object-language_switcher current-language-menu-item menu-item-302 nav-item elementskit-mobile-builder-content"
                              data-vertical-menu="750px"
                            >
                              <a
                                href="https://staging.3li.global/tools/hubspot"
                                className=" dropdown-item menu-link"
                              >
                                <span data-no-translation="">
                                  <span className="trp-ls-language-name">
                                    EN
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="elementskit-nav-identity-panel">
                        <div className="elementskit-site-title">
                          <a
                            className="elementskit-nav-logo"
                            href="https://staging.3li.global"
                            target="_self"
                            rel=""
                          >
                            <img src="" title="" alt="" />
                          </a>
                        </div>
                        <button
                          className="elementskit-menu-close elementskit-menu-toggler"
                          type="button"
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-09d3337 btn"
            data-id="09d3337"
            data-element_type="column"
            data-settings='{"background_background":"gradient"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                data-particle_enable="false"
                data-particle-mobile-disabled="false"
                className="elementor-section elementor-inner-section elementor-element elementor-element-ac9d2fd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="ac9d2fd"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7bacc93"
                    data-id="7bacc93"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-5460d48 elementor-align-left elementor-widget__width-initial elementor-tablet-align-center elementor-mobile-align-left elementor-widget elementor-widget-button"
                        data-id="5460d48"
                        data-element_type="widget"
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              href="#"
                              className="elementor-button-link elementor-button elementor-size-xs"
                              role="button"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">
                                  CONTACT
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-91ba8b2"
                    data-id="91ba8b2"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-970fe24 elementor-view-default elementor-widget elementor-widget-icon"
                        data-id="970fe24"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg
                                width={97}
                                height={13}
                                viewBox="0 0 97 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_584_2185)">
                                  <path
                                    d="M91.8516 2.121L95.6636 6.621L91.8516 11.121"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M95.3992 6.73087L-4.60083 6.73086"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_584_2185">
                                    <rect
                                      width="95.734"
                                      height="11.819"
                                      fill="white"
                                      transform="translate(96.6636 12.531) rotate(-180)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="content" className="site-content">
      <div className="ast-container">
        <div id="primary" className="content-area primary">
          <main id="main" className="site-main">
            <article
              className="post-4678 page type-page status-publish ast-article-single"
              id="post-4678"
              itemType="https://schema.org/CreativeWork"
              itemScope="itemscope"
            >
              <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup" />
              {/* .entry-header */}
              <div className="entry-content clear" itemProp="text">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id={4678}
                  className="elementor elementor-4678"
                >
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-8702708 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                    data-id={8702708}
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-13f7238"
                        data-id="13f7238"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap" />
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-2f0cc6e elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2f0cc6e"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                  >
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4cec2a8"
                        data-id="4cec2a8"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-65c159f elementor-widget elementor-widget-heading"
                            data-id="65c159f"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Certified
                              </h2>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-9930d8c elementor-hidden-desktop elementor-widget elementor-widget-heading"
                            data-id="9930d8c"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Partner.
                              </h2>
                            </div>
                          </div>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-9a1dfd8 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="9a1dfd8"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c8ce32d"
                                data-id="c8ce32d"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-aa60407 elementor-widget elementor-widget-heading"
                                    data-id="aa60407"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        HubSpot <br />
                                        Solutions
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac24c96"
                                data-id="ac24c96"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-08b0c05 elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                    data-id="08b0c05"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Partner.
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-beb9e43 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="beb9e43"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-aa20a56"
                                data-id="aa20a56"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-37e41bf"
                                data-id="37e41bf"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-f0dbfbc elementor-widget elementor-widget-text-editor"
                                    data-id="f0dbfbc"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                                                    /*! elementor - v3.13.1 - 09-05-2023 */\n                                                                                    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n                                                                                        background-color: #69727d;\n                                                                                        color: #fff\n                                                                                    }\n\n                                                                                    .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n                                                                                        color: #69727d;\n                                                                                        border: 3px solid;\n                                                                                        background-color: transparent\n                                                                                    }\n\n                                                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n                                                                                        margin-top: 8px\n                                                                                    }\n\n                                                                                    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n                                                                                        width: 1em;\n                                                                                        height: 1em\n                                                                                    }\n\n                                                                                    .elementor-widget-text-editor .elementor-drop-cap {\n                                                                                        float: left;\n                                                                                        text-align: center;\n                                                                                        line-height: 1;\n                                                                                        font-size: 50px\n                                                                                    }\n\n                                                                                    .elementor-widget-text-editor .elementor-drop-cap-letter {\n                                                                                        display: inline-block\n                                                                                    }\n                                                                                "
                                        }}
                                      />
                                      <p>
                                        <span
                                          className="ui-provider ha b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak"
                                          dir="ltr"
                                        >
                                          3li Global
                                        </span>
                                        is an award-winning, international
                                        digital agency and enterprise service
                                        provider deeply rooted in HubSpot
                                        ecosystem since 2012.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-73468a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="73468a9"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ef66a91"
                                data-id="ef66a91"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-b39c3bb elementor-widget elementor-widget-image"
                                    data-id="b39c3bb"
                                    data-element_type="widget"
                                    data-widget_type="image.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            '\n                                                                                    /*! elementor - v3.13.1 - 09-05-2023 */\n                                                                                    .elementor-widget-image {\n                                                                                        text-align: center\n                                                                                    }\n\n                                                                                    .elementor-widget-image a {\n                                                                                        display: inline-block\n                                                                                    }\n\n                                                                                    .elementor-widget-image a img[src$=".svg"] {\n                                                                                        width: 48px\n                                                                                    }\n\n                                                                                    .elementor-widget-image img {\n                                                                                        vertical-align: middle;\n                                                                                        display: inline-block\n                                                                                    }\n                                                                                '
                                        }}
                                      />
                                      <img
                                        decoding="async"
                                        width={1024}
                                        height={1024}
                                        src={require("../Images/hubspot-flywheel-edit-gif.gif")}
                                        className="attachment-large size-large wp-image-4896"
                                        alt=""
                                        data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/hubspot-flywheel-edit-gif.gif"
                                      />
                                      <noscript>
                                        &lt;img decoding="async" width="1024"
                                        height="1024"
                                        src="https://staging.3li.global/wp-content/uploads/2023/04/hubspot-flywheel-edit-gif.gif"
                                        class="attachment-large size-large
                                        wp-image-4896" alt=""/&gt;
                                      </noscript>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0ed8c37"
                                data-id="0ed8c37"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-f67d063 elementor-widget elementor-widget-spacer"
                                    data-id="f67d063"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7926ccf elementor-hidden-tablet"
                        data-id="7926ccf"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ba31459 elementor-widget elementor-widget-spacer"
                            data-id="ba31459"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-dd4e022 elementor-hidden-mobile elementor-widget elementor-widget-image"
                            data-id="dd4e022"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                width={1000}
                                height={505}
                                src={require("../Images/onesignal-hubspot-integration-blog-3.gif")}
                                className="attachment-full size-full wp-image-4895"
                                alt=""
                                data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/onesignal-hubspot-integration-blog-3.gif"
                              />
                              <noscript>
                                &lt;img decoding="async" width="1000"
                                height="505"
                                src="https://staging.3li.global/wp-content/uploads/2023/04/onesignal-hubspot-integration-blog-3.gif"
                                class="attachment-full size-full wp-image-4895"
                                alt=""/&gt;
                              </noscript>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-da9eae1 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                    data-id="da9eae1"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a4500df"
                        data-id="a4500df"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-9439863 elementor-widget elementor-widget-html"
                            data-id={9439863}
                            data-element_type="widget"
                            data-widget_type="html.default"
                          >
                            <div className="elementor-widget-container">
                              <header>
                                <link
                                  href="https://staging.3li.global/wp-content/uploads/2023/04/aos.css"
                                  rel="stylesheet"
                                />
                                <meta
                                  name="viewport"
                                  content="width=device-width, initial-scale=1"
                                />
                              </header>
                              <main
                                id="main-content"
                                className="body-container-wrapper"
                              >
                                <div className="accordion horizontal">
                                  <div className="page-center">
                                    <div
                                      className="eyebrow c-orange aos-init aos-animate"
                                      data-aos="fade-up"
                                    >
                                      What we do
                                    </div>
                                    <div className="accordions desktop">
                                      <div className="table">
                                        <div
                                          className="table__cell active aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={100}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">01</div>
                                          <div className="title vertical-text">
                                            HubSpot Onboarding
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              HubSpot Onboarding
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  Start driving a strong ROI
                                                  from day one with 3li Global
                                                  onboarding services, ranging
                                                  from account configuration and
                                                  data migration to goal-setting
                                                  and building automated lead
                                                  flows.
                                                </p>
                                                <p>
                                                  {/*HubSpot Call-to-Action Code */}
                                                  <span
                                                    className="hs-cta-wrapper"
                                                    id="hs-cta-wrapper-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                                  >
                                                    <span
                                                      className="hs-cta-node hs-cta-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                                      id="hs-cta-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                                      style={{
                                                        visibility: "visible"
                                                      }}
                                                      data-hs-drop="true"
                                                    >
                                                      <a
                                                        id="cta_button_364768_df87f059-e2f9-42c7-85a2-0eab6780f162"
                                                        className="cta_button button bg-black b-black c-white h-bg-white h-b-black h-c-black"
                                                        href="/"
                                                        target="_blank"
                                                        rel="noopener"
                                                        style={{}}
                                                        cta_dest_link="/"
                                                        title="Onboard with Salted Stone"
                                                      >
                                                        Onboard with 3li Globals
                                                      </a>
                                                    </span>
                                                  </span>
                                                  {/* end HubSpot Call-to-Action Code */}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="table__cell aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={200}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">02</div>
                                          <div className="title vertical-text">
                                            Tech Integrations
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              Tech Integrations
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  We have the most tenured
                                                  solutions architects and
                                                  back-end engineers in the
                                                  HubSpot ecosystem. Whether you
                                                  need help connecting native
                                                  apps from the HubSpot App
                                                  Marketplace or designing and
                                                  building custom integrations,
                                                  we've got an
                                                  implementation-ready playbook.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="table__cell aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={300}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">03</div>
                                          <div className="title vertical-text">
                                            Web Design &amp;Development
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              Web Design &amp;Development
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  We've created stylish and
                                                  innovative digital experiences
                                                  for hundreds of organizations
                                                  that engage and perform. Begin
                                                  with our unique
                                                  <span
                                                    style={{ color: "#d68231" }}
                                                  >
                                                    <a
                                                      href="/"
                                                      rel="noopener"
                                                      style={{
                                                        color: "#d68231"
                                                      }}
                                                    >
                                                      Website Roadmapping
                                                    </a>
                                                  </span>
                                                  process, which is designed to
                                                  build understanding around the
                                                  context, content, visual
                                                  identity and audience for your
                                                  website.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="table__cell aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={400}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">04</div>
                                          <div className="title vertical-text">
                                            Marketing
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              Marketing
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  We help you leverage the full
                                                  suite of HubSpot tools to
                                                  drive expectation-exceeding
                                                  RevOps performance, create
                                                  engaging digital content, and
                                                  run dynamic lead generation
                                                  campaigns. Our
                                                  <span
                                                    style={{ color: "#d68231" }}
                                                  >
                                                    <a
                                                      href="/s"
                                                      rel="noopener"
                                                      style={{
                                                        color: "#d68231"
                                                      }}
                                                    >
                                                      Strategic Programs
                                                    </a>
                                                  </span>
                                                  cover everything you need to
                                                  succeed, from buyer persona
                                                  research and marketing
                                                  discovery to end-to-end
                                                  creative execution.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="table__cell aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={500}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">05</div>
                                          <div className="title vertical-text">
                                            UI/UX Design
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              UI/UX Desig
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  The more skilled and
                                                  experienced your in-house
                                                  teams become, the more
                                                  ambitious you can be with the
                                                  goals you pursue. For teams of
                                                  5 to 500, we offer bespoke
                                                  training programs that enable
                                                  your team to become power
                                                  users of HubSpot and own your
                                                  Marketing, Sales, and Service
                                                  processes.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="table__cell aos-init aos-animate"
                                          data-aos="fade-left"
                                          data-aos-duration={600}
                                          data-aos-delay={600}
                                          style={{ height: 385 }}
                                          onClick={table__cell}
                                        >
                                          <div className="number">06</div>
                                          <div className="title vertical-text">
                                            Reporting &amp;Analytics
                                          </div>
                                          <div className="copy">
                                            <div className="active-title">
                                              Reporting &amp;Analytics
                                            </div>
                                            <div className="columns">
                                              <div className="copy">
                                                <p>
                                                  <span>
                                                    Quantify your success and
                                                    power growth with
                                                    comprehensive reporting,
                                                    customized dashboards, and
                                                    in-depth analytics. Our team
                                                    can configure your HubSpot
                                                    dashboards for almost any
                                                    audience or use case, and
                                                    can integrate multiple
                                                    sources to help you see the
                                                    whole picture in one place.
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordions mobile">
                                      <div
                                        className="accordion-item active aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={100}
                                      >
                                        <div className="title">
                                          <span className="number">01</span>
                                          <span className="text">
                                            HubSpot Onboarding
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              Start driving a strong ROI from
                                              day one with Salted Stone's
                                              best-in-class onboarding services,
                                              ranging from account configuration
                                              and data migration to goal-setting
                                              and building automated lead flows.
                                            </p>
                                            <p>
                                              {/*HubSpot Call-to-Action Code */}
                                              <span
                                                className="hs-cta-wrapper"
                                                id="hs-cta-wrapper-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                              >
                                                <span
                                                  className="hs-cta-node hs-cta-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                                  id="hs-cta-49337d1a-472b-42a6-ac83-a604fdffa50c"
                                                  data-hs-drop="true"
                                                  style={{
                                                    visibility: "visible"
                                                  }}
                                                >
                                                  <a
                                                    id="cta_button_364768_df87f059-e2f9-42c7-85a2-0eab6780f162"
                                                    className="cta_button button bg-black b-black c-white h-bg-white h-b-black h-c-black"
                                                    href="/"
                                                    target="_blank"
                                                    rel="noopener"
                                                    style={{}}
                                                    cta_dest_link="https://landing.saltedstone.com/hubspot-onboarding-with-salted-stone"
                                                    title="Onboard with Salted Stone"
                                                  >
                                                    Onboard with Salted Stone
                                                  </a>
                                                </span>
                                              </span>
                                              {/* end HubSpot Call-to-Action Code */}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="accordion-item aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={200}
                                      >
                                        <div className="title">
                                          <span className="number">02</span>
                                          <span className="text">
                                            Tech Integrations
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              We have the most tenured solutions
                                              architects and back-end engineers
                                              in the HubSpot ecosystem. Whether
                                              you need help connecting native
                                              apps from the HubSpot App
                                              Marketplace or designing and
                                              building custom integrations,
                                              we've got an implementation-ready
                                              playbook.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="accordion-item aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={300}
                                      >
                                        <div className="title">
                                          <span className="number">03</span>
                                          <span className="text">
                                            Web Design &amp;Development
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              We've created stylish and
                                              innovative digital experiences for
                                              hundreds of organizations that
                                              engage and perform. Begin with our
                                              unique
                                              <span
                                                style={{ color: "#d68231" }}
                                              >
                                                <a
                                                  href="https://www.saltedstone.com/blog/why-you-really-need-a-plan-for-your-next-website-redesign"
                                                  rel="noopener"
                                                  style={{ color: "#d68231" }}
                                                >
                                                  Website Roadmapping
                                                </a>
                                              </span>
                                              process, which is designed to
                                              build understanding around the
                                              context, content, visual identity
                                              and audience for your website.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="accordion-item aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={400}
                                      >
                                        <div className="title">
                                          <span className="number">04</span>
                                          <span className="text">
                                            Holistic Marketing
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              We help you leverage the full
                                              suite of HubSpot tools to drive
                                              expectation-exceeding RevOps
                                              performance, create engaging
                                              digital content, and run dynamic
                                              lead generation campaigns. Our
                                              <span
                                                style={{ color: "#d68231" }}
                                              >
                                                <a
                                                  href="https://www.saltedstone.com/solutions/strategic-programs"
                                                  rel="noopener"
                                                  style={{ color: "#d68231" }}
                                                >
                                                  Strategic Programs
                                                </a>
                                              </span>
                                              cover everything you need to
                                              succeed, from buyer persona
                                              research and marketing discovery
                                              to end-to-end creative execution.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="accordion-item aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={500}
                                      >
                                        <div className="title">
                                          <span className="number">05</span>
                                          <span className="text">
                                            Training &amp;Enablement
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              The more skilled and experienced
                                              your in-house teams become, the
                                              more ambitious you can be with the
                                              goals you pursue. For teams of 5
                                              to 500, we offer bespoke training
                                              programs that enable your team to
                                              become power users of HubSpot and
                                              own your Marketing, Sales, and
                                              Service processes.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="accordion-item aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay={600}
                                      >
                                        <div className="title">
                                          <span className="number">06</span>
                                          <span className="text">
                                            Reporting &amp;Analytics
                                          </span>
                                        </div>
                                        <div className="copy">
                                          <div className="copy-1">
                                            <p>
                                              <span>
                                                Quantify your success and power
                                                growth with comprehensive
                                                reporting, customized
                                                dashboards, and in-depth
                                                analytics. Our team can
                                                configure your HubSpot
                                                dashboards for almost any
                                                audience or use case, and can
                                                integrate multiple sources to
                                                help you see the whole picture
                                                in one place.
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </main>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-cd89919 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                    data-id="cd89919"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f698fbe"
                        data-id="f698fbe"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-2ab8e03 elementor-widget elementor-widget-image"
                            data-id="2ab8e03"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                width={300}
                                height={83}
                                src="https://staging.3li.global/wp-content/uploads/2023/04/Hubspot.svg"
                                className="attachment-medium size-medium wp-image-4911"
                                alt=""
                                data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Hubspot.svg"
                              />
                              <noscript>
                                &lt;img decoding="async" width="300" height="83"
                                src="https://staging.3li.global/wp-content/uploads/2023/04/Hubspot.svg"
                                class="attachment-medium size-medium
                                wp-image-4911" alt=""/&gt;
                              </noscript>
                            </div>
                          </div>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-7d55bac elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="7d55bac"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1dd7c88"
                                data-id="1dd7c88"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fb7225b"
                                data-id="fb7225b"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-431885f elementor-widget elementor-widget-heading"
                                    data-id="431885f"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Here is an overview of how we can help
                                        you with the different Hubs:
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b67a4bb"
                                data-id="b67a4bb"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-20d01ac elementor-widget elementor-widget-eael-adv-tabs"
                            data-id="20d01ac"
                            data-element_type="widget"
                            data-widget_type="eael-adv-tabs.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                id="eael-advance-tabs-20d01ac"
                                className="eael-advance-tabs eael-tabs-horizontal eael-tab-auto-active active-caret-on"
                                data-tabid="20d01ac"
                              >
                                <div className="eael-tabs-nav">
                                  <ul className="">
                                    <li
                                      id="marketing-hub"
                                      className="inactive eael-tab-item-trigger"
                                      aria-selected="true"
                                      data-tab={1}
                                      role="tab"
                                      tabIndex={0}
                                      aria-controls="marketing-hub-tab"
                                      aria-expanded="false"
                                    >
                                      <span className="eael-tab-title  title-after-icon">
                                        MARKETING HUB
                                      </span>
                                    </li>
                                    <li
                                      id="cms-hub"
                                      className="inactive eael-tab-item-trigger"
                                      aria-selected="false"
                                      data-tab={2}
                                      role="tab"
                                      tabIndex={-1}
                                      aria-controls="cms-hub-tab"
                                      aria-expanded="false"
                                    >
                                      <span className="eael-tab-title  title-after-icon">
                                        CMS HUB
                                      </span>
                                    </li>
                                    <li
                                      id="crm-sales-hub"
                                      className=" eael-tab-item-trigger"
                                      aria-selected="false"
                                      data-tab={3}
                                      role="tab"
                                      tabIndex={-1}
                                      aria-controls="crm-sales-hub-tab"
                                      aria-expanded="false"
                                    >
                                      <span className="eael-tab-title  title-after-icon">
                                        CRM &amp;SALES HUB
                                      </span>
                                    </li>
                                    <li
                                      id="service-hub"
                                      className="inactive eael-tab-item-trigger"
                                      aria-selected="false"
                                      data-tab={4}
                                      role="tab"
                                      tabIndex={-1}
                                      aria-controls="service-hub-tab"
                                      aria-expanded="false"
                                    >
                                      <span className="eael-tab-title  title-after-icon">
                                        SERVICE HUB
                                      </span>
                                    </li>
                                    <li
                                      id="operations-hub"
                                      className="inactive eael-tab-item-trigger"
                                      aria-selected="false"
                                      data-tab={5}
                                      role="tab"
                                      tabIndex={-1}
                                      aria-controls="operations-hub-tab"
                                      aria-expanded="false"
                                    >
                                      <span className="eael-tab-title  title-after-icon">
                                        OPERATIONS HUB
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="eael-tabs-content">
                                  <div
                                    id="marketing-hub-tab"
                                    className="clearfix eael-tab-content-item inactive"
                                    data-title-link="marketing-hub-tab"
                                  >
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id={4839}
                                      className="elementor elementor-4839"
                                    >
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-top-section elementor-element elementor-element-1db88d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1db88d3"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8dc336e"
                                            data-id="8dc336e"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-bc8705a elementor-widget elementor-widget-heading"
                                                data-id="bc8705a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    All your marketing in one
                                                    place
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-20a45e1 elementor-widget elementor-widget-text-editor"
                                                data-id="20a45e1"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <p>
                                                    HubSpot’s Marketing Hub
                                                    gives you valuable insights
                                                    into your customer behaviour
                                                    by tracking and reporting on
                                                    your contacts’ interactions
                                                    with your marketing. Once
                                                    you’ve captured enough of
                                                    this data, you’ll be able to
                                                    personalise your content
                                                    based on those interactions,
                                                    making your prospects much
                                                    more likely to convert into
                                                    leads.
                                                  </p>
                                                  <hr />
                                                  <p>
                                                    We can help you with the
                                                    following:
                                                  </p>
                                                  <ul>
                                                    <li>Onboarding</li>
                                                    <li>
                                                      Implementation and
                                                      customisation
                                                    </li>
                                                    <li>
                                                      Inbound marketing services
                                                      to help you grow,
                                                      including;
                                                      <br />
                                                      ο Email
                                                      <br />
                                                      ο SEO
                                                      <br />
                                                      ο PPC / Paid Media
                                                      <br />
                                                      ο Content marketing
                                                      <br />
                                                      ο Social media
                                                      <br />ο Video marketing
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a309b1"
                                            data-id="5a309b1"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-ab00a90 elementor-widget elementor-widget-image"
                                                data-id="ab00a90"
                                                data-element_type="widget"
                                                data-widget_type="image.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <img
                                                    decoding="async"
                                                    width={469}
                                                    height={639}
                                                    src={require("../Images/Group-1000001942.png")}
                                                    className="attachment-large size-large wp-image-4928"
                                                    alt=""
                                                    data-lazy-srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png 469w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png 220w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png 9w"
                                                    data-lazy-sizes="(max-width: 469px) 100vw, 469px"
                                                    data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                  />
                                                  <noscript>
                                                    &lt;img decoding="async"
                                                    width="469" height="639"
                                                    src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                    class="attachment-large
                                                    size-large wp-image-4928"
                                                    alt=""
                                                    srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png
                                                    469w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png
                                                    220w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png
                                                    9w" sizes="(max-width:
                                                    469px) 100vw, 469px"/&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div
                                    id="cms-hub-tab"
                                    className="clearfix eael-tab-content-item inactive"
                                    data-title-link="cms-hub-tab"
                                  >
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id={4839}
                                      className="elementor elementor-4839"
                                    >
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-top-section elementor-element elementor-element-1db88d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1db88d3"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8dc336e"
                                            data-id="8dc336e"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-bc8705a elementor-widget elementor-widget-heading"
                                                data-id="bc8705a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    All your marketing in one
                                                    place
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-20a45e1 elementor-widget elementor-widget-text-editor"
                                                data-id="20a45e1"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <p>
                                                    HubSpot’s Marketing Hub
                                                    gives you valuable insights
                                                    into your customer behaviour
                                                    by tracking and reporting on
                                                    your contacts’ interactions
                                                    with your marketing. Once
                                                    you’ve captured enough of
                                                    this data, you’ll be able to
                                                    personalise your content
                                                    based on those interactions,
                                                    making your prospects much
                                                    more likely to convert into
                                                    leads.
                                                  </p>
                                                  <hr />
                                                  <p>
                                                    We can help you with the
                                                    following:
                                                  </p>
                                                  <ul>
                                                    <li>Onboarding</li>
                                                    <li>
                                                      Implementation and
                                                      customisation
                                                    </li>
                                                    <li>
                                                      Inbound marketing services
                                                      to help you grow,
                                                      including;
                                                      <br />
                                                      ο Email
                                                      <br />
                                                      ο SEO
                                                      <br />
                                                      ο PPC / Paid Media
                                                      <br />
                                                      ο Content marketing
                                                      <br />
                                                      ο Social media
                                                      <br />ο Video marketing
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a309b1"
                                            data-id="5a309b1"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-ab00a90 elementor-widget elementor-widget-image"
                                                data-id="ab00a90"
                                                data-element_type="widget"
                                                data-widget_type="image.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <img
                                                    decoding="async"
                                                    width={469}
                                                    height={639}
                                                    src={require("../Images/Group-1000001942.png")}
                                                    className="attachment-large size-large wp-image-4928"
                                                    alt=""
                                                    data-lazy-srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png 469w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png 220w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png 9w"
                                                    data-lazy-sizes="(max-width: 469px) 100vw, 469px"
                                                    data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                  />
                                                  <noscript>
                                                    &lt;img decoding="async"
                                                    width="469" height="639"
                                                    src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                    class="attachment-large
                                                    size-large wp-image-4928"
                                                    alt=""
                                                    srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png
                                                    469w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png
                                                    220w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png
                                                    9w" sizes="(max-width:
                                                    469px) 100vw, 469px"/&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div
                                    id="crm-sales-hub-tab"
                                    className="clearfix eael-tab-content-item "
                                    data-title-link="crm-sales-hub-tab"
                                  >
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id={4839}
                                      className="elementor elementor-4839"
                                    >
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-top-section elementor-element elementor-element-1db88d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1db88d3"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8dc336e"
                                            data-id="8dc336e"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-bc8705a elementor-widget elementor-widget-heading"
                                                data-id="bc8705a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    All your marketing in one
                                                    place
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-20a45e1 elementor-widget elementor-widget-text-editor"
                                                data-id="20a45e1"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <p>
                                                    HubSpot’s Marketing Hub
                                                    gives you valuable insights
                                                    into your customer behaviour
                                                    by tracking and reporting on
                                                    your contacts’ interactions
                                                    with your marketing. Once
                                                    you’ve captured enough of
                                                    this data, you’ll be able to
                                                    personalise your content
                                                    based on those interactions,
                                                    making your prospects much
                                                    more likely to convert into
                                                    leads.
                                                  </p>
                                                  <hr />
                                                  <p>
                                                    We can help you with the
                                                    following:
                                                  </p>
                                                  <ul>
                                                    <li>Onboarding</li>
                                                    <li>
                                                      Implementation and
                                                      customisation
                                                    </li>
                                                    <li>
                                                      Inbound marketing services
                                                      to help you grow,
                                                      including;
                                                      <br />
                                                      ο Email
                                                      <br />
                                                      ο SEO
                                                      <br />
                                                      ο PPC / Paid Media
                                                      <br />
                                                      ο Content marketing
                                                      <br />
                                                      ο Social media
                                                      <br />ο Video marketing
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a309b1"
                                            data-id="5a309b1"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-ab00a90 elementor-widget elementor-widget-image"
                                                data-id="ab00a90"
                                                data-element_type="widget"
                                                data-widget_type="image.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <img
                                                    decoding="async"
                                                    width={469}
                                                    height={639}
                                                    src={require("../Images/Group-1000001942.png")}
                                                    className="attachment-large size-large wp-image-4928"
                                                    alt=""
                                                    data-lazy-srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png 469w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png 220w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png 9w"
                                                    data-lazy-sizes="(max-width: 469px) 100vw, 469px"
                                                    data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                  />
                                                  <noscript>
                                                    &lt;img decoding="async"
                                                    width="469" height="639"
                                                    src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                    class="attachment-large
                                                    size-large wp-image-4928"
                                                    alt=""
                                                    srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png
                                                    469w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png
                                                    220w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png
                                                    9w" sizes="(max-width:
                                                    469px) 100vw, 469px"/&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div
                                    id="service-hub-tab"
                                    className="clearfix eael-tab-content-item inactive"
                                    data-title-link="service-hub-tab"
                                  >
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id={4839}
                                      className="elementor elementor-4839"
                                    >
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-top-section elementor-element elementor-element-1db88d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1db88d3"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8dc336e"
                                            data-id="8dc336e"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-bc8705a elementor-widget elementor-widget-heading"
                                                data-id="bc8705a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    All your marketing in one
                                                    place
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-20a45e1 elementor-widget elementor-widget-text-editor"
                                                data-id="20a45e1"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <p>
                                                    HubSpot’s Marketing Hub
                                                    gives you valuable insights
                                                    into your customer behaviour
                                                    by tracking and reporting on
                                                    your contacts’ interactions
                                                    with your marketing. Once
                                                    you’ve captured enough of
                                                    this data, you’ll be able to
                                                    personalise your content
                                                    based on those interactions,
                                                    making your prospects much
                                                    more likely to convert into
                                                    leads.
                                                  </p>
                                                  <hr />
                                                  <p>
                                                    We can help you with the
                                                    following:
                                                  </p>
                                                  <ul>
                                                    <li>Onboarding</li>
                                                    <li>
                                                      Implementation and
                                                      customisation
                                                    </li>
                                                    <li>
                                                      Inbound marketing services
                                                      to help you grow,
                                                      including;
                                                      <br />
                                                      ο Email
                                                      <br />
                                                      ο SEO
                                                      <br />
                                                      ο PPC / Paid Media
                                                      <br />
                                                      ο Content marketing
                                                      <br />
                                                      ο Social media
                                                      <br />ο Video marketing
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a309b1"
                                            data-id="5a309b1"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-ab00a90 elementor-widget elementor-widget-image"
                                                data-id="ab00a90"
                                                data-element_type="widget"
                                                data-widget_type="image.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <img
                                                    decoding="async"
                                                    width={469}
                                                    height={639}
                                                    src={require("../Images/Group-1000001942.png")}
                                                    className="attachment-large size-large wp-image-4928"
                                                    alt=""
                                                    data-lazy-srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png 469w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png 220w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png 9w"
                                                    data-lazy-sizes="(max-width: 469px) 100vw, 469px"
                                                    data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                  />
                                                  <noscript>
                                                    &lt;img decoding="async"
                                                    width="469" height="639"
                                                    src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                    class="attachment-large
                                                    size-large wp-image-4928"
                                                    alt=""
                                                    srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png
                                                    469w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png
                                                    220w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png
                                                    9w" sizes="(max-width:
                                                    469px) 100vw, 469px"/&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div
                                    id="operations-hub-tab"
                                    className="clearfix eael-tab-content-item inactive"
                                    data-title-link="operations-hub-tab"
                                  >
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id={4839}
                                      className="elementor elementor-4839"
                                    >
                                      <section
                                        data-particle_enable="false"
                                        data-particle-mobile-disabled="false"
                                        className="elementor-section elementor-top-section elementor-element elementor-element-1db88d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1db88d3"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-default">
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8dc336e"
                                            data-id="8dc336e"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-bc8705a elementor-widget elementor-widget-heading"
                                                data-id="bc8705a"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <h2 className="elementor-heading-title elementor-size-default">
                                                    All your marketing in one
                                                    place
                                                  </h2>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-element elementor-element-20a45e1 elementor-widget elementor-widget-text-editor"
                                                data-id="20a45e1"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <p>
                                                    HubSpot’s Marketing Hub
                                                    gives you valuable insights
                                                    into your customer behaviour
                                                    by tracking and reporting on
                                                    your contacts’ interactions
                                                    with your marketing. Once
                                                    you’ve captured enough of
                                                    this data, you’ll be able to
                                                    personalise your content
                                                    based on those interactions,
                                                    making your prospects much
                                                    more likely to convert into
                                                    leads.
                                                  </p>
                                                  <hr />
                                                  <p>
                                                    We can help you with the
                                                    following:
                                                  </p>
                                                  <ul>
                                                    <li>Onboarding</li>
                                                    <li>
                                                      Implementation and
                                                      customisation
                                                    </li>
                                                    <li>
                                                      Inbound marketing services
                                                      to help you grow,
                                                      including;
                                                      <br />
                                                      ο Email
                                                      <br />
                                                      ο SEO
                                                      <br />
                                                      ο PPC / Paid Media
                                                      <br />
                                                      ο Content marketing
                                                      <br />
                                                      ο Social media
                                                      <br />ο Video marketing
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a309b1"
                                            data-id="5a309b1"
                                            data-element_type="column"
                                          >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                              <div
                                                className="elementor-element elementor-element-ab00a90 elementor-widget elementor-widget-image"
                                                data-id="ab00a90"
                                                data-element_type="widget"
                                                data-widget_type="image.default"
                                              >
                                                <div className="elementor-widget-container">
                                                  <img
                                                    decoding="async"
                                                    width={469}
                                                    height={639}
                                                    src={require("../Images/Group-1000001942.png")}
                                                    className="attachment-large size-large wp-image-4928"
                                                    alt=""
                                                    data-lazy-srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png 469w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png 220w, https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png 9w"
                                                    data-lazy-sizes="(max-width: 469px) 100vw, 469px"
                                                    data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                  />
                                                  <noscript>
                                                    &lt;img decoding="async"
                                                    width="469" height="639"
                                                    src="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png"
                                                    class="attachment-large
                                                    size-large wp-image-4928"
                                                    alt=""
                                                    srcset="https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942.png
                                                    469w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-220x300.png
                                                    220w,
                                                    https://staging.3li.global/wp-content/uploads/2023/04/Group-1000001942-9x12.png
                                                    9w" sizes="(max-width:
                                                    469px) 100vw, 469px"/&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-572a644 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                    data-id="572a644"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a98153b"
                        data-id="a98153b"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap" />
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d19dcca"
                        data-id="d19dcca"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-7e340ce elementor-widget elementor-widget-heading"
                            data-id="7e340ce"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                The top reasons to choose HubSpot
                              </h2>
                            </div>
                          </div>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-f0e550b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="f0e550b"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-10e3033"
                                data-id="10e3033"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-2e963d9 elementor-widget-mobile__width-auto elementor-widget elementor-widget-heading"
                                    data-id="2e963d9"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        When not to choose HubSpot
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-373dc41"
                                data-id="373dc41"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6ac42b4"
                        data-id="6ac42b4"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-3d2829d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="3d2829d"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-25c72b6"
                                data-id="25c72b6"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-55b0889 elementor-widget elementor-widget-heading"
                                    data-id="55b0889"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">01</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8874dff"
                                data-id="8874dff"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-994aca8 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="994aca8"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-bc4e07e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="bc4e07e"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e00a171"
                                data-id="e00a171"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-ca36c92 elementor-widget elementor-widget-heading"
                                    data-id="ca36c92"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">02</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7a44c6a"
                                data-id="7a44c6a"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-40039fe elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="40039fe"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-3520b3d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="3520b3d"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-296610a"
                                data-id="296610a"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-adbf6b6 elementor-widget elementor-widget-heading"
                                    data-id="adbf6b6"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">03</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d09e02a"
                                data-id="d09e02a"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-9341f1d elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="9341f1d"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-43da15e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="43da15e"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c50cdf4"
                                data-id="c50cdf4"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-3f32297 elementor-widget elementor-widget-heading"
                                    data-id="3f32297"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">04</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ae0b80a"
                                data-id="ae0b80a"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-31e8e14 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="31e8e14"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-3774a7a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="3774a7a"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-51a9ad6"
                                data-id="51a9ad6"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-8909add elementor-widget elementor-widget-heading"
                                    data-id="8909add"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">05</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-af04b8e"
                                data-id="af04b8e"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-3046d62 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="3046d62"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-08b2674 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="08b2674"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5d6eef9"
                                data-id="5d6eef9"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-2377d2e elementor-widget elementor-widget-heading"
                                    data-id="2377d2e"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        <span className="num">06</span>
                                        Make decisions on customer data
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1f11b0c"
                                data-id="1f11b0c"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-7439ce9 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="7439ce9"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={13}
                                            viewBox="0 0 18 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M10.748 12.6502C10.5169 12.417 10.4059 12.1353 10.4152 11.8049C10.4252 11.4746 10.5457 11.1928 10.7769 10.9596L14.0417 7.66592H1.1557C0.82825 7.66592 0.55358 7.55399 0.331686 7.33013C0.110562 7.10705 0 6.83034 0 6.5C0 6.16966 0.110562 5.89255 0.331686 5.6687C0.55358 5.44562 0.82825 5.33408 1.1557 5.33408H14.0417L10.748 2.01121C10.5169 1.77803 10.4013 1.50093 10.4013 1.17991C10.4013 0.859671 10.5169 0.582959 10.748 0.349775C10.9791 0.116592 11.2538 0 11.572 0C11.8894 0 12.1637 0.116592 12.3949 0.349775L17.6822 5.68386C17.7978 5.80045 17.8798 5.92676 17.9283 6.06278C17.9761 6.1988 18 6.34454 18 6.5C18 6.65546 17.9761 6.8012 17.9283 6.93722C17.8798 7.07324 17.7978 7.19955 17.6822 7.31614L12.366 12.6794C12.1541 12.8931 11.8894 13 11.572 13C11.2538 13 10.9791 12.8834 10.748 12.6502Z"
                                              fill="#9628E5"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-6b1a0bb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="6b1a0bb"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ceac49d"
                        data-id="ceac49d"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-a555eb2 elementor-widget elementor-widget-heading"
                            data-id="a555eb2"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Are you facing any of these challenges?
                              </h2>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-670704d elementor-tablet-align-center elementor-widget elementor-widget-button"
                            data-id="670704d"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a
                                  href="#"
                                  className="elementor-button-link elementor-button elementor-size-sm"
                                  role="button"
                                >
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">
                                      Let’s Talk
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-240e987"
                        data-id="240e987"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-8c22bda elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="8c22bda"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0319f42 ro1"
                                data-id="0319f42"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-8620bc9 elementor-widget elementor-widget-text-editor"
                                    data-id="8620bc9"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        You are struggling to see a return on
                                        your investment from HubSpot
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-aeb86a4"
                                data-id="aeb86a4"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-af4351e elementor-widget elementor-widget-text-editor"
                                    data-id="af4351e"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        You are struggling to see a <br />
                                        return on your investment <br />
                                        from HubSpot
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ecea3ab ro2"
                                data-id="ecea3ab"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-736b985 elementor-widget elementor-widget-text-editor"
                                    data-id="736b985"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        You are struggling to see a return on
                                        your investment from HubSpot
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-8bbd167 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="8bbd167"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6c5e715"
                                data-id="6c5e715"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-47296a2 ro3"
                                data-id="47296a2"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-4103700 elementor-widget elementor-widget-text-editor"
                                    data-id={4103700}
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        You are struggling to see a return on
                                        your investment from HubSpot
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b3e5947 ro4"
                                data-id="b3e5947"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-10d964b elementor-widget elementor-widget-text-editor"
                                    data-id="10d964b"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        You are struggling to see a return on
                                        your investment from HubSpot
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-9d54e84"
                                data-id="9d54e84"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className="elementor-widget-wrap" />
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-bbfb13f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="bbfb13f"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-731726e"
                        data-id="731726e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-b3831e5 elementor-widget elementor-widget-heading"
                            data-id="b3831e5"
                            data-element_type="widget"
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                CASE STUDIES
                              </h2>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-5b52743 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="5b52743"
                            data-element_type="widget"
                            data-widget_type="divider.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-divider">
                                <span className="elementor-divider-separator" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-bf4c6f1 elementor-widget elementor-widget-elementskit-blog-posts"
                            data-id="bf4c6f1"
                            data-element_type="widget"
                            data-widget_type="elementskit-blog-posts.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div
                                  id="post-items--bf4c6f1"
                                  className="row post-items"
                                >
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in
                                            Salesforce"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce – Copy"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            &amp;#8211; Copy"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            –Copy{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy-copy/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce – Copy – Copy"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            &amp;#8211; Copy &amp;#8211;
                                            Copy"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy-copy/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            –Copy –Copy{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-bef7bcc elementor-widget elementor-widget-elementskit-blog-posts"
                            data-id="bef7bcc"
                            data-element_type="widget"
                            data-widget_type="elementskit-blog-posts.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div
                                  id="post-items--bef7bcc"
                                  className="row post-items"
                                >
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in
                                            Salesforce"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce – Copy"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            &amp;#8211; Copy"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            –Copy{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6">
                                    <div className="elementskit-post-image-card">
                                      <div className="elementskit-entry-header">
                                        <a
                                          href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy-copy/"
                                          className="elementskit-entry-thumb"
                                        >
                                          <img
                                            width={355}
                                            height={186}
                                            decoding="async"
                                            src={require("../Images/salesforce-ecosystem-1.png")}
                                            alt="Optimizing RevOps Strategies andSales Processes in Salesforce – Copy – Copy"
                                            data-lazy-src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                          />
                                          <noscript>
                                            &lt;img width="355" height="186"
                                            decoding="async"
                                            src="https://staging.3li.global/wp-content/uploads/2023/05/salesforce-ecosystem-1.png"
                                            alt="Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            &amp;#8211; Copy &amp;#8211;
                                            Copy"&gt;
                                          </noscript>
                                        </a>
                                        <div className="elementskit-meta-categories">
                                          <span className="elementskit-meta-wraper">
                                            <span>
                                              <a
                                                href="https://staging.3li.global/category/case-studies/"
                                                rel="category tag"
                                              >
                                                CASE STUDIES
                                              </a>
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="elementskit-post-body ">
                                        <h2 className="entry-title">
                                          <a href="https://staging.3li.global/optimizing-revops-strategies-andsales-processes-in-salesforce-copy-copy/">
                                            Optimizing RevOps Strategies
                                            andSales Processes in Salesforce
                                            –Copy –Copy{" "}
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    data-particle_enable="false"
                    data-particle-mobile-disabled="false"
                    className="elementor-section elementor-top-section elementor-element elementor-element-655e08b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="655e08b"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fd16d44"
                        data-id="fd16d44"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section
                            data-particle_enable="false"
                            data-particle-mobile-disabled="false"
                            className="elementor-section elementor-inner-section elementor-element elementor-element-af152c6 elementor-section-full_width sliding-text elementor-section-height-default elementor-section-height-default"
                            data-id="af152c6"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5461ba0"
                                data-id="5461ba0"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated" id="trans">
                                  <div
                                    className="elementor-element elementor-element-dc76384 elementor-widget elementor-widget-heading"
                                    data-id="dc76384"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Contact us.{" "}
                                      </h2>
                                    </div>
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Contact us.{" "}
                                      </h2>
                                    </div>
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Contact us.{" "}
                                      </h2>
                                    </div>
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Contact us.{" "}
                                      </h2>
                                    </div>
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Contact us.{" "}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-b056267 elementor-widget elementor-widget-html"
                            data-id="b056267"
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
                    className="elementor-section elementor-top-section elementor-element elementor-element-da1a3ed elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                    data-id="da1a3ed"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4dc533e"
                        data-id="4dc533e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-8d1d3c3 elementor-widget elementor-widget-html"
                            data-id="8d1d3c3"
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
                                        required=""
                                      />
                                    </div>
                                    <div className="lname">
                                      <label htmlFor="lname" />
                                      <input
                                        type="text"
                                        placeholder="Last Name*"
                                        name="name"
                                        id="fname_input"
                                        required=""
                                      />
                                    </div>
                                    <div className="lname">
                                      <label htmlFor="Jobt" />
                                      <input
                                        type="text"
                                        placeholder="Job Title*"
                                        name="name"
                                        id="jobt_input"
                                        required=""
                                      />
                                    </div>
                                    <div className="cname">
                                      <label htmlFor="cname" />
                                      <input
                                        type="text"
                                        placeholder="Company Name*"
                                        name="name"
                                        id="name_input"
                                        required=""
                                      />
                                    </div>
                                    <div className="telephone">
                                      <label htmlFor="name" />
                                      <input
                                        type="text"
                                        placeholder="Phone Number*"
                                        name="telephone"
                                        id="telephone_input"
                                        required=""
                                      />
                                    </div>
                                    <div className="email">
                                      <label htmlFor="email" />
                                      <input
                                        type="email"
                                        placeholder="Email Address*"
                                        name="email"
                                        id="email_input"
                                        required=""
                                      />
                                    </div>
                                    <div className="message">
                                      <label htmlFor="message" />
                                      <textarea
                                        name="message"
                                        placeholder="Type Your Message *"
                                        id="message_input"
                                        rows={5}
                                        cols={30}
                                        required=""
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="checkbox"
                                        className="myCheck"
                                        name="test"
                                        required=""
                                      />
                                      I consent to processing of my personal
                                      data entered above for 3li Global to
                                      contact me *
                                    </div>
                                    <div>
                                      <input
                                        type="checkbox"
                                        className="myCheck"
                                        name="test"
                                        required=""
                                      />
                                      I would like to receive details about
                                      products, services and events from 3li
                                      Global
                                    </div>
                                    <div className="myCheck">
                                      <p>
                                        For further details on how you personal
                                        data will be processed and how your
                                        consent can be managed, refer to the 3li
                                        Global Privacy Notice.
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
                                                    "translateX(1.71232px) translateY(39.7983px)"
                                                }}
                                              >
                                                <span>Send</span>
                                              </button>
                                              <div
                                                className="button-wrapper is-movable"
                                                style={{
                                                  transform:
                                                    "translateX(1.41015px) translateY(32.7751px)"
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </main>
                                  </div>
                                </form>
                              </div>
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
  <template id="tp-language" data-tp-language="en_US" />
</>

 
    )
}

export default HubSpot;