import ExploreTechnologiesSEction from "./components/exploreTechnologiesSection/ExploreTechnologiesSEction";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <HeroSection></HeroSection>
                <ExploreTechnologiesSEction></ExploreTechnologiesSEction>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
