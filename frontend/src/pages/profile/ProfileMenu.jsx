import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { ImProfile } from "react-icons/im";
  import { ChevronDown } from 'lucide-react';


const ProfileMenu = () => {
    const user = sessionStorage.getItem("User");
    if (user) {
        const parsedUser = JSON.parse(user);
    
      }

  return (
    <DropdownMenu className="m-2">
      <DropdownMenuTrigger asChild>
        <div className=' flex w-[190px] h-[38px] gap-[48px]  justify-between'>
            <div className='w-[118px] h-[38px] flex gap-[8px]'>
                <p className='w-[38px] h-[38px] bg-blue-primary rounded-full'>JD</p>
                <span>Jone Doe</span>

            </div>
        </div>
        <span><ChevronDown size={24}/></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Profile Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className=" flex flex-col gap-2">
          <DropdownMenuItem asChild>
            <Link to="/portal">
              Portal
              <DropdownMenuShortcut><ImProfile size={15}/></DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          
          
        </DropdownMenuGroup>
        <hr className="my-2 border-gray-400" />

        <DropdownMenuItem >
       
          <Logout />
          <DropdownMenuShortcut><AiOutlineLogout size={15}/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu