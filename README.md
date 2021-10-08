# javascript-for-beginners

Learning Javascript by Making a Productivity App

# momentum

Javascript を使って Chrome Extention Momentum クローンコーディング

---

作業期間: 1001 - 1005
使用言語: html, Javascript, CSS

---

background.js + quotes.js

- 行列を形成して Random Background, 送出文句指定する。
- Math.random, Math.floor 機能を使って行列順番を randomize 化する。

clock.js

- Date Object を使って日付、時間関連の情報を表示する。
- setInterval, setTimeout: 周期, 日程時間後、実行させるタイマーを設定する。

login.js

- submit event が発生した時、 localstorage にユーザー情報を格納する。
- ユーザー情報格納の有無による既存の FORM を HIDDEN、以降 greeting message を見せる。

todo.js

- ユーザーから submit された value を localstorage へ string に変換した Object(id と todo)を配列で格納する。
- localstorage に格納した情報の有無により li で表示する
- li の追加及び削除の機能

weather.js

- openweathermap の API を使って実時間位置、天気、気温を表示する。
