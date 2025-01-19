import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { Jura } from "next/font/google";

const jura = Jura({
  weight: "400",
  style: "normal",
});


type Props = {
  githubUrl: string;
  discordUrl: string;
  twitterUrl: string;
};

const Footer = (props: Props) => {
  return (
    <footer className={` ${jura.className} flex justify-between bg-black px-3 py-2`}>
      <p className="text-white font-semibold flex gap-1">
        Brought to you by <Link href={props.twitterUrl}><p className="underline">ayush</p></Link>
      </p>
      <div className="flex gap-2">
        <Link href={props.githubUrl}>
          <FaGithub size={23} color="white"/>
        </Link>
        <Link href={props.twitterUrl}>
          <FaXTwitter size={23} color="white"/>
        </Link>
        <Link href={props.discordUrl}>
          <FaDiscord size={23} color="white"/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
