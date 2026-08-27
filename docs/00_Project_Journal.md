====>>>>Date: 05-08-2026
Today I finalized the technology stack according to the college syllabus.
Updated the Project Overview document.
Started writing the SRS document.
Next Goal: Complete the SRS.



#====>>>> 📅 Journal – 05 August 2026

## 🎯 Goal
Set up Jenkins and establish the first Continuous Integration (CI) workflow with GitHub.

## ✅ Tasks Completed
- Verified Java and Git installation.
- Installed Jenkins on Windows.
- Configured Jenkins as a Windows Service.
- Configured Jenkins to use port 8080.
- Faced Java compatibility issue (JDK 22 was not supported).
- Installed JDK 21 (LTS) and configured Jenkins successfully.
- Completed the first-time Jenkins setup.
- Installed suggested Jenkins plugins.
- Created the first Jenkins admin account.
- Created a Freestyle Project named **Career-Compass-2.0**.
- Connected Jenkins with the public GitHub repository.
- Configured Jenkins to build the **main** branch.
- Executed the first successful Jenkins build (#1).

## 📚 Concepts Learned
- Jenkins and its role in Continuous Integration (CI).
- Why Jenkins requires Java.
- Difference between JDK 22 and JDK 21 compatibility.
- Jenkins Windows Service.
- Default Jenkins port (8080).
- Jenkins Plugins.
- Freestyle Project.
- Source Code Management (Git).
- Branch configuration (`*/main`).
- Build Now and Build History.

## 🐞 Challenges Faced
- Jenkins installation failed because it did not support Java 22.
- Solved the issue by installing JDK 21 and configuring Jenkins to use it.

## 💡 Key Takeaways
- Jenkins automates tasks such as cloning code, building, testing, and deployment.
- A successful build confirms that Jenkins can communicate with the GitHub repository.
- Even a repository containing only documentation can be used to verify the CI setup.

## 🎓 Interview Notes
- Jenkins is an open-source automation server used for Continuous Integration and Continuous Delivery (CI/CD).
- GitHub stores the source code, while Jenkins automates the build process.
- Jenkins uses Git to clone the latest version of a repository.
- Jenkins requires Java to run because it is built using Java.
- Port **8080** is the default Jenkins port.
- Plugins extend Jenkins functionality.
- A Freestyle Project is the simplest type of Jenkins job.

## 📌 Next Plan
- Learn Jenkins Workspace.
- Understand Console Output in detail.
- Configure GitHub Webhooks for automatic builds.
- Learn Jenkins Pipeline Jobs.
- Integrate Jenkins with the actual Career Compass 2.0 project.

## ⭐ Achievement of the Day
Successfully installed Jenkins, connected it with GitHub, and completed the first successful CI build for Career Compass 2.0.










git add .
git commit -m "Day 2: Connected GitHub repository with Jenkins"

ngrok http 8080

Laptop ON
     │
     ▼
Open Jenkins
(http://localhost:8080)
     │
     ▼
Run:
ngrok http 8080    https://github.com/VidhiSoni123/Devops_2026_CS_F_08
     │
     ▼
If ngrok URL changed:
Update GitHub Webhook
     │
     ▼
Open VS Code
     │
     ▼
git add .
git commit
git push
     │
     ▼
Jenkins builds automatically 🚀


