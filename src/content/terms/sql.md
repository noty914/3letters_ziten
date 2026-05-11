---
titleJa: SQL
titleEn: Structured Query Language
tags: [データ]
related: [api, csv, rag]
---

## ① 非エンジニア向けのざっくり概要

データベースへ問い合わせ・更新するときの言語。

表から条件に合う行を取り出したり、集計したりするための命令です。略称で「エスキューエル」と読むのが一般的です。

## ② ちょっとだけ詳しく

SQL は、データベース内の表に対して検索・更新・集計を行う仕組みです。大量データでも条件を指定して必要な情報だけ取り出せます。

動き方は「1) 対象の表と条件を指定して問い合わせ -> 2) データベースが実行計画を作成 -> 3) 必要な行を検索・結合・集計 -> 4) 結果を返す（更新系は確定処理）」です。

典型シーンは、売上集計や業務レポート作成です。まず読み取り専用で検証してから本番更新に進むと事故を減らせます。

混同しやすいのは CSV です。CSV はデータの受け渡し形式、SQL はデータベースを操作するための言語です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Structured Query Language official documentation](https://www.google.com/search?q=Structured+Query+Language+official+documentation)
