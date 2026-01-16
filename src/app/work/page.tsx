import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Neo Capital",
        category: "Fintech",
        image: "/images/projects/project-fintech.png",
        description: "Next-gen trading interface designed for high-frequency execution."
    },
    {
        id: 2,
        title: "Aurum Resorts",
        category: "Hospitality",
        image: "/images/projects/project-hotel.png",
        description: "Immersive booking engine for the world's most exclusive destinations."
    },
    {
        id: 3,
        title: "Studio Kairos",
        category: "Architecture",
        image: "/images/projects/project-realestate.png",
        description: "Minimalist portfolio showcasing avant-garde architectural works."
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24">
            {/* Hero */}
            <section className="relative w-full py-24 px-6 md:px-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                        The Fleet.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl border-l-4 border-white pl-6">
                        Selected works from the Red Boat shipyard. Precision engineered for performance and aesthetics.
                    </p>
                </div>
            </section>

            {/* Project Grid */}
            <section className="w-full py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-balance">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
