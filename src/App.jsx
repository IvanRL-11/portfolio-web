import "./App.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
