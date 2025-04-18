import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentLeave() {
  return (
    <div className="space-y-8 bg-black p-4 rounded-lg">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>Ph</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none text-white">Phatsne</p>
          <p className="text-sm text-gray-400">
            trieucuongphat@exnodes.vn
          </p>
        </div>
        <div className="ml-auto font-medium text-white">Sick Leave</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>Vy</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none text-white">Vy</p>
          <p className="text-sm text-gray-400">dev_be_2@exnodes.vn</p>
        </div>
        <div className="ml-auto font-medium text-white">Sick Leave</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>Duc</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none text-white">Duc Nguyen</p>
          <p className="text-sm text-gray-400">huuduc0805@exnodes.vn</p>
        </div>
        <div className="ml-auto font-medium text-white">Sick Leave</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>Gk</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none text-white">Khang</p>
          <p className="text-sm text-gray-400">
            nguyengiakhang060202@exnodes.vn
          </p>
        </div>
        <div className="ml-auto font-medium text-white">Sick Leave</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>Huy</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none text-white">Huy</p>
          <p className="text-sm text-gray-400">huy8691@exnodes.vn</p>
        </div>
        <div className="ml-auto font-medium text-white">Sick Leave</div>
      </div>
    </div>
  )
}
