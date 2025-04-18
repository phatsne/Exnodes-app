"use client";

import React from "react";
import { At } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailFormProps {
    goToNextStep: (nextStep: "enterOTP", email: string, otpCode: string) => void;
}

export const EmailForm = ({ goToNextStep }: EmailFormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;

        // Tạo mã OTP ngẫu nhiên (6 chữ số)
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        // In ra console để test demo (giả sử là gửi mail)
        console.log("OTP Code đã gửi đến email:", otpCode);

        setTimeout(() => {
            goToNextStep("enterOTP", email, otpCode);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-[#A1A1AA] text-center">
                Please enter your email address
            </p>
            <div className="relative w-full">
                <At className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="pl-10 bg-transparent border border-[#27272A] text-[#F2F2F2]"
                    required
                />
            </div>
            <Button type="submit" className="w-full bg-[#22C55E] text-black font-semibold">
                Next
            </Button>
        </form>
    );
};
