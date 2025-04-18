"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key } from "@phosphor-icons/react";

interface VerifyFormProps {
    goToNextStep: (nextStep: "resetPassword", code: string) => void;
    email: string;
}

export const VerifyForm = ({ goToNextStep, email }: VerifyFormProps) => {
    const [OTPCode] = useState("060423");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const code = formData.get("code") as string;

        if (code !== OTPCode) {
            setError("Invalid OTP. Please try again.");
            return;
        }

        setError("");
        setTimeout(() => {
            goToNextStep("resetPassword", code);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-[#A1A1AA] text-center">
                Please enter the 6-digit code sent to <span className="font-medium">{email}</span>.
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
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button type="submit" className="w-full bg-[#22C55E] text-black font-semibold">
                Verify
            </Button>
        </form>
    );
};
