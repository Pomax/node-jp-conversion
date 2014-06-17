var converter = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

test(converter.convert("random"), false);
test(converter.convert("seiiki"), { kanji: false, hiragana: 'せいいき', katakana: 'セイーキ', romaji: 'seiiki' });
test(converter.convert("しんかんせん"), { kanji: false, hiragana: 'しんかんせん', katakana: 'シンカンセン', romaji: 'shinkansen' });
test(converter.convert("スエーデン"), { kanji: false, hiragana: false, katakana: 'スエーデン', romaji: 'sue-den' });
test(converter.convert("感じ方"), { kanji: '感じ方', hiragana: false, katakana: false, romaji: false });
test(converter.convert("どきっ"), { kanji: false, hiragana: 'どきっ', katakana: 'ドキッ', romaji: 'doki!' });

console.log("no errors");
