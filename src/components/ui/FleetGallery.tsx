"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Neo Capital",
        category: "Fintech",
        image: "/images/projects/project-fintech.png",
        color: "from-blue-900/50 to-blue-600/10",
        description: "Next-gen trading interface designed for high-frequency execution."
    },
    {
        id: 2,
        title: "Aurum Resorts",
        category: "Hospitality",
        image: "/images/projects/project-hotel.png",
        color: "from-amber-900/50 to-amber-600/10",
        description: "Immersive booking engine for the world's most exclusive destinations."
    },
    {
        id: 3,
        title: "Studio Kairos",
        category: "Architecture",
        image: "/images/projects/project-realestate.png",
        color: "from-emerald-900/50 to-emerald-600/10",
        description: "Minimalist portfolio showcasing avant-garde architectural works."
    },
];

export default function FleetGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Header (Fixed Position visually) */}
                <div className="absolute top-20 left-6 md:left-20 z-20 pointer-events-none">
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mix-blend-difference">
                        The Fleet.
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-sm">
                        Selected works. Precision engineered.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-20 pl-[40vw] pr-20">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 perspective-1000">
                            {/* Glass Frame */}
                            <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-red-500/10">

                                {/* Hover Color Wash */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />

                                {/* Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <span className="text-sm font-mono text-red-500 mb-2 block uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 md:text-lg max-w-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
