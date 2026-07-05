# My_items — 統合管制卓

自作の各リポジトリ(夢占い / Web-Graffiti / ナッドサット語翻訳 / Radio / LifeLog / Odai / ピクトチャット)を 1 つにまとめたランチャーサイト。

90 年代 RTS 風のミリタリー・インダストリアルな管制端末デザイン。

## 公開 URL

https://hib3.github.io/My_items/

## 構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページ本体 |
| `style.css` | デザイン一式 |
| `main.js` | モジュール定義(リンク先)・時計・ログティッカー |

## リンク先の変更

`main.js` 冒頭の `APPS` 配列の `url` を各リポジトリの公開 URL に書き換えるだけです。カードの追加・削除も配列の要素を増減するだけで反映されます。

## 公開

静的サイトなのでビルド不要。GitHub Pages(Settings → Pages → `main` ブランチ)でそのまま公開できます。
