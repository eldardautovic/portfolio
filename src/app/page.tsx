import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";

export default function Home() {
    return <section className="pb-5">
        <Hero/>
        <CTASection/>
        <Experience/>
        <Technologies/>
    </section>;
}
