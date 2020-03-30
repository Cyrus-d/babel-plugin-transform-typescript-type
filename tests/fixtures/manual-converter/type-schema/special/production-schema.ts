import { transformTypeToSchema } from '../../../../../src/transformerFunctions';

interface TestProps {
  prop_a: string;
  prop_b?: string;
}

const shouldBeNullValue = transformTypeToSchema<TestProps>({ generateInProduction: false });
const shouldHaveSchema = transformTypeToSchema<TestProps>({ generateInProduction: true });
