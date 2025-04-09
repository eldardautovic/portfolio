import React from 'react';
import Link from "next/link";
import {GithubIcon, LinkedinIcon} from "@sanity/icons";

function Footer() {
    return (
        <footer className="flex flex-col justify-centert">
            <div className="w-full bg-slate-600/60 h-px"></div>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link href="https://github.com/eldardautovic" target="_blank"
                          aria-label="Check out my GitHub"><GithubIcon width={25} height={25}
                                                                       className="text-slate-400 hover:text-slate-300"/></Link>
                    <Link href="https://www.linkedin.com/in/eldardautovic/" aria-label="Connect with me on Linkedin"
                          target="_blank"><LinkedinIcon width={25}
                                                        height={25}
                                                        className="text-slate-400 hover:text-slate-300"/></Link>
                </div>
                <h3 className="scroll-m-20 text-xs md:text-md font-normal tracking-normal pb-2 text-slate-400 pt-2">Built
                    with <Link href="https://nextjs.org" target="_blank"><span
                        className="text-cyan-300 font-semibold hover:underline cursor-pointer">Next.js</span></Link> & <Link
                        href="https://www.sanity.io/" target="_blank"><span
                        className="text-cyan-300 font-semibold hover:underline cursor-pointer">Sanity</span></Link>
                </h3>
            </div>
        </footer>
    );
}

export default Footer;