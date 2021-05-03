import { Grid } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useData } from '../../state/DataProvider'
import fetchData from '../../utils/useFetchData'
import Card from '../Card/Card'
//changeasdasasdw
const CardList = ({list, IdVid, favorite = false}) => {
    const {data, dispatch} = useData()
    const { search } = data
    let result = []
    useEffect(async () => {
        if (IdVid) {
            result = search ?  await fetchData.get("/search", {params: {q: search}}) : await fetchData.get("/search", {params: {relatedToVideoId: IdVid}})
            console.log("entra idvid: ", result.data)
            dispatch({
                type: "ADD_DATA",
                payload: result.data
            })
        } else if(favorite) {
            result.data = data.favorites
            console.log("favorites card: ", data.favorites)
        } else {
            result = search ?  await fetchData.get("/search", {params: {q: search}}) : await fetchData.get("/search")
            console.log("entra: ", result.data)
            dispatch({
                type: "ADD_DATA",
                payload: result.data
            })
        }
        return function cleanup() {
            search = ""
        }
    },[search])

    return (
        <Grid templateColumns={!list?{"md": "repeat(3, 1fr)", "sm": "repeat(1, 1fr)"}:"repeat(1, 1fr)"} mb={5} gap={1}>
            {
                data.videos.items != undefined && data.videos.items.length > 0 && !favorite ? data.videos.items.map((item) => {
                    return (
                        item.hasOwnProperty('snippet') ? <Card key={item.id.videoId} item={item}/> : null      
                    )
                })
                : null
            }
            {
                data.favorites.length > 0 && favorite ? data.favorites.map((item) => {
                    return (
                        item.hasOwnProperty('snippet') ? <Card key={item.id.videoId} favorite={favorite} item={item}/> : null      
                    )
                }) 
                : null
            }
            
        </Grid>
    )
}

export default CardList
