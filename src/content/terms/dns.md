---
titleJa: DNS
titleEn: Domain Name System
tags: [ネットワーク]
related: [api, gws, iot, lan, sso, tls, www, zip]
---

## ① 非エンジニア向けのざっくり概要

ドメイン名を IP アドレスへ変える仕組み。

`example.com` のような人が読める名前を、機械がつなぐための住所（IP）に対応づけます。サイトを開くときに裏で動いています。

イメージ補足：電話帳で名前から番号を引く作業に近いです。

## ② ちょっとだけ詳しく

DNS は、名前と接続先の住所を対応づける仕組みです。利用者は名前でアクセスし、裏側で機械向けの住所に引き直されます。

動き方は「1) 端末が名前解決を問い合わせる -> 2) リゾルバがキャッシュを確認 -> 3) 必要なら上位DNSへたどって正解を取得 -> 4) 得た結果を一定時間（TTL）キャッシュして返す」です。

典型シーンは、サイト移転やメール基盤切替のときです。切替前にTTLを短くしておくと、反映遅れの影響を小さくできます。

混同しやすいのは HTTP です。DNS は「どこへつなぐか」を決める仕組み、HTTP は「つないだ後に何をやり取りするか」の仕組みです。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Domain Name System official documentation](https://www.google.com/search?q=Domain+Name+System+official+documentation)
