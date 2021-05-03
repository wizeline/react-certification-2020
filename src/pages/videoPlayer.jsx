import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CardList from '../components/CardList/CardList'
import Layout from '../components/Layout/Layout'
import Video from '../components/Video/Video'
import DataProvider, { useData } from '../state/DataProvider'

const videoPlayer = () => {
    const {data, _} = useData()
    return (
        <Flex>
            <Video/>
            <Box w="sm">
                {data.player.id ? <CardList list={true} IdVid={data.player.id ? data.player.id.videoId : null} /> : null}
            </Box>
        </Flex>
            
        
    )
}

export default videoPlayer
