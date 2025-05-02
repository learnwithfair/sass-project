# SASS Workflow Guide

[![Youtube][youtube-shield]][youtube-url]
[![Facebook][facebook-shield]][facebook-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Thanks for visiting my GitHub account!

This project demonstrates how to use **SASS** (Syntactically Awesome Stylesheets) to write cleaner and more powerful CSS, and how to compile it for browser use.

---

- More details view documentation [https://github.com/learnwithfair/sass-documentation]

## 📁 Folder Structure

```
project-folder/
├── index.html
├── src/scss
│   └── main.scss
└── css/dist
    └── main.css (Generated after compiling)
```

---

## 🚀 How SASS Works – Step-by-Step

### ✅ Step 1: Create a SASS File

Write your styles in a file named `main.scss` using SASS syntax.

Example:

```scss
$primary-color: #3498db;

body {
  background-color: $primary-color;

  h1 {
    font-size: 2em;
    color: white;
  }
}
```

### ✅ Step 2: Compile SASS to CSS

Since browsers only understand CSS, we must compile the `.scss` file into a `.css` file.

#### Using Live Sass Compiler in VS Code:

1. Install the **Live Sass Compiler** extension.
2. Open your `.scss` file in VS Code.
3. Click the **“Watch Sass”** button at the bottom.
4. This will generate a compiled CSS file (`main.css`) in your project.

Example of generated CSS:

```css
body {
  background-color: #3498db;
}

body h1 {
  font-size: 2em;
  color: white;
}
```

### ✅ Step 3: Link CSS File in HTML

Include the compiled `main.css` file in your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <h1>Hello, SASS!</h1>
  </body>
</html>
```

---

## 📌 Notes

- Do **not** link `.scss` directly in your HTML – it must be compiled to `.css` first.
- Keep your SASS files organized in a separate `scss/` folder.
- Customize the output path in Live Sass settings if needed.

---

## ✅ Requirements

- VS Code
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

---

## ✅ SASS Settings

- use the following code in your vscode settings.json

```json
   // liveSass setup
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "/dist"
    }
  ],
  "liveSassCompile.settings.generateMap": true,
```

Happy styling with SASS! 🎨

## Follow Me

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/learnwithfair) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg' alt='facebook' height='40'>](https://www.facebook.com/learnwithfair/) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/learnwithfair/) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](https://www.twiter.com/learnwithfair/) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/@learnwithfair)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=flat-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/@learnwithfair
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/learnwithfair
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/learnwithfair
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rahatul-rabbi/
