'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    employee: z.string().min(1, "Employee is required"),
    dayOffType: z.string().min(1, "Day Off Type is required"),
    duration: z.string().min(1, "Duration is required"),
    reason: z.string().min(1, "Reason is required"),
    leaveType: z.string().min(1, "Leave Type is required"),
    description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const getNextId = (existingLeave: any[]) => {
    return existingLeave.length > 0
        ? Math.max(...existingLeave.map((item) => item.id)) + 1
        : 1;
};

const CreateLeaveApplication = () => {
    const [leaveApplications, setLeaveApplications] = useState<any[]>([]);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employee: "",
            dayOffType: "",
            duration: "",
            reason: "",
            leaveType: "",
            description: "",
        },
    });

    // Lấy leave hiện có từ localStorage (giả backend)
    useEffect(() => {
        const storedLeaves = localStorage.getItem("leave-applications");
        if (storedLeaves) {
            setLeaveApplications(JSON.parse(storedLeaves));
        }
    }, []);

    const onSubmit = (data: FormData) => {
        const newApplication = {
            id: getNextId(leaveApplications),
            ...data,
        };

        const updatedApplications = [...leaveApplications, newApplication];
        setLeaveApplications(updatedApplications);
        localStorage.setItem("leave-applications", JSON.stringify(updatedApplications));

        console.log("Leave Application Created:", newApplication);

        alert("Leave Application Created Successfully!");
        router.push("/leave-applications");
    };

    return (
        <div className="flex gap-6 py-6 items-center justify-center">
            <Card className="w-[400px] bg-transparent border-[#292524]">
                <CardHeader className="pb-2 text-[#F2F2F2]">
                    <CardTitle className="text-2xl font-semibold mb-1">Application Form</CardTitle>
                    <p className="text-sm">Application Form</p>
                    <Separator className="my-4" />
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Employee *</label>
                            <Select onValueChange={(value) => setValue("employee", value)}>
                                <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                    <SelectValue placeholder="Select employee" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#292524]">
                                    <SelectItem value="Phạm Xuân Định">Phạm Xuân Định</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.employee && (
                                <p className="text-sm text-red-500">{errors.employee.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Day Off Type *</label>
                            <Select onValueChange={(value) => setValue("dayOffType", value)}>
                                <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#292524]">
                                    <SelectItem value="multiple">Multiple Days</SelectItem>
                                    <SelectItem value="single">Single Day</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.dayOffType && (
                                <p className="text-sm text-red-500">{errors.dayOffType.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Duration *</label>
                            <Input
                                type="text"
                                {...register("duration")}
                                placeholder="e.g., 2025-04-20 to 2025-04-22"
                                className="bg-transparent text-white border-[#292524]"
                            />
                            {errors.duration && (
                                <p className="text-sm text-red-500">{errors.duration.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Reason *</label>
                            <Select onValueChange={(value) => setValue("reason", value)}>
                                <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                    <SelectValue placeholder="Select reason" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#292524]">
                                    <SelectItem value="vacation">Vacation</SelectItem>
                                    <SelectItem value="sick">Sick Leave</SelectItem>
                                    <SelectItem value="personal">Personal Matter</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.reason && (
                                <p className="text-sm text-red-500">{errors.reason.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Leave Type *</label>
                            <Select onValueChange={(value) => setValue("leaveType", value)}>
                                <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                    <SelectValue placeholder="Select leave type" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#292524]">
                                    <SelectItem value="annual">Annual Leave</SelectItem>
                                    <SelectItem value="unpaid">Unpaid Leave</SelectItem>
                                    <SelectItem value="sick">Sick Leave</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.leaveType && (
                                <p className="text-sm text-red-500">{errors.leaveType.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Description</label>
                            <Input
                                placeholder="Enter description..."
                                {...register("description")}
                                className="bg-transparent text-white border-[#292524]"
                            />
                        </div>

                        <Button type="submit" className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateLeaveApplication;
