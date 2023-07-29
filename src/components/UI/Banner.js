import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[350px] lg:h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="https://www.ucc.com.bd/image/cache/catalog/Catagory%20Banner/Zotac%20Main%20Banner_W-1080%20Pixel%20x%20H-300%20Pixel-1080x300.jpg.webp"
          alt="banner"
          layout="responsive"
          width="982"
          height="50"
          className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/Daily-content-banner/22inch-monitor-1024x476.webp"
          alt="banner"
          layout="responsive"
          width="982"
          height="50"
          className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://www.cloud.ryanscomputers.com/cdn/sliders/Notice-Design-29-July-2023_1690606258.webp"
          alt="banner"
          layout="responsive"
          width="982"
          height="50"
          className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
