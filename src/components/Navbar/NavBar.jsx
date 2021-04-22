import { HamburgerIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/switch'
import { CgProfile } from 'react-icons/cg';
import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import { useDisclosure, Link, useColorMode, Avatar } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from 'next/router';
import { useData } from '../../state/DataProvider';

const Navbar = () => {
    const { data, dispatch} = useData()
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    const submitHandler = (e) => {
        e.key === "Enter" && dispatch({
            type: "SEARCH",
            payload: e.target.value
        })
    }

    const switchHandler = () => {
        dispatch({
            type: "DARK_MODE",
            payload: !data.darkMode
        })
    }

    const logoutHandler = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <>
            <Flex bg={!data.darkMode ? "blue.50" : "black"} alignItems={"center"}>
                <HamburgerIcon color={!data.darkMode ? "black" : 'white'} cursor="pointer" ref={btnRef} ml="2" mr="2" onClick={onOpen} />
                <NextLink href="/">
                    <Link>
                        <Text color={!data.darkMode ? "black" : 'white'} fontSize="3xl">Dutube</Text>    
                    </Link>
                </NextLink>
                <Box mx="auto" w="40%">
                    <Input onKeyUp={(e) => submitHandler(e)} bg="white" placeholder="Search..." />
                </Box>
                <Switch onChange={switchHandler} mr="2"/>
                <NextLink href={!data.user ? "/login" : "/"}>
                    <Link>
                        <Text color={!data.darkMode ? "black" : 'white'} mr="2">{data.user ? data.user.name : "Login"}</Text>
                    </Link>
                </NextLink>
                {!data.user ? null : <Text color={!data.darkMode ? "black" : 'white'} onClick={logoutHandler} mr="2" as="button">logout</Text>}
                <Box mr="2" >
                    {!data.user 
                    ? <CgProfile size={50} /> 
                    : <Avatar name={data.user.name} src={data.user.avatarUrl} />}
                </Box>
            </Flex>
            <SideMenu isOpen={isOpen} btnRef={btnRef} onClose={onClose}/>
        </>
    )
}

export default Navbar
