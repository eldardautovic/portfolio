import Image from "next/image"
import {CalendarIcon} from "lucide-react"
import Link from "next/link";
import dayjs from "dayjs";

interface BlogPostProps {
    title: string
    imageUrl: string
    imageAlt: string
    publishDate: string
    slug: string
}

export default function BlogPost({
                                     title = "How to Build a Responsive Website with Next.js",
                                     imageUrl = "/placeholder.svg?height=400&width=800",
                                     imageAlt = "Blog post featured image",
                                     publishDate = "April 4, 2025",
                                     slug = "#",
                                 }: BlogPostProps) {
    return (
        <div className="group">
            <div className="relative aspect-video w-full overflow-hidden rounded-md mb-3">
                <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>

            <h2 className="text-xl font-bold tracking-tight text-slate-100 md:text-2xl mb-2">
                <Link href={slug} className="hover:text-gray-300 transition-colors">
                    {title}
                </Link>
            </h2>

            <div className="flex items-center gap-1 text-sm text-gray-400">
                <CalendarIcon className="h-4 w-4"/>
                <time
                    dateTime={dayjs(publishDate).format('DD/MM/YYYY')}>{dayjs(publishDate).format('DD.MM.YYYY')}</time>
            </div>
        </div>
    )
}

