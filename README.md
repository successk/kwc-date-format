# &lt;kwc-date-format&gt;

> A component to easily format dates

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install kwc-date-format --save
```

Or [download as ZIP](https://github.com/successk/kwc-date-format/archive/master.zip).

## Usage

### 1 – Import polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

### 2 – Import custom element:

```html
<link rel="import" href="bower_components/kwc-date-format/kwc-date-format.html">
<link rel="import" href="bower_components/kwc-date-format/kwc-duration-format.html">
```

### 3 – Start using it!

```html
<kwc-date-format date="2016-01-01" format="DD/MM/YYYY"></kwc-date-format>
<kwc-date-format date="2016-03-25" format="dddd DD MMMM YYYY" locale="fr"></kwc-date-format>
<kwc-date-format date="2015-12-05" format="DD/MM/YYYY"></kwc-date-format>
<kwc-date-format date="03/12/2015" input-format="DD/MM/YYYY"></kwc-date-format>

<kwc-duration-format duration="PT4H"></kwc-duration-format>
<kwc-duration-format duration="P2Y3M2D" locale="fr"></kwc-duration-format>
```

## Documentation

See [docs](./docs) for options, children selector, methods, events and styles.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

### 1 – Install [bower](http://bower.io/) & [gulp](http://gulpjs.com/):

```sh
$ npm install -g bower gulp
$ npm install gulp
```

### 2 – Install local dependencies:

```sh
$ bower install
$ npm install
```

### 3 – Start development server and open `http://localhost:8000/components/kwc-date-format/`.

```sh
# Run a server for test/manual files
$ gulp manualTest
# Run a server for demo files
$ gulp demo
```

### 4 - build and test files

```sh
$ gulp build
$ gulp test:local
```

## History

For detailed changelog, check [Releases](https://github.com/successk/kwc-date-format/releases).

## License

MIT