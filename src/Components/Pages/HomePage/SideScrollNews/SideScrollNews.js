
import NewsData from "../../../Data/news.json"
import { Link } from 'react-router-dom';
import { BiComment } from "react-icons/bi"

const SideScrollNews = () => {
    return (
        <div className="w-1/2 border-r-2">
            <div className="mb-5 mt-5 ml-5 font-bold flex">
                <div className="mt-1 mr-2">
                    <BiComment />
                </div>
                The latest news
            </div>
            {NewsData.map((item) => {
                return (
                    <Link style={{textDecoration: 'none'}} to = {`/news/${item.id}`} className = "">
                        <div className="ml-8 grid grid-cols-2 h-[8rem] mb-8">
                            <div className="h-full">
                                <div className="flex font-bold items-center">
                                    <img className="rounded-full w-[2rem] h-[2rem]" src={item.banner} alt="logo"></img>
                                    <p className="ml-3 line-clamp-1">{item.author}</p>
                                </div>
                                <p className="font-extrabold mt-2 line-clamp-2">{item.title}</p>
                                
                                <div className="text-sm flex items-end">
                                    <p className="line-clamp-1">{item.time[1]} {item.time[2]} ‧ 4 min read ‧ Medium</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="invisible md:visible md:w-[10rem] lg:visible h-[8rem] lg:w-[12rem] mx-4" src={item.img} alt={item.title} />
                            </div>
                        </div> 
                    </Link>
                )
            })}       
        </div>
    )
}

export default SideScrollNews;