import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ArticlesCard from "./components/ArticlesCard";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import ArticleTopicCard from "./components/ArticleTopicCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Header />
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticlesCard />} />
          <Route path="/api/articles/:article_id" element={<ArticleCard />} />
          <Route path="/api/topics" element={<ArticleTopicCard />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GabNBarTimes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
