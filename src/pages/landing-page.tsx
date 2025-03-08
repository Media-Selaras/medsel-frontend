import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsSpotify } from "react-icons/bs";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/NavbarFooter/Footer";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { Animation } from "@/components/Animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";
import { komunitas } from "@/lib/data/homepage";
import axios from "axios";
import { formatDate } from "@/lib/date"; // Assuming 'formatDate' is defined in "@/lib/date"

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
  const [events, setEvents] = useState<any[]>([]);
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
          date: formatDate(artikel.date),
          description: artikel.description,
          day: artikel.day,
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

  const getEvents = async () => {
    const _res = await axios
      .get("https://api.medselaras.com/api/events")
      .then((res) => res.data.data.data);
    setEvents(_res);
  };

  useEffect(() => {
    getBlog();
    getInstagram();
    getSpotify();
    getEvents();
  }, []);

  const calculateTimeLeft = (date: string) => {
    const difference = new Date(date).getTime() - new Date().getTime();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <Layout>
      <main>
        <Navbar />
        <div className="w-full min-h-screen bg-white overflow-hidden">
          {/* Carousel Wadah Pengedukasian */}
            <section className="Landing Page">
            <div
              className="w-full h-screen flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/img/Medsel3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#FFFF", // Changed text color to orange
              borderRadius: "0px 0px 150px 150px", // Added border radius
              }}
            >
              <h1 className="font-bold lg:text-5xl text-3xl lg:leading-snug">
              Selamat Datang di Official Website
              </h1>
              <h2 className="font-bold lg:text-4xl text-2xl mt-4">
              MEDIA SELARAS 2025
              </h2>
              <div className="flex mt-8">
              <button className="bg-[#40005c] text-white px-6 py-3 rounded-md mr-4">
                AKTIVITAS KOMUNITAS
              </button>
              <button className="bg-[#40005c] text-white px-6 py-3 rounded-md">
                PARTNERSHIP/COLLABORATION
              </button>
              </div>
            </div>
            </section>

            <section className="Komunitas">
            <Animation className="lg:py-16 flex max-w-7xl flex-col m-auto lg:px-14 p-7">
              <h1 className="sm:text-center md:text-3xl text-xl w-3/4 sm:w-full pb-10 font-bold lg:pb-6">
              Komunitas yang telah berkolaborasi dengan Media Selaras
              </h1>
              <div className="grid sm:grid-cols-7 grid-cols-2 gap-6 text-center ">
              {komunitas.map(({ src, name }, index) => (
              <div key={index} className="relative group">
              <NextImage
                height="50%"
                width="100%"
                src={src}
                alt="landingpage"
                className="cursor-pointer group-hover:opacity-75 transition-opacity duration-300"
                onClick={() => alert(`Komunitas: ${name}`)}
              />
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">{name}</span>
              </div>
              </div>
              ))}
              </div>
              <h3 className="text-center sm:text-base text-lg py-8 text-orange-500 font-bold">
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

          <section className="Events py-10">
            <h1 className="text-center text-3xl font-bold pb-6">Daftar Event</h1>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 text-center">
              {events.map((event, index) => {
                const countdown = calculateTimeLeft(event.date);

                return (
                  <div
                    key={index}
                    className="p-4 border rounded-lg shadow-md bg-white"
                  >
                    <NextImage
                      src={event.imageUrl}
                      height="100%"
                      width="100%"
                      layout="responsive"
                      alt={event.title}
                      objectFit="cover"
                    />
                    <h2 className="font-bold text-xl mt-4">{event.title}</h2>
                    <p className="text-gray-600">{event.description}</p>
                    <p
                      className={`mt-4 font-bold ${
                        countdown.days === 0 &&
                        countdown.hours === 0 &&
                        countdown.minutes === 0 &&
                        countdown.seconds === 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {`${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="Media Selaras Podcast">
            <Animation className="w-full flex gap-14 lg:max-w-7xl m-auto justify-center md:pt-10 lg:pt-14 sm:p-7 ">
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
                    <BsSpotify className="text-green-400 bg-white rounded-2xl self-center" />
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
          </section>
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
