import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path="/" element={<Main />} />
              </Route>

          </Routes>
      </BrowserRouter>
  )
}

export default App
