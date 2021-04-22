import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Link, Text } from '@chakra-ui/layout'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import React from 'react'
import NextLink from 'next/link'
import { useData } from '../../state/DataProvider'

const SideMenu = ({isOpen, onClose, btnRef}) => {
  const {data, _} = useData()
    return (
        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
              {!data.user ? null :
                <NextLink href="/favorites">
                  <Link>
                    <Text>Favorites</Text>
                  </Link>
                </NextLink>
              }
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
}

export default SideMenu
