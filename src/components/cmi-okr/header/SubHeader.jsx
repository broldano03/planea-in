const SubHeader = ({title, subtitle}) => {
    return (
        <>
        <div className=" shadow w-full py-7 text-left px-24">
            <h1 className="   text-neutral-900 font-bold uppercase text-2xl tracking-tight">
                {title}
            </h1>
            <p className=" text-neutral-700 italic">
                {subtitle}
            </p>
        </div>
        </>
    )
}

export default SubHeader
