import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ArticlesCard from "./components/ArticlesCard";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import ArticleTopicCard from "./components/ArticleTopicCard";

function App() {
  return (
    <>
      <Login />

      <Header />

      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticlesCard />} />
          <Route path="/articles/:article_id" element={<ArticleCard />} />
          <Route path="/topics" element={<ArticleTopicCard />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
