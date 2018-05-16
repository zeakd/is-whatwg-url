# is-whatwg-url
Can be parsed or not by whatwg url module.

## Why

whatwg-url constructor throw error for normal string. `is-whatwg-url` is just validater for whatwg-url constructor.

## Usage

``` js
const isURL = require('is-whatwg-url');
const { URL } = require('url');

isURL('apple'); // false
new URL('apple'); // throw Error Invalid URL

isURL('/apple'); // false
new URL('/apple'); // throw Error Invalid URL

isURL('//apple'); // false
new URL('//apple'); // throw Error Invalid URL

isURL('://apple'); // false
new URL('://apple'); // throw Error Invalid URL

isURL('a://apple'); // true
new URL('a://apple'); // success

isURL('a://apple://banana'); // true
new URL('a://apple://banana'); // success
```

## How it works
check input string have `protocol://` prefix. `protocol` should not be empty string.

## Caveats
This module does not guarantee that input is URL or not. It just check can be parsed or not.

## Alt.

consider using `try-catch` instead of this `is-whatwg-url` module.


``` js
let url;
try {
  url = new URL('apple');
} catch (err) {
  url = null;
}
```


## Related 
- [Node URL Api](https://nodejs.org/api/url.html#url_the_whatwg_url_api)
- [whatwg-url](https://github.com/jsdom/whatwg-url)
- [URL Standard](https://url.spec.whatwg.org/)