import './index.css'

const Learn = () => (
  <div className="learn-card">
    <div>
      <h1 className="learn-head"> YOU WILL LEARN: </h1>
      <div>
        <ul>
          <li className="learn-li"> Evolution of AI and Corporate Training </li>
          <li className="learn-li">
            How AI can close skills gaps with rapid upskilling and reskilling{' '}
          </li>
          <li className="learn-li">
            Steps to integrate AI tools in training programs{' '}
          </li>
          <li className="learn-li">
            Challenges and opportunities with AI implementation
          </li>
          <li className="learn-li">
            Live action – creating assets with Vyond Go, Synthesia, Quizbot
          </li>
          <li className="learn-li">
            Roadmap to align training with business goals
          </li>
          <li className="learn-li">
            {' '}
            Best way Learning Architects can use AI{' '}
          </li>
        </ul>
      </div>

      <div className="training-card">
        <h1 className="training">
          Unleashing the Potential of AI in Corporate Training{' '}
        </h1>
        <p className="training">
          Tuesday, January 09, 2024 11 am Eastern | 8 am Pacific Duration: 90
          Minutes
        </p>
      </div>
    </div>
    <button type="button" className="price-button">
      SECURE YOUR SEAT
      <p className="value-product">
        <span className="value"> $997 VALUE </span> - FREE!
      </p>
    </button>
  </div>
)

export default Learn
