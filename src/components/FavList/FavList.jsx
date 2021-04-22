import React from 'react'

const FavList = ({list}) => {
    const {data, _} = useData()
    return (
        <Grid templateColumns={!list?{"md": "repeat(3, 1fr)", "sm": "repeat(1, 1fr)"}:"repeat(1, 1fr)"} mb={5} gap={1}>
            {data.favorites.length === 0 ? "hola" : data.favorites.items.map((item) => {
                return (
                    item.hasOwnProperty('snippet') ? <Card key={item.id.videoId} item={item}/> : null      
                )
            })}
        </Grid>
    )
}

export default FavList
