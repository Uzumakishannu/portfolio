import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Intern / AI Engineer</h4>
                <h5>Replaceable.ai</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Designed and implemented AI-driven backend workflows using prompt-engineering, structured reasoning pipelines, and controlled outputs. Built developer-focused CMS workflows and led rapid prototyping to ship products in a fast startup environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Sensor Integration Intern</h4>
                <h5>Harmonic Aura Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Integrated 4 biometric sensors with ESP32 and Firebase, processing 500+ data points/minute in real-time. Built a React.js interface with under 200 ms latency, reducing sensor-to-web delay by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IIITDM Kancheepuram</h4>
                <h5>B.Tech, Chennai</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              B.Tech Graduate in Electronics and Communication Engineering, focused on full-stack development and AI engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
