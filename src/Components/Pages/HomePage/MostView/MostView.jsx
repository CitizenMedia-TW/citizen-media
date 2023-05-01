
import NewsData from "../../../Data/news.json"
import { Link } from 'react-router-dom';


const MostView = () => {
    return (
        <div className="">
            {NewsData.map((item) => {
                if(item.id === 2){
                    return (
                        <Link style={{textDecoration: 'none'}} to = {`/news/${item.id}`} className = "">
                            <div className="w-[54rem] h-[18rem] p-2 flex items-center overflow-x-scroll">
                                <div className="">
                                    <div className="flex font-bold items-center">
                                        <img className="rounded-full w-[2rem] h-[2rem]" src={item.banner} alt="logo"></img>
                                        <p className="ml-3 line-clamp-1">{item.author}</p>
                                    </div>
                                    <p className="font-extrabold text-lg mt-2 line-clamp-2 p-2">{item.title}</p>
                                    <p className="text-sm line-clamp-5 p-2 h-[7rem]">{item.description}</p>
                                    <div className="text-sm flex items-end">
                                        <p className="line-clamp-1 p-2">{item.time[1]} {item.time[2]} ‧ 4 min read ‧ Medium</p>
                                    </div>  
                                </div>
                                <img className=" h-[12rem] w-[20rem] mx-4 " src={item.img} alt={item.title} />
                            </div>
                        </Link>
                    )
                }
            })}       
        </div>
    )
}

export default MostView;