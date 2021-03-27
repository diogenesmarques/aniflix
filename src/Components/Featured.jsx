import React, {useState, useEffect} from "react";
import "./Featured.css";

const Featured = ({anime}) => {

    const [backgroundImage, setBackgroundImage] = useState(null);
    const [animeInfo, setInfo] = useState(null);

    const getAnimeId = (a) => {
        return a.mal_id;
    }

    const getImages = async (id) => {
        return(
            (await fetch(`https://api.jikan.moe/v3/anime/${id}/pictures`)).json()
        )
    }

    const getInfo = async (id) => {
        return(
            (await fetch(`https://api.jikan.moe/v3/anime/${id}`)).json()
        )
    }

    useEffect(() => {
        const setImage = async () => {
            let ANIME_IMAGES = await getImages(getAnimeId(anime));
            let BG_IMAGE = await ANIME_IMAGES.pictures[1].large;
            let ANIME_INFO = await getInfo(getAnimeId(anime));

            setBackgroundImage(BG_IMAGE);
            console.log(ANIME_INFO);
            setInfo(ANIME_INFO);
        }

        setImage();

    }, [])

    return(
        <div className="featured" style={{
            backgroundSize:"cover",
            backgroundPosition:"right",
            backgroundImage:`url(${backgroundImage})`
        }}>
        
            <div className="vertical-gradient">
                <div className="horizontal-gradient">
                    <div className="info">
                        <h1 className="anime-title noselect">{anime.title}</h1>
                        <div className="anime-details noselect">
                            <p className="anime-score">{anime.score} Rating - Ranked #{animeInfo && animeInfo.rank}</p>
                            <p className="anime-season">- {animeInfo && animeInfo.premiered}</p>
                            <p className="anime-episodes">- {animeInfo == null || animeInfo == "" ? "?" : animeInfo.episodes} Episodes</p>
                        </div>
                        <p className="anime-synopsis noselect">{animeInfo && animeInfo.synopsis}</p>
                    </div>
                    <div className="buttons">
                        <button className="play-button"><i className="fas fa-play"></i>   Watch</button>
                        <button className="list-button">+ Add to List</button>
                    </div>
                    <div className="anime-genres noselect">
                        {animeInfo && `Genres: ` + animeInfo.genres.map((genre) =>{
                        return ` ${genre.name}`
                    })+`.`}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured;