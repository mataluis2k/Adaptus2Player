# Adaptus2Player

**Adaptus2Player** is an easy-to-use, highly customizable Video.js player that simplifies adding robust video functionality to your website. It includes features like hero overlay for inline mobile playback, customizable call-to-action (CTA) display, redirect handling upon video completion, granular control over player features (volume, seek, controls), optional playback tracking, and a configurable fullscreen change callback.

## Features

- **Hero Overlay:** Display an image or GIF overlay until the user taps to play, perfect for mobile devices.
- **Customizable CTA/Offer:** Show custom HTML content (such as promotional offers) a configurable number of seconds before the video ends.
- **Redirect Handling:** Automatically redirect users to a specified URL when the video ends.
- **Granular Control Options:** Enable or disable built-in controls, volume, and seek functionality.
- **Playback Tracking:** Post playback data (e.g., current playback time) to a specified endpoint at configurable intervals.
- **Fullscreen Callback:** Provide a callback function to reapply settings or log changes when fullscreen mode is toggled.
- **iOS Inline Playback:** Forces inline playback on iOS using `playsinline` and `webkit-playsinline` attributes.

## Installation

### Via npm

Install using npm:

```bash
npm install adaptus2-player
```

### Via CDN

You can also include Adaptus2Player directly from a CDN (e.g., unpkg):

```html
<script src="https://unpkg.com/adaptus2-player@1.0.0/dist/adaptus2-player.min.js"></script>
```

## Usage

1. **Include a Target Container**

   In your HTML, create a container where the video player will be injected:

   ```html
   <div id="videoContainer"></div>
   ```

2. **Initialize the Player**

   Call the global `initVideoPlayer` function with your desired options:

   ```html
   <script>
     initVideoPlayer({
       targetDiv: '#videoContainer',                // Container where the player is inserted
       videoSrc: '/path/to/video.mp4',                // URL of the video to play
       videoDuration: 300,                            // Duration in seconds (e.g., 300 for 5 minutes)
       heroImage: '/path/to/hero.gif',                // (Optional) URL to a hero overlay image/GIF
       ctaText: '<h2>Special Offer!</h2><p>Unlock a discount by watching this video.</p>',  // (Optional) HTML content for CTA
       redirectUrl: '/checkout_page',                 // (Optional) Redirect URL after video ends
       offerShowOffset: 45,                           // (Optional) Seconds before video end to show the CTA (default: 45)
       showControls: true,                            // (Optional) Display player controls (default: true)
       enableVolume: true,                            // (Optional) Enable volume controls (default: true)
       enableSeek: false,                             // (Optional) Enable seek/progress controls (default: true)
       trackingUrl: 'https://your-tracking-endpoint.com/track',  // (Optional) URL to POST playback data
       trackingInterval: 10,                          // (Optional) Interval in seconds between tracking events (default: 10)
       fullscreenChangeCallback: function(player) {   // (Optional) Callback function for fullscreen changes
         console.log('Fullscreen changed. Is fullscreen:', player.isFullscreen());
         // Reapply settings or perform additional actions here if needed.
       }
     });
   </script>
   ```

## Options

| Option                     | Type      | Default       | Description                                                                                             |
| -------------------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `targetDiv`                | String    | `#videoContainer` | CSS selector for the container to load the player into.                                             |
| `videoSrc`                 | String    | `/myvideo.mp4`    | URL of the video file.                                                                               |
| `videoDuration`            | Number    | `300`         | Total duration of the video in seconds.                                                              |
| `heroImage`                | String    | —             | URL to a hero overlay image/GIF. If provided, this image covers the video until tapped.                |
| `ctaText`                  | String    | —             | HTML content for the call-to-action (CTA) section, which is revealed before the video ends.            |
| `redirectUrl`              | String    | —             | URL to redirect the user when the video finishes.                                                    |
| `offerShowOffset`          | Number    | `45`          | Time in seconds before the end of the video to show the CTA.                                         |
| `showControls`             | Boolean   | `true`        | Whether to display the Video.js controls.                                                           |
| `enableVolume`             | Boolean   | `true`        | Whether to enable the volume controls.                                                              |
| `enableSeek`               | Boolean   | `true`        | Whether to enable seek/progress controls (fast-forward, etc.).                                        |
| `trackingUrl`              | String    | —             | If provided, the player will POST playback data to this URL.                                         |
| `trackingInterval`         | Number    | `10`          | Interval in seconds between tracking events.                                                        |
| `fullscreenChangeCallback` | Function  | —             | A callback function to be invoked on fullscreen changes. Receives the player instance as a parameter. |

## Contributing

Contributions are welcome! If you have ideas for improvements or encounter any issues, please feel free to:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a detailed description of your modifications.

## License

Adaptus2Player is released under the [MIT License](http://opensource.org/licenses/MIT).

## Repository

- **GitHub:** [https://github.com/mataluis2k/Adaptus2Player](https://github.com/mataluis2k/Adaptus2Player)
- **npm:** [https://www.npmjs.com/package/adaptus2-player](https://www.npmjs.com/package/adaptus2-player)

## Author

Luis B. Mata  
Email: [your.email@example.com]

---

Enjoy using **Adaptus2Player** to build engaging and customizable video experiences on your website!
```