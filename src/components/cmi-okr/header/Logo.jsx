import LogoPlanea from '../../../assets/logo-planea-claro.svg'

const Logo = () => {
    return (
        <div className='hover:scale-105 cursor-pointer' >
            <img src={LogoPlanea} alt="Planea logotipo" className='size-32' />
        </div>
    )
}

export default Logo