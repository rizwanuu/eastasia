import * as React from "react";

import handle from "../../images/handle.jpg";
import handle1 from "../../images/handle1.jpg";
import handle2 from "../../images/handle2.jpg";
import slider from "../../images/slider.png";

import "./scss/index.scss";


let sliderImgArray = [handle, handle1, handle2, slider];
let slideIndex = 0;

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style", "display: none");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].setAttribute("style", "display: flex");
    dots[slideIndex - 1].className += " active";
};

export const Slider: React.FC<any> = ({

}) =>
    <>
        <div className="slideshow-container" onLoad={() => showSlides(0)}>
            {
                sliderImgArray.map(item => (
                    <div className="mySlides fade">
                        <div className="section1">
                            <p>up to 5% off available</p>
                            <h1 className="section1H2">wireless white Headphones plain</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate non explicabo, dicta tempora repellat quae voluptas
                                odio repellendus nostrum.
                            </p>
                            <button className="section1ShopBtn">Shop Now</button>
                            <button className="section1SaveBtn">Save for later use</button>
                        </div>
                        <div className="section2">
                            <img src={item} alt="imgSlider" className="SliderImage" />
                        </div>
                    </div>
                ))
            }
            {/* <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
        <button className="next" onClick={() => plusSlides(1)}>&#10095;</button> */}
        </div><br />
        <div className="dotDiv">
            <span className="dot" onClick={() => currentSlide(1)} />
            <span className="dot" onClick={() => currentSlide(2)} />
            <span className="dot" onClick={() => currentSlide(3)} />
            <span className="dot" onClick={() => currentSlide(4)} />
        </div>
    </>