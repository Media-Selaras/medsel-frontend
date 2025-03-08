import Image from 'next/image'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import { useQuill } from 'react-quilljs'
import 'react-quill/dist/quill.snow.css'
import Navbar from '../../components/NavbarFooter/Navbar'
import Footer from '../../components/NavbarFooter/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { formatDate } from "@/lib/date";

export default function BlogDetail() {
    const router = useRouter()
    const { blogSlug } = router.query
    const { quill, quillRef } = useQuill();
    const [ blog, setBlog ] = useState<any>(null)
    const [ blogs, setBlogs ] = useState<any>([])
    const [ isFound, setFound ] = useState<boolean>(true)

    function createMarkup(){
        return {
            __html: blog.content 
        }
    }

    const getBlog = async () => {
        const _res =  await axios.get("https://api.medselaras.com/api/blog/" + blogSlug ).then(res => res.data.data.data[0]).catch((res) => {
            setFound(false);
        })
 
        setBlog(_res)
    }

    const getBlogs = async () => {
        const _res = await axios.get("https://api.medselaras.com/api/blog").then(res => res.data.data.data)
        setBlogs(_res)
    }


    useEffect(() => {
        if(router.isReady) getBlog()
        getBlogs()
    }, [router.isReady])
    
    
    return (
        <>
            <Navbar />
            <div className="bg-white w-screen max-w-full min-h-screen">
                {
                    !isFound &&
                    <div className='flex justify-center items-center h-screen   '>
                        <p className='text-md font-semibold lg:text-xl'>404 Not Found</p>
                    </div>
                }
                {
                blog &&
                <div>
                    <div className='flex justify-center px-8 pt-8 md:px-0'>
                        <div className='relative h-[240px] w-[400px] md:w-full md:h-[500px]'>
                            <Image className='rounded-xl md:rounded-none md:brightness-50' src={blog.cover} layout="fill" objectFit="cover" />
                        </div>
                        {/* <Image className='rounded-lg' src={sampleImage} height="256px" objectFit="cover" /> */}
                    </div>
                    <div className='px-8 py-12 md:px-20'>
                        <div className='text-center'>
                            <h1 className='text-3xl font-semibold'>{blog.title}</h1>
                            <p className='mt-6 text-slate-400'>{blog.day + ", " + formatDate(blog.date)}</p>
                            <p className='text-slate-400'>Creator: {blog.author}</p>
                        </div>
                        <div className='pt-10'>
                            <div dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                        <div className='pt-12'>
                            <div className='flex justify-end '>
                                {/* <p className='text-xl font-semibold lg:text-3xl'>Komentar</p> */}
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineWhatsApp className='self-center mt-1 text-xl' />
                                    <BsFacebook className='self-center mt-1 text-xl' />
                                    <AiOutlineInstagram className='self-center mt-1 text-xl' />
                                    <AiFillTwitterCircle className='self-center mt-1 text-xl' />
                                </div>
                            </div>
                            {/* <div>
                                <div className='flex mt-4'>
                                    <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                                    <div>
                                        <p className='text-xl font-bold'>Annonymous</p>
                                        <p className='text-slate-400'>two hours ago</p>
                                        <p>Wahh menarik bgt nihh infonya</p>
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                                    <div>
                                        <p className='text-xl font-bold'>Annonymous</p>
                                        <p className='text-slate-400'>two hours ago</p>
                                        <p>Wahh menarik bgt nihh infonya</p>
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                                    <div>
                                        <p className='text-xl font-bold'>Annonymous</p>
                                        <p className='text-slate-400'>two hours ago</p>
                                        <p>Wahh menarik bgt nihh infonya</p>
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <CgProfile className='self-center text-slate-600 text-[40px] mr-6' />
                                    <div>
                                        <p className='text-xl font-bold'>Annonymous</p>
                                        <p className='text-slate-400'>two hours ago</p>
                                        <p>Wahh menarik bgt nihh infonya</p>
                                    </div>
                                </div>
                                
                            </div> */}
                        </div>
                        <div className='pt-12 hidden lg:block'>
                            <p className='text-xl font-semibold pb-8 lg:text-3xl'>Artikel terbaru</p>
                            <div className='px-16 grid grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-8 cursor-pointer'>
                            {
                                blogs.map((blog : any, index : number) => {
                                    return  <div className='w-80' key={index} >
                                                <div className='w-80 h-48 relative'>
                                                    <Image src={blog.cover} layout="fill" objectFit="cover" />
                                                </div>
                                                <div>
                                                    <p className='text-slate-400 pt-2'>{blog.day + ", " + blog.date}</p>
                                                    <p className='pt-2 font-semibold text-2xl'>{blog.title}</p>
                                                    <p>{blog.description.slice(0,200)}</p>
                                                </div>
                                            </div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            <Footer />
        </>
    )
}