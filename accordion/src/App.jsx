import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/RandomColor";
import RatingStar from "./components/RatingStar";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="">
      {/* <Accordion/> */}
      {/* <RandomColor /> */}
      {/* <RatingStar noOfStar={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
