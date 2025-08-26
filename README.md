
# Donation Management System 💝

A full-stack web application for managing donations. This platform connects **donors** and **recipients**, allowing transparent and efficient tracking of donations.


## 🚀 Features
- 🔐 User authentication (Donors & Recipients)  
- 📦 Donation management (create, track, manage donations)  
- 🖼️ Donor profile with images  
- ⚡ Fast & responsive frontend (Vite + React)  
- 🛠️ Backend with Node.js & Express  
- 📂 API integration between frontend & backend  

---

## 🛠️ Tech Stack
**Frontend:** React + Vite + HTML + CSS + JavaScript  
**Backend:** Node.js + Express  
**Database:** (Add your DB here, e.g., MongoDB/MySQL if used)  
**Version Control:** Git & GitHub  

---

## 📂 Project Structure

mini project/
│── frontend/          # React + Vite frontend
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
│── backend/           # Node.js backend
│   ├── package.json
│   ├── .gitignore
│   └── server files
│
│── README.md          # Documentation


## ▶️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/AndugalaPujitha/DonationManagementSystem.git
cd DonationManagementSystem


### 2️⃣ Setup Backend
```
cd backend
npm install
npm start
```

### 3️⃣ Setup Frontend
```
cd frontend
npm install
npm run dev
```

The app will be available at:
👉 **Frontend:** [http://localhost:5173](http://localhost:5173)
👉 **Backend API:** [http://localhost:5000](http://localhost:5000) (or configured port)


## 🌐 Deployment (GitHub Pages for Frontend)

If you want to host frontend only (React + Vite):

1. Install GitHub Pages package

   npm install gh-pages --save-dev
   

2. Add this to `frontend/package.json`:

   ```json
   "homepage": "https://your-username.github.io/DonationManagementSystem",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:

   npm run deploy


---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.
