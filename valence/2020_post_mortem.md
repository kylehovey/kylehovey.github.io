# April 1st 2020 - Post Mortem
(sadly not an April Fool's joke)

---

### Overview

On March 31st the server started having crashes. This morning I was able to investigate the cause and, to the best of my reckoning, fix the problem.

### Details of Event

Beginning roughly March 24th, the Valence Minecraft server was low enough on storage that new backups could not be created. This was overlooked because the `dynmap` plugin that generates the online map feature for the server was being backed up to the regular rolling `zip` files, and the size of the generated tiles for that plugin was unexpectedly large. As a result, the last backup available was for March 24th at midnight.

On March 31st, the server ran out of storage completely. The script that makes the server auto-restart on crash put the server into a boot loop. Since no new files could be created, some undefined behavior occurred. So far, these are what I have identified:

* The `paper.yml` configuration file was half-completed, indicating that this might have been the last file to have been successfully persisted to disk
* The `server.properties` file was completely initialized to its base state, meaning that the server probably regenerated some configuration files

### How it Was Fixed

Since configuration files seemed to be the only corruption I have identified so far, I was able to pull good copies from the rolling backup on March 24th and bring them in. I also temporarily removed the `dynmap` plugin and all of its render so that the backups will be smaller in size. I changed the amount of rolling backups from `10` to `5` for the time being until I can be certain I can make more without running the risk of this happening again. I plan on altering the backup script to only back up the server itself, and not data that can be regenerated like `dynmap` tiles.

I logged in, and the world seems to be functioning as it should be. Please don't hesitate to message me if you identify any more problems. I will be working on script updates to avoid this in the future.

-`spel3o`
