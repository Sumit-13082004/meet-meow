"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    // const passwordsMatch =
    //     confirmPassword.length > 0 && password === confirmPassword


    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#035efc]/10 to-white px-6 py-16">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex w-220 h-150 max-w-full bg-white rounded-2xl shadow-xl overflow-hidden"
            >

                {/* LEFT SIDE - FORM */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-1/2 p-8"
                >
                    <h1 className="text-3xl font-bold text-[#035efc] mb-6 text-center">
                        Welcome Back
                    </h1>

                    <form className="space-y-4">

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="you@email.com"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035efc]"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035efc]"
                            />
                        </div>

                        {/* SIGNUP BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-[#035efc] text-white py-2 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* DIVIDER */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* SOCIAL LOGIN */}
                    <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 cursor-pointer">
                            <Mail size={18} />
                            Google
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 cursor-pointer">
                            <Github size={18} />
                            GitHub
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-[#035efc] font-medium hover:underline"
                        >
                            Create a Account
                        </Link>
                    </p>
                </motion.div>


                {/* RIGHT SIDE - IMAGE */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-1/2 flex items-center justify-center"
                >
                    <Image
                        src="/signup/meet-meow-side.jpeg"
                        alt="App preview"
                        width={600}
                        height={600}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </motion.div>

            </motion.div>
        </div>
    )
}