# AmanLog 📝

A fullstack blog platform built with Next.js, featuring server-side rendering, secure authentication, and cloud-based media storage.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://amanlog.vercel.app/)

<img width="1323" height="988" alt="image" src="https://github.com/user-attachments/assets/c898ddf4-066b-4a28-b8e3-0a181899586a" />


## Tech Stack

### Backend
- **Next.js 14** - App Router with Server Actions & API Routes
- **MongoDB + Mongoose** - Database & ODM
- **NextAuth v5** - Authentication (Credentials provider)
- **bcrypt.js** - Password hashing
- **Firebase Storage** - Image uploads

### Frontend
- **React 18** - UI components
- **Tailwind CSS** - Styling with glassmorphism theme
- **Zustand** - State management
- **React Hook Form + Zod** - Form validation

## Features

- **Authentication** - Secure registration, login, and session management
- **CRUD Operations** - Create, read, update, and delete blog posts
- **Image Uploads** - Firebase Storage integration for media
- **Markdown Support** - Write posts with markdown syntax
- **Server Actions** - Form submissions handled server-side
- **Responsive Design** - Mobile-first UI

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── database/         # MongoDB models, actions & data fetching
├── lib/              # Auth configuration
└── config/           # Firebase setup
```

## License

MIT
