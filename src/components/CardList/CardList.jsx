import { Flex, Grid } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const CardList = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const res = await fetch("https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json");
        const result = await res.json();
        setData(result);
    }

    useEffect(() => {
        fetchData();
        console.log(data)
    },[])
    return (
        <Grid templateColumns={{"md": "repeat(3, 1fr)", "sm": "repeat(1, 1fr)"}} mb={5} gap={1}>
            {!data ? "hola" : data.items.map((item,index) => {
                return (
                    <Card item={item} index={index} />
                )
            })}
        </Grid>
    )
}

export default CardList
