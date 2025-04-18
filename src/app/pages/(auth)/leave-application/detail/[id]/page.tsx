"use client"

import LeaveInfor from "./_components/leaveInfor"
import Employeeinfor from "./_components/employeeInfor"
import { Separator } from "@/components/ui/separator"
import React from "react"

const ApplicationInfor = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Create New Application</h1>
            </div>
            <Separator className="my-5" />
            <div className="flex  gap-4">
                <LeaveInfor />
                <Employeeinfor />
            </div>
        </div>
    )
}

export default ApplicationInfor
