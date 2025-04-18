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
    TableRow,
} from "@/components/ui/table";
import { FadersHorizontal, Gear, PlusCircle } from '@phosphor-icons/react';
import { DatePickerWithRange } from "@/components/date-range-picker";

interface CheckInOut {
    id: number;
    employeeCode: string;
    name: string;
    position: string;
    department: string;
    day: string;
    date: string;
    checkIn: string;
    checkOut: string;
    late: number;
    early: number;
}

const CheckInOutList = () => {
    const [checkInOuts, setCheckInOuts] = useState<CheckInOut[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCheckInOuts = async () => {
            try {
                const response = await fetch('http://localhost:3001/checkInOuts');
                const data = await response.json();
                setCheckInOuts(data);
            } catch (error) {
                console.error('Error fetching check-in/out data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCheckInOuts();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between space-x-4 mb-6">
                <div className="relative flex-1 max-w-[800px] flex ">
                    <Input
                        placeholder="Search by name, email, phone number..."
                        className="w-full bg-transparent border-[#27272A]"
                    />
                    <Button variant="outline" className="bg-transparent ml-2 border-[#27272A]">
                        <PlusCircle className="h-4 w-4" />
                        Position
                    </Button>
                    <DatePickerWithRange
                        className="ml-2"
                    />
                </div>
                <div className="flex items-center space-x-2 ">
                    <Button variant="outline" className="bg-transparent border-[#27272A]">
                        <FadersHorizontal className="h-4 w-4 mr-2" />
                        View Settings
                    </Button>
                    <Button className="bg-[#22C55E] text-black">
                        Add New
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
                            <TableHead>Day</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Check In</TableHead>
                            <TableHead>Check Out</TableHead>
                            <TableHead>Late</TableHead>
                            <TableHead>Early</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {checkInOuts.map((item) => (
                            <TableRow key={item.id} className="hover:bg-transparent [&>td]:px-2 [&>td]:py-2">
                                <TableCell>{item.employeeCode}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.position}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>{item.day}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>
                                    <span className="text-[#052E16] bg-[#22C55E] p-1 rounded-full">
                                        {item.checkIn}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-[#052E16] bg-[#22C55E] p-1 rounded-full">
                                        {item.checkOut}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center">{item.late}</TableCell>
                                <TableCell className="text-center">{item.early}</TableCell>
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

export default CheckInOutList;