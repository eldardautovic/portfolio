import {Experience} from "@/types/experience";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

function ExperienceItem({item}: { item: Experience }) {
    return (
        <div className="flex justify-between items-center w-full p-5 bg-slate-900 rounded-lg mb-4 relative">
            <div className={cn({"mt-3": item.open})}>
                <h4 className="scroll-m-20 text-lg md:text-xl font-semibold tracking-tight">{item.company}</h4>
                {!item.currently && <p className="leading-7 text-slate-400">{item.role}</p>}
                {item.description?.length &&
                    <p className="leading-7 text-slate-400 text-md">{item.description}</p>}
            </div>
            {!item.currently && <div>
                <h5 className="leading-7 text-slate-400 text-sm">{item.from} — {item.to}</h5>
            </div>}
            {item.open &&
                <Badge
                    className="uppercase text-xs bg-lime-500/30 absolute top-3 left-5 md:top-5 md:right-5 md:left-auto text-slate-100"
                    variant="default">
                    <div className="w-2 h-2 bg-lime-500 rounded"></div>
                    Open for collaboration
                </Badge>}
        </div>
    );
}

export default ExperienceItem;