import {JSX} from "react";

export type BentoGridItemProps = {
    title: string;
    description: string;
    icon: JSX.Element;
    className: string;
    image?: string;
    objectFit?: "cover" | "contain"
}