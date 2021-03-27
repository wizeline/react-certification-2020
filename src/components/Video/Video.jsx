import { Box } from '@chakra-ui/layout';
import React from 'react'

const Video = ({videoId, title, description}) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log(description)
    return (
        <Box maxW="70%" overflow="hidden">
            <iframe src={videoSrc} style={{width: "100%", maxHeight: "600px", height: "500px"}}  allowFullScreen title='Video player'/>
            <Box
            mt="3"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            isTruncated
            >
                {title}
            </Box>
            <Box ml="3" as="span" color="gray.600" fontSize="sm">
                {description}
            </Box>
        </Box>
    )
}

export default Video
