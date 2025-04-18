"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { At, Lock, Eye, EyeSlash } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AuthLayout from "../auth-layout"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            const response = await fetch(
                `http://localhost:3001/users?email=${email}&password=${password}`
            )

            const users = await response.json()

            if (users.length > 0) {
                // Giả lập token và lưu lại
                const fakeToken = "your_fake_token_here"
                localStorage.setItem("token", fakeToken)
                router.push("/pages/user-management/list")
            } else {
                setError("Invalid email or password")
            }
        } catch (err) {
            console.error("Login error:", err)
            setError("An error occurred. Please try again.")
        }
    }

    return (
        <AuthLayout>
            <div className="max-w-[300px] h-auto w-full mx-auto">
                <Image
                    src="/images/Logo-Exnodes.svg"
                    alt="Exnodes Logo"
                    className="mx-auto mb-10"
                    width={250}
                    height={50}
                />
                <form onSubmit={handleSubmit} className="max-w-[300px] mx-auto flex flex-col items-center justify-center mb-6 space-y-4">
                    <h1 className="text-white text-3xl font-bold">Sign In</h1>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="relative w-full">
                        <At className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-transparent border border-[#27272A] text-[#F2F2F2]"
                            required
                        />
                    </div>

                    <div className="relative w-full">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 bg-transparent border border-[#27272A] text-[#F2F2F2]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]"
                        >
                            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <Button type="submit" className="w-full bg-[#22C55E] text-black font-semibold">
                        Submit
                    </Button>
                </form>
                <div className="text-center text-sm text-[#A1A1AA]">
                    <Link className="hover:underline" href="/pages/retrieve">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login