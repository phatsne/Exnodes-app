"use client"

import { useParams } from 'next/navigation';
import { UsersThree, UserRectangle, UserSquare } from "@phosphor-icons/react"

import Header from "./_components/header"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UsersDetail from "./_components/userDetails"
import WorkContract from "./_components/workContract"
import BankInformation from "./_components/bankInformation"

const UserDetailPage = () => {
    const params = useParams();
    const userId = params.id as string;

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">
                    User Details
                    <span className="ml-2">
                        User Details
                    </span>
                </h1>
            </div>
            <Separator className="my-4" />
            <div className="mb-5">
                <Header />
            </div>
            <div className="flex">
                {/* <Sidebar /> */}
                <Tabs defaultValue="Overview" className="flex w-full">
                    <TabsList className="flex flex-col items-start justify-start space-y-5 rounded-lg p-0 bg-transparent">
                        <div className="border border-[#27272A] flex flex-col space-y-5 p-4 rounded-lg">
                            <TabsTrigger
                                value="Overview"
                                className="w-full justify-start text-white hover:bg-[#292524] hover:text-white data-[state=active]:bg-[#292524] data-[state=active]:text-white"
                            >
                                <UsersThree className="w-5 h-5 mr-2 text-white" />
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="BankInformation"
                                className="w-full justify-start text-white hover:bg-[#292524] hover:text-white data-[state=active]:bg-[#292524] data-[state=active]:text-white"
                            >
                                <UserRectangle className="w-5 h-5 mr-2 text-white" />
                                Bank Information
                            </TabsTrigger>
                            <TabsTrigger
                                value="WorkContract"
                                className="w-full justify-start text-white hover:bg-[#292524] hover:text-white data-[state=active]:bg-[#292524] data-[state=active]:text-white"
                            >
                                <UserRectangle className="w-5 h-5 mr-2 text-white" />
                                Work Contract
                            </TabsTrigger>
                            <TabsTrigger
                                value="CV"
                                className="w-full justify-start text-white hover:bg-[#292524] hover:text-white data-[state=active]:bg-[#292524] data-[state=active]:text-white"
                            >
                                <UserRectangle className="w-5 h-5 mr-2 text-white" />
                                Health Documents
                            </TabsTrigger>
                            <TabsTrigger
                                value="CV"
                                className="w-full justify-start text-white hover:bg-[#292524] hover:text-white data-[state=active]:bg-[#292524] data-[state=active]:text-white"
                            >
                                <UserSquare className="w-5 h-5 mr-2 text-white" />
                                CV
                            </TabsTrigger>
                        </div>
                    </TabsList>
                    <TabsContent
                        value="Overview"
                        className="hidden data-[state=active]:block mt-0 w-full"
                    >
                        <UsersDetail userId={userId} />
                    </TabsContent>
                    <TabsContent
                        value="BankInformation"
                        className="hidden data-[state=active]:block"
                    >
                        <BankInformation />
                    </TabsContent>
                    <TabsContent
                        value="WorkContract"
                        className="hidden data-[state=active]:block"
                    >
                        <WorkContract />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default UserDetailPage;