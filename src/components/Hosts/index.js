import './index.css'

const Hosts = () => (
  <div className="hosts">
    <div>
      <h1 className="hosts-head">MEET YOUR HOSTS </h1>
    </div>
    <div className="hosts-details">
      <div className="card">
        <img
          src="https://resources.commlabindia.com/hubfs/webinars/rk-prasad-ai-webinar.jpg"
          alt="ABC"
          className="image"
        />
        <h1 className="name">RK Prasad </h1>
        <p className="founders"> CEO & Co-Founder </p>
        <p className="name-para">
          RK has nurtured CommLab India from concept to commercial success, and
          is responsible for formulating the business strategy. He is also
          responsible for nurturing customer relationships.
        </p>
        <p className="name-para">
          An entrepreneur at heart, RK has 35 years of experience in Sales,
          Corporate training, University teaching, and eLearning. He regularly
          conducts seminars and webinars for customers across the world on
          various topics of technology-enhanced learning.
        </p>
        <p className="name-para">
          RK holds a PhD in Mobile Learning from Lancaster University, UK, and
          an MBA.
        </p>
        <p className="name-para">
          A good teacher and engaging trainer, RK helps people learn and bloom.
          His priorities are his employees, his customers, and his community.
        </p>
      </div>
      <div className="card">
        <img
          src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/Shalini.jpg"
          alt="ABC"
          className="image"
        />
        <h1 className="name"> Shalini Merugu </h1>
        <p className="founders"> Director - Learning Solutions </p>
        <p className="name-para">
          {' '}
          Shalini is a versatile learning design professional with 16+ years of
          experience in instructional design (ILT, VILT, and eLearning).
        </p>
        <p className="name-para">
          {' '}
          Her experience in designing eLearning solutions along with designing
          and delivering instructor-led training helps her leverage the
          strengths of each medium to consistently create impactful training
          solutions, ensuring that nothing is lost when converting from one
          format to another.
        </p>
        <p className="name-para">
          {' '}
          Apart from improving the quality of learning solutions, she also
          conducts customer education workshops at customer sites globally and
          presents webinars on learning design.{' '}
        </p>
      </div>
      <div className="card">
        <img
          src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/rajesh-v4.jpg"
          alt="ABC"
          className="image"
        />
        <h1 className="name">Rajesh Venkata </h1>
        <p className="founders"> Director – Innovation</p>
        <p className="name-para">
          Rajesh started his career as a Quality Executive in 2008, and gained
          expertise in eLearning, digital content delivery, and project
          management, over these 15+ years.
        </p>
        <p className="name-para">
          Rajesh has an excellent track record of team management and
          operational planning, along with good knowledge of eLearning authoring
          tools such as Storyline, Captivate, and Lectora.
        </p>
        <p className="name-para">
          Well-experienced in managing multiple projects for global clients,
          Rajesh has a keen eye for trends in the tech-enabled learning space.
          This made him the natural choice for the current role, where he
          researches the latest tools and tech, and guides the CommLab India
          team in leveraging them to address training needs faster, better, and
          er.
        </p>
      </div>
    </div>
    <div className="host-venue">
      <h1 className="host-training">
        Unleashing the Potential of AI in Corporate Training
      </h1>
      <p className="host-time">
        Tuesday, January 09, 2024 11 am Eastern | 8 am Pacific Duration: 90
        Minutes
      </p>
    </div>
    <button type="button" className="price-button">
      SECURE YOUR SEAT
      <p className="value-product">
        <span className="value"> $997 VALUE </span> - FREE!
      </p>
    </button>
  </div>
)

export default Hosts
