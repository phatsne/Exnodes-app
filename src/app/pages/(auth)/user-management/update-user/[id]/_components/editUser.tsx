'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Briefcase, CreditCard, IdentificationCard, UserRectangle, UsersThree } from '@phosphor-icons/react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const formSchema = z.object({
    id: z.string().min(1, { message: "Please enter code" }),
    name: z.string().min(1, { message: "Please enter name" }),
    email: z.string().email({ message: "Please enter valid email" }),
    phone: z.string().min(1, { message: "Please enter phone number" }),
    dateOfBirth: z.string().min(1, { message: "Please enter date of birth" }),
    permanent_residence: z.string().min(1, { message: "Please enter permanent residence" }),
    temporary_residence: z.string().min(1, { message: "Please enter temporary residence" }),
    company_email: z.string().email({ message: "Please enter valid company email" }),
    line_manager: z.string().min(1, { message: "Please select line manager" }),
    department: z.string().min(1, { message: "Please select department" }),
    position: z.string().min(1, { message: "Please select position" }),
    contractType: z.string().min(1, { message: "Please select contract type" }),
    contractDate: z.string().min(1, { message: "Please enter contract date" }),
    startDate: z.string().min(1, { message: "Please enter start date" }),
});

export default function EditUser() {
    const router = useRouter();
    const params = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            name: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            permanent_residence: "",
            temporary_residence: "",
            company_email: "",
            line_manager: "",
            department: "",
            position: "",
            contractType: "",
            contractDate: "",
            startDate: ""
        },
        mode: "onSubmit"
    });

    useEffect(() => {
        const fetchUser = async () => {
            console.log('Fetching user data...');
            try {
                const response = await fetch(`http://localhost:3001/employees/${params.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }

                const user = await response.json();
                console.log('Fetched user data:', user);

                // Reset form với dữ liệu user
                form.reset({
                    id: user.id || "",
                    name: user.name || "",
                    email: user.email || "",
                    phone: user.phone || "",
                    dateOfBirth: user.dateOfBirth || "",
                    permanent_residence: user.permanent_residence || "",
                    temporary_residence: user.temporary_residence || "",
                    company_email: user.company_email || "",
                    line_manager: user.line_manager || "",
                    department: user.department || "",
                    position: user.position || "",
                    contractType: user.contractType || "",
                    contractDate: user.contractDate || "",
                    startDate: user.startDate || ""
                });
            } catch (error) {
                console.error('Error fetching user:', error);
                alert('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchUser();
        }
    }, [params.id, form]);

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log('Form data being submitted:', data);
        try {
            setIsSubmitting(true);
            const response = await fetch(`http://localhost:3001/employees/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            const updatedUser = await response.json();
            console.log('User updated successfully:', updatedUser);
            router.push('/pages/user-management/list');
            router.refresh();
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex p-4">
            <div className="w-full max-w-[600px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 bg-black w-full"
                    >
                        <div className="flex gap-4 w-full">
                            {/* Employee Information */}
                            <div className="flex-1 pl-4 min-w-[450px]">
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
                                            <div className="grid grid-cols-2 gap-4 text-[#A1A1AA]">
                                                <FormField
                                                    control={form.control}
                                                    name="id"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Employee Code</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Employee Code" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="permanent_residence"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Permanent Residence</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter Permanent Residence"
                                                                    {...field}
                                                                    onChange={(e) => {
                                                                        field.onChange(e);
                                                                        console.log('Permanent residence changed:', e.target.value);
                                                                    }}
                                                                    value={field.value || ""}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Name" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="temporary_residence"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Temporary Residence</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter Temporary Residence"
                                                                    {...field}
                                                                    onChange={(e) => {
                                                                        field.onChange(e);
                                                                        console.log('Temporary residence changed:', e.target.value);
                                                                    }}
                                                                    value={field.value || ""}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-y-4 text-[#A1A1AA] pt-2">
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Personal Email</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Email" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Phone Number</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Phone Number" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="dateOfBirth"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Date Of Birth</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="date"
                                                                    placeholder="Enter Date Of Birth"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
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
                                                <FormField
                                                    control={form.control}
                                                    name="company_email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Company Email</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Company Email" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="startDate"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Start Date</FormLabel>
                                                            <FormControl>
                                                                <Input type="date" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-8">
                                                <FormField
                                                    control={form.control}
                                                    name="department"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Department</FormLabel>
                                                            <Select
                                                                onValueChange={field.onChange}
                                                                value={field.value || ""}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select Department" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="IT">IT</SelectItem>
                                                                    <SelectItem value="HR">HR</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="contractType"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Contract Type</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Contract Type" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-8">
                                                <FormField
                                                    control={form.control}
                                                    name="position"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Position</FormLabel>
                                                            <Select
                                                                onValueChange={field.onChange}
                                                                value={field.value || ""}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select Position" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="FE">FE</SelectItem>
                                                                    <SelectItem value="BE">BE</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="contractDate"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Contract Date</FormLabel>
                                                            <FormControl>
                                                                <Input type="date" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-8">
                                                <FormField
                                                    control={form.control}
                                                    name="line_manager"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Line Manager</FormLabel>
                                                            <Select
                                                                onValueChange={field.onChange}
                                                                value={field.value || ""}
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select line manager" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="Manager 1">Danny Trần</SelectItem>
                                                                    <SelectItem value="Manager 2">Manager 2</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            
                            {/* Family Bank Info */}
                            <div className="flex-1 min-w-[240px]">
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
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Identity Card */}
                            <div className="flex-1 min-w-[240px]">
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
                        <div className="flex justify-end px-4 py-4">
                            <Button
                                type="submit"
                                className="bg-[#22C55E] text-[#052E16] hover:bg-[#22C55E]/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
