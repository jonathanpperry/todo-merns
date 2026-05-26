# 📝 ThinkBoard - A MERN Stack Notes App

**ThinkBoard** is a full-featured, full-stack notes application built with the **MERN Stack**: **MongoDB**, **Express**, **React**, and **Node.js**. It offers a modern, responsive UI and a RESTful backend with real-world enhancements like **rate limiting** to simulate production-ready systems.

---

## HIGHLIGHTS

- **Full-Stack CRUD Functionality**  
  Create, edit, update, and delete notes with a title and content field.

- **Built with the MERN Stack**  
  - **MongoDB** – NoSQL database to store notes
  - **Express.js** – Web framework to build a RESTful API
  - **React.js** – Frontend interface with seamless UX
  - **Node.js** – Backend runtime environment

- **Fully Functional REST API**  
  With clear route structure and tested HTTP methods: `GET`, `POST`, `PUT`, and `DELETE`.

- **Rate Limiting with Upstash Redis**  
  Implemented simple and effective rate limiting using serverless Redis — a real-world production pattern to prevent abuse.

- **Responsive UI**  
  Designed with **Tailwind CSS** and **DaisyUI** for a mobile-first, accessible interface that works beautifully across all devices.

- **Core Web Concepts**  
  Practical usage and demonstration of:
  - HTTP methods and status codes
  - SQL vs NoSQL (and why MongoDB was chosen)
  - Frontend-backend connection via Axios

---

## TECH STACK

- **Frontend**: React, Tailwind CSS, DaisyUI, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, Upstash Redis
- **Deployment**: Render

---

## INSTALLATION & SETUP

1. Clone the repository:
```bash
git clone https://github.com/your-username/mern-thinkboard.git
```
2. Configure Environment Variables: Create a .env file in the backend/ directory and add the following:
```bash
# MongoDB URI
MONGO_URI=<your_mongo_uri>

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

3. Run the backend:
```bash
cd backend
npm install
npm run dev
```

3. Run the frontend:
```bash
cd frontend
npm install
npm run dev
```

---

## LEARNING OUTCOMES

This project was an opportunity to:

- Understand and implement **REST architecture**
- Connect a **React frontend to an Express backend**
- Use **MongoDB Atlas** for cloud data storage
- Apply real-world concepts like **rate limiting**
- Create a visually pleasing UI using **utility-first CSS frameworks**
- Deploy and test a **production-ready full-stack app**

---


## CONTACT

If you want to connect, feel free to reach me via [LinkedIn](https://www.linkedin.com/in/jonathanpperry/).
Original author of application - Aniwesh Kumar [LinkedIn](https://www.linkedin.com/in/aniweshkumar27/).

---

> **Capture Ideas. Organize Thoughts.** — Brought to life with **ThinkBoard**
