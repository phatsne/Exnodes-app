"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AuthLayout from "../auth-layout"
import { EmailForm } from "./_components/emailform"
import { VerifyForm } from "./_components/verifyform"
import { ResetPasswordForm } from "./_components/resetpassword"

type CurrentStep = "enterEmail" | "enterOTP" | "resetPassword"

const Retrieve = () => {
    const [currentStep, setCurrentStep] = useState<CurrentStep>("enterEmail")
    const [email, setEmail] = useState<string>("")
    const [code, setCode] = useState<string>("")

    const goToNextStep = (nextStep: CurrentStep, email?: string, code?: string) => {
        if (email) setEmail(email)
        if (code) setCode(code)
        setCurrentStep(nextStep)
    }

    const steps = {
        enterEmail: <EmailForm goToNextStep={goToNextStep} />,
        enterOTP: <VerifyForm goToNextStep={goToNextStep} email={email} />,
        resetPassword: <ResetPasswordForm email={email} code={code} />
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
                <div className="max-w-[300px] mx-auto flex flex-col items-center justify-center mb-6 space-y-4">
                    <h1 className="text-white text-3xl font-bold">Retrieve Password</h1>
                    <div className="w-full">
                        {steps[currentStep]}
                    </div>
                </div>
                <div className="text-center text-sm text-[#A1A1AA]">
                    <Link className="hover:underline" href="/pages/login">
                        Back to Login
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Retrieve
