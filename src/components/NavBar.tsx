import {Menu} from "lucide-react";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import Link from "next/link";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
    download?: boolean;
}

interface NavBarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const NavBar = ({
                    menu = [
                        {
                            title: "Projects",
                            url: "/projects",
                        },
                        {
                            title: "Blog",
                            url: "/blog",
                        },
                        {
                            title: "Resume",
                            url: "/Eldar_Dautovic_CV.pdf",
                            download: true,
                        },
                    ],
                }: NavBarProps) => {
    return (
        <section>
            <div className="container">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Button
                                className="text-xl font-black hover:-rotate-12 hover:scale-90 cursor-pointer duration-500">
                                E
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild size="sm">
                            <Link href="mailto:dautoviceldar20@gmail.com">Let&apos;s talk</Link>
                        </Button>
                    </div>
                </nav>

                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <Button
                                className="text-xl font-black hover:-rotate-12 hover:scale-90 cursor-pointer duration-500">
                                E
                            </Button>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href="/" className="flex items-center gap-2">
                                            <Button
                                                className="text-xl font-black hover:-rotate-12 hover:scale-90 cursor-pointer duration-500">
                                                E
                                            </Button>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    <div className="flex flex-col gap-3">
                                        <Button asChild variant="outline">
                                            Leftover
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
                {...(item.download ? {download: true} : {})}
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem}/>
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link
            key={item.title}
            href={item.url}
            className="text-md font-semibold"
            {...(item.download ? {download: true} : {})}
        >
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({item}: { item: MenuItem }) => {
    return (
        <Link
            className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            href={item.url}
            {...(item.download ? {download: true} : {})}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
};

export {NavBar};