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
            bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900'>
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
