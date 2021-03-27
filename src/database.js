const API_BASE = "https://api.jikan.moe/v3";

const basicFetch = async (endpoint) => {
    return await (await fetch(API_BASE + endpoint)).json();
}


const database = {
    getHomeList: async () => {
        return(
        [
            {
                slug:"popular",
                title:"Popular",
                animes: await basicFetch(`/top/anime/1/bypopularity`)
            },
            {
                slug:"top-rated",
                title:"Top rated",
                animes: await basicFetch(`/top/anime/1`)
            },
            {
                slug:"this-season",
                title:"This season",
                animes: await basicFetch(`/season`)
            },
            {
                slug:"action",
                title:"Action",
                animes: await basicFetch(`/genre/anime/1/1`)
            },
            {
                slug:"comedy",
                title:"Comedy",
                animes: await basicFetch(`/genre/anime/4/1`)
            },
            {
                slug:"music",
                title:"Music",
                animes: await basicFetch(`/genre/anime/19/1`)
            },
            {
                slug:"ecchi",
                title:"Ecchi",
                animes: await basicFetch(`/genre/anime/9/1`)
            },
            {
                slug:"shounen",
                title:"Shounen",
                animes: await basicFetch(`/genre/anime/27/1`)
            },
            {
                slug:"mecha",
                title:"Mecha",
                animes: await basicFetch(`/genre/anime/18/1`)
            },
            {
                slug:"horror",
                title:"Horror",
                animes: await basicFetch(`/genre/anime/14/1`)
            },
            {
                slug:"sol",
                title:"Slice of life",
                animes: await basicFetch(`/genre/anime/36/1`)
            }
        ]
    )
}
}

export default database;