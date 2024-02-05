import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WorldHexagonMap from "./pages/WorldHexagonMap";
import BubbleChart from "./pages/BubbleChart";
import WorldHexagonMap1 from "./pages/WorldHexagonMap1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bubble-chart":
        title = "";
        metaDescription = "";
        break;
      case "/world-hexagon-map":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WorldHexagonMap />} />
      <Route path="/bubble-chart" element={<BubbleChart />} />
      <Route path="/world-hexagon-map" element={<WorldHexagonMap1 />} />
    </Routes>
  );
}
export default App;
