import Main from "../../main/Main"
import BrandUser from "./BrandUser"
import Logo from "./Logo"

const Header = () => {

    //
    //
    //

    return (
        <>
            <div className='flex justify-between items-center py-5 px-20 mb-10 
            bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900'>
            
            {/* Logo a la izquierda */}
            <Logo />

            {/* Main en el centro con flex-grow para ocupar el espacio central */}
            <div className="flex-grow flex justify-center">
                <Main/>
            </div>

            {/* Sección derecha con BrandUser y el icono de menú */}
            <div className="text-white w-[40%] flex justify-between items-center">
                <BrandUser />
            </div>
            </div>
        </>
    )
}

export default Header
