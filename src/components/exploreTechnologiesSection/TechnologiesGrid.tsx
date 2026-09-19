import React from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";
import type { TechStack } from "../../types/techStack";

interface TechnologiesGridProps {
    technologies: Technology[];
    techStack: TechStack[];
    setTachStack: React.Dispatch<React.SetStateAction<TechStack[]>>;
}

const TechnologiesGrid = ({
    technologies,
    techStack,
    setTachStack,
}: TechnologiesGridProps) => {
    return (
        <div className="col-span-3 grid grid-cols-3 gap-5">
            {technologies.map((technology, index) => (
                <TechnologyCard
                    key={index}
                    technology={technology}
                    techStack={techStack}
                    setTachStack={setTachStack}
                ></TechnologyCard>
            ))}
        </div>
    );
};

export default TechnologiesGrid;
