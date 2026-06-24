function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">

        <div className="badge">
          🚀 AI-Powered Study Assistant
        </div>

        <h1>
          Learn Smarter,
          <br />
          <span>Not Harder.</span>
        </h1>

        <p>
          Upload your syllabus, identify high-priority topics,
          generate personalized study plans, create quizzes,
          and track your progress using AI.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started Free
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>

      </div>

      <div className="hero-right">

<div className="dashboard-card">

  <h3>StudyAI Dashboard</h3>

  <div className="stats">

    <div className="stat-box">
      <h2>12</h2>
      <p>Topics</p>
    </div>

    <div className="stat-box">
      <h2>68%</h2>
      <p>Progress</p>
    </div>

    <div className="stat-box">
      <h2>7</h2>
      <p>Streak</p>
    </div>

  </div>

  <div className="progress-wrapper">

    <p>Data Structures</p>

    <div className="progress-bar">
      <div className="fill fill1"></div>
    </div>

    <p>DBMS</p>

    <div className="progress-bar">
      <div className="fill fill2"></div>
    </div>

    <p>Operating Systems</p>

    <div className="progress-bar">
      <div className="fill fill3"></div>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;