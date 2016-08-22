# [esformatter](https://github.com/millermedeiros/esformatter)-only-return

> esformatter plugin for removing empty space between return statement and begining of block **if return statement is the only statement in the block**


Turn this:
```js
if (some_condition...) {


return (value);



}
```

into:
```js
if (some_condition...) {
  return (value);
}
```


## Goals

- Focus on making return only blocks consise
- Do not force multilines and indentations, _let this be expressed through config params_


## Installation

```sh
$ npm install esformatter-only-return --save-dev
```


## Config

```json
{
  "plugins": [
    "esformatter-only-return"
  ]
}
```
This plugin will only come into picture after esformatter has worked on the code. So if you want to keep/remove a newline you can make use of config params for that
e.g.

If you want to keep a newline before Return, add this to your config
```json
"lineBreak": {
  "before": {
    "ReturnStatement": 1
  }
}
```

If you want to add a newline after return statement, you can add this to the config file (this is the default value)

```json
"lineBreak": {
  "before": {
    "BlockStatementClosingBrace": ">=1"
  }
}
```

or (if you need to change the above default value for some reason)

```json
"lineBreak": {
  "after": {
    "ReturnStatement": ">=1"
  }
}
```
