import Image from "next/image";
import { ArrowRight, Server, Mail, ConciergeBell } from "lucide-react";
import Compass from "@/components/ui/Compass";
import FleetGallery from "@/components/ui/FleetGallery";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">


            {/* Vignette Hero Section */}
            <section className="relative w-full h-screen overflow-hidden bg-black flex items-center">

                {/* Vignette Video - Right-5%, 60vh, Portal Mask */}
                <div
                    className="absolute right-[5%] top-1/2 -translate-y-1/2 h-[60vh] aspect-video z-0 pointer-events-none"
                    style={{
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 70%)',
                        maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 70%)'
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4?v=6" type="video/mp4" />
                    </video>
                </div>

                {/* Content Container */}
                <div className="relative z-20 pl-[6%] md:pl-[10%] w-full pointer-events-none">
                    <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold mb-8 text-white leading-[0.85] tracking-tighter">
                        Stay <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                            Buoyant.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-xl tracking-widest mb-12 max-w-lg border-l-4 border-red-600 pl-6">
                        We navigate the turbulent depths of web hosting and infrastructure, ensuring your business glides effortlessly across the surface.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
                        {/* Primary Pill Button */}
                        <button className="rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white font-bold px-10 py-5 shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 tracking-widest text-sm">
                            EXPLORE SERVICES
                        </button>

                        {/* Secondary Ghost Pill Button */}
                        <button className="rounded-full bg-transparent border border-white text-white font-medium px-10 py-5 hover:bg-white/10 transition-all duration-300 tracking-widest text-sm">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </section>
            {/* Section 2: The Transition (The Waterline) */}
            <section className="relative w-full bg-[#050505] text-white">
                {/* Visual Waterline Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-50" />

                <div className="grid md:grid-cols-2 min-h-screen">
                    {/* Left: The Depth (Abstract Data Visual) */}
                    <div className="relative h-[50vh] md:h-auto w-full overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                        <Image
                            src="/images/server-rack.png"
                            alt="Server Infrastructure"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                    </div>

                    {/* Right: The Surface (Services Typography) */}
                    <div className="flex flex-col justify-center px-8 py-20 md:px-20 space-y-16">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Surface Simplicity. <br />
                            <span className="text-gray-500">Deep Reliability.</span>
                        </h2>

                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Server className="w-5 h-5 text-red-500" /> Managed Hosting
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-red-500/20 pl-4 group-hover:border-red-500 transition-colors">
                                    99.9% Uptime. The anchor of your digital presence.
                                </p>
                            </div>

                            <div className="group">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-red-500" /> Professional Email
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-red-500/20 pl-4 group-hover:border-red-500 transition-colors">
                                    Encrypted. Verified. Professional communication channels.
                                </p>
                            </div>

                            <div className="group">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <ConciergeBell className="w-5 h-5 text-red-500" /> Digital Concierge
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-red-500/20 pl-4 group-hover:border-red-500 transition-colors">
                                    Iron-clad defense against digital turbulence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Philosophy (The Navigation) */}
            <section className="w-full py-32 px-6 bg-[#050505] text-white overflow-hidden relative">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
                    {/* Left: Interactive Visual */}
                    <div className="flex justify-center md:justify-start md:-ml-32">
                        <Compass />
                    </div>

                    {/* Right: The Philosophy Content */}
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
                            Charted by <br />
                            <span className="text-red-600">Experts.</span>
                        </h2>
                        <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-lg">
                            "A vessel is only as good as its captain. At Red Boat Media, we do not just build websites; we engineer experiences."
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            From the hull of the backend to the sails of the frontend, every element is calculated for performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: The Fleet (Selected Works) */}
            <FleetGallery />

            {/* Section 5: The Dock (Footer) */}
            <footer className="w-full py-20 px-6 md:px-20 bg-[#050505] border-t border-white/5 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Ready to Board?
                    </h2>
                    <p className="text-gray-400 text-xl tracking-widest uppercase">
                        The ocean is vast. Do not drift.
                    </p>

                    <a href="mailto:hello@redboat.media" className="text-3xl md:text-5xl font-serif text-red-500 hover:text-white transition-colors duration-300">
                        hello@redboat.media
                    </a>

                    <div className="flex flex-col md:flex-row items-center gap-8 text-sm text-gray-500 mt-12">
                        <span>NAIROBI, KENYA</span>
                        <span className="hidden md:block">•</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                        </div>
                    </div>

                    <div className="text-xs text-gray-800 mt-20">
                        © {new Date().getFullYear()} RED BOAT MEDIA.
                    </div>
                </div>
            </footer>
        </main>
    );
}
