import React from 'react';
import "./CollectPage.css"
import { Link } from 'react-router-dom';
import "../../Layout/Sidebar/Sidebar.css"
import NewsData from "../../../Components/Data/news.json"

function CollectPage(){
    return(
        <div className="collect">
            <div className="gridBlock">
                {NewsData.map((item) => {
                    return (
                        <Link style={{textDecoration: 'none'}} to = {`/news/${item.id}`} className = "collectBlock">
                            <div className="collectText">
                                <span>{item.title}</span>
								<img className="collect_img" src={item.img} alt={item.title} />
                            </div> 
                        </Link>
                    )
                })}       
            </div>
        </div>
    );
}

export default CollectPage;
