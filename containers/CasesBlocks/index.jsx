import { memo } from 'react';

import TitleBlock from './TitleBlock/TitleBlock';
import Examples from './Examples/Examples';

function CasesBlocks() {
  return (
    <>
      <TitleBlock />
      <Examples />
    </>
  );
}

export default memo(CasesBlocks);
