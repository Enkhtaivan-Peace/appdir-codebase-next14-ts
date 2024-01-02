'use server'
import AnimeCard from "./AnimeCard"
import { IAnimeProp } from "./AnimeList"

export const fetchAnimes = async (page:number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await res.json()
    return  data.map((item:IAnimeProp, idx:number) =>(
        <AnimeCard key={'anime' + idx} {...item} idx={idx} />
    ))
}