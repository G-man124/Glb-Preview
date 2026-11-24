# Glb Preview

A lightweight, browser-based 3D runner game (or `.glb` model viewer) powered by WebGL. 

---

## ✨ Features
* **3D `.glb` Asset Support:** Smooth rendering of GLTF/GLB 3D models directly in the browser.
* **Zero Build Step:** Runs natively using vanilla web technologies—no heavy dependencies or bundlers required.
* **Lightweight & Fast:** Quick local setup using Python's built-in HTTP server.

---

## 🚀 Getting Started

Because modern browsers block loading local `.glb` files directly from the file system (`file://`) due to CORS security policies, you must serve the project over a local web server.

### Prerequisites
* [Python 3](https://python.org) installed on your machine.
* A modern web browser (Chrome, Firefox, Edge, or Safari).

### Installation & Running Locally

1. **Clone the repository** (or download and extract the ZIP file):
   ```bash
   git clone https://github.com/G-man124/Glb-Preview
   cd Glb-runner
   ```

2. **Start a local HTTP server:**
   ```bash
   python3 -m http.server
   ```
   *(Note: On Windows, you may need to use `python -m http.server` instead).*

3. **Open in your browser:**
   Navigate to [http://localhost:8000](http://localhost:8000) to launch the application.

---

## 🛠️ Built With
* **HTML5 / CSS3 / JavaScript**

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
