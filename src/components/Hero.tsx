import React from 'react';
import Image from "next/image";

function Hero() {
    return (
        <div className="container mx-auto py-6 md:py-12">
            <div
                className="flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex flex-col text-left w-full md:w-1/2">
                    <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 mb-4">
                        Eldar<span className="text-cyan-400"> Dautović</span>
                    </h1>
                    <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-slate-300 mb-3">
                        A Full-stack Web Developer
                    </h3>
                    <p className="leading-7 text-slate-400">
                        Transforming ideas into scalable web applications with 4 years of expertise.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="w-48 md:w-64 lg:w-80 aspect-square relative">
                        <Image
                            src="/assets/hero-image.webp"
                            alt="Hero image -- Eldar Memoji"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;