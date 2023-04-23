
import NewsData from "../../../Data/news.json"


const Author = () => {
    return (
        <div className="flex flex-row -translate-y-4">
            {NewsData.map((item) => {
                return (
                    <div className="h-[14rem] mx-6">
                        <div>
                            <img className="rounded-full w-[4rem] h-[4rem] translate-y-8 -translate-x-4 border-8 border-white" src={item.banner} alt="logo"></img>
                        </div>
                        <div className="h-[12rem] w-[12rem] border-2 rounded-3xl border-black">
                            <div className="mt-2 ml-12 font-bold">
                                { item.author}
                            </div>
                            <div className="mx-4 my-4 font-bold text-sm">
                                我是一位充滿抱負的專欄作家，有鑑於媒體素養日漸衰敗，使人不堪入目，我決定透過公民新聞平台發聲，帶大家回歸最純粹的新聞報導！
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>    
        )
    }

export default Author;