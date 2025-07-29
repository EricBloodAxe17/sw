# sw # ⏱ Stopwatch Web App

A simple, responsive stopwatch built using **HTML**, **CSS**, and **JavaScript**. It features a stylish UI with start, stop, and reset controls, and updates time down to milliseconds in real-time.

---

## 📁 Project Structure
├── index.html # Main HTML file
├── style.css # CSS for layout and design
├── script.js # JavaScript stopwatch logic
└── SFimage2.jpg # Background image used in CSS

---

## ✅ Features

- Real-time stopwatch display (`HH : MM : SS : MS`)
- Start, Stop, and Reset buttons
- Interval updates every 10 milliseconds
- Blurred-glass card UI with background image
- Fully responsive and centered layout

---

## 🚀 How It Works

- The timer uses `setInterval()` to increment time by 10 ms.
- A function converts milliseconds to hours, minutes, seconds, and ms.
- Buttons are wired to start, stop, and reset the timer.
- It prevents multiple intervals from stacking using a simple check.

---

## 🎨 UI Styling

- Frosted glass effect using `backdrop-filter: blur(10px)`
- Stylish buttons with shadows and hover states
- Background image with full-screen coverage
- Font: Impact, Italic


---

## 📦 How to Use

1. Clone or download this repository.
2. Make sure `SFimage2.jpg` is in the same folder as `style.css`.
3. Open `index.html` in any browser.
4. Click **Start**, **Stop**, or **Reset** to use the stopwatch.

---

## 🌐 Live Demo

Check out the live working demo here: 👉 [Stopwatch Demo](https://ericbloodaxe17.github.io/sw/)


---

## 🛠 Future Improvements (Optional)

- Add **lap timer** support
- Add **pause/resume** toggle
- Add sound or animation effects on button clicks


---

## 📄 License

Free to use and modify. No license restrictions.

