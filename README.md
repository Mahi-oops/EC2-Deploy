# 🚀 DevOps Traveller

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20Actions-black?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"/>
  <img src="https://img.shields.io/badge/IaC-Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white"/>
</p>

<p align="center">
  <b>Feel the journey, capture the moments — delivered through pipelines ☁️</b>
</p>

---

## 🌍 Overview

DevOps Traveller is a modern travel booking frontend (Bus 🚍 | Train 🚆 | Flight ✈️) designed to demonstrate a complete DevOps lifecycle. The focus of this project is not just the UI, but how an application flows from code commit to production using automation, containerization, and cloud-native deployment.

---

## ⚙️ CI/CD Pipeline Flow

🧑‍💻 CODE → ⚙️ CI BUILD → 🐳 DOCKER IMAGE → 📦 REGISTRY → 🌐 TERRAFORM INFRA → ☸️ KUBERNETES → 🌍 LIVE APP

---

## 🔄 Pipeline Explanation

🧑‍💻 CODE COMMIT — The pipeline starts when a developer pushes code to GitHub. This repository acts as the single source of truth and automatically triggers the CI/CD workflow. No manual deployment steps are required, ensuring a consistent and reliable process.

⚙️ CI VALIDATION — The pipeline installs dependencies and builds the frontend application using Vite. This step ensures the project compiles successfully and prevents broken code from progressing further.

🐳 CONTAINER BUILD — The application is packaged into a Docker image. This creates a consistent runtime environment, ensuring the app behaves the same across development, testing, and production.

📦 IMAGE REGISTRY — The Docker image is pushed to a container registry such as Docker Hub or AWS ECR. This acts as centralized storage for versioned application images used in deployment.

🌐 INFRASTRUCTURE (TERRAFORM) — Infrastructure is provisioned using Terraform, including Kubernetes clusters, networking, and configurations. This ensures infrastructure is reproducible, scalable, and managed as code.

☸️ KUBERNETES DEPLOYMENT — Kubernetes pulls the Docker image and deploys it as pods. It manages scaling, load balancing, and ensures high availability of the application.

🌍 LIVE APPLICATION — The application is now accessible to users. Every new code push triggers the pipeline again, enabling continuous delivery and automated updates.

---

## 🏗️ Architecture Overview

Developer → GitHub → CI/CD Pipeline → Docker → Registry → Terraform → Kubernetes → Users

---

## 🛠️ Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS

DevOps:
- GitHub Actions
- Docker
- Kubernetes (Minikube / AWS EKS)
- Terraform

---

## 📦 Project Structure

devops-traveller/
│
├── src/                     Frontend application
├── public/
│
├── k8s/                    Kubernetes manifests
├── terraform/              Infrastructure as Code
├── .github/workflows/      CI/CD pipeline
│
├── Dockerfile
└── README.md

---

## 🚀 Run Locally

npm install
npm run dev

---

## 🐳 Run with Docker

docker build -t devops-traveller .
docker run -p 5173:5173 devops-traveller

---

## ☸️ Deploy to Kubernetes

kubectl apply -f k8s/

---

## 🎯 Key Highlights

- Fully automated CI/CD pipeline  
- Containerized frontend application  
- Kubernetes-based deployment  
- Infrastructure managed using Terraform  
- End-to-end DevOps lifecycle implementation  

---

## 📈 Future Scope

- Backend integration  
- Authentication system  
- Monitoring (Prometheus, Grafana)  
- Auto-scaling in Kubernetes  

---

## 👨‍💻 Author

Mahesh Avula

---

## ⭐ Final Note

This project demonstrates how modern applications are built, packaged, and deployed through structured pipelines, automated systems, and scalable infrastructure.