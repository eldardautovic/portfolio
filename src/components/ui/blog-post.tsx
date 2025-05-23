import {CalendarIcon} from "lucide-react"
import Link from "next/link";

interface BlogPostProps {
    title: string
    publishDate: string
    slug: string
}

export default function BlogPost({
                                     title = "How to Build a Responsive Website with Next.js",
                                     publishDate = "April 4, 2025",
                                     slug = "#",
                                 }: BlogPostProps) {
    return (
        <div className="group flex justify-between">
            <h2 className="text-lg  font-mono tracking-tight text-slate-200 md:text-xl mb-2">
                <Link href={`/blog/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>

            <div className="flex items-center gap-1 text-sm text-gray-400">
                <CalendarIcon className="h-4 w-4"/>
                <time
                    dateTime={new Date(publishDate).toLocaleDateString()}>{new Date(publishDate).toLocaleDateString()}</time>
            </div>
        </div>
    )
}

