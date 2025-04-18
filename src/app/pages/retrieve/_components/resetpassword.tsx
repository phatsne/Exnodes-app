"use client";

import { useState } from "react";
import { Lock, Eye, EyeSlash } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ResetPasswordFormProps {
    email: string;
    code: string;
}

export const ResetPasswordForm = ({ }: ResetPasswordFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        setTimeout(() => {
            window.location.href = "/pages/login";
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-[#A1A1AA] text-center">
                Setup your new password.
            </p>
            <div className="relative w-full">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New Password"
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

            <div className="relative w-full">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]" size={20} />
                <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    className="pl-10 pr-10 bg-transparent border border-[#27272A] text-[#F2F2F2]"
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F2F2F2]"
                >
                    {showConfirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
            </div>

            <Button type="submit" className="w-full bg-[#22C55E] text-black font-semibold">
                Submit
            </Button>
        </form>
    );
};
