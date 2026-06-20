import { createSelectlet } from './selector/selectlet';
import { createStylelet } from './style/stylelet';

const root = globalThis as typeof globalThis & {
  createStylelet?: typeof createStylelet;
};

root.createStylelet = createStylelet;

export default createSelectlet;
