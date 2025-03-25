import React from 'react';
import {cn} from "@/lib/utils";
import {Sparkles} from "lucide-react";
import Image from "next/image";
import {BentoGridItemProps} from "@/types/bentoGrid";

type CtaItemProps = {
    item: BentoGridItemProps;
    index: number;
}

function CtaItem({item, index}: CtaItemProps) {
    return (
        <div
            key={index}
            className={cn(
                "group relative overflow-hidden rounded-xl bg-cyan-900/50 p-6 transition-all hover:bg-cyan-900/60 duration-500",
                item.className,
            )}
        >
            <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="bg-cyan-800/60 rounded-full p-2.5">{item.icon}</div>
                        <Sparkles className="h-5 w-5 text-cyan-300 opacity-70"/>
                    </div>

                    {item.image && (
                        <div className="relative h-20 w-full overflow-hidden rounded-lg">
                            <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className={cn("object-cover transition-transform group-hover:scale-105", {"object-contain group-hover:-rotate-6": item.objectFit == "contain"})}
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <h3 className="font-bold text-xl text-cyan-50 font-mono">{item.title}</h3>
                        <p className="text-sm text-cyan-200 font-medium leading-relaxed">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaItem;