import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Star00 from "./StarComponent/Star00";
import Star05 from "./StarComponent/Star05";
import Star10 from "./StarComponent/Star10";
import Star15 from "./StarComponent/Star15";
import Star20 from "./StarComponent/Star20";
import Star25 from "./StarComponent/Star25";
import Star30 from "./StarComponent/Star30";
import Star35 from "./StarComponent/Star35";
import Star40 from "./StarComponent/Star40";
import Star45 from "./StarComponent/Star45";
import Star50 from "./StarComponent/Star50";

const StarMaker = ({ rate }) => {
  let compo;
  if (rate == 0.0) compo = <Star00 />;
  else if (rate > 0 && rate <= 0.5) compo = <Star05 />;
  else if (rate > 0.5 && rate <= 1) compo = <Star10 />;
  else if (rate > 1 && rate <= 1.5) compo = <Star15 />;
  else if (rate > 1.5 && rate <= 2) compo = <Star20 />;
  else if (rate > 2 && rate <= 2.5) compo = <Star25 />;
  else if (rate > 2.5 && rate <= 3) compo = <Star30 />;
  else if (rate > 3 && rate <= 3.5) compo = <Star35 />;
  else if (rate > 3.5 && rate <= 4) compo = <Star40 />;
  else if (rate > 4 && rate <= 4.5) compo = <Star45 />;
  else if (rate > 4.5 && rate <= 5) compo = <Star50 />;
  return <StarMakerView>{compo}</StarMakerView>;
};

const StarMakerView = styled.View`
  width: 95%;
  height: 100%;
  flex-direction: row;
`;

export default StarMaker;
