import Navbar from "./navbar";
import Presentation from "./presentation";
import Footer from './footer';
import Skills from "./skills";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Presentation />
                    <Skills />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </ChakraProvider>
    )
}

export default App;