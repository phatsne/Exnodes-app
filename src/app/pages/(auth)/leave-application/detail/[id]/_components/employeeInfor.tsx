/* eslint-disable prettier/prettier */
"use client"

import React, { useState, useEffect } from "react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { getEmployeeProfile } from "../leaveInfor"
import { GetEmployeeProfile } from "../leaveInfor.interface"

const EmployeeInformation = () => {
  const [profile, setProflie] = useState<GetEmployeeProfile | null>(null)

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeProfile()
        console.log("Employee Data:", data)
        setProflie(data)
      } catch (error) {
        console.error("Error fetching profile data:", error)
      }
    }
    fetchEmployee()
  }, [])

  const employeeInfo = [
    {
      label: "Name",
      value: `${profile?.first_name || ""} ${profile?.last_name || ""}`,
    },
    {
      label: "Department",
      value: profile?.department?.name || "N/A",
    },
    {
      label: "Position",
      value: profile?.position?.name || "N/A",
    },
    {
      label: "Days Off Left",
      value: String(profile?.day_off_left || "N/A"),
    },
    {
      label: "Total Day Off",
      value: profile?.total_day_off || "N/A",
    },
    {
      label: "Last Day off",
      value: profile?.total_day_off || "N/A",
    },
  ]

  return (
    <div className="min-w-[300px]">
      <Card className="bg-transparent rounded-lg shadow-lg border">
        <CardHeader className="">
          <CardTitle className="text-2xl font-semibold mb-1 ">
            Employee Information
          </CardTitle>
          <p className="text-sm">Employee Information.</p>
        </CardHeader>
        <Separator className="mb-5" />
        <CardContent className="flex flex-col">
          <Avatar className="w-20 h-20 border">
            <AvatarImage src={profile?.avatar} alt="User Avatar" />
            <AvatarFallback>N/A</AvatarFallback>
          </Avatar>
          <Table className="w-full text-sm">
            <TableBody>
              {employeeInfo.map((item, index) => (
                <TableRow key={index} className="border-none">
                  <TableCell className=" w-full flex flex-col justify-start">
                    <span className="mb-2 font-semibold">{item.label}</span>
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
