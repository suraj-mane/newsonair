import { Route, Routes } from "react-router-dom";
import News from "./News";
import National from "./National";
import International from "./International";
import Sports from "./Sports";
import Business from "./Business";


function Main(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<News />}></Route>
                <Route path="/national" element={<National />}></Route>
                <Route path="/international" element={<International />}></Route>
                <Route path="/sports" element={<Sports />}></Route>
                <Route path="/business" element={<Business />}></Route>
            </Routes>
        </div>
    )
}

export default Main;