import { HamburgerIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/switch'
import { CgProfile } from 'react-icons/cg';
import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import { useDisclosure, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    const submitHandler = (e) => {
        e.key === "Enter" && router.push({
                pathname: "/",
                query: {search: e.target.value}
            })
    }

    return (
        <>
            <Flex bg="blue.50" alignItems={"center"}>
                <HamburgerIcon cursor="pointer" ref={btnRef} ml="2" mr="2" onClick={onOpen} />
                <NextLink href="/">
                    <Link>
                        <Text fontSize="3xl">Dutube</Text>    
                    </Link>
                </NextLink>
                <Box mx="auto" w="40%">
                    <Input onKeyUp={(e) => submitHandler(e)} bg="white" placeholder="Search..." />
                </Box>
                <Switch mr="2"/>
                <NextLink href="/">
                    <Link>
                        <Text mr="2">Jesús Duarte</Text>
                    </Link>
                </NextLink>
                <Box mr="2" >
                    <CgProfile size={50} />
                </Box>
            </Flex>
            <SideMenu isOpen={isOpen} btnRef={btnRef} onClose={onClose}/>
        </>
    )
}

export default Navbar
