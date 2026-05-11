---
titleJa: UAT
titleEn: User Acceptance Testing
tags: [プロジェクト]
related: [faq, mvp]
---

## ① 非エンジニア向けのざっくり概要

本番に出す前に、利用側が「受け入れるか」を試す検証。

ユーザーが業務に使えるかを確認するテストで、受入試験とも呼ばれます。

## ② ちょっとだけ詳しく

UAT は、実利用者の観点で本番運用に耐えるかを確認する仕組みです。開発完了の確認ではなく、業務受け入れ可否を判断します。

動き方は「1) 業務シナリオと合格条件を定義 -> 2) 利用者が実操作で検証 -> 3) 不具合を分類して修正判断 -> 4) GO/NO-GOを決定」です。

典型シーンは、システム本番切替の直前です。判定責任者と証跡の残し方を先に決めると、検収でもめにくくなります。

混同しやすいのは結合テストです。結合テストは機能連携の技術確認、UAT は業務受け入れ判断が目的です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: User Acceptance Testing official documentation](https://www.google.com/search?q=User+Acceptance+Testing+official+documentation)
