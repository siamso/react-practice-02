const dummyApiData = {
  showImageSlider: true,
  showQRCode: true,
  showRatingStar: true,
  showTicTacToe: true,
};

const featureFlagDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiData) setTimeout(resolve(dummyApiData), 500);
    else reject("Some error occured! Please Try again");
  });
};

export default featureFlagDataServiceCall;
