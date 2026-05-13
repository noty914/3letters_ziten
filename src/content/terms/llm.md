---
titleJa: LLM
titleEn: Large Language Model
titleEnJa: 大規模言語モデル
tags: [AI]
related: [cpu, geo, gpu, mcp, rag]
---

## ① 非エンジニア向けのざっくり概要

大量の文章から学んだ、言葉のパターンで答えを作る AI モデル。

チャットや文章生成の基盤としてニュースや企画でよく出ます。

## ② ちょっとだけ詳しく

LLM は、入力文脈をもとに次の語を予測しながら回答や文章を生成する仕組みです。質問応答、要約、分類など複数用途に使えます。

動き方は「1) プロンプトと必要情報を入力 -> 2) モデルがトークン単位で推論 -> 3) 出力文を生成 -> 4) 必要なら外部知識やルールで補正」です。

典型シーンは、社内問い合わせ対応や文書作成支援です。品質を上げるには、プロンプト調整だけでなく評価指標と検証データをセットで持つことが重要です。

RAG と似ていますが、LLM は生成モデル本体、RAG は外部文書検索を組み合わせて回答精度を上げる実装方式です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント: [Google検索: Large Language Model official documentation](https://www.google.com/search?q=Large+Language+Model+official+documentation)

