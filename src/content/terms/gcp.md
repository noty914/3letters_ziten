---
titleJa: GCP
titleEn: Google Cloud Platform
tags: [クラウド]
related: [aws, gws]
---

## ① 非エンジニア向けのざっくり概要

Google が提供するクラウドサービスの総称。

コンピュートやデータ分析などをインターネット経由で借りられる環境です（製品名は **Google Cloud** が正式寄り）。

## ② ちょっとだけ詳しく

GCP は、Google のクラウド上でサーバー運用やデータ分析を行う仕組みです。組織・プロジェクト単位で権限と課金を管理します。

動き方は「1) 組織とプロジェクトを作る -> 2) IAMで利用者権限を付与 -> 3) Compute/Storage/BigQuery などを構築 -> 4) ログ監視と費用最適化を回す」です。

典型シーンは、分析基盤をクラウドへ集約したいときです。課金単位と運用責任の区切りをプロジェクトで先に整理すると混乱を防げます。

混同しやすいのは GWS です。GCP は開発・インフラ基盤、GWS はメールや文書共有など業務ツール基盤です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Google Cloud Platform official documentation](https://www.google.com/search?q=Google+Cloud+Platform+official+documentation)
