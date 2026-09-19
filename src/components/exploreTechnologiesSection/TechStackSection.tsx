import React from "react";
import TechStackGrid from "./TechStackGrid";
import type { TechStack } from "../../types/techStack";
import { Slide, toast } from "react-toastify";

interface TechStackSectionProps {
    techStack: TechStack[];
    setTachStack: React.Dispatch<React.SetStateAction<TechStack[]>>;
}

const TechStackSection = ({
    techStack,
    setTachStack,
}: TechStackSectionProps) => {
    const handleRemoveAllTech = () => {
        setTachStack([]);
        toast.success(`Removed all techs from stack.`, {
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
        <aside className="p-5 rounded-2xl border-2 border-[#E2E8F0] h-fit space-y-4 sticky top-4">
            <div className="space-y-1">
                <h3 className="text-[#0F172A] font-bold">Your Stack</h3>
                <p className="text-[#94A3B8] text-sm">
                    {techStack.length
                        ? `${techStack.length} Technology selected`
                        : "No technologies selected yet."}
                </p>
            </div>
            {techStack.length ? (
                <>
                    <TechStackGrid
                        techStack={techStack}
                        setTachStack={setTachStack}></TechStackGrid>
                    <button
                        onClick={handleRemoveAllTech}
                        className="mt-3 w-full border-2 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)_border-box] bg-white rounded-lg transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 px-3 py-2">
                        <span className="font-medium text-sm bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent rounded-lg px-4 py-2">
                            Remove All
                        </span>
                    </button>
                </>
            ) : (
                <div className="border-2 border-dotted rounded-xl border-[#E2E8F0] p-6 text-xs text-[#94A3B8]">
                    <p className="text-center">Your stack is empty.</p>
                </div>
            )}
        </aside>
    );
};

export default TechStackSection;
