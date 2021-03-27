import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CardList from '../components/CardList/CardList'
import Video from '../components/Video/Video'

const videoPlayer = () => {
    const { query } = useRouter()
    const { videoId, title, description } = query
    
    return (
        <Flex>
            <Video videoId={videoId} title={title} description={description} />
            <Box w="sm">
                <CardList list={true} IdVid={videoId} />
            </Box>
        </Flex>
        
            
        
            
        
        
            
        
    )
}

export default videoPlayer
