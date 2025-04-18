"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  ChartLine,
  Users,
  UserPlus,
  UsersThree,
  Gear,
  CaretRight,
} from "@phosphor-icons/react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "User Management",
    icon: Users,
    submenu: [
      {
        title: "User List",
        href: "/pages/user-management/list",
        icon: Users,
      },
      {
        title: "Create User",
        href: "/pages/user-management/create-user",
        icon: UserPlus,
      },
    ],
  },
  {
    title: "Leave Application",
    icon: UsersThree,
    submenu: [
      {
        title: "Application list",
        href: "/pages/leave-application/list",
        icon: UsersThree,
      },
      {
        title: "Create New Application",
        href: "/pages/leave-application/createLeaveApplication",
        icon: UserPlus,
      },
    ],
  },
  {
    title: "Check In/Out",
    href: "/pages/checkIn-out",
    icon: Users,
  },
  {
    title: "Permissions",
    href: "/settings",
    icon: Gear,
  },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-800">
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-4 px-2">
          {menuItems.map((item, index) => {
            if (item.submenu) {
              const isActive = item.submenu.some(
                (subItem) => subItem.href === pathname
              )
              return (
                <Collapsible key={index}>
                  <CollapsibleTrigger
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-[#18181B] hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon size={20} weight="bold" />}
                      <span>{item.title}</span>
                    </div>
                    <CaretRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 px-8 py-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-md py-2 text-sm text-zinc-400 transition-colors hover:bg-[#18181B] hover:text-white"
                        )}
                      >
                        {subItem.icon && <subItem.icon size={20} weight="bold" />}
                        {subItem.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )
            }
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-[#18181B] hover:text-white"
                )}
              >
                {item.icon && <item.icon size={20} weight="bold" />}
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
