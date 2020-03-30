import { ExternalProps } from '../typings';
import { transformTypeToSchema } from '../../../../src/transformerFunctions';

interface TestProps {
  a: HTMLElement;
  b: string;
}

const type = transformTypeToSchema<TestProps>({ skipParseTypeInFiles: ['lib.dom.d.ts'] });
