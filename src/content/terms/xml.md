---
titleJa: XML
titleEn: Extensible Markup Language
tags: [データ]
related: [api, csv]
---

## ① 非エンジニア向けのざっくり概要

タグで意味と構造を書くデータ形式。

`<タグ>…</タグ>` で入れ子にして構造を表します。設定ファイルや業務システムで長く使われてきました。

## ② ちょっとだけ詳しく

XML は、タグ構造でデータの意味と階層を厳密に表す仕組みです。データ形式だけでなく、構造ルールを明示できる点が強みです。

動き方は「1) タグでデータ構造を定義 -> 2) 必要ならXSDで検証ルールを定義 -> 3) 受け側で妥当性を検証 -> 4) XPathや変換処理で利用」です。

典型シーンは、業務システム連携や設定ファイル管理です。厳密な検証が必要な連携で今も使われます。

混同しやすいのは JSON です。JSON は軽量で扱いやすく、XML は構造検証や拡張性を重視する場面で選ばれます。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Extensible Markup Language official documentation](https://www.google.com/search?q=Extensible+Markup+Language+official+documentation)
