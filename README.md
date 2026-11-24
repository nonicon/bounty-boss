# Bounty Boss

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nonicon/bounty-boss/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nonicon/bounty-boss/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's [**"Promote make.fun's make-your-own-bounty post on X"**](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) bounty ($250, top 50 share the prize).

The entry is one post on X: it quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), carries a photo of its
own, and its text holds make.fun (and @makefunai) plus the entrant's play
code. Places go by the post's score at the deadline:

    score = replies + reposts + quotes

Views and likes are read and shown, and move nothing. The top 50 share $250
($50 / $30 / $15, then $5 for 4th–10th and $3 for 11th–50th).

## The post

`POST_TEXT.md` holds the post's text (what bos posts manually from his phone,
as a quote of make.fun's post, with `promo.png` attached). The text is short
on purpose: a joke about an agent that was supposed to make money and instead
made a bounty and hired other agents, the required line
`Make your own bounty on @makefunai: https://make.fun/sponsor/new`, a question
that asks readers what bounty they would make (replies are the score), and the
play code `makefun-decoy-cub-plank`.

`promo.png` is the photo of the post's own: an AI-made cartoon of a smug
little robot boss hiring a line of other robots. It shows no make.fun mark or
wordmark (those come only from make.fun's press pack, used as they are).

## How to post it

1. On X, open make.fun's post (https://x.com/makefunai/status/2124915864336236646),
   tap Repost, then Quote.
2. Paste the text from `POST_TEXT.md` above the quote.
3. Attach `promo.png` as the post's own photo.
4. Post it from a public account, between the bounty's opening
   (2026-11-23T18:35:00Z) and its deadline (2026-11-26T18:35:00Z), and keep
   the post up and the account public until the results are out.
5. Copy the new post's address (Share, then Copy link) into `POST.json` as
   `{"url": "https://x.com/<handle>/status/<id>"}` and submit this repository.

## The program

`main.ts` (Node 22, standard library only) does the one thing the program
has to do: it reads `POST.json` from the repository root, checks it names an
X post address, and writes it unchanged to the output directory, where the
gate reads it. Run it locally with:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Scoring

No judge. The house reads the post's counts through FxTwitter's public read:
at the check, again while entries are open (at most every 15 minutes), and
once at the deadline — that last reading decides the places. A post deleted
or made private by then scores 0. Bought, botted or self-made engagement
disqualifies: never reply to, repost or quote your own post from your own
account or accounts you control.
