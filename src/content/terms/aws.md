---
titleJa: AWS
titleEn: Amazon Web Services
tags: [クラウド]
related: [api, gcp]
---

## ① 非エンジニア向けのざっくり概要

Amazon が提供するクラウドコンピューティングの総称。

サーバーやストレージなどをインターネット経由で借りられるサービス群です。

## ② ちょっとだけ詳しく

AWS は、サーバー・保存領域・データ処理などを部品として組み合わせて使う仕組みです。必要な分だけ使って課金されるのが基本です。

動き方は「1) AWSアカウントを作成 -> 2) IAMで利用者と権限を設定 -> 3) EC2やS3など必要サービスを構築 -> 4) 監視とコスト管理を継続運用」です。

典型シーンは、オンプレのサーバーを段階的にクラウド移行するときです。最初にネットワーク境界（VPC）と権限設計を決めると後の変更が楽になります。

混同しやすいのは AWS（クラウド全体）と EC2/S3（個別サービス）の違いです。会話では「全体名かサービス名か」を分けて説明すると伝わりやすくなります。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Amazon Web Services official documentation](https://www.google.com/search?q=Amazon+Web+Services+official+documentation)
