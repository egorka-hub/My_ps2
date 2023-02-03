import { memo } from 'react';

import TitleBlock from './TitleBlock/TitleBlock';
import Examples from './Examples/Examples';
import Feedback from './Feedback/Feedback';

function CasesBlocks() {
  return (
    <>
      <TitleBlock />
      <Examples />
      <Feedback />
    </>
  );
}

export default memo(CasesBlocks);
