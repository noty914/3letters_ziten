---
titleJa: VPN
titleEn: Virtual Private Network
tags: [ネットワーク, セキュリティ]
related: [lan, pin, tls]
---

## ① 非エンジニア向けのざっくり概要

インターネットの上に張る、専用の通信トンネル。

社外からでも、あたかも社内ネットにいるようにデータを送れるようにする仕組みです。リモートワークでよく出ます。

## ② ちょっとだけ詳しく

VPN は、インターネット上に暗号化された専用経路を作る仕組みです。社外からでも社内ネットワークへ安全に接続しやすくなります。

動き方は「1) 端末のVPNクライアントで接続要求 -> 2) VPN装置で利用者認証 -> 3) 暗号化トンネルを確立 -> 4) 社内リソースへアクセス」です。

典型シーンは、在宅勤務や出張先から社内システムへ入るときです。全通信を通すか、業務通信だけ通すか（スプリット）を先に決めると運用が安定します。

混同しやすいのは SSO や TLS です。VPN は「経路」を守る仕組み、SSO は「ログイン統合」、TLS は「通信単位の暗号化」です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Virtual Private Network official documentation](https://www.google.com/search?q=Virtual+Private+Network+official+documentation)
