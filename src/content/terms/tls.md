---
titleJa: TLS
titleEn: Transport Layer Security
tags: [セキュリティ]
related: [dns, vpn]
---

## ① 非エンジニア向けのざっくり概要

ネットの通信内容を暗号化して盗み見されにくくする約束。

昔よく言われた SSL の後継にあたり、ブラウザの鍵マークもこの系統の話です。

## ② ちょっとだけ詳しく

TLS は、通信相手を確認しながらデータを暗号化して送る仕組みです。盗み見や改ざんのリスクを下げるために、Web 通信で広く使われます。

動き方は「1) 接続開始時にサーバー証明書を提示 -> 2) 利用者側が証明書の正当性を確認 -> 3) 暗号化方式と鍵を決める -> 4) 以後の通信を暗号化してやり取りする」です。

典型シーンは、Web サイト公開や API 公開時です。証明書期限の監視と自動更新を最初から入れると、期限切れ事故を避けやすくなります。

混同しやすいのは VPN です。TLS は主に「通信単位の暗号化」、VPN は「ネットワーク経路全体をトンネル化する仕組み」です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Transport Layer Security official documentation](https://www.google.com/search?q=Transport+Layer+Security+official+documentation)
