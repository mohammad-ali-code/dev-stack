import React from "react";
import type { TechStack } from "../../types/techStack";
import { FaXmark } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Slide, toast } from "react-toastify";

interface TechStackCard {
    tech: TechStack;
    setTachStack: React.Dispatch<React.SetStateAction<TechStack[]>>;
}

const TechStackCard = ({ tech, setTachStack }: TechStackCard) => {
    const handleRemoveFromStack = () => {
        setTachStack((previousStack) =>
            previousStack.filter((eachTech) => eachTech.name !== tech.name),
        );
        toast.success(`Removed ${tech.name} to tech stack.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Slide,
        });
    };

    return (
        <article className="border-2 border-[#E2E8F0] p-2.5 rounded-lg flex justify-between items-center transition-all duration-300 ease-out hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E)_border-box] hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30">
            <div className="flex items-center gap-2">
                <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-7"
                />
                <div className="font-semibold">
                    <h4 className="text-xs text-[#0F172A]">{tech.name}</h4>
                    <p className="text-[10px] text-[#94A3B8]">
                        {tech.category}
                    </p>
                </div>
            </div>
            <button
                onClick={handleRemoveFromStack}
                className="text-2xl text-[#94A3B8] hover:text-[#D81B7E]">
                <IoClose />
            </button>
        </article>
    );
};

export default TechStackCard;
