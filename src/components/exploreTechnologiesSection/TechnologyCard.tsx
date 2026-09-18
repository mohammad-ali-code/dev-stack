import React from "react";
import type { Technology } from "../../types/technology";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
    technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-1.5 p-5 rounded-2xl border-gray-400 hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E)_border-box] bg-white border hover:border-transparent transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30">
            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} logo`}
                        className="w-10"
                    />
                    <p className="border border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)_border-box] bg-white rounded-full">
                        <span className="font-semibold text-xs bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent rounded-full px-2.5 py-0.5">
                            {technology.badge}
                        </span>
                    </p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-[#0F172A] inter-font font-bold text-xl">
                        {technology.name}
                    </h3>
                    <p className="text-[#64748B] text-sm">
                        {technology.description}
                    </p>
                </div>
            </div>
            <div className="">
                <div className="w-full h-0.5 bg-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                    <span className="text-[#475569] font-medium text-xs rounded-sm bg-[#F1F5F9] px-2 py-0.5">
                        {technology.category}
                    </span>
                    <span className="text-[#475569] font-medium text-xs">
                        {technology.difficulty}
                    </span>
                    <p className="text-[#334155] font-semibold text-xs flex justify-center items-center gap-1">
                        <FaStar className="text-[#FBBF24]" />{" "}
                        <span>{technology.rating}</span>
                    </p>
                </div>
                <button className="w-full mt-4 font-semibold text-sm text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;
