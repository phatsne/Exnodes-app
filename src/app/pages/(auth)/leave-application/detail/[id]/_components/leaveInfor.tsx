/* eslint-disable prettier/prettier */
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getLeaveInfor } from "../leaveInfor"
import { LeaveApplicationInfor } from "../leaveInfor.interface"
import { Badge } from "@/components/ui/badge"

const LeaveInfor = () => {
  const [leaveApplicationInfor, setLeaveApplicationInfor] =
    useState<LeaveApplicationInfor | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    return `${formattedDate} - ${formattedTime}`
  }
  const applicationInfor = [
    { label: "Day Off Type", value: leaveApplicationInfor?.day_off_day },
    {
      label: "Duration",
      value: `${leaveApplicationInfor?.start_date} - ${leaveApplicationInfor?.end_date}`,
    },
    { label: "Leave Type", value: leaveApplicationInfor?.leave_type },
    { label: "Reason", value: leaveApplicationInfor?.reason },
    { label: "Description", value: leaveApplicationInfor?.description },
    {
      label: "Submission Date",
      value: formatDate(leaveApplicationInfor?.created_at),
    },
  ]

  const status = leaveApplicationInfor?.status || "N/A"
  const variant =
    status === "APPROVED"
      ? "default"
      : status === "PENDING"
        ? "outline"
        : "destructive"

  const { id } = useParams()

  useEffect(() => {
    const fetchLeaveInfor = async () => {
      try {
        setLoading(true)
        const data = await getLeaveInfor(id as string)
        setLeaveApplicationInfor(data)
      } catch (err: any) {
        console.error(err)
        setError("No Application Have Id:" + id)
      } finally {
        setLoading(false)
      }
    }
    fetchLeaveInfor()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="min-w-[300px]">
      <Card className="bg-transparent rounded-lg shadow-lg border">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl font-semibold mb-1">
            Application Form
          </CardTitle>
          <p className="text-sm">Application form.</p>
          <Separator />
        </CardHeader>
        <CardContent className="pt-0">
          <Table className="w-full text-sm">
            <TableBody>
              {applicationInfor.map((item, index) => (
                <TableRow key={index} className="border-none">
                  <TableCell className=" w-full flex flex-col justify-start pt-5">
                    <span className="mb-2">{item.label}</span>
                    <span className="font-medium text-gray-400">
                      {item.value}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
              <div className="flex flex-col pl-4">
                <span className="mb-2">Application Status</span>
                <Badge variant={variant} className="w-[80px] text-center">
                  {status}
                </Badge>
              </div>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaveInfor
