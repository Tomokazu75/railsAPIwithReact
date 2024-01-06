import "./App.css"
import Home from "./routes/Home";
import Show from "./routes/Show";
import New from "./routes/New";
import { Link, Route, Routes } from "react-router-dom";
import Nomatch from "./routes/Nomatch";
import Edit from "./routes/Edit";

export default function App() {

  return (
    <div className="container">
      <h1>SPA掲示板</h1>
      <ul>
        <li><Link to="/home">一覧</Link></li>
        <li><Link to="/new">新規作成</Link></li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}
