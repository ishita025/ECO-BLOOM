# ECO-BLOOM# 🌱 EcoBloom – Sowing Data, Reaping Results

EcoBloom is a community-driven environmental platform designed to make urban greening accessible, transparent, and impactful. By combining intelligent guidance on plant care with donation-enabled tree plantation initiatives, EcoBloom empowers individuals, NGOs, and communities to take meaningful action against climate change.

> 🏆 Developed as part of the B.Tech Final Year Project by Ishita Gupta, Garv Malhotra, and Aarsh S Lal under the guidance of Dr. Nitika Nigam, School of Computer Science, UPES.

---

## 🌍 Project Vision

EcoBloom simplifies plant care and community plantation by:
- Offering expert advice using an integrated AI chatbot.
- Enabling eco-donations and tracking tree-planting impact.
- Empowering admins to coordinate and monitor local drives.
- Providing transparency through interactive dashboards.

---

## 🧩 Tech Stack

| Layer        | Technologies Used                               |
|--------------|--------------------------------------------------|
| Frontend     | React.js, Tailwind CSS, Chart.js                |
| Backend      | Node.js (Express), JWT Authentication           |
| Microservices| User Service, Admin Service, Member Service     |
| Database     | MongoDB (Mongoose ODM)                          |
| Authentication | JWT, Role-Based Access Control (RBAC)        |
| DevOps       | Docker-ready (future integration planned)       |
| Communication| NodeMailer, REST APIs, API Gateway              |

---

## 🚀 Features

### 👤 User Module
- 🌿 Donate to tree-planting campaigns.
- 🧠 Access chatbot for care tips and environmental insights.
- 📅 Register for eco-events.
- 📦 Track orders and environmental impact.

### 🔐 Admin Module
- 📊 Monitor donations and campaign analytics.
- ✅ Approve environmental reports.
- 📌 Assign and manage volunteers.

### 👷 Member Module
- 📥 Receive assignments via email.
- 🧾 Update task completion status.
- 🔔 Stay informed with alerts.

---

## 🧪 Architecture Overview

EcoBloom follows a microservices-based architecture with API Gateway routing for service abstraction, built for scalability and maintainability.

**Main Services:**
- **User Service** – Handles registrations, donations, events.
- **Admin Service** – Analytics, task assignment, verification.
- **Member Service** – Handles assigned fieldwork and reporting.
- **Authentication Service** – JWT-based secure auth.
- **Mailing Service** – Email-based notifications and confirmations.

---

## 🧠 AI-Powered Chatbot

EcoBloom integrates an AI chatbot using Gemini API for:
- Plant care recommendations.
- Answering environment-related queries.
- Navigating the application via conversational prompts.

---

## 🔐 Security Highlights

- JWT tokens with refresh mechanism.
- HTTP-only cookies for secure sessions.
- RBAC (Role-Based Access Control) for permission segregation.

---

## 📸 Screenshots

### 🏡 Landing Page
![Landing](screenshots/landing.jpg)

### 🔐 Signup Page
![Signup](screenshots/signup.jpg)

### 🔁 Forgot Password
![Forgot Password](screenshots/forgot_password.jpg)

### 📧 Reset Email
![Reset Mail](screenshots/mail_to_reset_pswd.jpg)

### 🧑‍💼 User Dashboard
![User Dashboard](screenshots/user_dashboard.jpg)

### 🛒 Cart – User View
![Cart](screenshots/cart_user.jpg)

### 💬 Chatbot Interaction – 1
![Chatbot](screenshots/chatbot_user.jpg)

### 💬 Chatbot Interaction – 2
![Chatbot 2](screenshots/chatbot1_user.jpg)

### 🌿 Donation Page
![Donation](screenshots/donation_user.jpg)

### 🧾 Donation History
![Donation History](screenshots/donation_history_user.jpg)

### 💬 Feedback Form
![Feedback](screenshots/feedback_user.jpg)

### 📩 Feedback Email Confirmation
![Feedback Email](screenshots/feedback_mail_user.jpg)

### 📝 My Reports
![My Reports](screenshots/my_reports_user.jpg)

### 📅 Upcoming Drives
![Upcoming Drives](screenshots/upcoming_drives.jpg)

### 🗂️ Report Details (Admin)
![Report Detail Admin](screenshots/report_detail_admin.jpg)

### 📊 Admin Dashboard – User View
![Admin Dashboard](screenshots/user_dashboard.jpg)

### 🗃️ Report Overview (Admin)
![Report Admin](screenshots/report_admin.jpg)


---

