import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import ShineBorder from "@/components/ui/shine-border";
import BlurFade from "@/components/ui/blur-fade";
// import { Jura } from "next/font/google";
// const jura = Jura({
//   weight: "400",
//   style: "normal",
// });

export default function Home() {
  return (
    <>
    <main
      className={` h-screen bg-[#FEE8C2] w-full flex justify-center items-center`}
    >
      <div className="text-black text-center flex gap-4 flex-col items-center w-80 md:w-fit lg:w-fit  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="lg:text-6xl md:text-4xl text-5xl font-semibold"><BlurFade>Kyu nhi ho raha<RoughNotation type="underline" show={true}> GSoC?</RoughNotation></BlurFade></h1>
        <h1>Filter - Bookmark - Contribute - Win</h1>
        <Link href="/organizations" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#FEE8C2]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-zinc-800 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get Started</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      
    </main>
    

    </>
  );
}
