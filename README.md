```markdown
# 🚌 CareerBus

A high-performance career guidance platform designed to bridge the gap between students and their professional futures. This project features a modern UI overhaul, AI-powered assessments, and a comprehensive database for colleges and exams.

---

## 🏗️ Project Structure

The repository is organized into three main modules:

* **`frontend/`**: The modern, high-impact user interface built with Vite and React.
* **`backend/`**: Core API logic, user authentication, and advisor connections.
* **`college_scrapper/`**: A specialized utility for extracting and seeding college data from CSV files into the database.

---

## 💻 Tech Stack

| Component | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Vite, Tailwind CSS, JavaScript |
| **Backend** | Node.js, Express.js, JavaScript |
| **Database** | MongoDB (Atlas) |
| **Data Utility** | PapaParse / CSV-Parser (for college data extraction) |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.x or higher recommended)
* **npm** or **yarn**
* A **MongoDB Atlas** Connection URI

### 1. Database Seeding (College Scraper)
Before running the main application, use the scraper to populate your MongoDB collection with college data.

```bash
cd college_scrapper
npm install
# Create a .env file and add: MONGODB_URI=your_mongodb_connection_string
node index.js

```

### 2. Backend Setup

The main API handling user profiles, AI assessments, and advisor logic.

```bash
cd ../backend
npm install
# Add MONGODB_URI and PORT=5000 to your .env file
npm start

```

### 3. Frontend Setup

The lightning-fast Vite + React development environment.

```bash
cd ../frontend
npm install
npm run dev

```

---

## ✨ Key Features

* **AI-Powered Assessment**: Personalized course and career recommendations based on interests.
* **Expert Advisors**: Real-time connection with experienced career mentors.
* **Comprehensive Database**: Detailed info on Courses (Post 10th/12th), Colleges, and Exams.
* **Junior Explorer**: A specialized portal for students in Grades 1-9 to begin early discovery.

---

## 🛠️ Environment Variables

To run this project, you will need to create `.env` files in the following directories:

**`/backend/.env`** & **`/college_scrapper/.env`**:

```env
MONGODB_URI=your_mongodb_atlas_uri
PORT=5000

```

---

## 📜 License

This project is for internal development and portfolio purposes.

---

**Would you like me to add a "Troubleshooting" section for common MongoDB connection issues or a "Deployment" guide for Vercel/Render?**

```

```