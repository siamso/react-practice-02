import { useContext } from "react";
import ImageSlider from "../ImageSlider";
import QRCode from "../QRCode";
import RatingStar from "../RatingStar";
import TicTacToe from "../Tic-Tac-Toe";
import { FeatureFlagContext } from "./context/index";

function FeatureFlag() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      ),
    },
    {
      key: "showORCode",
      component: <QRCode />,
    },
    {
      key: "showRatingStar",
      component: <RatingStar noOfStar={10} />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];

  const checkEnableFlags = (getCurrentKey) => {
    return enableFlags[getCurrentKey];
  };

  if (loading) {
    return <p>Loading! Please Wait</p>;
  }

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnableFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlag;
