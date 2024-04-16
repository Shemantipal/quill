"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export function CardCanvasRevealEffect() {
    return (
        <>
            <h2 className="text-white text-center lg:text-4xl mt-10">
                What makes Quill Intersting?
            </h2>
            <div className="py-20 container flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black mx-auto gap-4 px-8">
                <Card
                    title="Devs"
                    description="Now open just a single tab instead of many to debug your code"
                    icon={<DevIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-emerald-900"
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card
                    title="Startups"
                    description="Empowers startups to accelerate interview,deliver exceptional products, and scale efficiently"
                    icon={<StartupIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card
                    title="Competitive Coders"
                    description="Lightning-fast feedback, optimizing algorithms & suggesting elegant solutions, ensuring they stay ahead of the competition"
                    icon={<CompetitiveIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children,
    description
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4  transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 text-center font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <p className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 text-center font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 italic font-mono">
                    {description}
                </p>
            </div>
        </div>
    );
};

const DevIcon = () => {
    return (
        <img src="/dev.png" width={"150"} alt="" />
    );
};
const StartupIcon = () => {
    return (
        <img src="/org.png" width={"150"} alt="" />
    );
};
const CompetitiveIcon = () => {
    return (
        <img src="/cpo.png" width={"150"} alt="" />
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
