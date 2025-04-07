import Image from "next/image"
import Link from "next/link"
import { context } from "@opentelemetry/api"

import { Metadata } from "next"
const img_data = [
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
    alt: "Project Logo",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp",
    alt: "Project Logo",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp",
    alt: "Project Logo",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp",
    alt: "Project Logo",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp",
    alt: "Project Logo",
    width: 1200,
    height: 630,
  },
  {
    src: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp",
    alt: "Project Logo",
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="bg-[#f7e1d2]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1779142936/3292783992.svg"
              alt="Support Ninja | Full Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
          <div className="hidden space-x-6 md:flex">
            <div className="group relative">
              <button className="text-ninja-dark hover:text-ninja-red flex items-center px-2 py-1">
                Solutions
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="group relative">
              <button className="text-ninja-dark hover:text-ninja-red flex items-center px-2 py-1">
                Industries
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <Link href="/how-it-works" className="text-ninja-dark hover:text-ninja-red px-2 py-1">
              How it Works
            </Link>
            <div className="group relative">
              <button className="text-ninja-dark hover:text-ninja-red flex items-center px-2 py-1">
                About
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="group relative">
              <button className="text-ninja-dark hover:text-ninja-red flex items-center px-2 py-1">
                Resources
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/get-started"
              className="bg-ninja-red hover:bg-ninja-red/90 rounded-full px-4 py-2 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f7e1d2] px-[7.5vw] py-16 text-center">
        <div>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Quickly and securely scale your team with agile, highly customizable outsourcing solutions that power your
            growth.
          </p>
          <h1 className="mb-4 text-7xl font-light">Outsourcing worth talking about</h1>
        </div>
        {/* Icons for Services (Placeholder) */}
        <hr className="my-8" />
        <div>
          <h2 className="mb-2 text-2xl font-bold">Which outsourcing solutions are you looking for?</h2>
          <p className="text-sm">Choose as many as you need.</p>
        </div>
        <div className="mx-auto mb-4 grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 md:grid-cols-6">
          {img_data.map((img, i) => (
            <div key={i} className="rounded bg-white p-4 text-center text-sm shadow">
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="mx-auto" />
              <p className="mt-2">{img.alt}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="mt-4 rounded-full bg-[#E74E3C] px-6 py-2 text-white">Get Started</button>
        </div>

        <div className="mt-[5rem] flex h-[10rem] items-center justify-between gap-4 rounded-2xl bg-[#bfc1b9] p-[2rem]">
          <div>
            <p className="text-[1.625rem]">
              Driving better business results <br />
              for 200+ companies.
            </p>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {img_data2.map((img, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={120} // ปรับขนาดโลโก้
                    height={60} // ปรับขนาดโลโก้
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div>
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
      <section className="px-[7.5vw] py-16">
        <div className="grid grid-cols-2 gap-32">
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
          <div>
            <p className="mb-2 text-[3.75rem]">Free up resources, accelerate growth, and solve for scale.</p>
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
          </div>
        </div>
      </section>

      {/* Don't grow it alone section */}
      <section className="px-[7.5vw] py-16">
        <div className="grid grid-cols-2 gap-2 px-[7.5vw]">
          <div className="">
            <p className="mb-2 text-[3.75rem]">Don’t grow it alone</p>
            <p className="mb-4 text-lg">
              Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
            </p>
            <p className="mb-4 text-lg">
              Your dedicated new team members will become experts in your world — your customers, your tech, your data,
              your systems — so they can expand on what you’ve built.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
              alt="Project Logo"
              width={160} // ลดขนาดความกว้าง
              height={40} // ลดขนาดความสูง
              className="mx-auto"
            />
          </div>
        </div>
        <div className="px-[7.5vw]">
          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="grid grid-cols-3 gap-4">
            {outher1.map((item, index) => (
              <div key={index} className="flex gap-[1.5rem]">
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
                  <p className="mt-4 text-sm font-medium text-[#E74E3C]">{item.text_end}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="grid grid-cols-3 gap-4">
            {outher2.map((item, index) => (
              <div key={index} className="flex gap-[1.5rem]">
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
                  <p className="mt-4 text-sm font-medium text-[#E74E3C]">{item.text_end}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients stick with us section */}
      <section className="px-[7.5vw] py-16">
        <p className="text-center text-[3.75rem]">Why our clients stick with us</p>
        <div className="px-[7.5vw]">
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
            <p className="mb-4 px-[5rem] py-[2rem] text-center text-lg text-gray-700 italic">
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

      <div>
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
          alt="Project Logo"
          layout="responsive" // ทำให้รูปภาพปรับขนาดตาม container
          width={1200} // กำหนดความกว้าง
          height={200} // กำหนดความสูง
          className="mx-auto"
        />
      </div>

      <section className="bg-[#bfc1b9] py-16">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-[7.5vw] md:grid-cols-3">
          {/* ซ้าย */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9aa1ce47b2_Avatar__07.webp"
                alt="Left Avatar 1"
                className="h-32 w-32 rounded-full"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg"
                alt="Left Circle 1"
                className="absolute inset-0 h-40 w-40"
              />
            </div>
            <div className="relative ml-4">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c87d2ce47ac_Avatar__03.webp"
                alt="Left Avatar 2"
                className="h-32 w-32 rounded-full"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c8974ce479e_Avatar%20Circle__05.svg"
                alt="Left Circle 2"
                className="absolute inset-0 h-40 w-40"
              />
            </div>
          </div>

          {/* ตรงกลาง */}
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Spanning a wider world of talent</h2>
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
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c799cce47ab_Avatar__05.webp"
                alt="Right Avatar 1"
                className="h-32 w-32 rounded-full"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7314ce479f_Avatar%20Circle__07.svg"
                alt="Right Circle 1"
                className="absolute inset-0 h-40 w-40"
              />
            </div>
            <div className="relative ml-4">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4f55ce47b0_Avatar__02.webp"
                alt="Right Avatar 2"
                className="h-32 w-32 rounded-full"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c27d1ce479c_Avatar%20Circle__01.svg"
                alt="Right Circle 2"
                className="absolute inset-0 h-40 w-40"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="order-2 flex-1 text-center md:order-1 md:text-left">
              <p className="text-ninja-dark mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                We're passionate<br></br> about our people.
              </p>
              <p className="text-ninja-dark mb-8 text-xl font-bold md:text-xl">
                Our people-first culture attracts and retains top talent.
              </p>
              <p className="text-ninja-dark mb-8 text-xl md:text-xl">
                For nearly a decade, we've fostered the growth, wellbeing, and career<br></br> development of our team
                members — and that's earned us industry-high talent<br></br> retention rates.
              </p>
              <button className="w-fit rounded-full bg-[#0D3A23] px-6 py-3 text-white hover:bg-[#0D3A23]/90">
                <p className="font-bold">read our story</p>
              </button>
            </div>
            <div className="order-1 flex flex-1 justify-center md:order-2 md:justify-end">
              <Image
                src="/images/22.png"
                alt="Project Logo"
                width={800}
                height={500}
                className="h-auto max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex flex-1 justify-center md:justify-start">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
                alt="Project Logo"
                width={559}
                height={290}
                className="h-auto max-w-full rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-ninja-dark mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
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

      <section className="w-full">
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
        <div className="w-full bg-[#F7E1D2]">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="flex-1 text-center md:text-left">
                <p className="text-ninja-dark mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                  We're better together.<br></br> Start building your<br></br> dream team.
                </p>
                <p className="text-ninja-dark mb-8 text-xl font-bold md:text-xl">
                  Design a custom outsourcing solution that drives results.
                </p>
                <Link
                  href="/get-started"
                  className="bg-ninja-red hover:bg-ninja-red/90 inline-flex items-center rounded-full px-6 py-3 font-serif text-lg font-normal text-white"
                >
                  Get started
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
                className="bg-ninja-red hover:bg-ninja-red/90 inline-flex items-center rounded-full px-6 py-3 font-serif text-lg font-normal text-white"
              >
                Get started
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
