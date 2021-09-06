import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { FeaturedProducts } from "@utils/ssr";

import { ProductsFeatured, Slider, } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
import {
  HomePageProducts_categories,
  HomePageProducts_shop,
} from "./gqlTypes/HomePageProducts";

import "./scss/index.scss";

import noPhotoImg from "../../images/no-photo.svg";
import handle from "../../images/handle.jpg";
import handle1 from "../../images/handle1.jpg";
import handle2 from "../../images/handle2.jpg";
import sliderImg from "../../images/slider.png";

const Page: React.FC<{
  categories: HomePageProducts_categories;
  featuredProducts: FeaturedProducts;
  shop: HomePageProducts_shop;
}> = ({ categories, featuredProducts, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

  const clientArray = ["Great quality", "Amazing product", "Clean & modern", "Great design"];
  const sliderImgArray = [handle, handle1, handle2, sliderImg];


  let clientIndex = 0;

  const currentClient = (n) => {
    clientShow(clientIndex = n);
  };

  const clientShow = (n) => {
    let i;
    const slides = document.getElementsByClassName("clientSlides");
    const dots = document.getElementsByClassName("clientDot");
    if (n > slides.length) { clientIndex = 1; }
    if (n < 1) { clientIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display: none");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[clientIndex - 1].setAttribute("style", "display: flex");
    dots[clientIndex - 1].className += " active";
  };

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <Slider />
      <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "New Arrivals" })}
        subTitle={intl.formatMessage({ defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing" })}
      />
      <div style={{ background: "#F6F9FF", padding: "2rem 0" }}>
        <ProductsFeatured
          products={featuredProducts.products}
          title={intl.formatMessage({ defaultMessage: "Most Popular" })}
          subTitle={intl.formatMessage({ defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing" })}
        />
      </div>
      <div className="container">
        <div className="home-page__riban">
          <div>
            <h5>Shop Online</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div>
            <h5>Shop Online</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div>
            <h5>Shop Online</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div>
            <h5>Shop Online</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
      </div>

      <div className="home-page__discount">
        <div style={{ margin: "auto" }}>
          <p>50% off</p>
          <h2>Virtual Reality<br /> HeadsetWhite Headphones</h2>
          <div className="home-page__discount__timeDiv">
            <div>
              <button className="home-page__discount__timeDiv__timeDivButtons">48</button><br />
              <p>Days</p>
            </div>
            <div>
              <button className="home-page__discount__timeDiv__timeDivButtons">20</button><br />
              <p>Hours</p>
            </div>
            <div>
              <button className="home-page__discount__timeDiv__timeDivButtons">14</button><br />
              <p>Minute</p>
            </div>
            <div>
              <button className="home-page__discount__timeDiv__timeDivButtons">4</button><br />
              <p>Seconds</p>
            </div>
          </div>
          <button className="home-page__discount__shop">Shop Now</button>
        </div>
        <div>
          <img src={sliderImg} style={{ width: "100%" }} alt="imgSlider" />
        </div>
      </div>


      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3 style={{ textAlign: "center" }}>
              <FormattedMessage defaultMessage="Popular Categories" />
            </h3>
            <p style={{ textAlign: "center", marginBottom: "3rem" }}>
              <FormattedMessage defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing" />
            </p>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id} className="home-page__categories__list__mainDiv">
                  <Link
                    href={generatePath(paths.category, {
                      slug: category.slug,
                    })}
                    key={category.id}
                  >
                    <a>
                      <div
                        className={classNames(
                          "home-page__categories__list__image",
                          {
                            "home-page__categories__list__image--no-photo": !category.backgroundImage,
                          }
                        )}
                        style={{
                          backgroundImage: `url(${category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                            })`,
                        }}
                      />
                      <h3>{category.name}</h3>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <ProductsFeatured
          products={featuredProducts.products}
          title={intl.formatMessage({ defaultMessage: "Best Seller" })}
          subTitle={intl.formatMessage({ defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing" })}
        />
        <button className="productFeaturedBtn">Discover More</button>
      </div>
      <div className="container" style={{ display: "flex", margin: "6rem auto" }}>
        <div style={{ borderRadius: "15px", margin: "0.5rem", background: "#F1F9FF", padding: "2rem", width: "40%", height: "32rem" }}>
          <h2 style={{ fontWeight: "bold" }}>Product Name</h2>
          <h3 style={{ margin: "1rem 0", fontWeight: "bold" }}>20<sup>%</sup> off </h3>
          <a style={{ fontWeight: "bold" }}>Shop Now</a>
          <img src={sliderImg} style={{ height: "15rem" }} alt="imgSlider" />
        </div>
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", borderRadius: "15px", margin: "0.5rem", background: "#EBF3DE", padding: "2rem", height: "13" }}>
            <div>
              <h2 style={{ fontWeight: "bold" }}>Product Name</h2>
              <h3 style={{ margin: "1rem 0", fontWeight: "bold" }}>20<sup>%</sup> off </h3>
              <a style={{ fontWeight: "bold" }}>Shop Now</a>
            </div>
            <img src={sliderImg} style={{ height: "10rem" }} alt="imgSlider" />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ borderRadius: "15px", margin: "0.5rem", background: "#E1E5E8", padding: "2rem", width: "40%", height: "17rem" }}>
              <h2 style={{ fontWeight: "bold" }}>Product Name</h2>
              <h3 style={{ margin: "1rem 0", fontWeight: "bold" }}>20<sup>%</sup> off </h3>
              <a style={{ fontWeight: "bold" }}>Shop Now</a>
              <img src={sliderImg} style={{ height: "8em" }} alt="imgSlider" />
            </div>
            <div style={{ borderRadius: "15px", margin: "0.5rem", background: "#FDF8E5", padding: "2rem", width: "60%", height: "17rem" }}>
              <h2 style={{ fontWeight: "bold" }}>Product Name</h2>
              <h3 style={{ margin: "1rem 0", fontWeight: "bold" }}>20<sup>%</sup> off </h3>
              <a style={{ fontWeight: "bold" }}>Shop Now</a>
              <img src={sliderImg} style={{ height: "9rem" }} alt="imgSlider" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-client" onLoad={() => clientShow(0)}>
        <div className="container">
          <div className="title">
            <h2 style={{ fontWeight: "bold", fontSize: "2rem", lineHeight: "2" }}>
              <FormattedMessage defaultMessage="Happy Clients" />
            </h2>
            <p style={{ fontSize: "11px" }}>
              <FormattedMessage defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing" />
            </p>
          </div>
          {
            clientArray.map(item => (
              <div className="clientSlides fade" style={{ display: "flex" }}>
                {
                  clientArray.map(item => (
                    <div className="clientCard">
                      <p>4.2 ****</p>
                      <h5 style={{ fontWeight: "bold", margin: "1rem 0" }}>{item}</h5>
                      <p style={{ fontSize: "10px", paddingBottom: "2rem" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Tenetur aspernatur quod voluptatum</p>
                    </div>
                  ))
                }
              </div>
            ))
          }
          <div className="clientDotDiv">
            <span className="clientDot" onClick={() => currentClient(1)} />
            <span className="clientDot" onClick={() => currentClient(2)} />
            <span className="clientDot" onClick={() => currentClient(3)} />
            <span className="clientDot" onClick={() => currentClient(4)} />
          </div>
        </div>
      </div>
      <div className="our-blogs">
        <div className="container">
          <div className="title">
            <h2 style={{ fontWeight: "bold", fontSize: "2rem", lineHeight: "2" }}>
              <FormattedMessage defaultMessage="Read Our Blog" />
            </h2>
            <p style={{ fontSize: "11px" }}>
              <FormattedMessage defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing" />
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {sliderImgArray.slice(0, 3).map(item => (
              <div className="blogCard">
                <img src={item} alt="imgSlider" className="blogImg" />
                <div style={{ display: "flex" }}>
                  <p>Ehab Hafez</p>
                  <p style={{ marginLeft: "1rem" }}>12 Hours ago</p>
                </div>
                <h2 style={{ fontWeight: "bold", margin: "1rem 0" }}>Amazing Clean Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit praesentium quis saepe dolores.
                </p>
                <div style={{ fontSize: "12px", fontWeight: "bold" }}>Read More {" >"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
