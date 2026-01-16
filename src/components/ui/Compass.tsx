"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Navigation } from "lucide-react";

export default function Compass() {
    const ref = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            let angleDeg = angleRad * (180 / Math.PI);

            // Adjust so arrow points to cursor (0deg is usually right, we might need offset depending on icon rotation)
            // Navigation icon points North-East by default usually, or Up. 
            // Let's assume standard rotation. 
            // Adding 90 degrees to align standard CSS rotation (0 is right, -90 is up) if needed.
            // Let's just set raw angle and adjust visually.

            setRotate(angleDeg + 90); // +90 to orient "North" (Up) to cursor
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative flex items-center justify-center w-80 h-80 md:w-[600px] md:h-[600px] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-red-900/10">
            {/* Compass Rings */}
            <div className="absolute inset-4 rounded-full border border-white/5" />
            <div className="absolute inset-12 rounded-full border border-white/5 border-dashed opacity-50" />

            {/* Cardinal Directions */}
            <span className="absolute top-4 font-mono text-xs text-red-500 font-bold">N</span>
            <span className="absolute bottom-4 font-mono text-xs text-gray-600">S</span>
            <span className="absolute left-4 font-mono text-xs text-gray-600">W</span>
            <span className="absolute right-4 font-mono text-xs text-gray-600">E</span>

            {/* The Needle Container */}
            <div ref={ref} className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    animate={{ rotate }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="relative z-10"
                >
                    {/* Custom Needle Graphic using Lucide or SVG shapes */}
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-24 bg-gradient-to-t from-red-600 to-red-500 clip-arrow-top" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                        <div className="w-4 h-24 bg-gradient-to-b from-gray-700 to-gray-900 clip-arrow-bottom" style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-glow" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
