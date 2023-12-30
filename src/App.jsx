import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error_Page from "./Components/Error_Page";
import MainHeader from "./Components/MainHeader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>  {/*Created as Header Part of WebApp*/}
            <Route index element={<Home/> } />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error_Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
