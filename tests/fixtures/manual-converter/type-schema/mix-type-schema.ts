import { ExternalProps } from '../typings';
import { transformTypeToSchema } from '../../../../src/transformerFunctions';

interface TestProps {
  prop_a: string;
  prop_b?: string;
}

const type = transformTypeToSchema<TestProps & ExternalProps>();
