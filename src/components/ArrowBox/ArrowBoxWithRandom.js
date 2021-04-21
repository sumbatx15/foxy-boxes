import React, { useContext, useMemo } from "react";
import { DIRECTIONS, getRandomDirection } from "./utils";
import { RandomContext } from "../../App";
import ArrowBox from ".";

const ArrowBoxWithRandom = (props) => {
  const random = useContext(RandomContext);

  const direction = useMemo(() => {
    if (random === -1) return DIRECTIONS.TOP;
    return getRandomDirection();
  }, [random]);

  return <ArrowBox {...props} direction={direction} />;
};

export default ArrowBoxWithRandom;
