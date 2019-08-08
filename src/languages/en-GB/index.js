import bosCBO from './bos.cbo.json';
import bosO4B from './bos.o4b.json';
import bosRetail from './bos.retail.json';
import global from './global.json';
import lloydsCBO from './lloyds.cbo.json';
import lloydsO4B from './lloyds.o4b.json';
import lloydsRetail from './lloyds.retail.json';

export default {
  bos: {
    cbo: bosCBO,
    o4b: bosO4B,
    retail: bosRetail,
  },
  global,
  lloyds: {
    cbo: lloydsCBO,
    o4b: lloydsO4B,
    retail: lloydsRetail,
  },
};