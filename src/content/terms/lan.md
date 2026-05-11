---
titleJa: LAN
titleEn: Local Area Network
tags: [ネットワーク]
related: [dns, vpn]
---

## ① 非エンジニア向けのざっくり概要

オフィスなど狭い範囲でつなぐ社内向けネット。

PC やプリンタを同じ場所のネットワークに載せる話です。

## ② ちょっとだけ詳しく

LAN は、同じ拠点内の機器を相互接続する仕組みです。社内の端末やサーバーを安定して通信させる土台になります。

動き方は「1) スイッチで機器を接続 -> 2) DHCPでIPアドレスを配布 -> 3) ルータやL3機器で別ネットワークへ中継 -> 4) VLANで用途別に分離」です。

典型シーンは、オフィス移転やフロア増設時のネットワーク再設計です。端末系とサーバー系を分けるだけでも障害影響を抑えやすくなります。

混同しやすいのは VPN です。LAN は拠点内ネットワーク、VPN は離れた場所からLANへ安全に入るための仕組みです。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Local Area Network official documentation](https://www.google.com/search?q=Local+Area+Network+official+documentation)
