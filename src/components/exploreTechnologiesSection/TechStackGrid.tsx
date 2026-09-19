import React from "react";
import type { TechStack } from "../../types/techStack";
import TechStackCard from "./TechStackCard";

interface TechStackGridProps {
    techStack: TechStack[];
    setTachStack: React.Dispatch<React.SetStateAction<TechStack[]>>;
}

const TechStackGrid = ({ techStack, setTachStack }: TechStackGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-1.5">
            {techStack.map((tech) => (
                <TechStackCard
                    tech={tech}
                    setTachStack={setTachStack}></TechStackCard>
            ))}
        </div>
    );
};

export default TechStackGrid;
