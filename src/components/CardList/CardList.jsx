import { Flex, Grid } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import fetchData from '../../utils/useFetchData'
import Card from '../Card/Card'

const CardList = ({list, IdVid}) => {
    const [data, setData] = useState()
    const { query } = useRouter()
    const { search } = query
    let result = {}
    useEffect(async () => {
        if (IdVid) {
            result = search ?  await fetchData.get("/search", {params: {q: search}}) : await fetchData.get("/search", {params: {relatedToVideoId: IdVid}})
        } else {
            result = search ?  await fetchData.get("/search", {params: {q: search}}) : await fetchData.get("/search")
        }
        console.log(result.data)
        setData(result.data)

        return function cleanup() {
            search = ""
        }
    },[search])

    return (
        <Grid templateColumns={!list?{"md": "repeat(3, 1fr)", "sm": "repeat(1, 1fr)"}:"repeat(1, 1fr)"} mb={5} gap={1}>
            {!data ? "hola" : data.items.map((item) => {
                return (
                    <Card key={item.id.videoId} item={item}/>         
                )
            })}
        </Grid>
    )
}

export default CardList
