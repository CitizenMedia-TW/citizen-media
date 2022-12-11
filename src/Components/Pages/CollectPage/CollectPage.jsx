import React from 'react';
import "./CollectPage.css"
import { CollectPageData } from './CollectPageData';
import { Link } from 'react-router-dom';
import "../../Layout/Sidebar/Sidebar.css"
import LogoNoBG from "../../../Assets/LogoNoBG.png"

function CollectPage(){
    return(
        <div className="collect">
            <div className="gridBlock">
                {CollectPageData.map((item,index) => {
                    return (
                        <Link style={{textDecoration: 'none'}} to = {item.path} className = "collectBlock">
                            <div className="collectText">
                                <span>{item.title}</span>
								<img className="logo" src={LogoNoBG}></img>
                            </div> 
                        </Link>
                    )
                })}       
            </div>
        </div>
    );
}

export default CollectPage;
