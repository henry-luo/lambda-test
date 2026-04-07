English | [简体中文](./docs/zh-cn/README.zh-CN.md) | [日本語](./docs/ja/README-ja.md) | [Português Brasileiro](./docs/pt-br/README-pt-br.md) | [한국어](./docs/ko/README-ko.md) | [Español (España)](./docs/es-es/README-es-es.md) | [Русский](./docs/ru/README-ru.md) | [Türkçe](./docs/tr/README-tr.md) | [සිංහල](./docs/si/README-si.md) | [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="../support/images/user-images-githubus_39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js" /></a></p>
<p align="center">Fast <b>2kB</b> alternative to Moment.js with the same modern API</p>
<p align="center">
    <a href="https://bundlephobia.com/package/dayjs"><img
            src="../support/images/img.shields.io_bundlephobia_minzip_dayjs.svg"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="../support/images/img.shields.io_npm_v_dayjs.svg"
                                                       alt="NPM Version"></a>
    <a href="https://github.com/iamkun/dayjs/actions/workflows/check.yml"><img
            src="../support/images/img.shields.io_github_actions_workflow_status_iamkun_dayjs_check.yml.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="../support/images/img.shields.io_codecov_c_github_iamkun_dayjs_master.svg" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="../support/images/img.shields.io_badge_license-MIT-brightgreen.svg" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="../support/images/user-images-githubus_40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiar Moment.js API & patterns
* 💪 Immutable
* 🔥 Chainable
* 🌐 I18n support
* 📦 2kb mini library
* 👫 All browsers supported

---

## Getting Started

### Documentation

You can find more details, API, and other docs on [day.js.org](https://day.js.org/) website.

### Installation

```console
npm install dayjs --save
```

📚[Installation Guide](https://day.js.org/docs/en/installation/installation)

### API

It's easy to use Day.js APIs to parse, validate, manipulate, and display dates and times.

```javascript
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[API Reference](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js has great support for internationalization.

But none of them will be included in your build unless you use it.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```

📚[Internationalization](https://day.js.org/docs/en/i18n/i18n)

### Plugin

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(advancedFormat) // use plugin

dayjs().format('Q Do k kk X x') // more available formats
```

📚[Plugin List](https://day.js.org/docs/en/plugin/plugin)

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[[Become a sponsor via Github](https://github.com/sponsors/iamkun/)] [[Become a sponsor via OpenCollective](https://opencollective.com/dayjs#sponsor)]

<a href="https://github.com/ken-swyfft" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_65305317.jpg">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/sight-sound" target="_blank">
  <img width="70" src="../support/images/images-opencollectiv_256.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/filerev" target="_blank">
  <img width="70" src="../support/images/images-opencollectiv_256.png" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/carboneio" target="_blank">
  <img width="70" src="../support/images/images-opencollectiv_256.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/radioplusexperts" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_188567998.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://anonstories.com" target="_blank">
  <img alt="Instagram Story Viewer" width="70" src="../support/images/avatars.githubusercontent.com_u_240702364.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.sayfone.com/call-rates " target="_blank">
  <img alt="Sayfone Cheap international calls" width="70" src="../support/images/github.com_user-attachments_assets_68f91139-b190-421b-bcd7-43a8e3d84fe7.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://automatio.ai" target="_blank" alt="Automatio AI">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_1984909.png" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://bestkru.com/" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_159320286.png" alt="BestKru">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://handsontable.com/docs/react-data-grid/?utm_source=Dayjs_GH&utm_medium=sponsorship&utm_campaign=library_sponsorship" target="_blank">
  <img width="70" src="../support/images/github.com_user-attachments_assets_426c3476-dc34-44d1-a904-ed58dbd20dd6.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://route4me.com/" target="_blank">
  <img width="70" src="../support/images/github.com_user-attachments_assets_3fbc86c5-98a9-49c2-beae-1969026fcd76.png" alt="Route Optimizer and Route Planner Software">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/sentdm" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_153308555.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/blacksandsmedia" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_116517387.png">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/mvpsnet" target="_blank">
  <img width="70" src="../support/images/avatars.githubusercontent.com_u_89784111.png">
</a>


## Contributors

This project exists thanks to all the people who contribute.

Please give us a 💖 star 💖 to support us. Thank you.

And thank you to all our backers! 🙏

<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="../support/images/opencollective_contributors.svg" /></a>

## License

Day.js is licensed under a [MIT License](./LICENSE).
