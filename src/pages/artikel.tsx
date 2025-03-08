import React, { useEffect, useState } from "react";
import Navbar from "@/components/NavbarFooter/Navbar";
import NextImage from "@/components/NextImage";
import { FiSearch } from "react-icons/fi";
import ArtikelDropdown from "@/components/Dashboard/ArtikelDropdown";
import Link from "next/link";
import Footer from "@/components/NavbarFooter/Footer";
import {Animation} from "@/components/Animation"
import axios from "axios";
import { formatDate } from "@/lib/date";
export default function Artikel() {
  const [ isLoading, setLoading] = useState<boolean>(true)
  const [ blogs, setBlogs ] = useState<any[]>([])
  const [ blog, setBlog ] = useState<any>({})

  const getBlog = async () => {
      const _res = await axios.get("https://api.medselaras.com/api/blog").then((res) => res.data.data.data)
      setBlogs(_res)
      setBlog(_res[0])
  }

  useEffect(() => {
      getBlog().then(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <Navbar />
   
        <div className="w-full min-h-screen bg-white">
        {
          !isLoading && 
          <div>
          <section className="Artikel Hero ">


            <Animation className="flex flex-col bg-white px-5 sm:px-8 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl lg:m-auto"
            >
              <div className="relative mt-7 mb-3">
                <FiSearch className="sm:hidden visible absolute top-2 left-3 text-slate-300" />
                <input
                  className="sm:hidden visible w-full pl-10 text-xs rounded-md p-2 outline font-light outline-1 outline-slate-300"
                  type="text"
                  placeholder="Search"
                />
                <h1 className="hidden sm:block font-semibold pt-5 text-xl lg:text-4xl">
                  Selamat Datang di Halaman Artikel Media Selaras!
                </h1>
              </div>
              <Link href={"/blog/" + blog.slug}>
                <div className="sm:flex pt-10 pb-5 gap-10 cursor-pointer">
                  <div className="sm:w-5/12 w-full h-[200px] sm:h-full m-auto  rounded-2xl overflow-hidden relative">
                    <NextImage
                      className="block sm:hidden"
                      objectFit="cover"
                      src={blog.cover}
                      width="100%"
                      height="100%"
                      layout="fill"
                      alt="medselaras artikel hero"
                    />
                    <NextImage
                      className="hidden sm:block"
                      objectFit="contain"
                      src={blog.cover}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt="medselaras artikel hero"
                    />
                  </div>
                  <div className="sm:w-7/12 hidden sm:flex sm:gap-y-3 sm:flex-col lg:py-4 self-center">
                    <h2 className="text-base sm:text-xs md:text-base lg:text-xl font-extralight text-slate-500 pb-1">
                      { blog.day + ", " + formatDate(blog.date) }
                    </h2>
                    <p className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-10 sm:pb-5 ">
                      { blog.title }
                    </p>
                    <p className="text-base sm:text-xs md:text-base lg:text-lg text-justify">
                      { blog.description }
                    </p>
                  </div>
                </div>
              </Link>
              <hr className="sm:block hidden mt-6" />
            </Animation>
          </section>
          <section className="Artikel Feed">
            <Animation
              className="flex flex-col justify-between pb-4 px-5 sm:px-8 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl lg:m-auto pt-6"
            >
              <div className="flex justify-end sm:justify-between pb-4">
                <div className="hidden sm:block self-center text-xl lg:text-4xl font-semibold">
                  Artikel Feed
                </div>
                <div className="flex justify-end text-xs">
                  <ArtikelDropdown />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 md:gap-11 bg-white mt-3 sm:pt-4 lg:pt-6  sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:m-auto">
                {
                  blogs.map((blogData : any, index : number) => {
                      return  <div key={index} >
                                <Link href={"/blog/" + blogData.slug}>
                                  <div className='flex sm:flex-col sm:justify-center mt-3 sm:mt-0 sm:p-4 sm:outline sm:outline-1 outline-slate-300 rounded-md cursor-pointer'>
                                    <div className='w-[20%] sm:w-full sm:h-[200px] relative rounded-xl overflow-hidden'>
                                        <NextImage className='sm:hidden' src={blogData.cover} width="100%" height="100%" layout="responsive" alt="artikel-medselaras"/>
                                        <NextImage className="hidden sm:block" src={blogData.cover} width="100%" height="100%" layout="responsive" alt="artikel-medselaras"/>
                                    </div>
                                    <div className='w-[80%] sm:w-full flex flex-col justify-between pl-3 sm:pl-0 sm:my-3 sm:gap-2'>
                                        <h1 className='text-sm font-semibold md:text-xl lg:text-2xl'>{blogData.title}</h1>
                                        <p className='text-sm font-extralight sm:order-first md:text-base lg:text-xl'>{blogData.day + ", " + formatDate(blogData.date)}</p>
                                        <p className='hidden sm:block text-gray-500 lg:text-lg'>{blogData.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                  })
                }
              </div>
            </Animation>
          </section>
          </div> 
        }
        </div>
      <Footer />
    </main>
  );
}
