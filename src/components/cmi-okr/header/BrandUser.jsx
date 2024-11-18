import { BellIcon } from '@heroicons/react/24/outline'
import UserPhoto from '../../../assets/bruno-perfil.jpg'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const BrandUser = () => {

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
        ]
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        < div className='flex flex-col-2 items-center w-full px-2'>
            <div className="italic text-white text-center w-[80%]">
                <h3 className="font-semibold">Planea.in</h3>
                <p className="text-wrap">
                    "Convertirnos en el líder global en 
                    soluciones tecnológicas" 
                </p>
            </div>
            
            <div className='w-[20%] cursor-pointer flex flex-1'>
                <button
                    type="button"
                    className="relative m-auto shrink-0 rounded-full 
                    p-2 text-gray-400 hover:text-white focus:outline-none 
                    focus:ring-2 focus:ring-white focus:ring-offset-2
                    focus:ring-offset-gray-800"
                >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Ver notificación</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                </button>
                <img src={UserPhoto} alt="Foto de usuario" className='rounded-full size-12 m-auto'/>
            </div>
            <Disclosure>
            <DisclosurePanel className="md:hidden">
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default BrandUser