# 🚀 Modern Developer Portfolio

A fully responsive and modern personal portfolio built using Next.js, Tailwind CSS, and Firebase, deployed on Vercel.

---

## 🌐 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 📸 Preview Screenshots

Add images inside `/public` and update paths if needed.

### 🏠 Hero Section
![Hero](./public/hero.png)

### 👨‍💻 About Section
![About](./public/about.png)

### 🧠 Skills Section
![Skills](./public/skills.png)

### 📁 Projects Section
![Projects](./public/projects.png)

### 📩 Contact Section
![Contact](./public/contact.png)

---

## ⚙️ Tech Stack

- Next.js (React Framework)
- Tailwind CSS
- Firebase Firestore
- Vercel Hosting
- Git & GitHub

---

## ✨ Features

### UI / UX
- Fully responsive design
- Modern glass navbar
- Smooth scrolling
- Clean layout
- Hover animations

---

### Navigation
- Desktop navbar
- Mobile hamburger menu
- Section scrolling links

---

### Hero Section
- Responsive text scaling
- CTA buttons
- Clean centered layout

---

### About Section
- Profile image support
- Personal introduction
- Responsive layout

---

### Skills Section
- Grid-based layout
- Hover effects
- Tech badges UI

---

### Projects Section
- Dynamic project rendering
- Image support
- GitHub + Live buttons
- Responsive grid

---

### Contact Section
- Firebase form integration
- Stores name, email, message
- Timestamp support

---

## 🔥 Firebase Setup

Firestore database stores contact messages.

### Rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /messages/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }

  }
}

---

## 📁 Project Structure

src/
├── app/
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts
├── lib/
│   └── firebase.ts

public/
├── hero.png
├── about.png
├── skills.png
├── projects.png
├── contact.png
├── profile.jpeg

---

## 🚀 Deployment

Deployed on Vercel with GitHub integration.

Auto deploys on every push.

---

## 💡 What I Learned

- Next.js components
- Tailwind responsive design
- Firebase integration
- Form handling
- Git workflow
- Deployment on Vercel

---

## 📬 Contact

GitHub: https://github.com/yourusername  
Email: yourmail@gmail.com

---

## ⭐ Support

If you like this project:
- ⭐ Star the repo
- 🍴 Fork it
- 🚀 Share it

---

## 📌 License

Open source project