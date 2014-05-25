text2emoji
==========

Convert text to emoji on the fly.

## Install

```
npm install text2emoji -g
```

## Example

#### Convert arbitrary text:

```
$ text2emoji "electric octopus cat = octocat"
>>> ":zap: :octopus: :cat: = :octocat:"
```

:zap: :octopus: :cat: = :octocat:

#### Github commits:

```
$ text2emoji "Fixes money bug for foreign currencies like pound, euro, and yen." | git commit -F -
>>> [master 5fc0095] Fixes :moneybag: :bug: for foreign currencies like :pound:, :euro:, and :yen:.
```

[master 5fc0095] Fixes :moneybag: :bug: for foreign currencies like :pound:, :euro:, and :yen:

#### Files:

```
$ cat normalFile.md > text2emoji > emojiFile.md
```

## Where is this useful?

- [Campfire](http://campfirenow.com/)
- [GitHub](http://github.com/)
- [Basecamp](http://basecamp.com/)
- [Redbooth](https://redbooth.com/)
- [Trac](http://trac-hacks.org/wiki/TracEmojiPlugin)
- [Flowdock](https://www.flowdock.com/)
- [Sprint.ly](https://sprint.ly/)
- [Kandan](http://kandanapp.com)
- [Textbox.io](https://textbox.io/)
- [Kippt](http://kippt.com)
- [GitLab](http://gitlab.org)
- [JabbR](http://about.jabbr.net/)
- [Trello](https://trello.com/)
- [Hall](https://hall.com)
- [plug.dj](http://plug.dj/)
- [Qiita](http://qiita.com/)
- [Zendesk](http://www.zendesk.com/)
- [Ruby China](http://ruby-china.org/)
- [Grove](https://grove.io/)
- [Idobata](https://idobata.io/)
- [NodeBB Forums](https://nodebb.org/)
- [Slack](https://slack.com/)
- [Streamup](https://streamup.com/)
- [OrganisedMinds](http://organisedminds.com/)
- [Hackpad](https://hackpad.com/)
- [Cryptbin](https://cryptbin.com/)
- [Kato](https://kato.im)
- [Reportedly](http://reportedly.co)

to name a few...

## Contribute! :pray:

Please fork this and add more aliases to [map.json](map.json) :notebook_with_decorative_cover:!

## Useful links

- [emoji cheat sheet](http://www.emoji-cheat-sheet.com/)
- [emoji table](http://apps.timwhitlock.info/emoji/tables/unicode)
- [emoji search](https://github.com/muan/emoji)