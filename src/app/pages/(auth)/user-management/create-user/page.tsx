'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    first_name: z.string().min(1, { message: "Please enter first name" }),
    last_name: z.string().min(1, { message: "Please enter last name" }),
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
})

// Thêm function để lấy ID tiếp theo
const getNextId = (existingUsers: any[]) => {
    console.log("existingUsers", existingUsers)
    return existingUsers.length + 1;
    // const maxId = Math.max(...existingUsers.map(user => Number(user.id)));
    // return maxId >= 999 ? 100 : maxId + 1;
};

const CreateUser = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
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
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("onSubmit", values)
        try {
            // Lấy danh sách users hiện tại
            const checkResponse = await fetch('http://localhost:3001/employees');
            const existingUsers = await checkResponse.json();

            // Tạo ID mới
            const newId = getNextId(existingUsers);

            const response = await fetch('http://localhost:3001/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: newId,
                    ...values
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to create user')
            }

            router.push('/pages/user-management/list')
            router.refresh()
        } catch (error) {
            console.error('Error creating user:', error)
        }
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-[600px] mx-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 justify-center bg-black w-full">
                        {/* Employee Information */}
                        <Card className="bg-transparent text-white border-[#27272A]">
                            <CardHeader>
                                <CardTitle>Employee Information</CardTitle>
                                <Separator className="mt-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter first name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter last name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
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
                                                    <Input
                                                        placeholder="Enter your phone number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
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
                                <FormField
                                    control={form.control}
                                    name="permanent_residence"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Permanent Residence</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter permanent_residence" {...field} />
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
                                                <Input placeholder="Enter address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                        <Card className="bg-transparent text-white border-[#27272A]">
                            <CardHeader>
                                <CardTitle>Work Information</CardTitle>
                                <Separator className="mt-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
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
                                        name="line_manager"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Line Manager</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
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
                                    <FormField
                                        control={form.control}
                                        name="department"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Department</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
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
                                        name="position"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Position</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Department" />
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
                                        name="contractType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contract Type</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Contract Type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Part-time">Part-time</SelectItem>
                                                        <SelectItem value="Full-time">Full-time</SelectItem>
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
                                                    <Input
                                                        type="date"
                                                        placeholder="Enter Contract Date"
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
                        <Button
                            type="submit"
                            className="bg-[#22C55E] text-[#052E16] w-full"
                            onClick={() => console.log("Button clicked")}>
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateUser
