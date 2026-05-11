---
titleJa: CSV
titleEn: Comma-Separated Values
tags: [データ]
related: [api, sql, xml, zip]
---

## ① 非エンジニア向けのざっくり概要

表をカンマなどで区切って並べたテキスト形式。

Excel でも開けるデータの受け渡しでよく使われます。

## ② ちょっとだけ詳しく

CSV は、行と列のデータを区切り文字で並べて交換する仕組みです。多くのツールで扱えるため、データ連携の入口として使われます。

動き方は「1) 列定義に沿ってデータを書き出す -> 2) 文字コードと区切りを合わせる -> 3) 受け側で読み込む -> 4) 型や欠損を検証して取り込む」です。

典型シーンは、他部署や外部システムとのデータ受け渡しです。テンプレートと検証手順を決めておくと、文字化けや列ずれを防げます。

混同しやすいのは SQL です。CSV はファイル形式、SQL はデータベースを操作する言語です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Comma-Separated Values official documentation](https://www.google.com/search?q=Comma-Separated+Values+official+documentation)
