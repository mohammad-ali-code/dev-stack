import React from "react";
import logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto mt-7.5 sm:mt-15 md:mt-4 md:my-24 lg:gap-20 p-2 space-y-10">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-10">
                <div className="space-y-3 col-span-3 sm:col-span-2">
                    <img src={logo} alt="Logo" />
                    <div className="space-y-6">
                        <p className="text-xs text-[#64748B] max-w-96 w-full">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>
                        <div className="font-semibold text-xs text-[#475569] flex gap-4">
                            <span>GitHub</span>
                            <span>Twitter</span>
                            <span>LinkedIn</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#0F172A]">
                        PRODUCT
                    </h4>
                    <div className="space-y-2.5">
                        <p className="text-xs text-[#64748B]">Home</p>
                        <p className="text-xs text-[#64748B]">Technologies</p>
                        <p className="text-xs text-[#64748B]">Projects</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#0F172A]">
                        COMPANY
                    </h4>
                    <div className="space-y-2.5">
                        <p className="text-xs text-[#64748B]">About</p>
                        <p className="text-xs text-[#64748B]">Contact</p>
                        <p className="text-xs text-[#64748B]">Careers</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#0F172A]">LEGAL</h4>
                    <div className="space-y-2.5">
                        <p className="text-xs text-[#64748B]">Privacy Policy</p>
                        <p className="text-xs text-[#64748B]">
                            Terms of Service
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className="text-[#94A3B8] text-xs flex justify-between items-center">
                <span>© 2026 Dev Stack. All rights reserved.</span>
                <div className="flex gap-6">
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
