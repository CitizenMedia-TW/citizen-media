import { FiThumbsUp, FiHeart } from "react-icons/fi"
import { FaRegBookmark } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import NewsData from "../../../Data/news.json"

const Title = () => {
    return (
        <>
        <div className="flex">
            <div className="mt-4 mx-3">
                <FiThumbsUp />
            </div>
            <h1 className="text-black-200 my-3">Official Recommendation</h1>
        </div>
        <div className="h-[12rem] bg-blue-900 flex items-center space-x-3 overflow-x-scroll px-3">
        {NewsData.map((item) => {
                    return (
                        <Link style={{textDecoration: 'none'}} to = {`/news/${item.id}`} className = "">
                            <div className="w-[22rem] h-[9rem] bg-gray-300 rounded-2xl p-4">
                                <div class="flex items-center h-[2rem]">
                                    <img className="rounded-full w-[2rem] h-[2rem]" src={item.banner} alt="logo"></img>
                                    <span class="font-bold">{item.author}</span>
                                </div>
                                <p className="mt-2 font-bold line-clamp-2 h-[3rem]">{item.title}</p>
                                <div className="flex mt-2">
                                    <div className="flex w-full items-center">
                                        <BiTimeFive/>
                                        <p className="text-sm ml-2">Mar 11 ‧ 6 min read</p>
                                    </div>
                                    <p className="flex justify-end items-center text-sm space-x-3">
                                        <FiHeart />
                                        <FaRegBookmark />
                                    </p>
                                </div>   
                            </div> 
                        </Link>
                    )
            })}  
        </div>
        </>
    )
}

export default Title;
