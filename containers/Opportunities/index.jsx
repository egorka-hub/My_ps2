import FirstBlock from './FirstBlock/FirstBlock';
import Blocks from './Blocks/Blocks';
import Cases from './Cases/Cases';
import Fields from './Fields/Fields';
import Try from './Try/Try';

import styles from './Opportunities.module.scss';

export function Opportunities() {
  return (
    <>
      <FirstBlock />
      <Blocks />
      <Blocks />
      <Blocks />
      <Blocks />
      <Blocks />
      <h2 className={styles.title}>Примеры наших кейсов</h2>
      <Cases />
      <Cases />
      <Fields />
      <Try />
    </>
  );
}

export default Opportunities;
