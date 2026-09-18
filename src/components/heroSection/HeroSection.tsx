import React from "react";
import banner from "../../assets/banner-stack.png";

const HeroSection = () => {
    return (
        <section className="max-w-7xl mx-auto mt-4 md:my-24 inter-font flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-20 p-2 ">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h1 className="font-extrabold text-5xl lg:text-6xl leading-15 tracking-[-1.5px]">
                        Build Your Ideal <br />{" "}
                        <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-lg text-[#475569] leading-7.5 plus-jakarta-sans-font max-w-lg w-full">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together the
                        stack that fits your next project.
                    </p>
                </div>
                <div className="flex gap-7.5">
                    <button className="flex-1 font-semibold text-sm text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] rounded-lg px-4 py-3 transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                        Explore Technologies
                    </button>
                    <button className="flex-1 border-[3px] border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)_border-box] bg-white rounded-lg transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 px-3 py-2">
                        <span className="font-medium text-sm bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent rounded-lg px-4 py-2">
                            Learn more
                        </span>
                    </button>
                </div>
            </div>
            <img src={banner} alt="Banner stack" />
        </section>
    );
};

export default HeroSection;
