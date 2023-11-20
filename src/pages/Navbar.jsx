import React, { useState } from 'react'
import { sidebarLinks } from '../data/alldata'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDropup } from "react-icons/io"; 
import { IoIosArrowDropdown } from "react-icons/io";
import ConfirmationModal from './ConfirmationModal';
import { VscSignOut } from "react-icons/vsc"
const Navbar = () => {
    const [confirmationModal, setConfirmationModal] = useState(null)
     const navigate = useNavigate();
    const [isMenuOpen,setIsMenuOpen] = useState(true)
    const handleModal=()=>{
        setIsMenuOpen((prevState) => !prevState);
       }
  return (
    <>
     <button className="md:hidden text-white" onClick={handleModal}>
          {isMenuOpen ?  <IoIosArrowDropdown style={{ color: 'green' }}className='w-[25px] h-[25px] mx-6 '/> : <IoIosArrowDropup style={{ color: 'green' }} className='w-[25px] h-[25px] mx-6'/> }
     </button>
    {
      isMenuOpen &&
      <div className="fixed  inset-0 z-[1000] bg-richblack-800  grid top-[3.5rem] place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm lg:hidden">
            <div className="w-[100%]  rounded-lg   p-6">

                <div className='flex flex-col gap-4 items-center'>
                {
                    sidebarLinks.map((link) => (
                    <ul key={link.id} onClick={ ()=> handleModal() }>
                        <Link
                         to={link.path}
                          className="text-white hover:text-gray-300 transition duration-300"
                         >
                        {link.name}
                        </Link>
                    </ul>
                    ))
                }
                <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => navigate("/"),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
                </div>
            </div>
    </div>
    }
    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

     </>
  )
}

export default Navbar