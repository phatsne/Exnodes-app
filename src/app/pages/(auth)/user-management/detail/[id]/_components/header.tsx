"use client"

import { Power, ArrowCounterClockwise, NotePencil } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation";

const Header = () => {
    return (
        <div className="flex items-center justify-between border-none">
            <div className="space-x-4">
                <Button className="border border-[#27272A] text-white hover:bg-[#22C55E] hover:text-[#052E16] hover:border-[#22C55E] transition-colors">
                    <NotePencil className="mr-2 h-4 w-4" />
                    Edit Information
                </Button>
                <Button className="border border-[#27272A] text-white hover:bg-[#22C55E] hover:text-[#052E16] hover:border-[#22C55E] transition-colors">
                    <ArrowCounterClockwise className="mr-2 h-4 w-4" />
                    Reset User Password
                </Button>
                <Button className="border border-[#27272A] text-white hover:bg-[#22C55E] hover:text-[#052E16] hover:border-[#22C55E] transition-colors">
                    <Power className="mr-2 h-4 w-4" />
                    Deactivate User
                </Button>
            </div>
        </div>
    )
}

export default Header