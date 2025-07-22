```markdown
# 🔗 URL Shortener (Node.js + Express + JSON)

A simple and clean URL shortener built with **Node.js** and **Express**, storing all links in a local **JSON file**. Users can enter a long URL and a custom shortcode to generate a shortened version, which can be used for redirection.

---

## 🚀 Features

- ✅ Custom shortcodes for long URLs  
- ✅ Stores all data in `links.json` (no database needed)  
- ✅ Auto-redirect using shortcode (e.g. `localhost:3000/abc`)  
- ✅ Displays list of all shortened URLs  
- ✅ Clean and responsive frontend UI  

---

## 📁 Project Structure

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>

  <h2>📁 Project Structure</h2>
  <pre>
project/
│
├── public/
│   └── index.html          # Frontend form + list rendering
│
├── views/
│   ├── error404.html       # 404 fallback page
│   └── links.json          # Stored URL data
│
├── app.js                  # Main server logic (Node.js + Express)
└── README.md
  </pre>

</body>
</html>


````

---

## ⚙️ How It Works

1. User submits a **URL** and a **shortcode** through the form.
2. Data is saved in `views/links.json`.
3. Visiting `localhost:3000/{shortcode}` redirects to the original URL.
4. List of all saved links is shown below the form.

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/yashesh-akbari/url_short.git
cd url_short
npm install
node app.js
````

Then open in browser:
📍 `http://localhost:3000`

---

## ✨ Tech Stack

* **Node.js**
* **Express.js**
* **HTML/CSS/JS (Vanilla)**
* **File System (`fs`) for JSON storage**

---

## 📸 Demo Screenshot

> *Feel free to add a screenshot here later (e.g. form + list view)*

---

## 🔗 Live Project

* 🌐 Portfolio: [yashesh-akbari-portfolio.netlify.app](https://yashesh-akbari-portfolio.netlify.app/)
* 🛠️ GitHub: [github.com/yashesh-akbari](https://github.com/yashesh-akbari)

---

## 📄 License

This project is open-source and free to use.

---

## 📝 Short Description

> A Node.js + Express based URL shortener that stores and displays links using a JSON file.

```
