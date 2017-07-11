# working offline for WizardAmigos JavaScript devs

## use `npm@5`

npm installs large dependency trees a lot faster. this is especially noticable over slow networks.

> Running npm while offline will no longer insist on retrying network requests. npm will now immediately fall back to cache if possible, or fail. (npm/npm#15666)

## use `node_modules/*/readme.md`

installed npm modules always contain readmes.

> ```shell
> npm install -g readme
> ```
>
> The `readme` command will traverse both local `node_modules` directories from the current directory and will also pull up documentation for packages you've installed globally. You can even read the core docs offline:

## use offline docs

You can download offline docs and search them. Mac users can use [Dash](https://kapeli.com/dash), all others can use [Devdocs](http://devdocs.io).

## try ssb 

SSB (secure scuttlebot) is a fully distributed log store and messaging system which can make very effective use of whatever limited internet is available to route messages among peers. You can write messages to your local log offline and sync up with other peers when you appear online later. 

There are applications you can run that use the p2p sbot network:

patchbay/[patchwork](https://github.com/ssbc/patchwork) - social feeds (like twitter/facebook)
[git-ssb](https://github.com/clehner/git-ssb) - git hosting and collaboration

## beaker browser and dat

[Beaker](https://beakerbrowser.com/) is an experimental peer-to-peer Web browser. It adds new APIs for building hostless applications, while remaining compatible with the rest of the Web.

Beaker enables you to: share personal files, make webpages, hack on P2P apps or simply browse the Web. [See more](https://beakerbrowser.com/docs/using-beaker/)

## airpaste

> If you are on the same wifi as somebody else, you can easily copy data from one computer to the other by typing `airpaste`. This way you don't need to upload files to a server all the way across the internet just to copy some bits to a machine a few meters away.
>
> ```bash
> npm install -g airpaste
> airpaste < somefile.jpg
> airpaste > somefile.jpg
> ```

## see also

* [**productivity tips for an offline world** by @substack](https://gateway.ipfs.io/ipfs/Qmd1WxsvA4TywxonCWJEPxQa3TXE52bXh1tAGuJwzJ36cN)

* [**working offline as JavaScript dev** by @derhuerst](https://gist.github.com/derhuerst/014fe183bbf827645ffbd14f632da764)
