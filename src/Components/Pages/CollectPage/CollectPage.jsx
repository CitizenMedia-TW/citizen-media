import React from 'react';
import "./CollectPage.css"
import { CollectPageData } from './CollectPageData';
import { Link } from 'react-router-dom';

function CollectPage(){
    return(
        <div className="collect">
            <div className="gridBlock">
                {CollectPageData.map((item,index) => {
                    return (
                        <Link style={{textDecoration: 'none'}} to = {item.path} className = "collectBlock">
                            <div className="collectText">
                                <span>{item.title}</span>
                            </div> 
                        </Link>
                    )
                })}       
            </div>
        </div>
    );
}

export default CollectPage;
