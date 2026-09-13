
import { useState } from "react";
import { Link } from "react-router-dom";

function Jobs2030() {

  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "AI Engineer",
      icon: "🤖",
      description: "Build intelligent systems, AI applications and automation tools.",
      skill: "Python, AI, Machine Learning"
    },
    {
      title: "Cybersecurity Engineer",
      icon: "🔐",
      description: "Protect companies from cyber attacks and security threats.",
      skill: "Cybersecurity, Networking, Cloud"
    },
    {
      title: "Cloud Engineer",
      icon: "☁️",
      description: "Design and manage scalable cloud-based infrastructure.",
      skill: "AWS, Azure, DevOps"
    },
    {
      title: "Data Scientist",
      icon: "📊",
      description: "Use data and AI to create predictions and business solutions.",
      skill: "Python, SQL, Machine Learning"
    },
    {
      title: "Robotics Engineer",
      icon: "🦾",
      description: "Develop intelligent robots and automated machines.",
      skill: "Robotics, AI, Programming"
    },
    {
      title: "AI Product Manager",
      icon: "🚀",
      description: "Manage products that use artificial intelligence and automation.",
      skill: "AI, Business, Management"
    }
  ];

  return (
    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">THE FUTURE OF TECHNOLOGY</p>

          <h1>
            IT Jobs
            <span> in 2030</span>
          </h1>

          <p className="hero-text">
            Technology is changing rapidly. By 2030, artificial intelligence,
            automation, cloud computing and cybersecurity will transform
            the way we work.
          </p>

          <p className="hero-text">
            The IT industry of 2030 will not be only about writing code.
            Professionals will work with intelligent tools, automated systems,
            cloud platforms, advanced data systems and AI-powered applications.
          </p>

          <p className="hero-text">
            Some traditional roles may change, while completely new roles
            may appear. The people who continuously learn and adapt to new
            technology will have better opportunities.
          </p>

          <div className="hero-buttons">

            <a href="#jobs" className="primary-btn">
              Explore Jobs
            </a>

            <Link to="/roadmap" className="secondary-btn">
              View Roadmap →
            </Link>

          </div>

        </div>


        <div className="hero-image">

          <div className="tech-circle">
            AI
          </div>

          <div className="floating-card card-one">
            🤖 AI
          </div>

          <div className="floating-card card-two">
            ☁️ Cloud
          </div>

          <div className="floating-card card-three">
            🔐 Security
          </div>

        </div>

      </section>


      {/* FUTURE INTRO */}

      <section className="future-section">

        <div>

          <p className="small-title">
            LOOKING AHEAD
          </p>

          <h2>
            How will IT change by 2030?
          </h2>

          <p>
            The IT industry is expected to become more focused on AI,
            automation, data, cloud computing and digital security.
            Many existing jobs may also change because of AI tools.
          </p>

          <p>
            Software development may become faster because developers will
            use AI assistants to generate code, test applications, find bugs
            and understand large codebases.
          </p>

          <p>
            Companies may depend more on cloud infrastructure because
            businesses need applications that can scale quickly and work
            from different locations around the world.
          </p>

          <p>
            Cybersecurity will become increasingly important because more
            businesses, devices and services will be connected to digital
            systems.
          </p>

          <p>
            Data will continue to be one of the most valuable resources.
            Organizations will use data and AI to understand customers,
            predict problems and make faster business decisions.
          </p>

        </div>


        <div className="future-stats">

          <div className="stat-box">
            <h3>AI</h3>
            <p>
              More intelligent applications, AI assistants and automated
              business processes.
            </p>
          </div>

          <div className="stat-box">
            <h3>Cloud</h3>
            <p>
              More cloud-based systems, distributed applications and
              scalable infrastructure.
            </p>
          </div>

          <div className="stat-box">
            <h3>Cyber</h3>
            <p>
              Higher security requirements and stronger protection against
              digital threats.
            </p>
          </div>

          <div className="stat-box">
            <h3>Data</h3>
            <p>
              More data-driven decisions using analytics, machine learning
              and intelligent systems.
            </p>
          </div>

        </div>

      </section>


      {/* BIG 2030 TECHNOLOGY SECTION */}

      <section className="future-section">

        <div>

          <p className="small-title">
            TECHNOLOGY TRENDS
          </p>

          <h2>
            Technologies shaping 2030
          </h2>

          <p>
            AI will become part of everyday software development, business
            operations, customer service and many other industries.
          </p>

          <p>
            Generative AI may help professionals create text, images,
            software code, reports, designs and business solutions.
          </p>

          <p>
            Automation will handle repetitive processes, allowing employees
            to focus more on problem solving, creativity and decision making.
          </p>

          <p>
            Cloud computing will support applications, data platforms,
            AI systems and remote collaboration.
          </p>

          <p>
            Cybersecurity professionals will need to protect AI systems,
            cloud infrastructure, applications, networks and user data.
          </p>

          <p>
            Robotics and smart devices may become more common in
            manufacturing, healthcare, logistics and other industries.
          </p>

        </div>


        <div className="future-stats">

          <div className="stat-box">
            <h3>Generative AI</h3>
            <p>
              AI systems that can generate content, code and useful
              solutions from natural language instructions.
            </p>
          </div>

          <div className="stat-box">
            <h3>Automation</h3>
            <p>
              Intelligent automation will reduce repetitive manual work.
            </p>
          </div>

          <div className="stat-box">
            <h3>Robotics</h3>
            <p>
              Smart machines will perform physical and repetitive tasks.
            </p>
          </div>

          <div className="stat-box">
            <h3>Edge Computing</h3>
            <p>
              Processing data closer to devices can support faster
              responses for connected systems.
            </p>
          </div>

        </div>

      </section>


      {/* JOBS */}

      <section className="jobs-section" id="jobs">

        <p className="small-title">
          CAREERS OF TOMORROW
        </p>

        <h2>
          Top IT Jobs in 2030
        </h2>

        <p className="section-description">
          These are some technology roles that may become highly important
          as businesses adopt more advanced digital technologies.
        </p>

        <p className="section-description">
          Future IT professionals may need a combination of technical
          knowledge, AI awareness, communication skills and business
          understanding. A single job may also require skills from several
          technology areas.
        </p>


        <div className="job-grid">

          {jobs.map((job, index) => (

            <div
              className="job-card"
              key={index}
              onClick={() => setSelectedJob(job.title)}
            >

              <div className="job-icon">
                {job.icon}
              </div>

              <h3>
                {job.title}
              </h3>

              <p>
                {job.description}
              </p>

              <div className="skill-tag">
                {job.skill}
              </div>

              <button>
                {selectedJob === job.title
                  ? "Selected ✓"
                  : "Explore Role →"}
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* MORE FUTURE JOBS */}

      <section className="jobs-section">

        <p className="small-title">
          NEW OPPORTUNITIES
        </p>

        <h2>
          Other Emerging IT Careers
        </h2>

        <p className="section-description">
          As technology develops, new roles can appear around emerging
          technologies and changing business needs.
        </p>

        <div className="job-grid">

          <div className="job-card">
            <div className="job-icon">🧠</div>
            <h3>AI Researcher</h3>
            <p>
              Work on advanced artificial intelligence models, algorithms
              and intelligent systems.
            </p>
            <div className="skill-tag">
              AI, Python, Mathematics
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">⚙️</div>
            <h3>AI Automation Specialist</h3>
            <p>
              Connect AI tools with business workflows to automate
              repetitive processes.
            </p>
            <div className="skill-tag">
              AI, Automation, APIs
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">🛡️</div>
            <h3>AI Security Specialist</h3>
            <p>
              Protect artificial intelligence systems from attacks,
              misuse and security risks.
            </p>
            <div className="skill-tag">
              AI Security, Networking
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">🌐</div>
            <h3>Cloud Architect</h3>
            <p>
              Design reliable and scalable cloud environments for
              modern digital businesses.
            </p>
            <div className="skill-tag">
              Cloud, Architecture, DevOps
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">📈</div>
            <h3>Data Engineer</h3>
            <p>
              Build systems that collect, process and prepare large
              amounts of data for organizations.
            </p>
            <div className="skill-tag">
              SQL, Python, Data
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">🕶️</div>
            <h3>XR Developer</h3>
            <p>
              Develop immersive applications using extended, virtual
              and augmented reality technologies.
            </p>
            <div className="skill-tag">
              XR, 3D, Programming
            </div>
          </div>

        </div>

      </section>


      {/* WORKPLACE IN 2030 */}

      <section className="change-section">

        <div className="change-box">

          <p className="small-title">
            THE FUTURE WORKPLACE
          </p>

          <h2>
            What could the IT workplace look like?
          </h2>

          <p>
            The workplace of 2030 may be more flexible, connected and
            technology-driven. Remote and hybrid work can continue to be
            important for many technology teams.
          </p>

          <p>
            Developers may work alongside AI coding assistants. Project
            teams may use AI for documentation, testing, analysis and
            planning.
          </p>

          <p>
            Employees may need to communicate with teams located in
            different countries and time zones.
          </p>

          <p>
            Companies may value people who can learn quickly, solve
            problems and adapt when new technologies appear.
          </p>

          <div className="change-points">

            <p>✓ AI-assisted development</p>
            <p>✓ Remote and hybrid collaboration</p>
            <p>✓ Automated testing and deployment</p>
            <p>✓ Continuous learning</p>
            <p>✓ Global technology teams</p>
            <p>✓ Human + AI collaboration</p>

          </div>

        </div>

      </section>


      {/* AI REPLACEMENT */}

      <section className="change-section">

        <div className="change-box">

          <p className="small-title">
            AI AND EMPLOYMENT
          </p>

          <h2>
            Will AI replace IT jobs?
          </h2>

          <p>
            AI may automate some repetitive tasks, but it can also create
            new technology roles. The important skill for the future is
            learning how to work with AI instead of competing against it.
          </p>

          <p>
            Developers who understand programming and AI tools may be able
            to complete tasks faster. However, human judgment, creativity,
            communication and problem solving will still be valuable.
          </p>

          <p>
            The biggest change may not be that every job disappears.
            Instead, the responsibilities and skills required for many
            jobs may change.
          </p>

          <div className="change-points">

            <p>✓ Repetitive tasks may become automated</p>
            <p>✓ AI-related jobs may increase</p>
            <p>✓ Human creativity will remain important</p>
            <p>✓ Continuous learning will be essential</p>
            <p>✓ AI tools can improve productivity</p>
            <p>✓ New technology roles may appear</p>

          </div>

        </div>

      </section>


      {/* SKILLS */}

      <section className="future-section">

        <div>

          <p className="small-title">
            FUTURE SKILLS
          </p>

          <h2>
            Skills you should build for 2030
          </h2>

          <p>
            Learning one programming language is useful, but future IT
            professionals should develop a broader technology foundation.
          </p>

          <p>
            Programming fundamentals will help you understand and work
            with AI-generated code instead of depending on it blindly.
          </p>

          <p>
            Communication, teamwork and leadership will also become
            important because technology projects are built by teams.
          </p>

        </div>


        <div className="future-stats">

          <div className="stat-box">
            <h3>💻 Coding</h3>
            <p>
              Programming fundamentals and software development.
            </p>
          </div>

          <div className="stat-box">
            <h3>🤖 AI</h3>
            <p>
              Understanding AI tools and intelligent systems.
            </p>
          </div>

          <div className="stat-box">
            <h3>☁️ Cloud</h3>
            <p>
              Cloud platforms, deployment and infrastructure.
            </p>
          </div>

          <div className="stat-box">
            <h3>🗣️ Soft Skills</h3>
            <p>
              Communication, teamwork, leadership and adaptability.
            </p>
          </div>

        </div>

      </section>


      {/* WHAT TO DO NOW */}

      <section className="change-section">

        <div className="change-box">

          <p className="small-title">
            START TODAY
          </p>

          <h2>
            What should you do before 2030?
          </h2>

          <p>
            You do not need to learn every new technology immediately.
            Start with strong fundamentals and then gradually specialize.
          </p>

          <div className="change-points">

            <p>01 → Learn programming fundamentals</p>
            <p>02 → Build real-world projects</p>
            <p>03 → Learn databases and APIs</p>
            <p>04 → Explore AI tools</p>
            <p>05 → Learn cloud fundamentals</p>
            <p>06 → Improve communication skills</p>
            <p>07 → Create a strong portfolio</p>
            <p>08 → Follow technology trends</p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <p className="small-title">
          YOUR FUTURE STARTS NOW
        </p>

        <h2>
          Ready for the
          <span> IT world of 2030?</span>
        </h2>

        <p>
          Technology will change, but your ability to learn and adapt
          can help you stay ready for the future.
        </p>

        <p>
          Explore the roadmap and discover what skills you can start
          learning today.
        </p>

        <Link to="/roadmap" className="primary-btn">
          Build My Roadmap →
        </Link>

      </section>


      <footer>

        <p>
          © 2030 IT Future | Technology • Skills • Careers
        </p>

      </footer>

    </div>
  );
}

export default Jobs2030;


