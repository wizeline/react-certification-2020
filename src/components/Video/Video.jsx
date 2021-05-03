import { Button } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import { useData } from '../../state/DataProvider';

const Video = () => {
    const {data, dispatch} = useData()
    console.log(data)
    const [fav, setFav] = useState(false)
    console.log("fav: ",data.favorites.includes(data.player) )

    const videoSrc = `https://www.youtube.com/embed/${data.player !== '' ? data.player.id.videoId : ''}`;

    const favoriteHandler = () => {
        if (fav) {
            const load = data.favorites.filter(item => item.id.videoId !== data.player.id.videoId)
            console.log(load)
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: load
            })
            setFav(!fav)
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: data.player
            })
            setFav(!fav)
        }
        
    }
    useEffect(() => {
        localStorage.setItem('favoriteVideos', JSON.stringify(data.favorites))
        const res = data.favorites.includes(data.player)
        setFav(res)
    });

    return (
        <Box maxW="70%" overflow="hidden">
            <iframe src={videoSrc} style={{width: "100%", maxHeight: "600px", height: "500px"}}  allowFullScreen title='Video player'/>
            <Flex
            alignItems="center"
            mt="3"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            isTruncated
            >
                {data.player !== '' ? data.player.snippet.title : ''}
                {fav ? 
                <Button onClick={favoriteHandler} ml="5">
                    <Text>Remove Favorite</Text>
                    <StarIcon ml="1" color="red" _hover={{color: "white"}} />
                </Button>
                :
                <Button onClick={favoriteHandler} ml="5">
                    <Text>Add Favorite</Text>
                    <StarIcon ml="1" color="white" _hover={{color: "red"}} />
                </Button>
            }
                
                
            </Flex>
            <Box ml="3" as="span" color="gray.600" fontSize="sm">
                {data.player !== '' ? data.player.snippet.description : ''}
            </Box>
        </Box>
    )
}

export default Video
