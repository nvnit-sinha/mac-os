import "./cli.scss"
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'

const Cli = ({windowName, setWindowsState}) => {

  const commands = {
    about: {
      description: 'Know more about me.',
      usage: 'about',
      fn: () => {
        return `
Hi, I'm Navneet Sinha 👋
Frontend Developer passionate about building clean and interactive web experiences.
I enjoy working with React, building UI components, and solving real-world problems.
        `
      }
    },

    contact: {
      description: 'Get my contact information.',
      usage: 'contact',
      fn: () => {
        return `
📧 Email: nvnit-sinha@gmail.com
📱 Phone: +91 8374834567
🌐 LinkedIn: linkedin.com/in/navneet-sinha-7b2a5b201
        `
      }
    },

    skills: {
      description: 'List my technical skills.',
      usage: 'skills',
      fn: () => {
        return `
💻 Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, SCSS
⚙️ Backend: Node.js, Express.js
🗄️ Database: MongoDB
🛠 Tools: Git, GitHub, VS Code
📚 CS Fundamentals: OOPs, OS, DBMS, CN
        `
      }
    },

    experience: {
      description: 'View my work experience.',
      usage: 'experience',
      fn: () => {
        return `
🚀 Frontend Developer
- Built responsive UI components
- Integrated REST APIs using Axios
- Worked with reusable component architecture
        `
      }
    },

    education: {
      description: 'View my educational background.',
      usage: 'education',
      fn: () => {
        return `
🎓 B.Tech in Computer Science
Focused on Data Structures, Algorithms, OS, DBMS, and Networking.
        `
      }
    },

    projects: {
      description: 'View some of my projects.',
      usage: 'projects',
      fn: () => {
        return `
📌 Emp - Employee Management systems
📌 Portfolio Website - Interactive developer portfolio
📌 Various React UI experiments and mini tools
        `
      }
    },
  }

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width='45vw' height="60vh">
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
Welcome to Navneet's Interactive Portfolio Terminal 🚀

Available Commands:
- about
- skills
- experience
- education
- projects
- contact
- clear

Type any command to begin.
          `}
          promptLabel="nvnitsinha:~$"
          promptLabelStyle={{ color: "rgb(133, 226, 67)" }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
