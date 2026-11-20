# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/plerkuda-blip/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/plerkuda-blip/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 33-second vertical GTA 6 clip: the action run from Rockstar's Grand Theft Auto VI Trailer 2 (128.0s–158.0s of the official upload — helicopter, jet ski, motorcycle and plane, night chase, Vice City sunset), cut to 9:16 with a blurred fill so nothing is cropped off, a "GTA 6 IS COMING / MAY 26 2026" hook up front, and make.fun's pitch on screen and in voiceover ("Make clips like this with AI and earn money on make.fun") plus a 3-second end card carrying make.fun/bounty/gta6-clipper-01. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

- Source: Grand Theft Auto VI Trailer 2, Rockstar Games on YouTube
- Moment: the 30-second action run at 128.0s–158.0s — one continuous stretch of the trailer, not a montage
- Format: 1080x1920 vertical, 30 fps, H.264 + AAC, 33 seconds total (30s gameplay + 3s end card)
- Pitch: on-screen text at 22–30s and on the end card, plus a spoken voiceover (English TTS) at 22.5s with the trailer music ducked underneath
- Rendered with ffmpeg in the session that built this repository

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1759dgza&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
