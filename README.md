# &lt;kwc-date-format&gt;

> A component to easily format dates

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install kwc-date-format --save
```

Or [download as ZIP](https://github.com/successk/kwc-date-format/archive/master.zip).

## Usage

1 – Import polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
```

2 – Import custom element:

```html
<link rel="import" href="bower_components/kwc-date-format/kwc-date-format.html">
```

3 – Start using it!

```html
<kwc-date-format date="2016-01-01" format="DD/MM/YYYY"></kwc-date-format>
<kwc-date-format date="2016-03-25" format="dddd DD MMMM YYYY" locale="fr"></kwc-date-format>
<kwc-date-format date="2015-12-05" format="DD/MM/YYYY"></kwc-date-format>
<kwc-date-format date="03/12/2015" input-format="DD/MM/YYYY"></kwc-date-format>
```

## Options

This component use [Moment.js](http://momentjs.com).
All format must respect this library format.

Attribute      | Options            | Default      | Description
---            | ---                | ---          | ---
`date`         | *String*           | *now*        | The date to format
`input-format` | *String*           | `null`       | The format of the input date
`format`       | *String*           | `null`       | The output format
`locale`       | *String*           | `null`       | The locale to use – See **I18n** for more information
`output`       | *read only String* | -            | The date in wanted format – updated each time another attribute is updated

## Children

Selector | Description
---      | ---
None     | -

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
None          | -            | -           | -

## Events

Event     | Detail   | Description
---       | ---      | ---
None      | -        | -

## Styles

Name      | Default  | Description
---       | ---      | --
None      | -        | -

## I18n

This component is base on [Moment.js](http://momentjs.com) and import all of its locales.
This component does not provide any mean to configure translations used by this API
but you can see its documentation for more information.

This component also use [kwc-i18n](https://github.com/successk/kwc-i18n) component.
If not set by `locale` attribute, the locale used by this component is the one configured for this component.
See its documentation for more information.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1 – Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

```sh
$ npm install -g bower polyserve
```

2 – Install local dependencies:

```sh
$ bower install
```

3 – Start development server and open `http://localhost:8080/components/kwc-i18n/`.

```sh
$ polyserve
```

## History

For detailed changelog, check [Releases](https://github.com/successk/kwc-i18n/releases).

## License

MIT