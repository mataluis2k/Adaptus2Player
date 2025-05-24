# Adaptus2Player

**Adaptus2Player** is an easy-to-use, highly customizable Video.js player that simplifies adding robust video functionality to your website. Features include hero overlay for inline mobile playback, configurable CTAs, redirect handling, granular control over player features, optional playback tracking, and a fullscreen change callback.

## Installation

Choose one of the following methods:

### 1. Direct Script Include (Local Build)

After building the project (`npm run build`), include the UMD bundle in your HTML:

```html
<script src="./dist/adaptus2-player.umd.js"></script> <!-- Adaptus2Player.js entrypoint fileciteturn1file0 -->
```

### 2. npm Package

Install via npm:

```bash
npm install adaptus2-player
```

Import and initialize in your code:

```javascript
// ES module import
import Adaptus2Player from 'adaptus2-player'; // package.json: name/module fields fileciteturn1file1

Adaptus2Player({
  targetDiv: '#videoContainer',
  videoSrc: '/path/to/video.mp4'
});
```

Or CommonJS:

```javascript
const Adaptus2Player = require('adaptus2-player');
Adaptus2Player({ targetDiv: '#videoContainer', videoSrc: '/path/to/video.mp4' });
```

### 3. CDN (unpkg / jsDelivr)

Use unpkg:

```html
<script src="https://unpkg.com/adaptus2-player@1.0.0/dist/adaptus2-player.umd.js"></script> <!-- Rollup output config fileciteturn1file3 -->
```

Or jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/adaptus2-player@1.0.0/dist/adaptus2-player.umd.js"></script>
```

## Basic Usage

Include a container in your HTML:

```html
<div id="videoContainer"></div>
```

Initialize with minimal options:

```javascript
Adaptus2Player({
  targetDiv: '#videoContainer',
  videoSrc: 'https://example.com/myvideo.mp4'
});
```

## Configuration Options

| Option                     | Type     | Default           | Description                                                                    |
| -------------------------- | -------- | ----------------- | ------------------------------------------------------------------------------ |
| `targetDiv`                | String   | `#videoContainer` | CSS selector for the container where the player is injected.                   |
| `videoSrc`                 | String   | `/myvideo.mp4`    | URL of the video file or stream.                                               |
| `videoDuration`            | Number   | `300`             | Total video duration in seconds (used for CTA timing).                         |
| `heroImage`                | String   | —                 | URL of an overlay image/GIF. Displays until tapped (mobile inline playback).   |
| `ctaText`                  | String   | —                 | HTML content for a CTA, shown before the video ends.                           |
| `redirectUrl`              | String   | —                 | URL to navigate to when the video finishes.                                    |
| `offerShowOffset`          | Number   | `45`              | Seconds before the end of the video to reveal the CTA.                         |
| `showControls`             | Boolean  | `true`            | Toggle Video.js controls visibility (maps to `controls` attribute).            |
| `enableVolume`             | Boolean  | `true`            | Enable volume control in the control bar.                                      |
| `enableSeek`               | Boolean  | `true`            | Enable seek/progress controls (e.g., fast forward, time displays).             |
| `trackingUrl`              | String   | —                 | If provided, playback time is POSTed here at each `trackingInterval`.          |
| `trackingInterval`         | Number   | `10`              | Seconds between tracking POST events.                                          |
| `fullscreenChangeCallback` | Function | —                 | Callback invoked on fullscreen toggles; receives the Video.js player instance. |

> **Note:** This list matches the options supported by the player’s initialization code in `Adaptus2Player.js` fileciteturn1file0.

## Examples

### Show a CTA 30 seconds before end

```javascript
Adaptus2Player({
  targetDiv: '#videoContainer',
  videoSrc: '/video.mp4',
  ctaText: '<a href="/offer">Grab 20% Off!</a>',
  offerShowOffset: 30
});
```

### Disable Volume & Seek

```javascript
Adaptus2Player({
  targetDiv: '#videoContainer',
  videoSrc: '/video.mp4',
  showControls: true,
  enableVolume: false,
  enableSeek: false
});
```

### Enable Playback Tracking

```javascript
Adaptus2Player({
  targetDiv: '#videoContainer',
  videoSrc: '/video.mp4',
  trackingUrl: 'https://your-analytics.com/track',
  trackingInterval: 5
});
```

## Building from Source

1. **Clone the repo**

   ```bash
   git clone https://github.com/mataluis2k/Adaptus2Player.git
   cd Adaptus2Player
   ```
2. **Install dependencies**

   ```bash
   npm install            # includes rollup and plugins fileciteturn1file1
   ```
3. **Build**

   ```bash
   npm run build          # outputs UMD & ESM bundles in `dist/` per rollup.config.js fileciteturn1file3
   ```

## License

MIT © Luis B. Mata
