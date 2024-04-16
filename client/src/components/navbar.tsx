import { Link } from "react-router-dom";
import { UserButton, useSession } from "@clerk/clerk-react";

export const Navbar = () => {

    const { session, isSignedIn, isLoaded } = useSession();

    return (
        <nav className="bg-black blur-lg z-[1000] p-4 sticky top-0 mt-0 flex flex-row items-center justify-between">
            <div className="max-w-7xl flex justify-start gap-3 items-center">
                <img className="size-10" src="./ss.png" alt="logo" />
                <div className="text-emerald-500 font-bold text-4xl font-mono">Quill</div>
            </div>
            <div className='flex justify-end'>
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
                        <UserButton afterSignOutUrl='/sign-in' />
                    </div>
                )}
            </div>
        </nav>
    );
};