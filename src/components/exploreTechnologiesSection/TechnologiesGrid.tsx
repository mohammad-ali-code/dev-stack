import React from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";

interface TechnologiesGridProps {
    technologies: Technology[];
}

const TechnologiesGrid = ({ technologies }: TechnologiesGridProps) => {
    return (
        <div className="col-span-3 grid grid-cols-3 gap-5">
            {technologies.map((technology) => (
                <TechnologyCard technology={technology}></TechnologyCard>
            ))}
        </div>
    );
};

export default TechnologiesGrid;
