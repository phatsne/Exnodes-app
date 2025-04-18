'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function CreateLeaveApplication() {
    return (
        <div className="flex gap-6 py-6 items-center justify-center">
            <Card className="w-[400px] bg-transparent border-[#292524]">
                <CardHeader className="pb-2 text-[#F2F2F2]">
                    <CardTitle className="text-2xl font-semibold mb-1">Application Form</CardTitle>
                    <p className="text-sm">Application Form</p>
                    <Separator className="my-4" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Employee *</label>
                        <Select>
                            <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                <SelectValue placeholder="Select employee" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#121212] border-[#292524]">
                                <SelectItem value="emp1">Phạm Xuân Định</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Day Off Type *</label>
                        <Select>
                            <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                <SelectValue placeholder="Multiple Days" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#121212] border-[#292524]">
                                <SelectItem value="multiple">Multiple Days</SelectItem>
                                <SelectItem value="single">Single Day</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Duration *</label>
                        <Input
                            type="text"
                            value=""
                            className="bg-transparent text-white border-[#292524]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Reason *</label>
                        <Select>
                            <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                <SelectValue placeholder="Select reason" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#121212] border-[#292524]">
                                <SelectItem value="vacation">Vacation</SelectItem>
                                <SelectItem value="sick">Sick Leave</SelectItem>
                                <SelectItem value="personal">Personal Matter</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Leave Type *</label>
                        <Select>
                            <SelectTrigger className="w-full bg-transparent text-white border-[#292524]">
                                <SelectValue placeholder="Select leave type" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#121212] border-[#292524]">
                                <SelectItem value="annual">Annual Leave</SelectItem>
                                <SelectItem value="unpaid">Unpaid Leave</SelectItem>
                                <SelectItem value="sick">Sick Leave</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Description</label>
                        <Input
                            placeholder="Enter description..."
                            className="bg-transparent text-white border-[#292524]"
                        />
                    </div>
                    <Button className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90">
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}