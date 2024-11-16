import Main from "../../main/Main"
import BrandUser from "./BrandUser"
import Logo from "./Logo"

const Header = () => {

    //
    //
    //

    return (
        <div className="w-full">
            <div className='flex items-center py-1 px-20 w-full
            bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 '>
                <div className="flex items-center w-[70%]">
                    <Logo />
                    <div className="hidden md:block">
                        <div className="flex items-center text-left mx-auto">
                            <Main />
                        </div>
                    </div>
                </div>

                {/* Sección derecha con BrandUser y el icono de menú */}
                <div className="text-white w-[30%]">
                    <BrandUser />
                </div>
            </div>
        </div>
    )
}

export default Header
