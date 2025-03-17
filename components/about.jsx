const About = ({ className }) => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Chief Coffee Runner",
      image: "🦸‍♂️",
      description: "Known for his legendary ability to turn coffee into code and meetings into memes.",
      secretTalent: "Can debug code just by staring at it intensely"
    },
    {
      name: "Jane Smith",
      role: "Design Wizard",
      image: "🧙‍♀️",
      description: "Can make UIs so beautiful, they bring tears to developers' eyes.",
      secretTalent: "Speaks fluent CSS-ish"
    },
    {
      name: "Mike Johnson",
      role: "Bug Whisperer",
      image: "🐛",
      description: "Has a PhD in turning 'it works on my machine' into 'it works everywhere'.",
      secretTalent: "Once fixed a bug by doing a rain dance"
    },
    {
      name: "Sarah Chen",
      role: "Code Ninja",
      image: "🥷",
      description: "So stealthy at deploying code that the bugs don't even notice they're being fixed.",
      secretTalent: "Types faster than her shadow"
    },
    {
      name: "Bob Wilson",
      role: "Chaos Engineer",
      image: "🌪️",
      description: "Specializes in breaking things before they break themselves.",
      secretTalent: "Can predict system crashes by reading tea leaves"
    }
  ];

  const funFacts = [
    "Our office plant survived 3 weeks without water (unlike our code without coffee)",
    "We've named all our servers after pizza toppings",
    "Our longest debugging session lasted longer than a Lord of the Rings marathon",
    "We have a rubber duck debugging room with over 100 different ducks",
    "Our code repository has more branches than a botanical garden",
    "We celebrate successful deployments with a synchronized team dance",
    "Our 404 page has a higher user satisfaction rating than most features"
  ];

  return (
    <section className={className}>
      <div className="about-container">
        <div className="about-flex-container">
          <div className="about-section hover-lift">
            <h2>About Us</h2>
            <p className="about-subtitle">We're not your typical tech company</p>
            <p className="about-description">
              We're a bunch of passionate tech enthusiasts who believe that great software
              should be both powerful AND fun to use. Our team runs on creativity,
              innovation, and an arguably concerning amount of coffee. Sometimes we write
              code so clean, it squeaks! 🧼
            </p>
            <div className="fun-facts">
              <h3>Fun Facts About Us:</h3>
              <ul className="animated-list">
                {funFacts.map((fact, index) => (
                  <li key={index} className="bounce-on-hover">
                    {['🎯', '💫', '🌟', '✨', '🚀', '🎨', '🎮'][index % 7]} {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-section hover-lift">
            <h2>Our Story</h2>
            <p className="about-subtitle">From garage to slightly bigger garage</p>
            <p className="about-description">
              It all started in 2024 when our founders met at a hackathon and bonded over
              their shared love of dad jokes and clean code. What began as a late-night
              coding session fueled by energy drinks and dreams has evolved into a
              slightly more organized late-night coding session, but now with better snacks
              and occasionally working air conditioning! 🌡️
            </p>
            <p className="about-description">
              Our mission? To create software that makes our users say "Wow!" (in a good way)
              and our competitors say "How?!" (in a confused way). We believe in pushing
              boundaries, breaking conventions, and occasionally breaking the build – but
              hey, that's what rollbacks are for! And yes, we do test in production... 
              just kidding, our moms raised us better than that! 🎮
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>The Dream Team</h2>
          <p className="about-subtitle">Meet the wizards behind the curtain</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card hover-lift">
                <div className="member-image spin-on-hover">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <p className="secret-talent">
                  <span className="secret-label">Secret Superpower:</span> {member.secretTalent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        .spin-on-hover {
          transition: transform 0.5s ease;
        }
        .spin-on-hover:hover {
          transform: rotate(360deg);
        }
        .bounce-on-hover {
          transition: transform 0.2s ease;
        }
        .bounce-on-hover:hover {
          transform: scale(1.05);
        }
        .secret-talent {
          margin-top: 10px;
          font-style: italic;
          font-size: 0.9em;
          color: #666;
        }
        .secret-label {
          color: #ff6b6b;
          font-weight: bold;
        }
        .animated-list li {
          transition: all 0.3s ease;
        }
        .team-card {
          padding: 20px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .team-card:hover {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }
        .member-image {
          font-size: 3em;
          margin-bottom: 15px;
        }
      `}</style>
    </section>
  );
};

export default About; 