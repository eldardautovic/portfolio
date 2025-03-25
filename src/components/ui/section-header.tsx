import React from 'react';

function SectionHeader({title}: { title: string }) {
    return (
        <div className="flex flex-col items-start">
            <h5 className="uppercase scroll-m-20 text-sm md:text-md font-semibold tracking-normal pb-2 text-slate-400">{title}</h5>
            <div className="w-full bg-slate-600/60 h-px"></div>
        </div>
    );
}

export default SectionHeader;