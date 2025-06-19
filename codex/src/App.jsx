import { BrowserRouter, Routes, Route } from "react-router-dom";
import Icecream1 from "./components/Icecream1";
import Icecream2 from "./components/Icecream2";
import Icecream3 from "./components/Icecream3";
import Icecream4 from "./components/Icecream4";
 import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Icecream1 />} />
          <Route path="/ice2" element={<Icecream2 />} />
          <Route path="/ice3" element={<Icecream3 />} />
          <Route path="/ice4" element={<Icecream4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
