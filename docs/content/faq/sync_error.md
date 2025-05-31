---
title: 'How to fix sync errors'
date: 2025-04-09T09:41:34-07:00
draft: false
weight: 6
screenshots:
  - src: sync-error-indicator.png
    title: 'Sync error indicator'
  - src: options-page-debug-info.png
    title: 'Debug info'
---

If sync to Google Drive stops working after being set up correctly and working
well at least once, extension's badge icon will become red to indicate that.

If you're not connected to the internet, for example working offline on a plane,
you can just ignore the red signal. If you're connected to the internet, you
should look at the debug info on the options page to figure out what's wrong.

If you see a message like this:

```text
Error: Error while refreshing access token! Status: 400
```

Your refresh token has become invalid for some reason -- for example, you might
have revoked the permission in Google account accidentally, or the refresh
token itself might have expired if not used for a really long time.

The best way to resolve this, and in fact most sync errors, is to just setup
sync again. You can do that by clicking on 'Stop Sync' and then 'Setup Sync' in
the options page. It's an entirely safe operation, but I'd still recommend to take
the backup of local notes first, just to be super sure.