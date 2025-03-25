import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Experience from "@/components/Experience";

export default function Home() {
    return <section className="pb-5">
        <Hero/>
        <CTASection/>
        <Experience/>
    </section>;
}
