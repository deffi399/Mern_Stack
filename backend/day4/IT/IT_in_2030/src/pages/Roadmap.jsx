
import { useState } from "react";
import { Link } from "react-router-dom";

function Roadmap() {

  const [selectedPath, setSelectedPath] = useState("");

  const paths = [
    {
      name: "AI & Machine Learning",
      icon: "🤖",
      skills: "Python → Machine Learning → Deep Learning → Generative AI"
    },
    {
      name: "Full Stack Development",
      icon: "💻",
      skills: "HTML/CSS → JavaScript → React → Backend → Cloud"
    },
    {
      name: "Cybersecurity",
      icon: "🔐",
      skills: "Networking → Linux → Security → Ethical Hacking → Cloud Security"
    },
    {
      name: "Cloud & DevOps",
      icon: "☁️",
      skills: "Linux → Cloud → Docker → Kubernetes → DevOps"
    }
  ];

  return (
    <div>

      {/* HEADER */}

      <section className="roadmap-header">

        <p className="small-title">
          YOUR CAREER FUTURE
        </p>

        <h1>
          Roadmap to
          <span> IT 2030</span>
        </h1>

        <p>
          Technology will keep changing. Your best advantage is to build
          strong fundamentals and continuously learn new technologies.
        </p>

        <p>
          The goal is not to predict every technology that will exist in
          2030. The goal is to develop skills that help you learn,
          adapt and work with new technologies throughout your career.
        </p>

        <p>
          This roadmap gives you a simple path from learning the basics
          to becoming an industry-ready IT professional.
        </p>

      </section>


      {/* TIMELINE */}

      <section className="timeline-section">

        {/* STEP 01 */}

        <div className="timeline-item">

          <div className="timeline-number">
            01
          </div>

          <div>

            <p className="timeline-year">
              NOW
            </p>

            <h2>
              Build Your Foundation
            </h2>

            <p>
              Learn programming fundamentals, web development, databases,
              problem solving and communication skills.
            </p>

            <p>
              Start by understanding how websites, applications,
              databases and computer systems work. Strong fundamentals
              will make it easier to learn advanced technologies later.
            </p>

            <p>
              Practice coding regularly instead of only watching tutorials.
              Small programs can gradually improve your confidence and
              logical thinking.
            </p>

            <p>
              Create simple projects such as websites, forms, dashboards,
              CRUD applications and small JavaScript programs.
            </p>

            <div className="skill-list">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Git</span>

            </div>

          </div>

        </div>


        {/* STEP 02 */}

        <div className="timeline-item">

          <div className="timeline-number">
            02
          </div>

          <div>

            <p className="timeline-year">
              2027–2028
            </p>

            <h2>
              Choose Your Specialization
            </h2>

            <p>
              Choose one major technology path and build real projects.
              Do not try to learn every technology at the same time.
            </p>

            <p>
              Explore different areas of IT before choosing your
              specialization. Try development, AI, cloud, data or
              cybersecurity and identify the area you enjoy.
            </p>

            <p>
              Once you choose a direction, go deeper instead of jumping
              between many technologies. Build projects that demonstrate
              your understanding.
            </p>

            <p>
              Learn how your chosen technology is used in real companies
              and understand the tools commonly used by professionals.
            </p>

            <div className="skill-list">

              <span>AI</span>
              <span>Cloud</span>
              <span>Cybersecurity</span>
              <span>Data</span>
              <span>Full Stack</span>

            </div>

          </div>

        </div>


        {/* STEP 03 */}

        <div className="timeline-item">

          <div className="timeline-number">
            03
          </div>

          <div>

            <p className="timeline-year">
              2029
            </p>

            <h2>
              Become Industry Ready
            </h2>

            <p>
              Build a strong portfolio, complete internships, improve
              interview skills and learn how real companies use technology.
            </p>

            <p>
              Your portfolio should show what you can actually build.
              Include your best projects instead of adding many unfinished
              projects.
            </p>

            <p>
              Practice coding questions, technical interviews, aptitude,
              group discussions and communication skills.
            </p>

            <p>
              Learn how to explain your projects clearly. Interviewers
              may ask about the problem, technology, features and your
              contribution to the project.
            </p>

            <p>
              Try to gain practical experience through internships,
              freelance work, college projects or open-source contributions.
            </p>

            <div className="skill-list">

              <span>Projects</span>
              <span>Internship</span>
              <span>Resume</span>
              <span>Interview</span>
              <span>Portfolio</span>
              <span>Communication</span>

            </div>

          </div>

        </div>


        {/* STEP 04 */}

        <div className="timeline-item">

          <div className="timeline-number">
            04
          </div>

          <div>

            <p className="timeline-year">
              2030+
            </p>

            <h2>
              Work With Future Technology
            </h2>

            <p>
              Keep learning AI tools, cloud platforms, cybersecurity and
              new technologies while developing strong human skills.
            </p>

            <p>
              After entering the IT industry, your learning journey does
              not stop. Technology will continue to change, so professionals
              will need to update their skills regularly.
            </p>

            <p>
              Learn to work with AI instead of avoiding it. AI can help
              with coding, testing, research, documentation and productivity.
            </p>

            <p>
              Focus on solving real business problems. Understanding the
              problem is often more important than simply knowing a tool.
            </p>

            <p>
              Build leadership, teamwork, communication and decision-making
              skills as you grow in your career.
            </p>

            <div className="skill-list">

              <span>AI Tools</span>
              <span>Automation</span>
              <span>Cloud</span>
              <span>Innovation</span>
              <span>Leadership</span>
              <span>Adaptability</span>

            </div>

          </div>

        </div>

      </section>


      {/* LEARNING JOURNEY */}

      <section className="paths-section">

        <p className="small-title">
          LEARNING JOURNEY
        </p>

        <h2>
          What should you learn step by step?
        </h2>

        <p className="section-description">
          You do not need to learn everything at once. Build your skills
          step by step and increase the difficulty as you gain confidence.
        </p>

        <div className="path-grid">

          <div className="path-card">

            <div className="path-icon">
              🧱
            </div>

            <h3>
              Level 1
            </h3>

            <p>
              Start with computer fundamentals, programming logic,
              HTML, CSS, JavaScript, SQL and Git.
            </p>

            <button>
              Foundation
            </button>

          </div>


          <div className="path-card">

            <div className="path-icon">
              💻
            </div>

            <h3>
              Level 2
            </h3>

            <p>
              Build applications using React, backend technologies,
              APIs, databases and authentication.
            </p>

            <button>
              Development
            </button>

          </div>


          <div className="path-card">

            <div className="path-icon">
              🚀
            </div>

            <h3>
              Level 3
            </h3>

            <p>
              Learn advanced technologies such as AI, cloud computing,
              DevOps, cybersecurity or data engineering.
            </p>

            <button>
              Specialization
            </button>

          </div>


          <div className="path-card">

            <div className="path-icon">
              🌟
            </div>

            <h3>
              Level 4
            </h3>

            <p>
              Become industry ready with projects, internships,
              certifications, interviews and real-world experience.
            </p>

            <button>
              Industry Ready
            </button>

          </div>

        </div>

      </section>


      {/* CAREER PATHS */}

      <section className="paths-section">

        <p className="small-title">
          CHOOSE YOUR DIRECTION
        </p>

        <h2>
          Which IT path interests you?
        </h2>

        <p className="section-description">
          Different IT careers require different skills. Choose a path
          based on your interests and gradually develop expertise.
        </p>

        <div className="path-grid">

          {paths.map((path, index) => (

            <div
              className="path-card"
              key={index}
              onClick={() => setSelectedPath(path.name)}
            >

              <div className="path-icon">
                {path.icon}
              </div>

              <h3>
                {path.name}
              </h3>

              <p>
                {path.skills}
              </p>

              <p>
                Build projects, practice regularly and understand
                how these skills are used in real-world applications.
              </p>

              <button>
                {selectedPath === path.name
                  ? "Path Selected ✓"
                  : "Choose Path"}
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* AI SKILLS */}

      <section className="future-section">

        <div>

          <p className="small-title">
            AI + HUMAN SKILLS
          </p>

          <h2>
            Learn to work with AI
          </h2>

          <p>
            AI is likely to become an important productivity tool
            for IT professionals. Learning how to use AI effectively
            can become an advantage.
          </p>

          <p>
            Developers may use AI for generating code, debugging,
            testing, documentation and understanding unfamiliar code.
          </p>

          <p>
            However, you should still understand programming fundamentals.
            You need to review AI-generated results and identify errors.
          </p>

          <p>
            Human skills such as creativity, communication, teamwork,
            leadership and critical thinking can complement technical skills.
          </p>

        </div>

        <div className="future-stats">

          <div className="stat-box">

            <h3>
              🤖 AI Tools
            </h3>

            <p>
              Learn how AI can improve your daily productivity.
            </p>

          </div>

          <div className="stat-box">

            <h3>
              🧠 Critical Thinking
            </h3>

            <p>
              Check information, identify problems and make decisions.
            </p>

          </div>

          <div className="stat-box">

            <h3>
              💡 Creativity
            </h3>

            <p>
              Create new ideas and practical technology solutions.
            </p>

          </div>

          <div className="stat-box">

            <h3>
              🗣️ Communication
            </h3>

            <p>
              Explain technical ideas clearly to teams and customers.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT ROADMAP */}

      <section className="change-section">

        <div className="change-box">

          <p className="small-title">
            PROJECT STRATEGY
          </p>

          <h2>
            Build projects that show your skills
          </h2>

          <p>
            Projects are one of the best ways to demonstrate your
            practical knowledge. Start with simple projects and
            gradually build more advanced applications.
          </p>

          <div className="change-points">

            <p>
              01 → Build a basic website
            </p>

            <p>
              02 → Create an interactive JavaScript application
            </p>

            <p>
              03 → Build a React application
            </p>

            <p>
              04 → Connect your application with an API
            </p>

            <p>
              05 → Add a database and authentication
            </p>

            <p>
              06 → Deploy your project online
            </p>

            <p>
              07 → Add AI or automation features
            </p>

            <p>
              08 → Document your project professionally
            </p>

          </div>

        </div>

      </section>


      {/* INDUSTRY READY */}

      <section className="change-section">

        <div className="change-box">

          <p className="small-title">
            INDUSTRY PREPARATION
          </p>

          <h2>
            How to become job-ready
          </h2>

          <p>
            Technical knowledge alone may not be enough to succeed
            in an IT career. You also need practical experience and
            the ability to communicate your knowledge.
          </p>

          <p>
            Keep your resume simple and focused on relevant skills,
            projects, internships and achievements.
          </p>

          <p>
            Create a professional portfolio where recruiters can
            see your projects and understand your technical abilities.
          </p>

          <p>
            Practice explaining your projects in simple language.
            Be ready to explain what you built and why you selected
            each technology.
          </p>

          <div className="change-points">

            <p>✓ Build a strong resume</p>
            <p>✓ Create a portfolio</p>
            <p>✓ Practice coding</p>
            <p>✓ Practice technical interviews</p>
            <p>✓ Improve communication</p>
            <p>✓ Attend internships</p>
            <p>✓ Participate in projects</p>
            <p>✓ Keep learning</p>

          </div>

        </div>

      </section>


      {/* ACTION PLAN */}

      <section className="action-section">

        <div className="action-content">

          <p className="small-title">
            2030 ACTION PLAN
          </p>

          <h2>
            What should you do after 2030?
          </h2>

          <p>
            Reaching 2030 does not mean your learning journey is finished.
            The IT industry will continue to introduce new tools,
            platforms and career opportunities.
          </p>

          <p>
            Instead of trying to predict the exact technology of the future,
            develop the ability to learn new technologies quickly.
          </p>

          <div className="action-list">

            <div>
              <span>01</span>
              <p>
                Keep learning new technologies
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Use AI as a productivity tool
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Build real-world projects
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Develop communication and leadership
              </p>
            </div>

            <div>
              <span>05</span>
              <p>
                Adapt when technology changes
              </p>
            </div>

            <div>
              <span>06</span>
              <p>
                Learn from real-world experience
              </p>
            </div>

            <div>
              <span>07</span>
              <p>
                Keep your technical skills updated
              </p>
            </div>

            <div>
              <span>08</span>
              <p>
                Move towards advanced roles
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FUTURE CAREER GROWTH */}

      <section className="future-section">

        <div>

          <p className="small-title">
            CAREER GROWTH
          </p>

          <h2>
            Where can your IT career go?
          </h2>

          <p>
            Your first IT job does not have to be your final destination.
            With experience and continuous learning, you can gradually
            move into more advanced technical or leadership positions.
          </p>

          <p>
            A developer can grow into a senior developer, technical lead,
            architect or engineering manager.
          </p>

          <p>
            An AI professional can move towards machine learning,
            AI engineering, AI research or AI product development.
          </p>

          <p>
            Cloud and cybersecurity professionals can also move into
            architecture, engineering leadership and specialized roles.
          </p>

        </div>

        <div className="future-stats">

          <div className="stat-box">
            <h3>Junior</h3>
            <p>
              Learn, practice and gain real-world experience.
            </p>
          </div>

          <div className="stat-box">
            <h3>Senior</h3>
            <p>
              Solve complex problems and guide other developers.
            </p>
          </div>

          <div className="stat-box">
            <h3>Lead</h3>
            <p>
              Manage technical decisions and development teams.
            </p>
          </div>

          <div className="stat-box">
            <h3>Architect</h3>
            <p>
              Design large-scale systems and technical solutions.
            </p>
          </div>

        </div>

      </section>


      {/* FINAL MESSAGE */}

      <section className="cta">

        <p className="small-title">
          YOUR FUTURE STARTS NOW
        </p>

        <h2>
          Build your
          <span> future in IT</span>
        </h2>

        <p>
          The technology of 2030 may look different from today's technology,
          but learning, adapting and solving problems will always be valuable.
        </p>

        <p>
          Start small, build consistently and keep improving your skills.
          Your future career is built step by step.
        </p>

        <Link to="/" className="primary-btn">
          Explore IT Jobs →
        </Link>

      </section>


      {/* BACK */}

      <section className="back-section">

        <h2>
          Your future in IT starts with what you learn today.
        </h2>

        <Link to="/" className="secondary-btn">
          ← Back to IT Jobs
        </Link>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © 2030 IT Future | Technology • Skills • Careers
        </p>

      </footer>

    </div>
  );
}

export default Roadmap;


