import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24">
            {/* Hero */}
            <section className="relative w-full py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
                        Dock Your <br /> <span className="text-red-600">Ship.</span>
                    </h1>
                </div>
            </section>

            <section className="w-full pb-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Ready to upgrade your digital infrastructure? Initiate a transmission. Our team is standing by to chart your course.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                                    <Mail className="text-white group-hover:text-red-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Email</div>
                                    <a href="mailto:hello@redboat.media" className="text-xl font-bold hover:text-red-500 transition-colors">hello@redboat.media</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                                    <MapPin className="text-white group-hover:text-red-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">HQ</div>
                                    <div className="text-xl font-bold">Nairobi, Kenya</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form Stub */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400 uppercase">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-red-500 outline-none transition-colors" placeholder="Captain Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400 uppercase">Signal</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-red-500 outline-none transition-colors" placeholder="email@vessel.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400 uppercase">Message</label>
                                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-4 h-32 focus:border-red-500 outline-none transition-colors" placeholder="Describe your mission..."></textarea>
                            </div>
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg tracking-widest uppercase transition-all hover:scale-[1.02]">
                                Transmit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
