import React from 'react';
import type {Technology} from "@/components/Technologies";
import Image from "next/image";
import {cn} from "@/lib/utils";

function TechnologiesItem({item}: { item: Technology }) {
    return (
        <div className="flex gap-x-3 items-center p-3 bg-slate-900/80 rounded pointer-events-none">
            <div
                className={cn("flex items-center justify-center p-2 rounded-md bg-slate-600/60 ", item.className)}>
                <Image className="pointer-events-none" src={`/assets/technologies/${item.icon}.svg`} alt={item.name}
                       width={20}
                       height={20}/>
            </div>
            <h5 className="scroll-m-20 text-sm font-medium text-slate-300 pointer-events-none select-none">
                {item.name}
            </h5>
        </div>
    );
}

export default TechnologiesItem;