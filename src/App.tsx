
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { AppHome } from "./pages/Home";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}