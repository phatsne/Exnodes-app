'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Gear, SlidersHorizontal, PlusCircle } from '@phosphor-icons/react';
import { DatePickerWithRange } from "@/components/date-range-picker";

interface LeaveApplication {
    id: number;
    code: string;
    name: string;
    position: string;
    department: string;
    submissionDate: string;
    leaveType: string;
    status: string;
    duration: string;
    dayOff: string;
}

const LeaveApplicationList = () => {
    const [leaveApplications, setLeaveApplications] = useState<LeaveApplication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaveApplications = async () => {
            try {
                const response = await fetch('http://localhost:3001/leave-applications');
                const data = await response.json();
                setLeaveApplications(data);
            } catch (error) {
                console.error('Error fetching leave applications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveApplications();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'text-[#052E16] bg-[#22C55E] p-1 rounded-full';
            case 'pending':
                return 'text-[#052E16] bg-[#422006] p-1 rounded-full';
            case 'rejected':
                return 'text-[#052E16] bg-[#450A0A] p-1 rounded-full';
            default:
                return '';
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between space-x-4 mb-6">
                <div className="relative flex-1 max-w-[800px] flex">
                    <Input
                        placeholder="Search by name, email, phone number..."
                        className="w-full bg-transparent border-[#27272A]"
                    />
                    <Button variant="outline" className="bg-transparent ml-2 border-[#27272A]">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Leave Type
                    </Button>
                    <Button variant="outline" className="bg-transparent ml-2 border-[#27272A]">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Status
                    </Button>
                    <DatePickerWithRange className="ml-2" />
                </div>

                <div className="flex items-center space-x-2">
                    <Button variant="outline" className="bg-transparent border-[#27272A]">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        View Settings
                    </Button>
                    <Button className="bg-[#22C55E]">
                        Apply Leave
                    </Button>
                </div>
            </div>

            <div className="rounded-md border border-[#27272A]">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent [&>th]:px-2 [&>th]:py-2">
                            <TableHead>Employee Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Submission Date</TableHead>
                            <TableHead>Leave Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Day Off</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leaveApplications.map((item) => (
                            <TableRow key={item.id} className="hover:bg-transparent [&>td]:px-2 [&>td]:py-2">
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.position}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>{item.submissionDate}</TableCell>
                                <TableCell>{item.leaveType}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </TableCell>
                                <TableCell>{item.duration}</TableCell>
                                <TableCell>{item.dayOff}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <Gear className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default LeaveApplicationList;