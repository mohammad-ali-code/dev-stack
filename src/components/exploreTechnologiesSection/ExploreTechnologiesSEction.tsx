import React, { useEffect, useState } from "react";
import TechnologiesGrid from "./TechnologiesGrid";
import type { Technology } from "../../types/technology";
import Loading from "../Loading";
import TechStackSection from "./TechStackSection";
import type { TechStack } from "../../types/techStack";

const ExploreTechnologiesSEction = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [techStack, setTachStack] = useState<TechStack[]>([]);

    console.log(techStack);

    useEffect(() => {
        const fetchTechnologies = async () => {
            const response = await fetch("./data.json");
            const technologiesData: Technology[] = await response.json();
            setTechnologies(technologiesData);
            setIsLoading(false);
        };

        fetchTechnologies();
    }, []);

    return isLoading ? (
        <Loading></Loading>
    ) : (
        <section className="max-w-7xl mx-auto mt-4 md:my-24 lg:gap-20 p-2">
            <div className="mb-3 md:mb-10">
                <h2 className="font-extrabold inter-font text-3xl lg:text-4xl mb-2">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-[#475569] leading-7.5 plus-jakarta-sans-font max-w-lg w-full">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <TechnologiesGrid
                    technologies={technologies}
                    techStack={techStack}
                    setTachStack={setTachStack}></TechnologiesGrid>
                <TechStackSection></TechStackSection>
            </div>
        </section>
    );
};

export default ExploreTechnologiesSEction;
