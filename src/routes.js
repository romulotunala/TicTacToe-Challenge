import { React } from "react";
import { Routes, Route } from "react-router-dom";

import TicTocToe from "./pages/ticTocToe";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<TicTocToe />} />
      <Route path={"/:board/:player"} element={<TicTocToe />} />
    </Routes>
  );
}
