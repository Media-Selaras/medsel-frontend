import React from "react";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Footer from "@/components/NavbarFooter/Footer";
import "swiper/css/pagination";
import {
  founder,
  executive,
  partnership,
  creative,
} from "@/lib/data/stuktur-komunitas";
import { Animation } from "@/components/Animation";

function strukturKomunitas() {
  return (
    <Layout>
      <main>
        <Navbar />
        <section>
          <Animation className="min-h-screen flex justify-center relative">
            <div className="text-center self-center z-50">
              <h1 className="font-semibold text-white text-4xl max-w-sm md:max-w-5xl lg:text-6xl px-6 leading-[48px]">
                Struktur Komunitas Batch 5
              </h1>
              <p className="font-semibold text-white lg:text-5xl lg:pt-12 text-3xl pt-10">
                Media Selaras 2025
              </p>
            </div>
            <NextImage
              src="/img/komunitas/komunitas.png"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt="komunitas"
              priority
              className="md:hidden"
            />
            <NextImage
              src="/img/komunitas/komunitas1.png"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt="komunitas"
              priority
            />
          </Animation>
          <Animation className="m-auto px-7 overflow-hidden">
            <div className="w-fit mx-auto font-bold text-3xl md:text-4xl lg:pb-8 text-center pt-8 pb-4 relative">
              Core Management
              <div className="absolute w-14 -left-7 bottom-3 -z-10 ">
                <NextImage
                  src="/img/komunitas/asset2.png"
                  width="75%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="executive flex mx-w-7xl md:hidden"
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {founder.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-full max-w-[300px]">
                        <NextImage
                          layout="responsive"
                          src={src}
                          height="100%"
                          width="90%"
                          alt={alt}
                        />
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="justify-center gap-x-4 hidden md:flex">
                {founder.map(({ src, nama, jabatan, alt }, index) => (
                  <div className="w-full h-full max-w-[300px]" key={index}>
                    <NextImage
                      layout="responsive"
                      src={src}
                      height="100%"
                      width="90%"
                      alt={alt}
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
          <Animation className="overflow-hidden p-7">
            <div className="w-fit mx-auto font-bold text-3xl md:text-4xl lg:pb-8 text-center pt-8 pb-4 relative">
              Project Management
              <div className="w-14 absolute -right-2 bottom-12 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="executive flex mx-w-7xl md:hidden"
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {executive.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-full max-w-[300px]">
                        <NextImage
                          layout="responsive"
                          src={src}
                          height="100%"
                          width="90%"
                          alt={alt}
                        />
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="justify-center gap-x-4 hidden md:flex">
                {executive.map(({ src, nama, jabatan, alt }, index) => (
                  <div className="w-full h-full max-w-[300px]" key={index}>
                    <NextImage
                      layout="responsive"
                      src={src}
                      height="100%"
                      width="90%"
                      alt={alt}
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
          <Animation className="overflow-hidden p-7">
            <div className="w-fit mx-auto font-bold text-3xl md:text-4xl lg:pb-8 text-center pt-8 pb-4 relative">
              Project Management
              <div className="w-14 absolute -right-2 bottom-12 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="executive flex mx-w-7xl md:hidden"
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {partnership.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-full max-w-[300px]">
                        <NextImage
                          layout="responsive"
                          src={src}
                          height="100%"
                          width="90%"
                          alt={alt}
                        />
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="justify-center gap-x-4 hidden md:flex">
                {partnership.map(({ src, nama, jabatan, alt }, index) => (
                  <div className="w-full h-full max-w-[300px]" key={index}>
                    <NextImage
                      layout="responsive"
                      src={src}
                      height="100%"
                      width="90%"
                      alt={alt}
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
          <Animation className="overflow-hidden p-7">
            <div className="w-fit mx-auto font-bold text-3xl md:text-4xl lg:pb-8 text-center pt-8 pb-4 relative">
              Creative
              <div className="w-14 absolute -right-2 bottom-12 -z-10">
                <NextImage
                  src="/img/komunitas/asset3.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay]}
                className="executive flex mx-w-7xl md:hidden"
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {creative.map(({ src, nama, jabatan, alt }, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full h-full max-w-[300px]">
                        <NextImage
                          layout="responsive"
                          src={src}
                          height="100%"
                          width="90%"
                          alt={alt}
                        />
                        <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                        <p className="text-base">{jabatan}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="justify-center gap-x-4 hidden md:flex">
                {creative.map(({ src, nama, jabatan, alt }, index) => (
                  <div className="w-full h-full max-w-[300px]" key={index}>
                    <NextImage
                      layout="responsive"
                      src={src}
                      height="100%"
                      width="90%"
                      alt={alt}
                    />
                    <h1 className="font-bold text-lg pt-6 pb-2">{nama}</h1>
                    <p className="text-base">{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
        </section>
        <Footer />
      </main>
    </Layout>
  );
}

export default strukturKomunitas;