# z-trans
[![Build Status](https://travis-ci.org/ZeeCoder/z-trans.svg?branch=master)](https://travis-ci.org/ZeeCoder/z-trans)
[![npm version](https://badge.fury.io/js/z-trans.svg)](http://badge.fury.io/js/z-trans)

This is a simple translation solution, which is inspired by the [Symfony
Translator Component](http://symfony.com/doc/current/components/translation/introduction.html).

It's a CommonJS module, so it must be used alongside with [Browserify](http://browserify.org/), or
something similar, like [WebPacker](http://webpack.github.io/).

## Example
```js
// Requiring the module
var translator = require('z-trans');

// Adding the translation data. This could come from anywhere like: Ajax, jsonp,
// another module or the parsed JSON contents of a DOM element.
translator.addData('en', {
    domain_name: {
        translation_key: '(en) translation_value: "%parameter%"',
        translation_key2: 'something still not translated to the "hu" locale',
    }
});
translator.addData('hu', {
    domain_name: {
        translation_key: '(hu) translation_value: "%parameter%"'
    }
});

// Domains could be added later on if needed.
translator.addDomainData(
    'en',
    'another_domain_name',
    {
        some_key: 'some value'
    }
);

// If a translation fails in the current locale, it will fall back to the
// default locale
translator.defaultLocale = 'en';
translator.locale = 'en';

// Returns '(en) translation_value: "param"'
console.log(translator.trans('translation_key', {'%parameter%': 'param'}, 'domain_name'));

// Returns 'some value'
console.log(translator.trans('some_key', null, 'another_domain_name'));

// Returns 'something still not translated to the "hu" locale'
console.log(translator.trans('translation_key2', null, 'domain_name', 'hu'));
```

## License
[MIT](LICENSE)
