


const SideNews = () => {
    return (
        <div className="">
            <div className="mb-5 mt-5 ml-5 text-gray-500">
                Recommanded Topic
            </div>
            <div className="grid grid-cols-2 gap-4 ml-4">
                <div className=" rounded-3xl px-2 flex items-center justify-center h-[2rem] w-[11rem] bg-gray-300">
                    <p>Machine Learning</p>
                </div>
                <div className="invisible md:visible rounded-3xl px-2 flex items-center h-[2rem] w-[8rem] bg-gray-300">
                </div>
                <div className=" rounded-3xl px-2 flex items-center justify-center h-[2rem] w-[6rem] bg-gray-300">
                    <p>Writing</p>
                </div>
                <div className="invisible md:visible rounded-3xl px-2 flex items-center h-[2rem] w-[8rem] bg-gray-300 -translate-x-20">
                </div>
                <div className=" rounded-3xl px-2 flex items-center justify-center h-[2rem] w-[8rem] bg-gray-300">
                    <p>Phychology</p>
                </div>
                <div className="invisible md:visible rounded-3xl px-2 flex items-center h-[2rem] w-[8rem] bg-gray-300 -translate-x-12">
                </div>
            </div>
            
        </div>
    )
}

export default SideNews;