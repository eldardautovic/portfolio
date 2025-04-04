import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <footer className="flex flex-col items-end">
            <div className="w-full bg-slate-600/60 h-px"></div>
            <h3 className="scroll-m-20 text-xs md:text-md font-normal tracking-normal pb-2 text-slate-400 pt-2">Built
                with <Link href="https://nextjs.org" target="_blank"><span
                    className="text-cyan-300 font-semibold hover:underline cursor-pointer">Next.js</span></Link> & <Link
                    href="https://www.sanity.io/" target="_blank"><span
                    className="text-cyan-300 font-semibold hover:underline cursor-pointer">Sanity</span></Link>
            </h3>
        </footer>
    );
}

export default Footer;