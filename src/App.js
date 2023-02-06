import "./Common.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import { useState, useEffect } from "react";
import EmptyPage from "./pages/EmptyPage";
import Pflist from "./pages/Pflist";

function InitPage() {
  const [openToggle, setOpenToggle] = useState(false);
  // 모바일 시트오픈
  const handleClick = () => {
    setOpenToggle(!openToggle);
  };
  // 컬러테마
  const [theme, setTheme] = useState("dark");
  function changeTheme(mode) {
    setTheme(mode);
  }
  // 브라우저 사이즈체크
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (+window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className={`global_warp ` + theme + (isMobile ? " isMobile" : "")}>
        <div className={"global_left" + (openToggle ? " active" : "")}>
          <button
            type="button"
            className="btn_sheet_controll"
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Header theme={changeTheme}></Header>
        </div>
        <div className="global_right">
          <Routes>
            <Route path="/mypf/" element={<Main active="true"></Main>} />
            <Route path="/mypf/Pflist/:name" element={<Pflist></Pflist>} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
        </div>
        <Footer></Footer>
        <div id="modal-root"></div>
      </div>
    </BrowserRouter>
  );
}

export default InitPage;
