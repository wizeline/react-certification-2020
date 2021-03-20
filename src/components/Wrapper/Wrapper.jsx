import { Box } from "@chakra-ui/layout"

const Wrapper = ({children}) => {
    return (
        <Box 
            mt={8} 
            mx="auto" 
            maxW={"1400px"} 
            w="100%"
        >
            {children}
        </Box>
    )
}


export default Wrapper