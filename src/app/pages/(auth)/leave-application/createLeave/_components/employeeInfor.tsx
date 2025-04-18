"use client"

import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const EmployeeInformation = () => {
    const profile = {
        first_name: "John",
        last_name: "Doe",
        department_id: "Engineering",
        position_id: "Frontend Developer",
        day_off_left: 5,
        total_day_off: 15,
        avatar: "",
    }

    const employeeInfo = [
        {
            label: "Name",
            value: `${profile.first_name} ${profile.last_name}`,
        },
        {
            label: "Department",
            value: profile.department_id,
        },
        {
            label: "Position",
            value: profile.position_id,
        },
        {
            label: "Days Off Left",
            value: String(profile.day_off_left),
        },
        {
            label: "Total Day Off In 2025",
            value: String(profile.total_day_off),
        },
        {
            label: "Last Day off",
            value: "06/04/2025",
        },
    ]

    return (
        <div className="min-w-[300px] py-6">
            <Card className="bg-transparent rounded-lg shadow-lg border border-[#292524] ">
                <CardHeader className="pb-2 text-[#F2F2F2]">
                    <CardTitle className="text-2xl font-semibold mb-1 ">
                        Employee Information
                    </CardTitle>
                    <p className="text-sm">Employee Information.</p>
                    <Separator className="my-4" />
                </CardHeader>
                <CardContent className="flex flex-col">
                    <Avatar className="w-20 h-20 border">
                        <AvatarImage src={profile.avatar} alt="User Avatar" />
                        <AvatarFallback>N/A</AvatarFallback>
                    </Avatar>
                    <Table className="w-full text-sm mt-4 ">
                        <TableBody>
                            {employeeInfo.map((item, index) => (
                                <TableRow key={index} className="border-none">
                                    <TableCell className="w-full flex flex-col justify-start pb-0">
                                        <span className="mb-2 font-semibold text-[#F2F2F2] hover:bg-transparent">
                                            {item.label}
                                        </span>
                                        <span className="font-medium text-gray-400">
                                            {item.value}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default EmployeeInformation
