
import "./Styles/index.scss";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Questions from "./components/Questions";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Detail />
      <Testimonial />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
