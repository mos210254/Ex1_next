"use client"
import { context } from "@opentelemetry/api"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import "../styles/globals.css"
const img_data = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
    alt: "Customer Experience",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp",
    alt: "Customer Support",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp",
    alt: `Technical Customer Support`,
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp",
    alt: "Content Moderation",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp",
    alt: "Data Processing",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp",
    alt: "Finance & Accounting",
    width: 1200,
    height: 630,
  },
]
const img_data2 = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg",
    alt: "Project Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg",
    alt: "Project Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg",
    alt: "Project Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg",
    alt: "Project Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg",
    alt: "Project Logo",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg",
    alt: "Project Logo",
  },
]
const outher1 = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg",
    alt: "Project Logo",
    h2: "Customer Support",
    p: "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
    text_end: "Explore Customer Support",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg",
    alt: "Customer Experience",
    h2: "Customer Experience",
    p: "Enhance every stage of your customer journey and scale confidently — from a single touchpoint to the entire lifecycle.",
    text_end: "Explore Customer Experience",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg",
    alt: "Customer Experience",
    h2: "Technical Customer Support",
    p: "Outsource dedicated experts on your business to answer customer questions.",
    text_end: "Explore Technical Customer Support",
  },
]
const outher2 = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0ca966ce478f_icons%3DPencil.svg",
    alt: "Project Logo",
    h2: "Customer Support",
    p: "Build a thriving online presence with a team specially trained to uphold your community standards.",
    text_end: "Explore Content Moderation",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1b4ace4778_icons%3DData%20Processing.svg",
    alt: "Customer Experience",
    h2: "Data Processing",
    p: "Receive analyzed data, specific to how you need it interpreted and presented. ",
    text_end: "Explore Customer Experience",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761c9_66a94bdb23f9b933553ccdb1_Untitled%2520design%2520(40)%2520(1).png",
    alt: "Customer Experience",
    h2: "Finance & Accounting",
    p: "Streamline your financial operations with expert accounting and bookkeeping services.",
    text_end: "Explore Finance & Accounting",
  },
]
const images = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man.webp",
    alt: "Image 1",
    bgimg: "bg-[#B8BAB3]",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp",
    alt: "Image 2",
    bgimg: "bg-[#F7E1D2]",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman.webp",
    alt: "Image 3",
    bgimg: "bg-[#B8BAB3]",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%20Illustrations__Laptop.webp",
    alt: "Image 4",
    bgimg: "bg-[#F7E1D2]",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%202.webp",
    alt: "Image 5",
    bgimg: "bg-[#B8BAB3]",
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp",
    alt: "Image 6",
    bgimg: "bg-[#F7E1D2]",
  },
]
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // เวลา delay ระหว่างแต่ละช่อง
    },
  },
}
export default function HomePage() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("management") // กำหนดค่าเริ่มต้นของแท็บ
  const [checkedItems, setCheckedItems] = useState([false, false, false])
  const [open_menu1, setOpenMenu1] = useState(false) // ใช้สำหรับเปิดเมนู
  const menuRef = useRef<HTMLDivElement | null>(null) // ใช้ ref เดียวกัน
  const [menuWidth, setMenuWidth] = useState(0)
  const navRef = useRef<HTMLElement | null>(null) // ✅ กำหนด type

  useEffect(() => {
    if (navRef.current) {
      setMenuWidth(navRef.current.offsetWidth)
    }
  }, [isSticky])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const ref1 = useRef(null) // อ้างอิง div แรก
  const ref2 = useRef(null) // อ้างอิง div ที่สอง
  const ref3 = useRef(null) // อ้างอิง div สาม
  const ref4 = useRef(null) // อ้างอิง div สาม
  const ref5 = useRef(null) // อ้างอิง div สาม

  const inView1 = useInView(ref1, { once: true, margin: "-100px" }) // ตรวจจับ div แรก
  const inView2 = useInView(ref2, { once: true, margin: "-100px" }) // ตรวจจับ div ที่สอง
  const inView3 = useInView(ref3, { once: true, margin: "-100px" }) // ตรวจ div สาม
  const inView4 = useInView(ref4, { once: true, margin: "-100px" }) // ตรวจ div สาม
  const inView5 = useInView(ref5, { once: true, margin: "-100px" }) // ตรวจ div สาม

  const controls1 = useAnimation() // Animation สำหรับ div แรก
  const controls2 = useAnimation() // Animation สำหรับ div ที่สอง
  const controls3 = useAnimation() // Animation สำหรับ div สาม
  const controls4 = useAnimation() // Animation สำหรับ div 4
  const controls5 = useAnimation() // Animation สำหรับ div 5

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 }) // เริ่ม animation สำหรับ div แรก
    }
  }, [inView1, controls1])

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 }) // เริ่ม animation สำหรับ div ที่สอง
    }
  }, [inView2, controls2])
  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 }) // เริ่ม animation สำหรับ div สาม
    }
  }, [inView3, controls3])
  useEffect(() => {
    if (inView4) {
      controls4.start("visible") // เริ่ม animation สำหรับ div แรก
    }
  }, [inView4, controls4])

  useEffect(() => {
    if (inView5) {
      controls5.start("visible") // เริ่ม animation สำหรับ div ที่สอง
    }
  }, [inView5, controls5])
  function getImagePositionClass(index: number): string {
    const positions = [
      "top-0 left-0",
      "top-0 right-0",
      "top-1/2 left-1/4",
      "top-1/2 right-0",
      "bottom-0 left-0",
      "bottom-0 right-1/4",
    ]
    return positions[index] || "top-0 left-0"
  }
  const handleCheckboxChange = (index: number) => {
    const updatedItems = [...checkedItems]
    updatedItems[index] = !updatedItems[index] // เปลี่ยนสถานะของ checkbox ที่ถูกคลิก
    setCheckedItems(updatedItems)
  }

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false)
  const [isSubmenuOpen3, setIsSubmenuOpen3] = useState(false)

  let timeout: NodeJS.Timeout

  const handleMouseEnter = () => {
    setIsSubmenuOpen2(false)
    setIsSubmenuOpen3(false)
    clearTimeout(timeout) // ยกเลิกการซ่อนเมนูย่อย
    setIsSubmenuOpen(true) // เปิดเมนูย่อย
  }

  const handleMouseLeave = () => {
    setIsSubmenuOpen2(false)
    setIsSubmenuOpen3(false)
    timeout = setTimeout(() => {
      setIsSubmenuOpen(false) // ซ่อนเมนูย่อยหลังจากหน่วงเวลา
    }, 200) // หน่วงเวลา 200ms
  }
  const handleMouseEnter2 = () => {
    setIsSubmenuOpen(false)
    setIsSubmenuOpen3(false)
    clearTimeout(timeout) // ยกการซ่อนย่อย
    setIsSubmenuOpen2(true) // เปิดย่อย
  }

  const handleMouseLeave2 = () => {
    setIsSubmenuOpen(false)
    setIsSubmenuOpen3(false)
    timeout = setTimeout(() => {
      setIsSubmenuOpen2(false) // ซ่อนย่อยหน่วงเวลา
    }, 200) // หน่วงเวลา 200ms
  }

  const handleMouseEnter3 = () => {
    setIsSubmenuOpen(false)
    setIsSubmenuOpen2(false)
    clearTimeout(timeout) // ยกการซ่อนย่อย
    setIsSubmenuOpen3(true) // เปิดย่อย
  }

  const handleMouseLeave3 = () => {
    setIsSubmenuOpen(false)
    setIsSubmenuOpen2(false)
    timeout = setTimeout(() => {
      setIsSubmenuOpen3(false) // ซ่อนย่อยหน่วงเวลา
    }, 200) // หน่วงเวลา 200ms
  }
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-[#f7e1d2]">
      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 pt-[1.5rem]`}>
        <div className={`mx-auto flex items-center justify-between px-[7.5vw] py-4 transition-all duration-300`}>
          <Link
            href="/"
            className={`z-50 flex items-center transition-all duration-300 ${isSticky ? "invisible" : "flex"}`}
          >
            <Image
              src="https://ext.same-assets.com/1779142936/3292783992.svg"
              alt="Support Ninja | Full Logo"
              width={192}
              height={40}
              priority
              className="w-[12rem]"
            />
          </Link>
          <nav
            ref={navRef}
            className={`hidden space-x-8 lg:flex ${
              isSticky ? "rounded-[200px] border-1 bg-white px-[2rem] py-[.75rem]" : ""
            }`}
          >
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {/* เมนูหลัก */}
              <div className="text-ninja-dark flex cursor-pointer items-center gap-2 font-bold">
                Solutions
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-300 ${isSubmenuOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>

              {/* เมนูย่อย */}
              {isSubmenuOpen && (
                <motion.div
                  className={`absolute top-[3rem] left-0 z-50 rounded-[15px] bg-white px-[2rem] py-[.75rem] shadow-lg ${
                    isSticky ? "left-[-2rem]" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }} // เริ่มต้นด้วยความโปร่งใส 0 และเลื่อนขึ้น
                  animate={{ opacity: 1, y: 0 }} // เมื่อแสดงผลจะโปร่งใส 1 และเลื่อนลง
                  exit={{ opacity: 0, y: -10 }} // เมื่อซ่อนจะกลับไปโปร่งใส 0 และเลื่อนขึ้น
                  transition={{ duration: 0.3 }} // ตั้งค่าความเร็วของอนิเมชัน
                  style={{ width: menuWidth + 100 }} // กำหนดความกว้างของเมนูย่อยให้เท่ากับเมนูหลัก
                >
                  <div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2">
                    {/* ส่วนที่ 1 */}
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                        {" "}
                        <img
                          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1500ce4734_icons%3DCustomer%20Service.svg"
                          alt=""
                        />
                        Customer Service
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span>Customer Conversion</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Customer Onboarding</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Customer Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Technical Customer Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Customer Renewals</span>
                        </li>
                      </ul>
                    </div>

                    {/* ส่วนที่ 2 */}
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span>Finance & Accounting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Content Moderation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>Data Processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
              {/* เมนูหลัก */}
              <div className="text-ninja-dark flex cursor-pointer items-center gap-2 font-bold">
                Industries
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg "
                  className={`transition-all duration-300 ${isSubmenuOpen2 ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>

              {/* เมนูย่อยที่ 2 */}
              {isSubmenuOpen2 && (
                <motion.div
                  className={`absolute top-[3rem] left-[-20rem] z-50 rounded-[15px] bg-white px-[2rem] py-[.75rem] shadow-lg ${
                    isSticky ? "left-[-21rem]" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: menuWidth + 400 }}
                >
                  {/* ส่วนที่ 2 */}
                  <div className="grid grid-cols-3 gap-x-10 gap-y-4 p-10">
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      SaaS
                    </div>
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      AI
                    </div>
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      Ecommerce
                    </div>
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      Healthcare
                    </div>
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      Supply Chain & Logistics
                    </div>
                    <div className="cursor-pointer rounded-md p-2 px-[1.5rem] pt-[1rem] pb-[3px] font-bold transition hover:bg-[#bfc1b9] hover:shadow-2xl">
                      Fintech
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <a href="#how-it-works" className="text-ninja-dark font-bold">
              How it Works
            </a>
            <div className="relative" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
              {/* เมนูหลัก */}
              <div className="text-ninja-dark flex cursor-pointer items-center gap-2 font-bold">
                About
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-100 ${isSubmenuOpen3 ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>

              {/* เมนูย่อยที่ 2 */}
              {isSubmenuOpen3 && (
                <motion.div
                  className={`absolute top-[3rem] left-[-3rem] z-50 w-[15rem] rounded-[15px] bg-white px-[2rem] py-[.75rem] shadow-lg ${
                    isSticky ? "left-[-21rem]" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* ส่วนที่ 2 */}
                  <div className="grid gap-x-10 gap-y-4 p-2">
                    <div className="] cursor-pointer rounded-md font-bold hover:shadow-2xl">About us</div>
                    <hr />
                    <div className="] cursor-pointer rounded-md font-bold hover:shadow-2xl">Careers</div>
                  </div>
                </motion.div>
              )}
            </div>
            <a href="#resources" className="text-ninja-dark font-bold">
              Resources
            </a>
          </nav>
          <div className="lg:hidden">
            {/* ปุ่ม Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // เปลี่ยนไอคอนเมื่อเปิด/ปิด
                />
              </svg>
            </button>

            {/* เมนู */}
            {isOpen && (
              <div className="absolute top-0 left-0 min-h-[100vh] w-full bg-white shadow-lg">
                <ul className="flex max-h-[80vh] flex-col space-y-4 overflow-y-auto px-[2rem] pt-[10rem]">
                  {/* Solutions */}
                  <li>
                    <a href="#solutions" className="hover:text-ninja-red font-bold text-gray-700">
                      Solutions
                    </a>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <a href="#customer-experience" className="hover:text-ninja-red text-gray-600">
                          Customer Experience
                        </a>
                      </li>
                      <li>
                        <a href="#customer-conversion" className="hover:text-ninja-red text-gray-600">
                          Customer Conversion
                        </a>
                      </li>
                      <li>
                        <a href="#customer-onboarding" className="hover:text-ninja-red text-gray-600">
                          Customer Onboarding
                        </a>
                      </li>
                      <li>
                        <a href="#customer-support" className="hover:text-ninja-red text-gray-600">
                          Customer Support
                        </a>
                      </li>
                      <li>
                        <a href="#technical-customer-support" className="hover:text-ninja-red text-gray-600">
                          Technical Customer Support
                        </a>
                      </li>
                      <li>
                        <a href="#customer-renewals" className="hover:text-ninja-red text-gray-600">
                          Customer Renewals
                        </a>
                      </li>
                      <li>
                        <a href="#content-moderation" className="hover:text-ninja-red text-gray-600">
                          Content Moderation
                        </a>
                      </li>
                      <li>
                        <a href="#data-processing" className="hover:text-ninja-red text-gray-600">
                          Data Processing
                        </a>
                      </li>
                      <li>
                        <a href="#finance-accounting" className="hover:text-ninja-red text-gray-600">
                          Finance & Accounting
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Industries */}
                  <li>
                    <a href="#industries" className="hover:text-ninja-red font-bold text-gray-700">
                      Industries
                    </a>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <a href="#supply-chain-logistics" className="hover:text-ninja-red text-gray-600">
                          Supply Chain & Logistics
                        </a>
                      </li>
                      <li>
                        <a href="#fintech" className="hover:text-ninja-red text-gray-600">
                          Fintech
                        </a>
                      </li>
                      <li>
                        <a href="#healthcare" className="hover:text-ninja-red text-gray-600">
                          Healthcare
                        </a>
                      </li>
                      <li>
                        <a href="#ecommerce" className="hover:text-ninja-red text-gray-600">
                          Ecommerce
                        </a>
                      </li>
                      <li>
                        <a href="#saas" className="hover:text-ninja-red text-gray-600">
                          SaaS
                        </a>
                      </li>
                      <li>
                        <a href="#ai" className="hover:text-ninja-red text-gray-600">
                          AI
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* How it Works */}
                  <li>
                    <a href="#how-it-works" className="hover:text-ninja-red font-bold text-gray-700">
                      How it Works
                    </a>
                  </li>

                  {/* About */}
                  <li>
                    <a href="#about" className="hover:text-ninja-red font-bold text-gray-700">
                      About us
                    </a>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <a href="#careers" className="hover:text-ninja-red text-gray-600">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Resources */}
                  <li>
                    <a href="#resources" className="hover:text-ninja-red font-bold text-gray-700">
                      Resources
                    </a>
                  </li>
                  <Link
                    href="/get-started"
                    className="bg-ninja-red hover:bg-ninja-red/90 inline-flex w-[100%] items-center justify-between rounded-full px-6 py-3 font-serif text-lg font-normal text-white lg:w-auto lg:justify-between"
                  >
                    <p className="f_header">Get started</p>
                    <span className="text-ninja-red ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/get-started"
              className="rounded-full border border-[#0c3a23] bg-[#0c3a23] px-[1.8rem] py-[.8rem] text-[1rem] font-semibold text-white transition-all hover:bg-[#0c3a2300] hover:text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      {/* Sticky Menu */}
      {/* {isSticky && (
        <div
          className="sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-center  px-4 py-2  transition-all duration-200"
          style={{
            marginLeft: "-1rem",
            marginRight: "3.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <nav className="flex flex-wrap items-center justify-center space-x-4">
            <a href="#solutions" className="text-ninja-dark hover:text-ninja-red">
              Solutions
            </a>
            <a href="#industries" className="text-ninja-dark hover:text-ninja-red">
              Industries
            </a>
            <a href="#how-it-works" className="text-ninja-dark hover:text-ninja-red">
              How it Works
            </a>
            <a href="#about" className="text-ninja-dark hover:text-ninja-red">
              About
            </a>
            <a href="#resources" className="text-ninja-dark hover:text-ninja-red">
              Resources
            </a>
          </nav>
        </div>
      )} */}

      {/* Hero Section */}
      <section className="bg-[#f7e1d2] px-[7.5vw] py-16 text-center">
        <motion.div
          ref={ref1} // อ้างอิง div นี้
          initial={{ opacity: 0, y: 40 }} // ค่าเริ่มต้นของ animation
          animate={controls1} // ใช้ controls เพื่อควบคุม animation
          transition={{ duration: 0.6, ease: "easeOut" }} // ตั้งค่าความเร็วและลักษณะการเคลื่อนไหว
          className="mx-auto"
        >
          <p className="mx-auto mb-8 text-[1.625rem]">
            Quickly and securely scale your team with agile, highly <br /> customizable outsourcing solutions that power
            your growth.
          </p>
          <h1 className="f_header mb-4 border-b-1 border-[#BFC1B9] pb-[7rem] text-5xl font-[500] lg:text-[5rem]">
            Outsourcing worth talking about
          </h1>
        </motion.div>
        {/* Icons for Services (Placeholder) */}
        {/* <hr className="my-8 border-t border-gray-300" /> */}
        <div className="pt-[3.5rem]">
          <h2 className="mb-2 text-2xl font-bold">Which outsourcing solutions are you looking for?</h2>
          <p className="text-sm">Choose as many as you need.</p>
        </div>
        <div className="mx-auto mb-4 grid grid-cols-1 gap-4 py-4 md:grid-cols-3 lg:grid-cols-6">
          {img_data.map((img, i) => (
            <div
              onClick={() => handleCheckboxChange(i)}
              key={i}
              className={`relative grid cursor-pointer gap-y-2 rounded-lg px-[2rem] py-[1.5rem] text-center text-sm transition-all hover:bg-[#fffcfa] ${
                checkedItems[i] ? "bg-[#fffcfa]" : "bg-[#fffcfa80]"
              } hover:shadow-lg`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="mx-auto h-[8rem] w-[7.5rem]"
              />
              <p className="mt-2 text-[1rem] font-bold">{img.alt}</p>

              <div className="absolute top-0 right-0 m-2 h-[1rem] w-[1rem] rounded-[4px] border-[1px] border-[#58595c]"></div>

              {/* Checkmark Icon */}
              {checkedItems[i] && (
                <img
                  src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4278ce47b4_Select%20Checkmark.svg"
                  alt="Checkmark Icon"
                  className="absolute top-1 right-[3px] m-2 h-[.4375rem] w-[.625rem]"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/get-started"
            className="f_header bg-ninja-red group inline-flex w-[100%] items-center justify-between rounded-full px-6 py-3 font-serif text-lg font-normal text-white transition-colors hover:bg-[#2b2c30] lg:w-auto"
          >
            Get started
            <span className="text-ninja-red relative ml-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
              <svg
                className="group-hover:animate-arrow-loop h-4 w-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="mt-[5rem] items-center justify-between gap-4 rounded-2xl bg-[#bfc1b9] p-[2.5rem] lg:flex">
          <div>
            <p className="text-[1.625rem]">Driving better business results </p>
            <p className="text-start text-[1.625rem]">for 200+ companies.</p>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {img_data2.map((img, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img src={img.src} alt={img.alt} className="w-[6.5rem] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#fffcfa]">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
          alt="Project Logo"
          layout="responsive" // ทำให้รูปภาพปรับขนาดตาม container
          width={1200} // กำหนดความกว้าง
          height={200} // กำหนดความสูง
          className="mx-auto"
        />
      </div>

      {/* Client Logos Section */}
      <section className="bg-[#fffcfa] px-[7.5vw] py-16">
        <div className="grid-cols-2 gap-32 lg:grid">
          <div className="flex items-center justify-center">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
              alt="Project Logo"
              layout="responsive" // ทำให้รูปภาพปรับขนาดตาม container
              width={1200} // กำหนดความกว้าง
              height={200} // กำหนดความสูง
              className="mx-auto"
            />
          </div>
          <motion.div
            ref={ref2} // อ้างอิง div นี้
            initial={{ opacity: 0, y: 40 }} // ค่าเริ่มต้นของ animation
            animate={controls2} // ใช้ controls เพื่อควบคุม animation
            transition={{ duration: 0.6, ease: "easeOut" }} // ตั้งค่าความเร็วและลักษณะการเคลื่อนไหว
          >
            <p className="f_header mb-2 text-[3.75rem]">Free up resources, accelerate growth, and solve for scale.</p>
            <p className="mb-4 text-lg">
              At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
              reliable teams that turn growing pains into efficient pathways to profitability.
            </p>
            <p className="mb-4 text-lg">
              Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve
              key business outcomes.
            </p>
            <p className="mb-4 text-lg">
              We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according
              to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid,
              long-term contracts.
            </p>
            <p className="text-lg">Now that’s outsourcing worth talking about.</p>
          </motion.div>
        </div>
      </section>

      {/* Don't grow it alone section */}
      <section className="bg-[#fffcfa] px-[7.5vw] py-16">
        <div className="flex grid-cols-2 flex-col-reverse gap-2 lg:grid lg:px-[7.5vw]">
          <motion.div
            ref={ref3} // อ้างอิง div นี้   >
            initial={{ opacity: 0, y: 40 }} // ค่าเริ่มต้นของ animation
            animate={controls3} // ใช้ controls เพื่อควบคุม animation
            transition={{ duration: 0.6, ease: "easeOut" }} // ตั้งค่าความเร็วและลักษณะการเคลื่อนไหว
          >
            <p className="f_header mb-2 text-[3.75rem]">Don’t grow it alone</p>
            <p className="mb-4 text-lg">
              Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
            </p>
            <p className="mb-4 text-lg">
              Your dedicated new team members will become experts in your world — your customers, your tech, your data,
              your systems — so they can expand on what you’ve built.
            </p>
          </motion.div>
          <div className="flex items-center justify-start">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
              alt="Project Logo"
              width={160} // ลดขนาดความกว้าง
              height={40} // ลดขนาดความสูง
              className="lg:mx-auto"
            />
          </div>
        </div>
        <div className="lg:px-[7.5vw]">
          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <motion.div
            ref={ref4} // อ้างอิง div แรก
            className="grid-cols-3 gap-4 lg:grid"
            variants={containerVariants}
            initial="hidden"
            animate={controls4} // ใช้ controls1 เพื่อควบคุม animation
          >
            {outher1.map((item, index) => (
              <motion.div key={index} className="mb-2 flex gap-[1.5rem] border-b py-[2rem]" variants={itemVariants}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40} // ขนาดรูปภาพเล็ก
                  height={40} // ขนาดรูปภาพเล็ก
                  className="h-10"
                />
                <div>
                  <h2 className="text-xl font-bold">{item.h2}</h2>
                  <p className="mt-2 text-sm">{item.p}</p>
                  <p className="mt-4 text-sm font-bold text-black">{item.text_end}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            ref={ref5} // อ้างอิง div ที่สอง
            className="grid-cols-3 gap-4 lg:grid"
            variants={containerVariants}
            initial="hidden"
            animate={controls5} // ใช้ controls2 เพื่อควบคุม animation
          >
            {outher2.map((item, index) => (
              <motion.div key={index} className="flex gap-[1.5rem] border-b py-[2rem]" variants={itemVariants}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40} // ขนาดรูปภาพเล็ก
                  height={40} // ขนาดรูปภาพเล็ก
                  className="h-10"
                />
                <div>
                  <h2 className="text-xl font-bold">{item.h2}</h2>
                  <p className="mt-2 text-sm">{item.p}</p>
                  <p className="mt-4 text-sm font-bold text-black">{item.text_end}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why clients stick with us section */}
      <section className="bg-[#fffcfa] px-[7.5vw] py-16">
        <p className="f_header py-[2rem] text-center text-[3.75rem]">Why our clients stick with us</p>
        <div className="lg:px-[7.5vw]">
          <div className="relative rounded-lg border border-gray-200 bg-[#f7e1d2] p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="absolute top-0 right-0">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0ce154ce4785_Testimonial%20Scribble%2002.svg"
                alt="Top Left Decoration"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute top-0 left-0">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6fbcce4788_Testimonial%20Scribble%2001.svg"
                alt="Top Right Decoration"
                width={100}
                height={100}
              />
            </div>
            <p className="f_header mb-4 px-[5rem] py-[2rem] text-center text-lg text-gray-700 italic">
              "SupportNinja has really been flexible with us as we’re growing the <br /> business, and have been really
              responsive and accommodating. They’ve <br /> been integral to helping our business grow."
            </p>
            <h3 className="px-[5rem] text-center text-xl font-bold text-gray-900">Pam Schwab</h3>
            <p className="px-[5rem] text-center text-sm text-gray-600">VP of Quality & Customer Care, SymmetryRx</p>
            <hr className="my-8 h-[1px] border-0 bg-[#d3d3d3]" />

            <div className="absolute top-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === 2 ? "bg-[#004225]" : "bg-[#d3d3d3]"}`}
                ></span>
              ))}
            </div>
            <div className="absolute right-[1rem] bottom-0 flex -translate-y-1/2 space-x-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004225] text-white">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004225] text-white">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#fffcfa]">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
          alt="Project Logo"
          layout="responsive" // ทำให้รูปภาพปรับขนาดตาม container
          width={1200} // กำหนดความกว้าง
          height={200} // กำหนดความสูง
          className="mx-auto"
        />
      </div>

      <section className="bg-stone relative bg-[#bfc1b9] py-16">
        <div className="container mx-auto px-4">
          {/* Globe Background */}
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0fc8ce4798_Globe%20Lines.svg"
              alt="Globe Background"
              className="absolute inset-0 mx-auto hidden w-full max-w-4xl md:block"
            />
            <img
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c275cce47b7_Mobile%20Globe%20Lines.svg"
              alt="Mobile Globe Background"
              className="mx-auto block w-full max-w-xs md:hidden"
            />
          </div>

          {/* Content */}
          <div className="grid gap-8 px-[7.5vw] lg:grid-cols-3">
            {/* ซ้าย */}
            <div className="hidden grid-cols-2 gap-4 lg:grid">
              {[
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9aa1ce47b2_Avatar__07.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c799cce47ab_Avatar__05.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc7dece47ad_Avatar__04.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c87d2ce47ac_Avatar__03.webp",
              ].map((src, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  <img src={src} alt={`Avatar ${index + 1}`} className="h-15 w-15 rounded-full" />
                  <img
                    src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg"
                    alt="Red Circle"
                    className="absolute h-18 w-28"
                  />
                </div>
              ))}
            </div>

            {/* ตรงกลาง */}
            <div className="relative z-10 text-center">
              <h2 className="f_header mb-4 text-4xl font-bold">
                Spanning a wider <br /> world of talent
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                What are the odds that the most qualified people in the world live in your zip code? We’ll help you see
                further.
                <br />
                A global team extends your presence across time zones and languages—which means longer reach, constant
                uptime, and happier customers.
                <br />
                <strong>It’s time to go international. No passport required.</strong>
              </p>
              <a
                href="/get-started"
                className="inline-block rounded-full bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
              >
                Get Started
              </a>
            </div>

            {/* ขวา */}
            <div className="hidden grid-cols-2 gap-4 lg:grid">
              {[
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c188ece47af_Avatar__06.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6221ce47b1_Avatar__08.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6221ce47b1_Avatar__08.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c514bce47ae_Avatar__01.webp",
                "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4f55ce47b0_Avatar__02.webp",
              ].map((src, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  <img src={src} alt={`Avatar ${index + 1}`} className="h-15 w-15 rounded-full" />
                  <img
                    src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg"
                    alt="Red Circle"
                    className="absolute h-18 w-28"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone bg-[#bfc1b9] px-[7.5vw] py-[10rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="f_header mb-4 text-3xl font-bold lg:text-[3.75rem]">
                Our customized <br /> approach
              </h2>
              <p className="text-lg text-gray-700">
                We tailor our strategies and services based on your roadblocks and needs, delivering a strategic
                outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
              </p>
            </div>

            {/* Right Tabs */}
            <div>
              <h3 className="mb-6 text-xl font-semibold">Get set up in 5 easy steps</h3>
              <div className="tabs">
                {/* Tabs Menu */}
                <div className="flex space-x-4 border-b">
                  <button
                    className="border-b-2 border-green-600 px-4 py-2 text-sm font-medium text-gray-700"
                    onClick={() => setActiveTab("management")}
                  >
                    Management-as-a-Service
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:border-b-2 hover:border-green-600"
                    onClick={() => setActiveTab("talent")}
                  >
                    Talent-as-a-Service
                  </button>
                </div>

                {/* Tabs Content */}
                <div className="mt-6">
                  {activeTab === "management" && (
                    <div className="space-y-4">
                      {[
                        "Deep dive with us into your goals and hiring needs.",
                        "We’ll work with you to design a customized solution for your business.",
                        "Once you're on board, we’ll source the best talent for you.",
                        "We’ll create a customized training program that aligns with your goals.",
                        "Sit back and enjoy the efficiencies ahead — it's grow time.",
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="flex aspect-square w-10 items-center justify-center rounded-full bg-indigo-50 text-black">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                      <a
                        href="/how-it-works"
                        className="mt-4 inline-block w-[100%] rounded-full bg-green-600 px-6 py-3 text-center text-white transition hover:bg-green-700"
                      >
                        View details
                      </a>
                    </div>
                  )}

                  {activeTab === "talent" && (
                    <div className="space-y-4">
                      {[
                        "Deep dive with us into your goals and hiring needs.",
                        "Access a private portal with hand-picked talent to browse and shortlist candidates.",
                        "Start interviewing.",
                        "Refine your list until you have the right team.",
                        "With us beside you, welcome your new team aboard and prepare for scale!",
                      ].map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-black">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                      <a
                        href="/how-it-works"
                        className="mt-4 inline-block w-[100%] rounded-full bg-green-600 px-6 py-3 text-center text-white transition hover:bg-green-700"
                      >
                        View details
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#fffcfa] px-[7.5vw] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 text-center md:text-left">
              <p className="text-ninja-dark mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                We're passionate
                <br /> about our people.
              </p>
              <p className="text-ninja-dark mb-8 text-xl font-bold md:text-xl">
                Our people-first culture attracts and retains top talent.
              </p>
              <p className="text-ninja-dark mb-8 text-xl md:text-xl">
                For nearly a decade, we've fostered the growth, wellbeing,
                <br /> and career development of our team members — and that's
                <br /> earned us industry-high talent retention rates.
              </p>
              <button className="w-fit rounded-full bg-[#0D3A23] px-6 py-3 text-white hover:bg-[#0D3A23]/90">
                <p className="font-bold">read our story</p>
              </button>
            </div>

            {/* Images collage */}
            <div className="order-1 grid grid-cols-3 gap-4 md:order-2 md:w-[700px]">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`h-auto w-full overflow-hidden rounded-xl object-cover shadow-lg ${
                    index === 2 ? "-translate-x-5 translate-y-[-20px]" : ""
                  } ${index === 4 ? "-translate-x-5 translate-y-[20px]" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={402} // เพิ่มขนาดความกว้าง
                    height={402} // เพิ่มขนาดความสูง
                    className={`${img.bgimg} h-full w-full rounded-xl object-cover`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fffcfa] px-[7.5vw] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse items-center gap-[7.5vw] lg:flex-row">
            <div className="flex flex-1 justify-center overflow-x-hidden md:justify-start">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
                alt="Project Logo"
                width={559}
                height={290}
                className="h-auto w-[100%] min-w-full overflow-x-hidden rounded-lg object-contain"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-ninja-dark f_header mb-4 text-4xl font-medium md:text-5xl lg:text-6xl">
                Grow your career and unleash your <br></br> potential.
              </p>
              <p className="text-ninja-dark mb-8 text-xl font-bold md:text-xl">
                Ready to expand your horizons at a truly global company?
              </p>
              <p className="text-ninja-dark mb-8 text-xl md:text-xl">
                At SupportNinja, we prioritize your progress, celebrate<br></br> your wins, and provide a supportive
                environment where<br></br> you can thrive. Check out our openings today.
              </p>
              <button className="w-fit rounded-full bg-[#0D3A23] px-6 py-3 text-white hover:bg-[#0D3A23]/90">
                <p className="font-bold">View Open roles</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fffcfa]">
        <div className="w-full">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
            alt="Project Logo"
            width={1920}
            height={200}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="w-full bg-[#F7E1D2] px-[7.5vw]">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1 text-center md:text-left">
                <p className="text-ninja-dark f_header mb-4 text-4xl font-medium md:text-5xl lg:text-6xl">
                  We're better together.<br></br> Start building your<br></br> dream team.
                </p>
                <p className="text-ninja-dark mb-8 text-xl font-bold md:text-xl">
                  Design a custom outsourcing solution that drives results.
                </p>
                <Link
                  href="/get-started"
                  className="f_header bg-ninja-red group inline-flex w-[100%] items-center justify-between rounded-full px-6 py-3 font-serif text-lg font-normal text-white transition-colors hover:bg-[#2b2c30] lg:w-auto"
                >
                  Get started
                  <span className="text-ninja-red relative ml-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                    <svg
                      className="group-hover:animate-arrow-loop h-4 w-4 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <Image
                  src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp"
                  alt="Project Logo"
                  width={559}
                  height={290}
                  className="h-auto max-w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#bfc1b9] pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="https://ext.same-assets.com/1779142936/3292783992.svg"
                alt="Support Ninja | Full Logo"
                width={160}
                height={40}
              />
            </Link>
            <hr className="border-ninja-dark/10 my-8" />
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div>
              <h4 className="text-ninja-dark mb-4 font-bold">Solutions</h4>
              <ul className="text-ninja-dark/80 space-y-2 text-sm">
                <li>
                  <Link href="#">Customer Experience</Link>
                </li>
                <li>
                  <Link href="#">Customer Conversion</Link>
                </li>
                <li>
                  <Link href="#">Customer Onboarding</Link>
                </li>
                <li>
                  <Link href="#">Customer Support</Link>
                </li>
                <li>
                  <Link href="#">Technical Customer Support</Link>
                </li>
                <li>
                  <Link href="#">Customer Renewals</Link>
                </li>
                <li>
                  <Link href="#">Content Moderation</Link>
                </li>
                <li>
                  <Link href="#">Data Processing</Link>
                </li>
                <li>
                  <Link href="#">Finance & Accounting</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-ninja-dark mb-4 font-bold">Industries</h4>
              <ul className="text-ninja-dark/80 space-y-2 text-sm">
                <li>
                  <Link href="#">SaaS</Link>
                </li>
                <li>
                  <Link href="#">AI</Link>
                </li>
                <li>
                  <Link href="#">Ecommerce</Link>
                </li>
                <li>
                  <Link href="#">Healthcare</Link>
                </li>
                <li>
                  <Link href="#">Supply Chain & Logistics</Link>
                </li>
                <li>
                  <Link href="#">Fintech</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-ninja-dark mb-4 font-bold">Resources</h4>
              <ul className="text-ninja-dark/80 space-y-2 text-sm">
                <li>
                  <Link href="#">Resources</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Glossary</Link>
                </li>
              </ul>

              <h4 className="text-ninja-dark mt-6 mb-4 font-bold">Company</h4>
              <ul className="text-ninja-dark/80 space-y-2 text-sm">
                <li>
                  <Link href="#">How it Works</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-ninja-dark mb-4 font-bold">Follow</h4>
              <ul className="text-ninja-dark/80 space-y-2 text-sm">
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">YouTube</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 flex items-start justify-center md:col-span-4 lg:col-span-1 lg:justify-end">
              <Link
                href="/get-started"
                className="f_header bg-ninja-red group inline-flex w-[100%] items-center justify-between rounded-full px-6 py-3 font-serif text-lg font-normal text-white transition-colors hover:bg-[#2b2c30] lg:w-auto"
              >
                Get started
                <span className="text-ninja-red relative ml-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                  <svg
                    className="group-hover:animate-arrow-loop h-4 w-4 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="text-ninja-dark/60 flex flex-col items-center justify-between pt-6 text-xs lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <p className="text-ninja-dark/60 text-xs">
                © 2025 SupportNinja, a registered trademark of Ninja Partners, LLC.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Security Policy</Link>
              <Link href="#">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
