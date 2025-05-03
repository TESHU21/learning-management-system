import React ,{useState,useEffect,useRef} from 'react'
import AzubiLogo from "../assets/images/azubi-logo.png"
import { Button } from './ui/button'
import{LogIn,AlignJustify,X} from "lucide-react"
import AzubiLogo2 from "../assets/svg/Azubi-Logo 2.svg"
import { useNavigate,NavLink } from "react-router-dom";
import ProfileMenu from '@/pages/profile/ProfileMenu'



const Navbar = () => {
  const navigate=useNavigate();
  const [menuVisiblity,setMenuVisibility]=useState(false)
  const token=sessionStorage.getItem("Token")
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisibility(false);
      }
    };
  
    if (menuVisiblity) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuVisiblity]);

  const handleClick=()=>{
    setMenuVisibility(!menuVisiblity)
  }
  return (
    <div className='relative' ref={menuRef}>
        {/* Desktop Menu */}
        <div className=" hidden md:flex  justify-between px-[201px]  h-[80px] items-center bg-white ">
        <div className=' flex items-center gap-8   '>
            <div className=' flex gap-[2.72px] items-center'>
                <img src={AzubiLogo2} alt="Azubi Logo" className='h-10 w-auto' />
                <span className="font-lusitana text-[19px] font-bold leading-[100%] text-blue-primary ">CLient</span>
            </div>
            <NavLink to="/" className={({isActive})=>isActive ? "text-blue-primary":""}>Home</NavLink>
            <NavLink to="/courses" className={({isActive})=>isActive ? "text-blue-primary":""}>Courses</NavLink>
        </div>
        {
          token?(
            <ProfileMenu/>
          ):(

          <div className=" flex gap-6">
          <Button className="py-3 px-6 bg-white  hover:bg-white text-base leading-6 font-semibold text-blue-primary border rounded-md border-blue-primary cursor-pointer" onClick={()=>navigate("/login")}>Login <span className='ml-3'><LogIn size={22}/></span></Button>
          <Button className="py-3 px-6 bg-blue-primary  text-base leading-6 font-semibold text-white border rounded-md border-blue-primary cursor-pointer hover:bg-blue-primary" onClick={()=>navigate("/signup")}>sign up <span className='ml-3'><LogIn size={22}/></span></Button>

      </div>)

        }
        
        </div>
        {/* Mobile Menu */}
        <div className='md:hidden flex justify-between p-[17px]  items-center'>
          <div className='flex items-center text-blue-primary gap-[2.3px]'>         <img src={AzubiLogo2} alt=" Logo of Letter Cj" className='w-[20.6px] h-[19.1px]' />
          <span className=' font-bold font-lusitana text-[16.54px] leading-[100%] '>CLient</span>
          </div>
         { menuVisiblity? (<X onClick={handleClick}/>) :(<AlignJustify onClick={handleClick}/>)}
        

        </div>

        {menuVisiblity && (
  <div className="md:hidden fixed right-0 top-[56px] z-50 w-[269px] min-h-screen shadow-md bg-white pl-[21px] pt-[25px] flex flex-col">
    <ul className="flex flex-col gap-4">
      <li>
        <NavLink to="/" className={({isActive})=>isActive ? "text-blue-primary":""}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/courses" className={({isActive})=>isActive ? "text-blue-primary":""} >Courses</NavLink>
      </li>
    </ul>
    <div className=" flex flex-col gap-4 mt-6">
      <Button  onClick={()=>navigate("/login")} className="bg-white hover:bg-white text-base leading-6 font-semibold text-blue-primary border rounded-md border-blue-primary w-[127px] h-[48px] py-3 px-6 cursor-pointer">
        Login <span className="ml-1"><LogIn size={22} /></span>
      </Button>
      <Button className="py-3 px-6 bg-blue-primary  text-base leading-6 font-semibold text-white border rounded-md border-blue-primary w-[127px] h-[48px] cursor-pointer" onClick={()=>navigate("/signup")}>sign up <span className='ml-3'><LogIn size={22}/></span></Button>

    </div>
  </div>
)}

    </div>
  )
}

export default Navbar