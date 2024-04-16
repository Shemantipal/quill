import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroLandingPage() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                With insomnia, nothing is real. Everything is far away. 
                <br />
                <Highlight className="text-white bg-gradient-to-r from-indigo-500 to-purple-500">
                Everything is a copy of a copy of a copy.
                </Highlight>
                <br />
               
            </motion.h1>
        </HeroHighlight>
    );
}
