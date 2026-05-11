---
titleJa: GPU
titleEn: Graphics Processing Unit
tags: [AI]
related: [cpu, llm]
---

## ① 非エンジニア向けのざっくり概要

画像処理や行列計算に強い演算チップ。

ディスプレイ向けだけでなく、AI の学習・推論でもよく使われます。

## ② ちょっとだけ詳しく

GPU は、多数の計算を同時に処理して速度を上げる仕組みです。画像処理だけでなく、AI の学習・推論でも使われます。

動き方は「1) 大量データを小さな計算単位に分割 -> 2) GPUコアで並列実行 -> 3) 結果を集約 -> 4) 必要に応じてCPU側処理へ戻す」です。

典型シーンは、生成AI推論や動画処理の高速化です。まず処理が並列化しやすいかを見て、CPU増強とGPU利用を切り分けます。

混同しやすいのは CPU です。GPU は並列計算特化、CPU は汎用制御と分岐処理に強いという違いがあります。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Graphics Processing Unit official documentation](https://www.google.com/search?q=Graphics+Processing+Unit+official+documentation)
