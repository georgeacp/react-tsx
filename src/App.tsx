import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Detail from "./components/detail";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
