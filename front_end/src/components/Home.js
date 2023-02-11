import "../css/home.css";

function Home() {
  return (
    <body className="disclamationBox">
      <div className="form-container">
        <h2>
          Assessing child and parent perceptions of neighbourhoods<br></br> for
          children’s outdoor play
        </h2>

        <p className="top-p">
          Thank you for visiting our survey! If you are a parent or guardian of
          a 0-12 year old child living in Canada, we want to understand how you
          and your child(ren) view neighbourhood environments for children’s
          outdoor play.
        </p>

        <p className="top-p">
          Neighbourhood environments can influence kids’ opportunities and
          experiences. Outdoor play can help kids be physically active and
          connect to their local communities.
        </p>

        <p className="top-p">
          We want to understand how parents and children view different
          neighbourhood environments for outdoor play. We hope this information
          can help cities to design neighbourhoods that support kids’ mental,
          physical and social well-being.{" "}
        </p>

        <p className="top-p">
          The following page provides details to help you decide if you wish to
          participate and/or if you consent to your child participating in this
          study.
        </p>

        <div className="btn-cls">
          <a href="./consent" className="next-btn">
            Next
          </a>
        </div>

        <footer style={{ paddingTop: "50px", fontSize: "10px" }}>
          Ethics ID # H22-00267
        </footer>

        {/* <p className='top-p'>Before consenting to either your or your child’s participation, please review the <a href='/About'>participant information sheet</a> for more details about this study. </p>
      <h4 className='top-p'>By clicking the link below, you confirm the following statements and consent to participate in this research.</h4>
      <li className='list'><em>I am a parent or guardian of a 0-12 year old child and live in Canada.</em></li>
      <li className='list'><em>I have reviewed the participant information sheet.</em></li>
      
      <div className='link-to-surveys'>
        <div className='parent-survey' style={{paddingBottom: "2rem"}}>
          <p className='survey'>Yes, I would like to participate in this survey!</p>
          <a href="./demographics" className="survey-button" style={{marginLeft: "30px"}}>Start Survey</a>
        </div>
        
        <div className='child-survey'>
          <p className='survey'>Yes, I consent to my 5-12 year old child participating in this survey!</p>
          <a href="./ChildAssent" className="survey-button" style={{marginLeft: "30px"}}>Child Survey</a>
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <h4 style={{textAlign: "center"}}>If you do not wish to participate, you may exit here.</h4>
        <a href="http://www.google.com" className="exit-button">Exit Here</a>
      </div> */}
      </div>
    </body>
  );
}

export default Home;
