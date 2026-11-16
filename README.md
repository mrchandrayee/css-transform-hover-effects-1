# CSS Transform Hover Effect

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-transform-hover-effects-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the 25.87-second screen recording.

## Effects shown in the video

1. **Scale Up**
   ```css
   .scale:hover {
     transform: scale(1.2);
   }
   ```
2. **Rotate**
   ```css
   .rotate:hover {
     transform: rotate(25deg);
   }
   ```
3. **Move Up**
   ```css
   .moveUp:hover {
     transform: translateY(-25px);
   }
   ```
4. **Skew X**
   ```css
   .skewX:hover {
     transform: skewX(15deg);
   }
   ```
5. **Rotate 360°**
   ```css
   .rotate360:hover {
     transform: rotate(360deg);
   }
   ```
6. **Move Right**
   ```css
   .moveRight:hover {
     transform: translateX(25px);
   }
   ```
7. **Scale Down**
   ```css
   .scaleDown:hover {
     transform: scale(.8);
   }
   ```
8. **Skew Y**
   ```css
   .skewY:hover {
     transform: skewY(15deg);
   }
   ```
9. **Flip X**
   ```css
   .flipX:hover {
     transform: rotateX(180deg);
   }
   ```

## Design recreation

- Black page with blue-glow title.
- Thin orange outer frame.
- Dark rounded cards.
- Orange square preview tiles.
- Orange effect names and mint-green CSS snippets.
- Smooth transform transitions.

The video shows the nine effect names and their CSS transform declarations. The surrounding page structure, styling, and touch/keyboard support are recreated as a complete runnable implementation.

## Run

Extract the ZIP and open `index.html` in a modern browser. Hover over an orange tile to preview its effect. On touch devices, tap a tile to toggle the transform. No npm or external libraries are required.

## Files

- `index.html` — all nine examples and their visible code snippets
- `style.css` — dark layout, orange tiles, and transform hover rules
- `script.js` — touch, click, and keyboard preview support
- `README.md` — extracted CSS and run instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
