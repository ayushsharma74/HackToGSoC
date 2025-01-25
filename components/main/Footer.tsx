import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { jura } from "@/fonts/font";


type Props = {
  githubUrl: string;
  discordUrl: string;
  twitterUrl: string;
};

const Footer = (props: Props) => {
  return (
    <footer className={` ${jura.className} flex justify-center md:justify-between lg:justify-between flex-wrap gap-3  bg-[#FEE8C2] px-3 py-2`}>
      <p className="text-black font-semibold flex gap-1">
        Brought to you by <Link href={props.twitterUrl}><span className="underline hover:no-underline">ayush</span></Link> & <Link href={"https://x.com/Averrraagggeeee"}><span className="underline hover:no-underline">gajender</span></Link>
      </p>
      <div className="flex gap-3">
        <Link href={props.githubUrl} className="hover:scale-125 transition-all" target="_blank">
          <FaGithub size={23} color="black"/>
        </Link>
        <Link href={props.twitterUrl} className="hover:scale-125 transition-all" target="_blank">
          <FaXTwitter size={23} color="black"/>
        </Link>
        <Link href={props.discordUrl} className="hover:scale-125 transition-all" target="_blank">
          <FaDiscord size={23} color="black"/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
