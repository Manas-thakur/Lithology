// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screen/Home/HomeScreen";
import ResultScreen from "./Screen/ResultScreen";
import ImageUpload from "./Screen/UploadImage/ImageUpload";
import ResultScreen2 from "./Screen/ResultScreen2";
// import { useEffect } from "react";

// import DataSend from "./Screen/DataSend";

function App() {

  // useEffect(() => {
  // }, [fetch]);

  return (
    <>
      <div className="px-20 py-10">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/" element={<DataSend />} /> */}
          <Route path="/upload/:id" element={<ImageUpload />} />
          <Route path="/Analysing/:id" element={<ResultScreen />} />
          <Route path="/identify/:id" element={<ResultScreen2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
