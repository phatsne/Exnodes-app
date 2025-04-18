'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRectangle, Briefcase, CreditCard, UsersThree, IdentificationCard } from "@phosphor-icons/react";

interface Employee {
    id: number;
    code: string;
    name: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    permanent_residence: string;
    temporary_residence: string;
    emailCompany: string;
    position: string;
    department: string;
    lineManager: string;
    "Social Insurance No.": string;
    startDate: string;
    contractType: string;
    contractDate: string;
    monthlySalary: string;
    maritalStatus: string;
    childrens: string;
    bankAccountNumber: string;
    bankAccount: string;
    bankName: string;
    bankBranch: string;
    role: string;
}

export default function EmployeeDetails({ userId }: { userId: string }) {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:3001/employees/${userId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                console.error('Error fetching employee:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchEmployee();
        }
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="flex gap-4 w-full">
            {/* Employee Information */}
            <div className="flex-1 pl-4 max-w-[450px]">
                <div className="rounded-lg mb-4 shadow-lg border border-[#292524]">
                    <Card className="border-none bg-transparent">
                        <CardHeader>
                            <CardTitle className="flex items-center w-auto">
                                <UserRectangle className="w-8 h-8 text-white" />
                                <h2 className="text-lg font-semibold ml-2 text-white">
                                    Employee Information
                                </h2>
                            </CardTitle>
                            <Separator className="bg-[#292524]" />
                        </CardHeader>
                        <div className="px-4 pb-5">
                            <Avatar className="w-20 h-20 border border-[#292524]">
                                <AvatarFallback>
                                    N/A
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-4 text-[#A1A1AA]">
                                <div className="flex flex-col">
                                    <p className="text-sm">Employee Code</p>
                                    <p className="text-[#F2F2F2] text-sm">#{employee.id}</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm">Permanent Residence</p>
                                    <p className="text-white text-sm">{employee.permanent_residence}</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm">Name</p>
                                    <p className="text-white text-sm">{employee.name}</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm">Temporary Residence</p>
                                    <p className="text-white text-sm">{employee.temporary_residence}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 text-[#A1A1AA]">
                                <div className="flex flex-col">
                                    <p className="text-sm">Personal Email</p>
                                    <p className="text-white text-sm">{employee.email}</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm">Phone Number</p>
                                    <p className="text-white text-sm">{employee.phoneNumber}</p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm">Date Of Birth</p>
                                    <p className="text-white text-sm">{employee.dateOfBirth}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Work Information */}
                <div className="rounded-lg shadow-lg border border-[#292524] mb-4">
                    <Card className="w-full border-none bg-transparent text-[#A1A1AA]">
                        <CardHeader>
                            <CardTitle className="flex items-center mb-3 w-auto">
                                <Briefcase className="w-8 h-8 text-white" />
                                <h2 className="text-lg font-semibold ml-2 text-white">Work Information</h2>
                            </CardTitle>
                            <Separator className="bg-[#292524]" />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-y-4">
                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="flex flex-col">
                                    <p className="text-sm">Company Email</p>
                                    <p className="text-white text-sm">{employee.emailCompany}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Start Date</p>
                                    <p className="text-white text-sm">{employee.startDate}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="flex flex-col">
                                    <p className="text-sm">Department</p>
                                    <p className="text-white text-sm">{employee.department}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Contract Type</p>
                                    <p className="text-white text-sm">{employee.contractType}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="flex flex-col">
                                    <p className="text-sm">Position</p>
                                    <p className="text-white text-sm">{employee.position}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Contract Date</p>
                                    <p className="text-white text-sm">{employee.contractDate}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="flex flex-col">
                                    <p className="text-sm">Line Manager</p>
                                    <p className="text-white text-sm">{employee.lineManager}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">Monthly Salary</p>
                                    <p className="text-white text-sm">VND {employee.monthlySalary}</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm">Social Insurance No.</p>
                                <p className="text-white text-sm">{employee["Social Insurance No."]}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Family Bank Info */}
            <div className="flex-1 max-w-[300px]">
                <div className="rounded-lg shadow-lg border border-[#292524] mb-4">
                    <Card className="w-full border-none bg-transparent text-[#A1A1AA]">
                        <CardHeader>
                            <CardTitle className="flex items-center w-auto">
                                <CreditCard className="w-8 h-8 text-white" />
                                <h2 className="text-lg font-semibold ml-2 text-white">Family</h2>
                            </CardTitle>
                            <Separator className="bg-[#292524]" />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-y-4">
                            <div className="flex flex-col">
                                <p className="text-sm">Marital Status</p>
                                <p className="text-white text-sm">{employee.maritalStatus}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm">Children</p>
                                <p className="text-white text-sm">{employee.childrens}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Bank Info */}
                <div className="rounded-lg shadow-lg border border-[#292524]">
                    <Card className="w-full border-none bg-transparent text-[#A1A1AA]">
                        <CardHeader>
                            <CardTitle className="flex items-center w-auto">
                                <UsersThree className="w-8 h-8 text-white" />
                                <h2 className="text-lg font-semibold ml-2 text-white">Bank Info</h2>
                            </CardTitle>
                            <Separator className="bg-[#292524]" />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-y-4">
                            <div className="flex flex-col">
                                <p className="text-sm">Bank Account Number</p>
                                <p className="text-white text-sm">{employee.bankAccountNumber}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm">Bank Account</p>
                                <p className="text-white text-sm">{employee.bankAccount}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm">Bank Name</p>
                                <p className="text-white text-sm">{employee.bankName}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm">Branch</p>
                                <p className="text-white text-sm">{employee.bankBranch}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Identity Card */}
            <div className="flex-1 max-w-[300px]">
                <div className="rounded-lg shadow-lg border border-[#292524] mb-4">
                    <Card className="w-full border-none bg-transparent">
                        <CardHeader>
                            <CardTitle className="flex items-center w-auto">
                                <IdentificationCard className="w-8 h-8 text-white" />
                                <h2 className="text-lg font-semibold ml-2 text-white">Identity Card</h2>
                            </CardTitle>
                            <Separator className="bg-[#292524]" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col pb-5">
                                <p className="text-sm"></p>
                                <p className="text-white text-sm"></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
