---
titleJa: XML
titleEn: Extensible Markup Language
tags: [データ]
related: [api, csv]
---

## 初級

タグで意味と構造を書くデータ形式。

`<タグ>…</タグ>` で入れ子にして表を表します。設定ファイルや業務システムで長く使われてきました。

## 中級

JSON と並べると「人が読みやすい軽量さ」は JSON 側に寄りがちですが、XML は **スキーマで厳密に型を縛る**文脈で残ります。レガシー連携や Enterprise の設定でも現役です。

スキーマ（XSD）、名前空間、XPath、変換（XSLT）がセットで語られることがあります。

## 上級

巨大ドキュメントのストリーミング解析、外部エンティティ（XXE）対策、署名・暗号化（XMLDSig / XML Encryption）がセキュリティの深掘りになります。
