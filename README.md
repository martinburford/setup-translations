# **setup/translations**

**Please note:** before running any code from this branch, be sure to run `npm install`.

This repository has been created in order to demonstrate how **react-i18next** (https://www.npmjs.com/package/react-i18next) should be used in order to load translations.

----

Before accessing translations, default i18next configuration needs to be set. In order to do this, create a helper file with the following content:

```javascript
// React imports
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Other NPM imports
import languages from '../../languages/en-GB';

i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'global',
      fallbackNS: ['errors','fallbackGlobal'],
      interpolation: {
        escapaValue: false,
      },
      keySeparator: '.',
      lng: 'lloyds',
      resources: languages
    });

export default i18n;
```

Be sure to point to the JSON files which contain your translations via the **resources** property. In the example above, this points to a file (../../languages/en-GB/index.js) which exports multiple JSON files (as shown below):

**../../languages/en-GB/index.js**
```javascript
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
```

With the necessary i18next configuration in place, it is now possible to specify an i18next `<Translation>` Higher Order Component

### `<Translation>`

In order to use the `<Translation>` component of react-i18next, there are a few necessary steps:

1. Import it into the JavaScript module where it is to be used using the following:

```javascript
import { Translation } from 'react-i18next';
```

2. Wrap whichever block of JSX requires translations in the following way. The **lng** prop indicates which language to use and the **ns** prop indicates which namespace of date within that language translation file is to be used:

```javascript
<Translation lng="bos" ns={'cbo'}>
  {t => (
    ...
  )}
</Translation>
```

## Translation files

Previously (in this ReadMe), the way language files are imported was illustrated via a few code samples. The format that languages should be made available to react-i18Next is in the following format:

```javascript
{
  "bos": {
    "cbo": {
      "key1": "Value 1 (bos cbo)",
      "key2": "Value 2 (bos cbo)"
    },
    "o4b": {
      "key1": "Value 1 (bos o4b)",
      "key2": "Value 2 (bos o4b)"
    }
  },
  "lloyds": {
    "cbo": {
      "key1": "Value 1 (lloyds cbo)",
      "key2": "Value 2 (lloyds cbo)"
    },
    "o4b": {
      "key1": "Value 1 (lloyds o4b)",
      "key2": "Value 2 (lloyds o4b)"
    }
  }
}
```

With multiple translations loaded, it is then possible to access the `t() function`, which can be used to serve appropriately translated strings of text. For example, the snippet of content below pulls in nested JSON values, mapping the string within the t() function to the properties within the related language/namepace JSON file:

```javascript
<Translation lng="bos" ns="cbo">
  {t => (
    <ul>
      <li>{t('key1')}</li> // => Value 1 (bos cbo)
      <li>{t('key2')}</li> // => Value 2 (bos cbo)
    </ul>
  )}
</Translation>
```

## Fallback translations

It is possible to pull translations from a second location, should a property name not be successfully resolved in the combined language/namespace provider. A good example of this would be pulling in globally stored strings of text which have no purpose in being duplicated between one namespace and another. Typically this could be things such as button labels (Yes / No / Continue / Cancel) or generic error messages. This can be achieved by doing the following:

When initializing react-i18Next, there are 2 properties, **fallbackLng** and **fallbackNS**. These will be accessed if a property referenced within the **t()** funtion cannot resolve against the requested language/namespace provider. In order for this to work, suitable JSON data should be loaded as part of the resources data block of react-i18Next (as below). Typically this would be stored within a separate JSON file, rather than as an inline block as in the below example. This is purely for illustration purposes:

```javascript
...

i18n
    .use(initReactI18next)
    .init({
      ...
      fallbackLng: 'global',
      fallbackNS: ['errors','fallbackGlobal'],
      resources: {
        ...
        "global": {
          "errors": {
            "key1": "Value 1 (global errors)",
            "key2": "Value 2 (global errors)"
          };
          "fallbackGlobal": {
            "key1": "Value 1 (global fallback)",
            "key2": "Value 2 (global fallback)"
          }
        }
        ...
      }
      ...
    });

...
```