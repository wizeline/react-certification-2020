import { StarIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Badge, Box } from '@chakra-ui/layout'
import React from 'react'

const Card = ({item, index}) => {
    const property = {
        imageUrl: item.snippet.thumbnails.default.url,
        imageAlt: "Rear view of modern home with pool",
        title: item.snippet.channelTitle,
        reviewCount: 34,
        rating: 4,
      }
    
    return (
        <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image width="100%" maxW="382px" maxHeight="286px" src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
            <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                New
                </Badge>
            </Box>

            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
            >
                {property.title}
            </Box>

            <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                .fill("")
                .map((_, i) => (
                    <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
                </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Card
