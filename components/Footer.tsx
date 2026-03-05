'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#f6f7f9] pt-20 pb-8 border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-[20px] font-bold text-[#0F172A] tracking-tight mb-4">
                            Nishant Mendhe
                        </h3>
                        <p className="text-[14px] text-[#8e95a5] leading-[1.8] max-w-xs">
                            Welcome to Nishant Mendhe Stock Market Training Institute. Best Stock Market Training Institute in Nagpur.
                            <br /><br />
                            <strong className="text-gray-700">Registered Mutual Fund Distributor<br />
                                AMFI No: 92364 || EUIN No: E092970</strong>
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 md:col-span-3">

                        {/* Column 1: Programs */}
                        <div>
                            <h4 className="text-[11px] font-bold text-[#0F172A] uppercase tracking-widest mb-6">Programs</h4>
                            <ul className="space-y-4">
                                <li><Link href="/courses/4-in-1-technical-analysis" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">4 in 1 Technical Analysis</Link></li>
                                <li><Link href="/courses/options-trading-mastery" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Options Mastery</Link></li>
                                <li><Link href="/courses/beginners-guide" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Beginner&apos;s Guide</Link></li>
                                <li><Link href="/courses/advanced-trading-strategies" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Advanced Strategies</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Resources */}
                        <div>
                            <h4 className="text-[11px] font-bold text-[#0F172A] uppercase tracking-widest mb-6">Resources</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Free Training</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Market Newsletter</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Trading Tools</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div>
                            <h4 className="text-[11px] font-bold text-[#0F172A] uppercase tracking-widest mb-6">Company</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">About Us</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Contact Support</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#8e95a5] hover:text-[#0F172A] transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar items */}
                <div className="pt-8 border-t border-gray-200">
                    <p className="text-[13px] text-[#a0a6b5]">
                        © {new Date().getFullYear()} All Rights Reserved By Nishant Mendhe. Designed & SEO by Antler&apos;s Solution.
                    </p>
                </div>

            </div>
        </footer>
    );
}
