import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/RandomColor";
import RatingStar from "./components/RatingStar";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCode from "./components/QRCode";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";
import useLocalStorage from "./components/toggle-theme/hooks/useLocalStorage";
import ScrollIndicator from "./components/ScrollIndicator";
import TabTest from "./components/tabs/TabTest";

function App() {
  // const [theme, setTheme] = useLocalStorage("theme", "dark");
  return (
    <div className="" /*data-mode={theme}*/>
      {/* <Accordion/> */}
      {/* <RandomColor /> */}
      {/* <RatingStar noOfStar={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCode /> */}
      {/* <ToggleTheme theme={theme} setTheme={setTheme} /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      <TabTest />
    </div>
  );
}

export default App;
