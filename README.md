# Female Crash Dummy Simulation

A full-stack web application for simulating crash dynamics of female crash test dummies.  
The project includes a FastAPI backend for simulations and a React frontend for visualization.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Run crash simulations for female crash dummies  
- Interactive dashboard to visualize results  
- RESTful API powered by FastAPI  
- Dockerized for easy deployment  

---

## Tech Stack
- **Frontend:** React, Vite, TypeScript, CSS
- **Backend:** FastAPI, Python 3.11  
- **Containerization:** Docker, Docker Compose  

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/female-crash-dummy.git
cd female-crash-dummy
```

### 2. Run frontend

```bash
npm run dev
```

### 3. Setup frontend

```bash
cd backend/app
pip install -r requirements.txt
```

### 4. Run backend

```bash
uvicorn main:app --reload
```

