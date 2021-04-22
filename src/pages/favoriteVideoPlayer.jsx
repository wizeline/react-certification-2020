import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import CardList from '../components/CardList/CardList'
import Video from '../components/Video/Video'
import { useData } from '../state/DataProvider'
import withAuth from '../utils/withAuth'

const favoriteVideoPlayer = () => {
    const {data, _} = useData()
    return (
        <Flex>
            <Video/>
            <Box w="sm">
                <CardList list={true} favorite={true} />
            </Box>
        </Flex>
    )
}

export default withAuth(favoriteVideoPlayer)
