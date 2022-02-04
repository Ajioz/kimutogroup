import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Topbar from './components/topbar/Topbar'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Service from "./pages/service/Service"
import Contact from "./pages/contact/Contact"
import SingleDiv from "./pages/single/SingleDiv"
import Footer from './components/footer/Footer'




const App = () => {
  return (
      <>
       <Router>
          <Topbar />
          <Routes> 
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/service" element={ <Service /> }/>
            <Route path="/contact" element={ <Contact /> }/>
            <Route path="/division/:divId" element={ <SingleDiv /> }/>
          </Routes>
          <Footer />
        </Router>
      </>
    )
};

export default App;