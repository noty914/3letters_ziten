---
titleJa: MFA
titleEn: Multi-Factor Authentication
tags: [セキュリティ]
related: [iam, pin, sso]
---

## ① 非エンジニア向けのざっくり概要

パスワードなど複数種類の証拠を組み合わせて本人確認すること。

知識・所持・生体など、別カテゴリの要素を重ねるのが多要素認証です。

## ② ちょっとだけ詳しく

MFA は、種類の違う証拠を組み合わせて本人確認の強度を上げる仕組みです。1つの認証要素が漏れても突破されにくくする狙いがあります。

動き方は「1) IDとパスワードで一次確認 -> 2) 追加の確認（アプリ通知やコード、生体）を要求 -> 3) 両方が通ればログイン許可 -> 4) 端末紛失時はリカバリ手順で再登録」です。

典型シーンは、社外アクセスや管理者アカウント保護です。まず高権限ユーザーから段階導入すると、業務影響を抑えながら効果を出せます。

混同しやすいのは 2段階認証です。2段階認証は手順の数、MFA は要素の種類が複数であることを重視する概念です。

## ③ もっと知りたい人向け

- 公式サイト/公式ドキュメント:
  - [Google検索: Multi-Factor Authentication official documentation](https://www.google.com/search?q=Multi-Factor+Authentication+official+documentation)
