---
titleJa: API
titleEn: Application Programming Interface
tags: [開発]
related: [app, aws, csv, dns, ide, iot, llm, mcp, rpa, sql, xml]
---

## ① 非エンジニア向けのざっくり概要

別のシステムへ頼みごとをするときの窓口。

プログラム同士がデータを渡したり処理を依頼したりするときの決まりです。Web では HTTP とセットで語られることが多いです。

補足（比喩）：レストランの「メニュー」と「厨房へのオーダー方法」に近いです。

## ② ちょっとだけ詳しく

API は、システム同士が決まった形式で依頼と返答をやり取りする仕組みです。画面を直接操作しなくても、データ取得や登録を自動で連携できます。

動き方は「1) 呼び出し側が URL と方法（GET/POST など）を指定して依頼 -> 2) 必要なデータや認証情報を送る -> 3) 受け側が処理して結果を返す -> 4) 呼び出し側が結果やエラー内容に応じて次の処理を決める」です。

典型シーンは、受発注システムと在庫システムを自動連携するときです。手作業での転記を減らし、更新遅れを防ぐために使われます。

混同しやすいのは画面連携です。API は「機械同士の連携」、GUI は「人の操作」で、連携の主体が違います。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Application Programming Interface official documentation](https://www.google.com/search?q=Application+Programming+Interface+official+documentation)
