"use client"

import { Users } from "@phosphor-icons/react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { MonthlyEarnings } from "./_components/MonthlyEarnings"
import { RecentLeave } from "./_components/RecentLeave"

const Dashboard = () => {
    return (
        <div className="min-h-screen p-4">
            <div className="mb-6">
                <div className="inline-flex gap-4 overflow-hidden h-[53px]">
                    <button className="px-4 py-2 ">Overview</button>
                    <button className="px-4 py-2 ">Projects</button>
                    <button className="px-4 py-2 ">Notifications</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                    "Total Members",
                    "Leave Applications",
                    "Project In Progress",
                    "Quotation",
                ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-800 bg-[#18181B]">
                        <div className="rounded-lg flex items-center justify-between pb-5">
                            <p className="text-[14px] text-gray-300">{item}</p>
                            <Users className="text-gray-300" />
                        </div>
                        <div className="text-[24px] text-white">27</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
                <Card className="col-span-4 bg-black border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-white">Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MonthlyEarnings />
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-black border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-white">Recent Leave Applications</CardTitle>
                        <CardDescription className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur. Luctus in orci aliquet
                            urna.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentLeave />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard
