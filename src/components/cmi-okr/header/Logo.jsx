import LogoPlanea from '../../../assets/logo-planea-claro.svg'

const Logo = () => {
    return (
        <div className='w-[15%] hover:scale-105 cursor-pointer' >
            <img src={LogoPlanea} alt="Planea logotipo" />
        </div>
    )
}

export default Logo