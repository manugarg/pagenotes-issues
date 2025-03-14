---
title: 'How can I ignore certain parts of the URL while saving and accessing notes?'
date: 2022-04-09T09:41:34-07:00
draft: false
weight: 2
screenshots:
  - src: ignore-in-url-setting.png
    title: 'Ignore in URL setting'
  - src: ignore-in-url-per-site.png
    title: 'Ignore in URL per site setting'
---
You can configure Page Notes to ignore certain parts of the URL, e.g. query parameters and hash, while saving and retrieving notes by changing the "Ignore in URL" setting in the options page. This setting has 3 possible values:
| Value | Description |
| --- | --- |
| Nothing (default) | Use the full URL. |
| Hash | Ignore hash (e.g. `https://example.com/page#section` -> `https://example.com/page`). |
| Query parameters & hash | Use the URL without query parameters and hash (e.g. `https://example.com/page?param=value#section` -> `https://example.com/page`). |

You can configure a default value for this setting as well as add site-specific overrides. For example, you can set the default ignore-in-url value to "Query parameters & hash" and add an override for sites that use query parameters, e.g. `youtube.com` to "Hash".
