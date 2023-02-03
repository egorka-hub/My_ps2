import FirstBlock from './FirstBlock/FirstBlock';
import Blocks from './Blocks/Blocks';
import Cases from './Cases/Cases';
import Fields from './Fields/Fields';
import Try from './Try/Try';

import { POINTS } from './Blocks/consts';
import { CASES } from './Cases/consts';

import styles from './Small.module.scss';

export function Small() {
  return (
    <>
      <FirstBlock />
      {POINTS.map(({ title, text, isReverse, image }) => (
        <Blocks title={title} text={text} isReverse={isReverse} image={image} />
      ))}
      <h2 className={styles.title}>Примеры наших кейсов</h2>
      {CASES.map(({ caseTitle, caseText }) => (
        <Cases caseTitle={caseTitle} caseText={caseText} />
      ))}
      <Fields />
      <Try />
    </>
  );
}

export default Small;
