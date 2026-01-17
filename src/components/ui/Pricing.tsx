import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="w-full py-24 px-6 md:px-20 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tight">
                    CAPABILITY <span className="text-[#8B0000]">PACKAGES</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: WEB INFRASTRUCTURE */}
                    <div className="p-8 border border-[#8B0000]/30 hover:border-[#8B0000] transition-colors bg-white/5 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Web Infrastructure</h3>
                        <p className="text-sm text-gray-400 mb-8 uppercase tracking-widest">Code-Only Hosting</p>

                        <ul className="space-y-4 mb-12 flex-grow">
                            <Feature text="10GB Storage" />
                            <Feature text="Unlimited Bandwidth" />
                            <Feature text="Git Deployment" />
                            <Feature text="No Email" />
                        </ul>

                        <Link href="http://manage.redboatmedia.com/domain-required?p=283029-INF-dfw" className="w-full block text-center bg-transparent border border-white text-white hover:bg-[#8B0000] hover:border-[#8B0000] py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                            Deploy System
                        </Link>
                    </div>

                    {/* Card 2: BUSINESS SUITE (Highlighted) */}
                    <div className="relative p-8 border-2 border-[#8B0000] bg-black flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(139,0,0,0.2)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8B0000] text-white text-xs font-bold px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                            Recommended
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Business Suite</h3>
                        <p className="text-gray-400 mb-8 uppercase tracking-widest text-sm">The Digital HQ</p>

                        <ul className="space-y-4 mb-12 flex-grow">
                            <Feature text="Unlimited Storage" />
                            <Feature text="10x Business Emails" />
                            <Feature text="Free SSL Certificate" />
                            <Feature text="WordPress Ready" />
                        </ul>

                        <Link href="http://manage.redboatmedia.com/domain-required?p=283033-INF-dfw" className="w-full block text-center bg-[#8B0000] text-white hover:bg-[#D91E1E] py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                            Acquire Suite
                        </Link>
                    </div>

                    {/* Card 3: PRO MAILBOX */}
                    <div className="p-8 border border-[#8B0000]/30 hover:border-[#8B0000] transition-colors bg-white/5 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Pro Mailbox</h3>
                        <p className="text-sm text-gray-400 mb-8 uppercase tracking-widest">Secure Communications</p>

                        <ul className="space-y-4 mb-12 flex-grow">
                            <Feature text="10GB Mail Storage" />
                            <Feature text="Spam Protection" />
                            <Feature text="Webmail Access" />
                            <Feature text="Encrypted Storage" />
                        </ul>

                        <Link href="http://manage.redboatmedia.com/domain-required?p=283031-INF-dfw" className="w-full block text-center bg-transparent border border-white text-white hover:bg-[#8B0000] hover:border-[#8B0000] py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                            Initialize Email
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-gray-300">
            <Check className="w-4 h-4 text-[#8B0000]" />
            <span className="text-sm uppercase tracking-wide">{text}</span>
        </li>
    );
}
