# 🚀 Modern Developer Portfolio

A fully responsive and modern personal portfolio built using Next.js, Tailwind CSS, and Firebase, and deployed on Vercel.

---

## 🌐 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 👨‍💻 About This Project

This portfolio showcases my skills, projects, and contact system with a modern UI and full responsiveness.

It includes:
- Responsive design for all devices
- Firebase Firestore backend
- Dynamic projects section
- Functional contact form

---

## ⚙️ Tech Stack

### Frontend
- Next.js (React Framework)
- Tailwind CSS

### Backend
- Firebase Firestore

### Deployment
- Vercel

### Version Control
- Git & GitHub

---

## ✨ Features

### 🎯 UI / UX
- Fully responsive layout (mobile, tablet, desktop)
- Modern glassmorphism navbar
- Smooth scrolling navigation
- Clean and minimal design
- Hover animations and transitions

---

### 🧭 Navigation
- Desktop navigation menu
- Mobile hamburger menu
- Section-based navigation (About, Skills, Projects, Contact)

---

### 🧑‍💻 Hero Section
- Responsive typography scaling
- Call-to-action buttons
- Centered modern layout

---

### 👨‍💻 About Section
- Profile image support
- Personal introduction
- Responsive layout design

---

### 🧠 Skills Section
- Grid-based layout
- Hover effects
- Clean tech badge UI

---

### 📁 Projects Section
- Dynamic project rendering
- Image support for projects
- GitHub + Live demo buttons
- Responsive grid layout

---

### 📩 Contact Section
- Firebase Firestore integration
- Stores:
  - Name
  - Email
  - Message
  - Timestamp

---

## 🔥 Firebase Setup

Firestore is used to store contact form submissions.

### Security Rules

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
└── project-images

---

## 🚀 Deployment

Deployed using Vercel with GitHub integration.

Every push to the main branch triggers automatic deployment.

---

## 💡 What I Learned

- Next.js component-based architecture
- Tailwind CSS responsive design
- Firebase Firestore integration
- React form handling
- Git & GitHub workflow
- Production deployment on Vercel

---

## 📸 Screenshots

Add your images in `/public` and update here:

- Hero Section
- About Section
- Skills Section
- Projects Section
- Contact Section

---

## 📬 Contact

GitHub: https://github.com/itsdivyanshuno  
Email: your-email@gmail.com

---

## ⭐ Support

If you like this project:
- ⭐ Star this repository
- 🍴 Fork it
- 🚀 Share it