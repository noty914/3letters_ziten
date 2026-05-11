---
titleJa: RAG
titleEn: Retrieval-Augmented Generation
tags: [AI]
related: [geo, llm, mcp, sql]
---

## ① 非エンジニア向けのざっくり概要

検索で拾った文書を踏まえて AI が答えるやり方。

いったん関連資料を取り出し、その内容を材料に生成モデルが返答します。

## ② ちょっとだけ詳しく

RAG は、外部文書を先に検索してから LLM に渡し、回答の根拠を強める仕組みです。モデルの記憶だけに頼らず、最新情報を反映しやすくなります。

動き方は「1) 質問を受ける -> 2) 関連文書を検索して候補を取得 -> 3) 必要部分をLLMへ渡す -> 4) 根拠付きで回答を生成」です。

典型シーンは、社内規程やマニュアルを参照するAIチャットです。参照範囲・更新頻度・閲覧権限を先に決めると、誤回答や情報漏えいを減らせます。

混同しやすいのはファインチューニングです。RAG は外部検索で補う方式、ファインチューニングはモデル自体を再学習して性質を変える方式です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Retrieval-Augmented Generation official documentation](https://www.google.com/search?q=Retrieval-Augmented+Generation+official+documentation)
