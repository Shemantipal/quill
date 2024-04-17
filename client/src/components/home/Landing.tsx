import { Link } from "react-router-dom";
import { people } from "../../utils/author";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterLandingPage() {
    const words = [
        {
            text: "AI - Powered",
        },
        {
            text: "Code",
        },
        {
            text: "Critic",
            className: "text-emerald-500 dark:text-emerald-500",
        }
    ];
    return (
        <div className="landing-page flex flex-col font-space items-center justify-center h-[50rem] ">
            <TypewriterEffect words={words} />
            <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
                Elevate Your Dev Game!
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                <Link to="/app">
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 p-3 border-dashed">
                            <span>
                                Dive In
                            </span>
                            <svg
                                fill="none"
                                height="16"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
