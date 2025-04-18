"use client"

import { ReactNode } from "react"

import { SidebarProvider } from "@/components/ui/sidebar"

import Header from "./header"
import Sidebar from "./sidebar"

interface LayoutProps {
  children: ReactNode
}

const LayoutAuthComponent = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider className="w-full block">
      <div className="flex h-screen">
        <div className="flex flex-col flex-1 w-full">
          <header className="border-b z-40  shadow-bottom px-4 py-2">
            <Header />
          </header>
          <div className="flex overflow-y-auto h-full">
            <aside className="border-r flex-shrink-0 z-30 w-64 overflow-y-auto p-4 h-full">
              <Sidebar />
            </aside>
            <main className="p-4 overflow-y-auto w-full">
              {children}
              {/* components in (auth) */}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default LayoutAuthComponent
