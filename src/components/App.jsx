import Navbar from "./navbar";
import Presentation from "./presentation";
import Footer from "./footer";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Presentation />
                <Projects />
                <Skills />
                
                <Contact />
            </main>
            <footer className="bg-dark-blue p-5">
                <Footer />
            </footer>
        </div>
    );
};

export default App;
