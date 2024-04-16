import { SignIn } from "@clerk/clerk-react"

export default function SignInPage() {
    return <div className="grid place-content-center h-screen bg-violet-500/70">
        <SignIn
            afterSignInUrl={"/app"}
            redirectUrl={"/app"}
        />;
    </div>
}