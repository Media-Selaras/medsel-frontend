import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsSpotify } from "react-icons/bs";z
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/NavbarFooter/Footer";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Animation } from "@/components/Animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";
import { komunitas } from "@/lib/data/homepage";
import axios from "axios";
import { Date } from "@/lib/date";

type Inputs = {
  nama: string;
  email: string;
  pesan: string;
  subjek: string;
};

export default function Landingpage() {
  const [blogs, setBlogs] = useState([]);
  const [instagrams, setInstagrams] = useState([]);
  const [spotifies, setSpotifies] = useState<any[]>([]);
  const { register, handleSubmit, getValues } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    const url = `mailto:Techmediaselaras@gmail.com?subject=${getValues(
      "subjek"
    )}&body=${getValues("pesan")}`;
    window.open(url, "_blank");
  };

  const getBlog = async () => {
    const _res = await axios
      .get("https://api.medselaras.com/api/blog")
      .then((res) => res.data.data.data);
    const covers = _res.map(
      (artikel: {
        day: any;
        cover: any;
        slug: any;
        date: any;
        title: any;
        description: any;
      }) => {
        return {
          image: artikel.cover,
          link: "/blog/" + artikel.slug,
          title: artikel.title,
          date: Date(artikel.date),
          description: artikel.description,
          day : artikel.day
        };
      }
    );
    console.log(covers);
    setBlogs(covers);
  };

  const getInstagram = async () => {
    const _res = await axios
      .get("https://api.medselaras.com/api/instagram")
      .then((res) => res.data.data.data);
    const covers = _res.map((ig: { imageUrl: any; url: any }) => {
      return {
        image: ig.imageUrl,
        link: ig.url,
      };
    });
    setInstagrams(covers);
  };

  const getSpotify = async () => {
    const _res = await axios
      .get("https://api.medselaras.com/api/spotify")
      .then((res) => res.data.data.data);
    setSpotifies(_res);
  };

  useEffect(() => {
    getBlog();
    getInstagram();
    getSpotify();
  }, []);

  return (
    <Layout>
      <main>
        <Navbar />
        <div className="w-full min-h-screen bg-white overflow-hidden">
          <section className="Landing Page">
            <Animation className="flex sm:flex-row flex-col m-auto  lg:max-w-7xl lg:gap-14 p-7 lg:p-7">
              <div className="self-center ">
                <h1 className="font-bold lg:text-5xl text-3xl lg:leading-snug">
                  Wadah pengedukasian konten kreatif terkait isu-isu sosial
                </h1>
                <p className="py-4 lg:text-2xl  text-base">
                  Komunitas yang memberikan edukasi mengenai pendidikan,
                  ekonomi, environment, kesehatan serta pemberdayaan masyarakat
                </p>
                <Link href="/struktur-komunitas">
                  <div className="cursor-pointer inline-flex py-3 px-8 text-sm md:text-base mt-4 rounded-2xl text-white bg-[#E77E49]">
                    Kunjungi
                  </div>
                </Link>
              </div>
              <div className="flex lg:w-1/2 w-full mx-auto justify-center">
                <div className="w-[400px] self-center  sm:w-[300px] md:w-[400px] lg:w-[620px]">
                  <NextImage
                    src="/img/landingpage/landingpage.png"
                    height="100%"
                    width="100%"
                    layout="responsive"
                    alt="landingpage"
                    objectFit="contain"
                  />
                </div>
              </div>
            </Animation>
          </section>
          <section className="Komunitas">
            <Animation className="lg:py-16 flex max-w-7xl flex-col m-auto lg:px-14 p-7">
              <h1 className="sm:text-center md:text-3xl text-xl w-3/4 sm:w-full pb-10 font-bold lg:pb-6">
                Komunitas yang telah berkolaborasi dengan Media Selaras
              </h1>
              <div className="grid sm:grid-cols-7   grid-cols-2 gap-6 text-center ">
                {komunitas.map(({ src }, index) => (
                  <NextImage
                    key={index}
                    height="50%"
                    width="100%"
                    src={src}
                    alt="landingpage"
                  />
                ))}
              </div>
              <h3 className="text-center sm:text-base text-lg py-8 text-gray-400">
                dan 50+ lainnya
              </h3>
            </Animation>
          </section>
          <section className="Tentang Medsel">
            <Animation className="relative w-full">
              <div className="flex flex-row items-start m-auto max-w-7xl">
                <NextImage
                  src="/img/landingpage/bg-tentangmedsel.png"
                  height="80%"
                  width="100%"
                  alt="medsel-welcome-party"
                  layout="fill"
                  objectFit="fill"
                />
                <div className="lg:w-1/2 lg:flex hidden">
                  <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[623px] px-20 m-auto">
                    <NextImage
                      src="/img/landingpage/tentangmedsel.png"
                      height="100%"
                      width="100%"
                      alt="medsel-welcome-party"
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="z-10 lg:mr-12 p-7 lg:p-0 self-center max-w-7xl">
                  <div className="bg-white outline-slate-600 xl:outline-gray-200 rounded-3xl lg:rounded-lg outline outline-1 p-10">
                    <h1 className="font-bold lg:text-4xl text-xl pb-4">
                      Tentang Medsel
                    </h1>
                    <p className="lg:text-xl text-base leading-8 font-light pb-2">
                      Media Selaras sebagai suatu Wadah pengedukasian konten
                      kreatif terkait isu isu sosial (Pendidikan, Ekonomi,
                      Environment, dan Kesehatan) serta pemberdayaan masyarakat
                      yang lebih membutuhkan melalui penggalangan dana berupa
                      uang dan barang.
                    </p>
                    <Link href="/tentang-medsel">
                      <div className="bg-[#E77E49] cursor-pointer inline-flex py-4 px-8 mt-4 rounded-3xl text-white text-sm">
                        Read More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Animation>
          </section>
          <section className="Media Selaras Podcast">
            <Animation className="w-full flex gap-14  lg:max-w-7xl m-auto justify-center md:pt-10 lg:pt-14 sm:p-7 ">
              <div className="md:w-2/5 w-full m-auto lg:py-7 sm:p-7 py-2 sm:py-0 px-7 ">
                <h1 className="lg:text-4xl text-xl font-bold pb-4 leading-normal">
                  Media Selaras Podcast (Suara Selaras)
                </h1>
                <p className="lg:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati laudantium deserunt unde corporis culpa voluptatum
                  minus ex consequuntur suscipit id in nam esse libero nostrum
                </p>
                <Link
                  href="https://open.spotify.com/show/3ryqxrMgIF6rpfRIAgdevh?si=053f87febf68435a"
                  target="_blank"
                >
                  <div className="mt-5 p-3 rounded-2xl justify-center bg-black flex flex-row lg:inline-flex gap-2 cursor-pointer">
                    <BsSpotify className="text-green-400  bg-white rounded-2xl self-center" />
                    <p className="text-white font-bold text-base">
                      Dengarkan Sekarang di Spotify
                    </p>
                  </div>
                </Link>
              </div>

              <div className="sm:w-3/5 md:flex gap-8 hidden">
                {spotifies[0] && (
                  <div className="py-5 px-4 outline outline-1 outline-slate-300 rounded-md max-w-xs mx-auto">
                    <div className="rounded-lg overflow-hidden">
                      <NextImage
                        alt="/"
                        layout="responsive"
                        height="100%"
                        width="100%"
                        src={spotifies[0].imageUrl}
                      />
                    </div>
                    <div className="pt-5">
                      <h1 className="font-bold text-sm lg:text-base">
                        {spotifies[0].title}
                      </h1>
                      <p className="py-2 font-thin text-sm lg:text-base">
                        {spotifies[0].description.slice(0, 200)}
                      </p>
                    </div>
                  </div>
                )}
                {spotifies[1] && (
                  <div className="pt-5 px-4 outline outline-1 outline-slate-300 rounded-md max-w-xs mx-auto">
                    <div className="rounded-lg overflow-hidden">
                      <NextImage
                        layout="responsive"
                        alt="/"
                        height="25%"
                        width="30%"
                        src={spotifies[1].imageUrl}
                      />
                    </div>
                    <div className="pt-4">
                      <h1 className="font-bold text-sm lg:text-base ">
                        {spotifies[1].title}
                      </h1>
                      <p className="pt-2 font-thin text-sm lg:text-base">
                        {spotifies[1].description.slice(0, 200)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Animation>
          </section>
          <section className="Kontak">
            <Animation className="flex w-full max-w-7xl m-auto lg:pt-14 p-7">
              <div className="lg:w-1/2 lg:basis-1/2 w-full">
                <div className="lg:mt-20 mt-10">
                  <h1 className="lg:text-4xl text-xl font-bold">Kontak</h1>
                  <h3 className="lg:text-2xl text-base pt-2">
                    ingin berkolaborasi dengan media selaras?
                  </h3>
                </div>
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col pt-6"
                  >
                    <label
                      htmlFor="nama"
                      className="lg:text-2xl text-base pb-2"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      {...register("nama")}
                      placeholder="Masukkan Nama"
                      className="rounded-md p-3 outline outline-1 outline-slate-400"
                      id="nama"
                    />
                    <label
                      htmlFor="email"
                      className="pt-4 lg:text-2xl text-base pb-2"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      {...register("email")}
                      placeholder="Masukkan Email"
                      className="rounded-md p-3 outline outline-1 outline-slate-400"
                      id="email"
                    />
                    <label
                      htmlFor="subjek"
                      className="pt-4 lg:text-2xl text-base pb-2"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      {...register("subjek")}
                      className="p-3 rounded-md outline outline-1 outline-slate-400"
                      id="subjek"
                      placeholder="Masukkan Subjek"
                    />
                    <label
                      htmlFor="isi-pesan"
                      className="pt-4 lg:text-2xl text-base pb-2"
                    >
                      Isi Pesan
                    </label>
                    <textarea
                      id="isi-pesan"
                      {...register("pesan")}
                      className="p-3 rounded-md outline outline-1 outline-slate-400"
                      placeholder="Masukkan Pesan"
                      rows={8}
                    ></textarea>
                    <div className="flex justify-end">
                      <button
                        value="Send"
                        type="submit"
                        className=" bg-[#E77E49] py-3 px-9 rounded-2xl text-white mt-8"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block hidden basis-1/2 self-center">
                <NextImage
                  src="/img/landingpage/kontak.png"
                  height="80%"
                  width="100%"
                  alt="medsel-kontak"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </Animation>
            <Footer />
          </section>
        </div>
      </main>
    </Layout>
  );
}
