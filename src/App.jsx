import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white ">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />;
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
