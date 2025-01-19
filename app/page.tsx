import Link from "next/link";
import { Jura } from "next/font/google";

const jura = Jura({
  weight: "400",
  style: "normal",
});

export default function Home() {
  return (
    <main
      className={`${jura.className} h-screen bg-black w-full flex justify-center items-center`}
    >
      <div className="text-white text-center flex gap-4 flex-col items-center">
        <h1 className="text-6xl font-semibold">Kyu nhi ho raha GsOC?</h1>
        <p>Filter - Bookmark - Contribute - Win</p>
        <Link href="/orgs" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
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
  );
}
