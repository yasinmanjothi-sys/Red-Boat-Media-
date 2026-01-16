import { Server, Shield, Mail, Database, Globe, Lock } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-24">
            {/* Hero */}
            <section className="relative w-full py-24 px-6 md:px-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                        Deep <br /> Infrastructure.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl border-l-4 border-red-600 pl-6">
                        The foundation of digital dominance. We provide the invisible strength that keeps your business buoyant.
                    </p>
                </div>
            </section>

            {/* Hosting Grid */}
            <section className="w-full py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    {/* Left: The Stack */}
                    <div className="space-y-12">
                        <div className="group">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Server className="text-red-500" /> Managed Cloud Hosting
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Powered by 20i's global CDN and autoscaling cloud platform. We ensure your site loads instantly, regardless of traffic surges.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-500 font-mono text-sm">
                                <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> Global Edge CDN</li>
                                <li className="flex items-center gap-2"><Database className="w-4 h-4" /> NVMe SSD Storage</li>
                            </ul>
                        </div>

                        <div className="group">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Mail className="text-red-500" /> Professional Email
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Secure, branded email infrastructure. Say goodbye to spam and verified sender issues. Establish authority with every message sent.
                            </p>
                        </div>

                        <div className="group">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Shield className="text-red-500" /> Security Protocols
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Iron-clad defense. Automated malware scanning, daily backups, and free SSL certificates as standard.
                            </p>
                        </div>
                    </div>

                    {/* Right: The Specs (Visual) */}
                    <div className="relative bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl" />
                        <h3 className="text-sm font-mono text-red-500 mb-8 uppercase tracking-widest z-10">System Specifications</h3>

                        <div className="grid grid-cols-2 gap-8 z-10">
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                                <div className="text-xs text-gray-500 uppercase">Uptime Guarantee</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">∞</div>
                                <div className="text-xs text-gray-500 uppercase">CDN Bandwidth</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">Tx</div>
                                <div className="text-xs text-gray-500 uppercase">Daily Backups</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">SSL</div>
                                <div className="text-xs text-gray-500 uppercase">Encryption</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
