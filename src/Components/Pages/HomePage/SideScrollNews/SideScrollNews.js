
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
                                    <div className="flex mb-3 font-bold">
                                        <img className="rounded-full w-[2rem] h-[2rem] ml-8" src={item.banner} alt="logo"></img>
                                        <span>{item.author}</span>
                                    </div>
                                    <span className="font-extrabold">{item.title}</span>
                                    <br />
                                    <div className="text-sm tracking-wide align-bottom align-bottom h-full align-text-bottom">{item.time[1]} {item.time[2]} ‧ 4 min read ‧ Medium</div>
                                </div>
                                <div>
                                    <img className="h-[8rem] w-[16rem]" src={item.img} alt={item.title} />
                                </div>
                            </div> 
                        </Link>
                    )
            })}       
        </div>
    )
}

export default SideScrollNews;