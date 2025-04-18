"use client"

import Image from "next/image"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            {/* Content Trái */}
            <div
                className="relative w-full md:w-1/2 hidden sm:flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/Bubbles (2) (1).png")' }}
            >
                <div className="relative w-[660px] h-[800px]">
                    <Image
                        src="/images/IMG_5298 1.png"
                        alt="Exnodes"
                        className="absolute top-[-10px] left-[-20px] shadow-lg rounded-xl z-10"
                        width={417}
                        height={314}
                    />
                    <Image
                        src="/images/20240713_091427 1.png"
                        alt="Exnodes"
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-xl z-20"
                        width={452}
                        height={338}
                    />
                    <Image
                        src="/images/image (4).png"
                        alt="Exnodes"
                        className="absolute bottom-[-20px] left-[10px] shadow-lg rounded-xl z-10"
                        width={446}
                        height={333}
                    />
                </div>
            </div>

            {/* Content Phải */}
            <div className="w-full md:w-1/2 flex items-center justify-center h-screen overflow-hidden bg-black">
                {children}
            </div>
        </div>
    )
} 