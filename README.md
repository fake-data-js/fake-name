# FakeDataJS - Fake Name

## Install

```
$ npm install -D @fakedatajs/fake-name
```

## Usage

```js
import {
  fakeFirstName,
  fakeFullName,
  fakeLastName,
} from '@fakedatajs/fake-name'

fakeFirstName() // => John, Thomas, Alice etc.
fakeFirstName() // => John, Thomas, Alice etc.
fakeFirstName({ type: 'female' }) // => Ana, Alice etc.
fakeFirstName({ type: 'male' }) // => John, Thomas etc.
fakeFullName() // => Thomas Adams, John Smith, Alice West etc.
fakeLastName() // => Adams, Smith, West etc.
```

## Options

```ts
type FirstNameOptions = {
  locale?: NameLocales
  type?: 'female' | 'male'
}

type LastNameOptions = {
  locale?: NameLocales
}

type NameLocales = 'en_GB' | 'pl'
```

## Tests

```
npm run test
```
