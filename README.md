# Japanese input conversion

This is a node.js package for performing input conversion
for the purposes of Japanese. Any input received will be
converted (or attempted to) kanji form, hiragana form,
katakana form, and romanised Japanese form.

If any of these conversions cannot be performed, the
resulting conversion will be false.

## Installation

`npm install jp-conversion`

## Use

`var converter = require('jp-conversion');`

## API

> .convert(input) -> object

convert an input into as many possible interpretations.
The resulting object is of the form:

```
{
	kanji: <string or false>
	hiragana: <string or false>
	katakana: <string or false>
	romaji: <string or false>
}
```

> .romanise(kana) -> string

Convert kana input (either hiragana or katakana) into its
romanised equivalent.

The romanisation scheme used is a "makes phonetic
sense to English readers" scheme. Because I despise
kunrei, and the macrons used in Hepburn romanisation
are generally unnecessary.

## Example

```
var convert = require("jp-conversion");
var res = converter.convert("しんかんせん");
console.log(res);
// => { kanji: false, hiragana: 'しんかんせん', katakana: 'シンカンセン', romaji: 'shinkansen' });
```
