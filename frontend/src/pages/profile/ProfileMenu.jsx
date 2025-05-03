import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImProfile } from "react-icons/im";
import { ChevronDown } from 'lucide-react';
import Logout from '../logout/Logout';

const ProfileMenu = () => {
  const user = sessionStorage.getItem("User");
  let parsedUser = null;

  if (user) {
    parsedUser = JSON.parse(user);
  }

  const firstInitial = parsedUser?.firstName?.[0]?.toUpperCase() || 'U';
  const profileInitial = parsedUser
  ? `${parsedUser.firstName[0]} ${parsedUser.lastName[0]}`
  : 'UU';

  const fullName = parsedUser ? `${parsedUser.firstName} ${parsedUser.lastName}` : 'User';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex w-[250px] h-[38px] gap-[40px] justify-between items-center'>
          <div className='flex gap-[8px] items-center '>
            <p className=' flex w-[40px] h-[40px] bg-blue-primary rounded-full  items-center justify-center text-white leading-6 text-base'>
              {profileInitial}
            </p>
            <p className=' font-inter text-base leading-6'>{fullName}</p>
          </div>
          <ChevronDown size={24} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 border-t-0 mt-0 rounded-t-none -ml-4">
     
        <DropdownMenuGroup className="flex py-[4px] flex-col gap-2">
          <DropdownMenuItem asChild>
            <NavLink to="/portal" className="flex items-center justify-between w-full">
              Portal
              <ImProfile size={15} />
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <hr className="my-2 border-gray-400" />

        <DropdownMenuItem asChild>
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
