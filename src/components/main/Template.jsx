import { Outlet } from "react-router-dom"
import Header from "../cmi-okr/header/Header"

const Template = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Template