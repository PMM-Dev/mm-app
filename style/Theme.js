const palette = {
    hlRed: "#FF3D52",
    hlOrange: "#FF603A",
    fontDeepBlack: "#1a1a1a",
    fontBlack: "#333333",
    fontBlackGray: "#9098B6",
    fontGray: "#b9c4e1",
    fontBlue: "#48dbfb",
    backgroundWhite: "#ffffff",
    backgroundGray: "#F3F4F8",
    backgroundDarkerGray: "#dadae0",
    borderGray: "#EFEFEF",
    borderGray2: "#efefef",
    purple: "#8A2BE2",
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
    NanumSquareRFont: `
    font-family: 'NanumSquareR';
    `,
    NanumSquareLFont: `
    font-family: 'NanumSquareL';
    `,
    NanumSquareBFont: `
    font-family: 'NanumSquareB';
    `,
    NanumSquareEBFont: `
    font-family: 'NanumSquareEB';
    `,
    NanumGothicFont: `
    font-family: 'NanumBarunGothic';
    `,git
    NanumGothicBoldFont: `
    font-family: 'NanumBarunGothicBold';
    `,
};

export default {...palette, ...ui, ...Font};
