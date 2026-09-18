import React from "react";

const Loading = () => {
    return (
        <section className="min-h-screen md:min-h-[50vh] flex items-center justify-center bg-white inter-font">
            <div className="flex flex-col items-center">
                {/* Animated Stack */}
                <div className="relative w-24 h-24 mb-7">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] blur-2xl opacity-20 animate-pulse" />

                    {/* Top Layer */}
                    <div
                        className="
                            absolute left-3 top-2
                            w-18 h-10
                            rounded-lg
                            border-2 border-[#D81B7E]/60
                            bg-white
                            shadow-lg
                            rotate-0
                            animate-[float_2s_ease-in-out_infinite]
                        ">
                        <div className="absolute inset-2 rounded-md bg-linear-to-r from-[#FF5722]/10 via-[#D81B7E]/10 to-[#7C3AED]/10" />
                    </div>

                    {/* Middle Layer */}
                    <div
                        className="
                            absolute left-3 top-9
                            w-18 h-10
                            rounded-lg
                            border-2 border-[#D81B7E]/60
                            bg-white
                            shadow-lg
                            animate-[float_2s_ease-in-out_0.2s_infinite]
                        ">
                        <div className="absolute inset-2 rounded-md bg-linear-to-r from-[#FF5722]/10 via-[#D81B7E]/10 to-[#7C3AED]/10" />
                    </div>

                    {/* Bottom Layer */}
                    <div
                        className="
                            absolute left-3 top-16
                            w-18 h-10
                            rounded-lg
                            border-2 border-[#7C3AED]/60
                            bg-white
                            shadow-lg
                            animate-[float_2s_ease-in-out_0.4s_infinite]
                        ">
                        <div className="absolute inset-2 rounded-md bg-linear-to-r from-[#FF5722]/10 via-[#D81B7E]/10 to-[#7C3AED]/10" />
                    </div>

                    {/* Center Gradient Dot */}
                    <div
                        className="
                            absolute left-1/2 top-1/2
                            -translate-x-1/2 -translate-y-1/2
                            w-3 h-3
                            rounded-full
                            bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]
                            shadow-lg
                            shadow-purple-500/30
                            animate-pulse
                        "
                    />
                </div>

                {/* Logo / Title */}
                <div className="flex items-center gap-2 mb-2">
                    <div
                        className="
                            w-8 h-8 rounded-lg
                            bg-linear-to-br from-[#FF5722] via-[#D81B7E] to-[#7C3AED]
                            flex items-center justify-center
                            text-white text-xs font-bold
                        ">
                        DS
                    </div>

                    <span className="text-lg font-bold text-[#0F172A]">
                        Dev<span className="text-[#D81B7E]">Stack</span>
                    </span>
                </div>

                {/* Loading Text */}
                <p className="text-sm text-[#64748B] plus-jakarta-sans-font">
                    Building your development stack
                    <span className="inline-flex ml-1">
                        <span className="animate-bounce [animation-delay:0ms]">
                            .
                        </span>
                        <span className="animate-bounce [animation-delay:150ms]">
                            .
                        </span>
                        <span className="animate-bounce [animation-delay:300ms]">
                            .
                        </span>
                    </span>
                </p>

                {/* Progress Line */}
                <div className="w-48 h-1 mt-5 rounded-full bg-[#F1F5F9] overflow-hidden">
                    <div
                        className="
                            h-full w-1/2 rounded-full
                            bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]
                            animate-[loading_1.5s_ease-in-out_infinite]
                        "
                    />
                </div>
            </div>

            {/* Custom Animations */}
            <style>
                {`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-5px);
                        }
                    }

                    @keyframes loading {
                        0% {
                            transform: translateX(-100%);
                        }
                        50% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(200%);
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Loading;
