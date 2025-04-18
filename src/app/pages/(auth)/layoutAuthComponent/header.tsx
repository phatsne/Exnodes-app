import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
    return (
        <div className="flex justify-between items-center mx-4 text-white">
            <div className="flex space-x-4">
                <Link href="/">
                    <Image
                        src="/images/Logo (1).svg"
                        alt="Exnodes"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
                <div className="flex space-x-4">
                    <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                    <Link href="/user-management/list" className="hover:text-gray-300">Users</Link>
                    <Link href="/" className="hover:text-gray-300">Projects</Link>
                    <Link href="/leave-application" className="hover:text-gray-300">Leave Applications</Link>
                    <Link href="/checkIn-out" className="hover:text-gray-300">Check In/Out</Link>
                    <Link href="/" className="hover:text-gray-300">Settings</Link>
                </div>
            </div>
            <div>
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
export default Header;
