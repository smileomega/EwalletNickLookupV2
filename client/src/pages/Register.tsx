import { useState } from "react";
import { useLocation } from "wouter";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebaseConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Register() {
    const [, navigate] = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setIsLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            try {
                // Save user data to Firestore in 'akun' collection
                await setDoc(doc(db, "akun", user.uid), {
                    email: user.email,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString(),
                });

                navigate("/api-docs");
            } catch (firestoreError) {
                console.error("Firestore error:", firestoreError);
                setError("Failed to save user data. Please try again.");
            }
        } catch (err: any) {
            console.error("Auth error:", err);
            if (err.code === 'auth/email-already-in-use') {
                setError('An account with this email already exists');
            } else if (err.code === 'auth/invalid-email') {
                setError('Invalid email address');
            } else if (err.code === 'auth/operation-not-allowed') {
                setError('Email/password accounts are not enabled');
            } else if (err.code === 'auth/weak-password') {
                setError('Password is too weak');
            } else {
                setError('Failed to create account. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = async () => {
        setError("");
        setIsLoading(true);

        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            try {
                // Create user document in Firestore in 'akun' collection
                await setDoc(doc(db, "akun", user.uid), {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString(),
                });

                navigate("/api-docs");
            } catch (firestoreError) {
                console.error("Firestore error:", firestoreError);
                setError("Failed to save user data. Please try again.");
            }
        } catch (err: any) {
            console.error("Google auth error:", err);
            if (err.code === 'auth/popup-closed-by-user') {
                setError('Registration cancelled');
            } else if (err.code === 'auth/popup-blocked') {
                setError('Popup was blocked by the browser');
            } else if (err.code === 'auth/cancelled-popup-request') {
                setError('Registration cancelled');
            } else {
                setError('Failed to register with Google. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div>
                    <h2 className="text-3xl font-bold text-white text-center">
                        Create an Account
                    </h2>
                    <p className="mt-2 text-center text-gray-400">
                        Join eWalletNickLookup to access the API documentation
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 bg-gray-800 border-gray-700 text-white"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 bg-gray-800 border-gray-700 text-white"
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
                                Confirm Password
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="mt-1 bg-gray-800 border-gray-700 text-white"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>

                    {error && (
                        <Alert variant="destructive" className="bg-red-900/50 border-red-800">
                            <AlertCircle className="h-4 w-4 text-red-400" />
                            <AlertDescription className="text-white">{error}</AlertDescription>
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Creating account...
                            </div>
                        ) : (
                            "Register with Email"
                        )}
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        onClick={handleGoogleRegister}
                        className="w-full bg-white text-gray-900 hover:bg-gray-100"
                        disabled={isLoading}
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </Button>

                    <p className="text-center text-gray-400">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="text-blue-400 hover:text-blue-300"
                        >
                            Login here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
} 