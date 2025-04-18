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
import { FadersHorizontal, Gear, PlusCircle, Pencil, Trash, Eye } from '@phosphor-icons/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';

interface Employees {
    id: number;
    code: string;
    name: string;
    email: string;
    dateOfBirth: string;
    role: string;
    department: string;
    position: string;
    contractType: string;
    contractDate: string;
}

const UserList = () => {
    const router = useRouter();
    const [users, setUsers] = useState<Employees[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/employees');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleView = (id: number) => {
        router.push(`/pages/user-management/detail/${id}`);
    };

    const handleEdit = (id: number) => {
        router.push(`/pages/user-management/update-user/${id}`);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                console.log('Deleting user with ID:', id);
                const response = await fetch(`http://localhost:3001/employees/${id}`, {
                    method: 'DELETE',
                });
                console.log('Response status:', response.status);
                if (response.ok) {
                    console.log('User deleted successfully');
                    fetchUsers();
                } else {
                    const errorData = await response.text();
                    console.error('Failed to delete user. Server response:', errorData);
                }
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between space-x-4 mb-6">
                <div className="relative flex-1 max-w-[6 20px] flex ">
                    <Input
                        placeholder="Search by name, email, phone number..."
                        className="w-full bg-transparent border-[#27272A]"
                    />
                    <Button variant="outline" className="bg-transparent ml-2 border-[#27272A]">
                        <PlusCircle className="h-4 w-4" />
                        Role
                    </Button>
                    <Button variant="outline" className="bg-transparent ml-2 border-[#27272A]">
                        <PlusCircle className="h-4 w-4" />
                        Position
                    </Button>
                </div>

                <div className="flex items-center space-x-2 ">
                    <Button variant="outline" className="bg-transparent border-[#27272A]">
                        <FadersHorizontal className="h-4 w-4 mr-2" />
                        View Settings
                    </Button>
                    <Button className="bg-[#22C55E]">
                        Add New
                    </Button>
                </div>
            </div>

            <div className="rounded-md border border-[#27272A]">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead>Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Company Email</TableHead>
                            <TableHead>Date Of Birth</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Contract Type</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-transparent" onClick={() => handleView(user.id)}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.dateOfBirth}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.department}</TableCell>
                                <TableCell>{user.position}</TableCell>
                                <TableCell>{user.contractType}</TableCell>
                                <TableCell>{user.contractDate}</TableCell>
                                <TableCell onClick={(e) => e.stopPropagation()}>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <Gear className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-[#1C1C1C] border-[#27272A]">
                                            <DropdownMenuItem
                                                onClick={() => handleView(user.id)}
                                                className="text-white hover:bg-[#27272A] cursor-pointer"
                                            >
                                                <Eye className="h-4 w-4 mr-2" />
                                                View
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => handleEdit(user.id)}
                                                className="text-white hover:bg-[#27272A] cursor-pointer"
                                            >
                                                <Pencil className="h-4 w-4 mr-2" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => handleDelete(user.id)}
                                                className="text-red-500 hover:bg-[#27272A] cursor-pointer"
                                            >
                                                <Trash className="h-4 w-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default UserList;
