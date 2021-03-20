import { HamburgerIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/switch'
import { CgProfile } from 'react-icons/cg';
import React from 'react'
import SideMenu from '../SideMenu/SideMenu';
import { useDisclosure, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    return (
        <>
            <Flex bg="blue.50" alignItems={"center"}>
                <HamburgerIcon cursor="pointer" ref={btnRef} ml="2" onClick={onOpen} />
                <Text ml="2" fontSize="3xl" colorScheme={'whiteAlpha'}>DuTube</Text>
                <Box mx="auto" w="40%">
                    <Input bg="white" placeholder="Search..." />
                </Box>
                <Switch mr="2"/>
                <NextLink href="/">
                    <Link>
                        <Text mr="2">Jesús Duarte</Text>
                    </Link>
                </NextLink>
                <Box mr="2">
                    <CgProfile size={50} />
                </Box>
            </Flex>
            <SideMenu isOpen={isOpen} btnRef={btnRef} onClose={onClose}/>
        </>
    )
}

export default Navbar
