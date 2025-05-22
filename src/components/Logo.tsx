

export default function Logo() {
    return (
        <div className="flex items-center justify-center p-10 ">
            <img src="/gok-logo.png" alt="Logo" className="h-18 me-3" />
            <div className="flex " >
                <div className="flex flex-col w-1">
                    <div className="flex-1 mb-[2px] bg-black"></div>
                    <div className="flex-1 mb-[2px] bg-red-600"></div>
                    <div className="flex-1 mb-[2px] bg-green-600"></div>
                </div>

                <div className="flex-1 pl-1">
                    <h5 className="text-1xl font-bold">MINISTRY OF</h5>
                    <h5 className="text-1xl font-bold">ENVIRONMENT</h5>
                    <h5 className="text-1xl font-bold">& FORESTRY</h5>
                </div>
            </div>
        </div>

    )
}
