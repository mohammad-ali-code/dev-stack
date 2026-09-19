import React from "react";
import TechStackGrid from "./TechStackGrid";

const TechStackSection = () => {
    return (
        <aside className="p-5 rounded-2xl border border-[#94A3B8] h-fit space-y-4">
            <div className="space-y-1">
                <h3 className="text-[#0F172A] font-bold">Your Stack</h3>
                <p className="text-[#94A3B8] text-sm">
                    No technologies selected yet.
                </p>
            </div>
            <TechStackGrid></TechStackGrid>
        </aside>
    );
};

export default TechStackSection;
