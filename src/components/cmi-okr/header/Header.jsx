import BrandUser from "./BrandUser"
import Logo from "./Logo"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {

    //
    //
    //

    return (
        <>
            <div className='flex justify-between py-5 px-20 mb-10 
            bg-gradient-to-br from-stone-950'>
                <Logo/>
                <div className="text-white w-[40%] flex justify-between items-center">
                    <BrandUser />
                    <FontAwesomeIcon icon={faBars}  className='mr-1 cursor-pointer 
                    hover:scale-110'/>
                </div>
            </div>
        </>
    )
}

export default Header
