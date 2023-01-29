import { memo } from "react";

import MainFirst from "./MainFirst/MainFirst";
import Solution from "./Solution/Solution";
import Companies from "./Companies/Companies";

function Main() {
  return (
    <>
      <MainFirst />
      <Solution />
      <Companies />
    </>
  );
}

export default memo(Main);
