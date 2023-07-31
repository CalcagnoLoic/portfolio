import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

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
            <footer className="bg-main-color p-7">
                <Footer />
            </footer>
        </div>
    );
};

export default App;
