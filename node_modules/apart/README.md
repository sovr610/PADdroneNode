# Apart [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Partial function application.

## Install

```
npm i apart
```

## How to use?

```js
const apart = require('apart');
const sum = (a, b) => a + b;
const inc = apart(sum, 1);

inc(9);
// returns
10
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/apart.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/apart/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/apart.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/apart "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/apart  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/apart "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
