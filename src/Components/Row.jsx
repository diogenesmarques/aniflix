import React from "react";
import "./Row.css";

const Row = ({title, items}) => {
    return(
        <div className="row">
            <div className="row-title">{title}</div>
            <div className="row-area">
                <div className="row-items">
                    {items.top ? items.top.map((item, key) => {
                        return(
                            <div key={key} className="anime">
                                <img key={key} src={item.image_url} alt={item.title} />
                            </div>
                        )
                    }) : items.anime.map((item, key) => {
                        return(
                            <div key={key} className="anime">
                                <img key={key} src={item.image_url}  alt={item.title} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Row;