import { Link } from "react-router-dom";
import { UserButton, useSession } from "@clerk/clerk-react";
export const Navbar = () => {

    const { session, isSignedIn, isLoaded } = useSession();

    return (
        <nav className="bg-emerald-600 blur-lg z-[1000] p-4 sticky top-0 mt-0 flex flex-row items-center justify-between">
            <div className="max-w-7xl flex justify-start gap-3 items-center">
                <img className="size-10" src="./ss.png" alt="logo" />
                <div className="text-black font-bold hover:italic text-3xl font-space">Quill</div>
            </div>
            <div className='flex justify-end gap-4'>
                <a href="https://github.com/Shemantipal/quill" target="_blank">
                    <button className="px-8 py-2 rounded-full relative bg-slate-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">
                            Github
                        </span>
                    </button>
                </a>
                {isLoaded && !isSignedIn && (
                    <Link to="/signin">
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Sign In
                        </button>
                    </Link>
                )}

                {isLoaded && session?.user && (
                    <div className="flex justify-end items-center gap-4 font-space">
                        <span className="text-white">Hello {session.user.fullName}!</span>
                        <UserButton afterSignOutUrl='/signin' />
                    </div>
                )}
            </div>
        </nav>
    );
};