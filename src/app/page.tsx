import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import Photo from "@/images/jorge-araya-profile-picture-wp.webp";
import TechStack from "@/components/ui/TechStack";
import ContactBanner from "@/components/layout/ContactBanner";
import CheckMarkIcon from "@/components/icons/checkMarkIcon";

export const metadata = {
  title: "Home | Jorge Araya Web Developer",
  description:
    "Crafting high-quality web experiences with modern technologies. I'm Jorge Araya, a seasoned web developer specializing in WordPress, Next.js and Laravel. Explore my work, insights, and services to elevate your digital presence.",
  keywords: ["wordpress developer", "web developer", "web costa rica"],
};

export default async function Home() {
  return (
    <>
      <div className="gradient-bg bg-slate-900 relative py-32 md:py-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:min-h-svh">
            <div className="md:col-span-3 flex flex-col items-start justify-center gap-6 order-last md:order-first">
              <h1 className="font-lexend font-black text-white text-3xl md:text-7xl leading-22 ">
                Jorge Araya <br />
                <span className="text-teal-400"> Full-Stack Developer</span>.
              </h1>
              <p className="font-opensans font-medium text-white text-lg md:text-xl">
                I build fast, scalable, and high-converting websites using
                modern web technologies. From custom WordPress solutions to
                Next.js and headless architectures, I help businesses craft
                powerful online experiences. <br /> Let’s bring your project to
                life!
              </p>
              <CtaButton
                href="mailto:jorgearaya474@gmail.com"
                text="Let's Talk"
                title="Contact Jorge Araya"
                className="w-auto"
              />
            </div>
            <div className="md:col-span-2 md:flex flex-col justify-center items-center md:items-end gap-6">
              <Image
                src={Photo}
                alt="Jorge Araya"
                className="h-56 w-full md:h-[400px] md:w-[400px] object-cover rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 p-1 md:p-2 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-lexend text-bold text-3xl lg:text-5xl block font-bold text-white text-left ">
              Elevating Web Development to Make You Stand Out!
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-lexend text-2xl font-bold text-white">
                  Custom development
                </h3>
              </div>
              <p className="mt-3 text-white text-lg font-opensans">
                Transform your ideas into reality with websites tailored to your
                brand’s needs and goals. I create solutions that not only meet
                technical requirements but also enhance your business identity
                and user engagement.
              </p>
            </div>
            <div className="bg-slate-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-lexend text-2xl font-bold text-white">
                  Adaptive Web Design
                </h3>
              </div>
              <p className="mt-3 text-white text-lg font-opensans">
                Ensure your website delivers a seamless experience across all
                devices. From mobile phones to desktops, I design responsive
                layouts that prioritize user experience and accessibility,
                improving engagement and conversion rates.
              </p>
            </div>
            <div className="bg-slate-800/60 p-8 rounded-lg">
              <div className="flex flex-row gap-4 justify-start items-center">
                <CheckMarkIcon />
                <h3 className="font-lexend text-2xl font-bold text-white">
                  Site Optimization
                </h3>
              </div>
              <p className="mt-3 text-white text-lg font-opensans">
                Boost your website`&apos;s speed and scalability with advanced
                techniques like caching, image optimization, and code
                minification. I use industry-leading tools to ensure your site
                loads faster, retains visitors, and performs optimally across
                all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 lg:py-[10rem]">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <h2 className="font-lexend text-bold text-3xl lg:text-5xl block font-bold text-white text-left">
              Technologies for Scalable Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="">
              <p className="text-white text-lg font-opensan">
                A strong foundation built on reliable tools and proven
                methodologies supports every project. The focus is on
                performance, scalability, and adaptability, selecting the right
                technologies to meet each challenge’s unique demands.
              </p>
              <br></br>
              <p className="text-white text-lg font-opensan">
                Experienced in custom WordPress development—whether building
                fully custom themes and plugins or enhancing performance and
                flexibility with leading builders like Elementor and others.
              </p>
            </div>
            <div className="md:col-span-2">
              <TechStack />
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
