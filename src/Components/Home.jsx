import React, {useEffect, useState} from "react";
import database from "../database.js";
import Row from "./Row.jsx";
import Featured from "./Featured.jsx";
import Header from "./Header.jsx";

const Home = () => {

    const [homeList, setHomeList] = useState([]);
    const [featured, setFeatured] = useState(null);
    const [headerIsBlack, setHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 100) setHeader(true);
            else setHeader(false);
        }

        window.addEventListener("scroll", scrollListener);

        return () => window.removeEventListener("scroll", scrollListener);

    }, [])

    useEffect(() => {
        const loadHome = async () => {
            let HOME_LIST = await database.getHomeList();
            setHomeList(HOME_LIST);

            let RANDOM_NUM = Math.floor(Math.random() * 50);
            let RANDOM_ANIME = HOME_LIST[0].animes.top[RANDOM_NUM];
            setFeatured(RANDOM_ANIME);
        }

        loadHome();
    }, [])

    return(
        <div className="home">
            <Header isBlack={headerIsBlack}/>
            {featured && <Featured anime={featured}/>}
            <div className="home-list">
                {homeList.map((item, key) => {
                    return <Row items={item.animes} title={item.title} key={key}/>
                })}
            </div>
        </div>
    )
}

export default Home;