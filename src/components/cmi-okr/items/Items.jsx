import IconsItem from './IconsItem'

const Items = ({ items, aspectCmi }) => {

    
    return (
        <div> 
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`bg-white cursor-pointer my-3 rounded-[15px] 
                                text-center px-2 py-3 shadow-md transition-transform 
                                hover:bg-gray-100  z-10`}
                    >
                        <div className='flex flex-col ml-4'>
                            <div className='flex items-center'>
                                <span className="text-left block whitespace-normal break-words mr-2">
                                    {item.description}
                                </span>
                                <div className="ml-auto mr-2">
                                    <IconsItem 
                                        itemId={item.id} 
                                        aspectCmi={aspectCmi}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items
