import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import DataProvider from '../state/DataProvider'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <DataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
