"use client"

import { Separator } from "@/components/ui/separator"
import ApplicationForm from "./_components/applicationForm"
import EmployeeInformation from "./_components/employeeInfor"

const Application = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Create Leave Appliaction</h1>
            </div>
            <Separator className="my-4" />
            <div className="flex gap-4 justify-center">
                <ApplicationForm />
                <EmployeeInformation />
            </div>
        </div>
    )
}

export default Application