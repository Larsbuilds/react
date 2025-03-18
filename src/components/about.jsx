import { useLanguage } from '../utils/LanguageContext';

const About = ({ className }) => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 'alice',
      image: "👩‍💻"
    },
    {
      id: 'bob',
      image: "👨‍💻"
    },
    {
      id: 'charlie',
      image: "🧙‍♂️"
    },
    {
      id: 'john',
      image: "🦸‍♂️"
    },
    {
      id: 'jane',
      image: "🧙‍♀️"
    },
    {
      id: 'mike',
      image: "🐛"
    },
    {
      id: 'sarah',
      image: "🥷"
    },
    {
      id: 'wilson',
      image: "🌪️"
    }
  ];

  return (
    <section className={className}>
      <div className="about-container">
        <div className="about-flex-container">
          <div className="about-section hover-lift">
            <h2>{t('about.title')}</h2>
            <p className="about-subtitle">{t('about.subtitle')}</p>
            <p className="about-description">{t('about.description')}</p>
          </div>

          <div className="about-section hover-lift">
            <h2>{t('about.story.title')}</h2>
            <p className="about-subtitle">{t('about.story.subtitle')}</p>
            <p className="about-description">{t('about.story.part1')}</p>
            <p className="about-description">{t('about.story.part2')}</p>
          </div>
        </div>

        <div className="fun-facts-banner">
          <div className="scroll-container">
            <div className="scroll-text">
              {/* First set of facts */}
              {t('about.funFacts').map((fact, index) => (
                <span key={`first-${index}`} className="fact-item">
                  {['🎯', '💫', '🌟', '✨', '🚀', '🎨', '🎮'][index % 7]} {fact} &nbsp;&nbsp;&nbsp;
                </span>
              ))}
              {/* Duplicate set of facts for seamless loop */}
              {t('about.funFacts').map((fact, index) => (
                <span key={`second-${index}`} className="fact-item">
                  {['🎯', '💫', '🌟', '✨', '🚀', '🎨', '🎮'][index % 7]} {fact} &nbsp;&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>{t('about.team.title')}</h2>
          <p className="about-subtitle">{t('about.team.subtitle')}</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card hover-lift">
                <div className="member-image spin-on-hover">{member.image}</div>
                <h3>{t(`about.team.members.${member.id}.name`)}</h3>
                <p className="member-role">{t(`about.team.members.${member.id}.role`)}</p>
                <p className="member-description">{t(`about.team.members.${member.id}.description`)}</p>
                <p className="secret-talent">
                  <span className="secret-label">{t('about.team.secretSuperpower')}</span>{' '}
                  {t(`about.team.members.${member.id}.secretTalent`)}
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
          color: var(--text-secondary);
        }
        .secret-label {
          color: var(--accent-color);
          font-weight: bold;
        }
        .animated-list li {
          transition: all 0.3s ease;
        }
        .team-card {
          padding: 20px;
          transition: all 0.3s ease;
        }
        .team-card:hover {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }
        .member-image {
          font-size: 3em;
          margin-bottom: 15px;
        }
        .fun-facts-banner {
          width: 100%;
          background: linear-gradient(90deg, var(--bg-secondary), var(--bg-primary));
          padding: 20px 0;
          margin: 40px 0;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .scroll-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .scroll-text {
          display: inline-block;
          white-space: nowrap;
          animation: scrollText 30s linear infinite;
          padding-left: 100%;
        }

        .fact-item {
          display: inline-block;
          font-size: 1.1em;
          color: var(--text-secondary);
        }

        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default About; 