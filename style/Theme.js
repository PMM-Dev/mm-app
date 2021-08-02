const palette = {
    hlRed: "#FF3D52",
    hlOrange: "#FF603A",
    fontBigBlack: "#1a1a1a",
    fontBlack: "#333333",
    fontBlackGray: "#9098B6",
    fontGray: "#b9c4e1",
    backgroundWhite: "#ffffff",
    backgroundGray: "#eff0f4",
    borderGray: "#EFEFEF",
    purple: "#8A2BE2",
    borderGray2: "#efefef",
};

const ui = {
    opacityMask50: `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  `,
    opacityMask10: `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  `,
};

const Font = {
    DoHyeonFont: `
    font-family: 'DoHyeon';
    `,
    NanumSquareFont: `
    font-family: 'NanumSquare';
    `,
    NanumGothicFont: `
    font-family: 'NanumBarunGothic';
    `,
    NanumGothicBoldFont: `
    font-family: 'NanumBarunGothicBold';
    `,
};

export default {...palette, ...ui, ...Font};
