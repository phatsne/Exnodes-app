"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Key } from "@phosphor-icons/react"

interface VerifyFormProps {
    goToNextStep: (nextStep: "resetPassword", code: string) => void
    email: string
}

export const VerifyForm = ({ goToNextStep }: VerifyFormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const code = formData.get("code") as string
        setTimeout(() => {
            goToNextStep("resetPassword", code)
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-[#A1A1AA] text-center">
                Please enter 6 digits code has been sent to your email.
            </p>
            <div className="relative w-full">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                <Input
                    type="text"
                    name="code"
                    placeholder="Enter OTP"
                    className="pl-10 bg-transparent border border-[#27272A] text-[#F2F2F2]"
                    required
                />
            </div>
            <Button type="submit" className="w-full bg-[#22C55E] text-black font-semibold">
                Verify
            </Button>
        </form>
    )
}
