import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="aboutbody">
      <div class="infosheet">
        <form className="info-form">
          <h2>
            Assessing child and parent perceptions of neighbourhoods for
            children’s outdoor play <br></br> Participant Information Sheet
          </h2>
          <h4>
            Thank you for your interest in our research study. This information
            is provided to help you understand why our study is being done and
            what it will involve. Please take time to read it carefully and
            contact us if anything is unclear or if you would like more
            information.
          </h4>
          <h3>Who is doing this study?</h3>
          <p>
            Principal Investigator:<br></br>
            Michael Brauer, ScD<br></br>
            School of Population and Public Health, University of British
            Columbia<br></br>
            <a href="mailto:michael.brauer@ubc.ca">michael.brauer@ubc.ca</a>
            <br></br>
            (604)822-9585
          </p>
          <p>
            Co-Investigator and primary contact person for study:<br></br>
            Emily Gemmell, PhD candidate <br></br>
            School of Population and Public Health, University of British
            Columbia<br></br>
            <a href="mailto:emily.gemmell@ubc.ca">emily.gemmell@ubc.ca</a>
            <br></br>
            (604)209-9233
          </p>
          <h3>What is the purpose of the study?</h3>
          <p>
            We are conducting this study to understand how parents of 0-12 year
            old children view neighbourhood environments for children’s outdoor
            play. Additionally, we are seeking to understand how children, 5-12
            years old view neighbourhood environments for play.
          </p>
          <h3>Why have I been invited?</h3>
          <p>
            This is an online study for parents of 0-12 year old children and
            you have been invited by way of accessing this website. It is up to
            you to decide whether or not to take part. If you decide to take
            part you are still free to withdraw at any time and without giving a
            reason by navigating away from the survey site. We also provide the
            opportunity for your 5-12 year-old child to participate and share
            their views.
          </p>
          <h3>What happens if I decide to participate?</h3>
          <p>
            First, the survey will ask basic questions to help us understand
            general information about you: your age, gender, first three digits
            of postal code and, if applicable, the age and gender of your child
            who will participate in the survey. You will be shown two
            side-by-side street-view images and asked to select the
            neighbourhood that you think looks more playable for children. We
            anticipate that it will take about 10 minutes of your time to rate
            100 image pairs but you may choose to rate as many or as few image
            pairs as you wish, and exit the survey by clicking the “EXIT” button
            at any time.{" "}
          </p>
          <h3>What happens if I consent to my child’s participation?</h3>
          <p>
            You may also consent to your 5-12 year old child’s participation by
            clicking on the Child Survey link. You will then be prompted to
            enter child age, gender and first three digits of postal code. After
            this, you and your child may view a short, animated video describing
            the study purpose and how to participate. Your child can then decide
            whether or not to participate by clicking “YES” or “NO” buttons. If
            they agree to take the survey, they will be shown side-by-side
            images and asked to click on the neighbourhood they would rather
            play in. We anticipate that it will take about 5 minutes of your
            child’s time to rate 20 image pairs. However, children may complete
            as many or as few image comparisons as they wish and click the
            “EXIT” button when finished.{" "}
          </p>
          <h3>Data Privacy</h3>
          <p>
            No personal data that could identify you or your child is collected
            as part of this study and your/your child’s responses cannot be
            linked to you. Because the data is collected anonymously, it cannot
            be withdrawn once submitted. All data collected will be made
            available online so that other researchers can verify the findings
            of our research and may also be used in future research projects. By
            agreeing to your or your child’s participation, you agree that your
            responses may be used in future research related to child and parent
            perspectives of urban neighbourhoods and outdoor play.
          </p>
          <h3>
            Are there any disadvantages, risks or benefits to participation?
          </h3>
          <p>
            We do not anticipate any risks to you or your child as a result of
            participation in this study. Although you/your child may not
            directly benefit from participating in this study, improving
            understanding of how parents and children perceive neighbourhoods
            for outdoor play may help cities to create environments that support
            child health and development.
          </p>
          <h3>How will results of the study be used?</h3>
          <p>
            We hope that this study will help cities to create healthier, more
            child-friendly places to grow up. Our findings will be published in
            online research journals that are free for all to access and may
            also be used to develop a publicly available online tool for mapping
            neighbourhood playability. We have no financial interest in this
            research, and will use this data exclusively for non-commercial
            research on urban environments, health and health behaviours.
          </p>
          <h3>Who is funding this research?</h3>
          <p>
            This research is funded by the Wellcome Trust as part of the
            Pathways to Equitable Healthy Cities research collaboration.
          </p>
          <h3>
            Who can you contact if you have concerns or complaints about the
            study?
          </h3>
          <p>
            If you have any concerns or complaints about your rights as a
            research participant and/or your experiences while participating in
            this study, contact the Research Participant Complaint Line in the
            UBC Office of Research Ethics at 604-822-8598 or if long distance
            e-mail RSIL@ors.ubc.ca or call toll free 1-877-822-8598. <br></br>
            <br></br>
            If you have any further questions, please contact Emily Gemmell at{" "}
            <a href="mailto:emily.gemmell@ubc.ca">emily.gemmell@ubc.ca</a>.
          </p>
          <br></br>

          <h4 className="top-p">
            By clicking the link below, you confirm the following statements and
            consent to participate in this research.
          </h4>
          <li className="list">
            <em>
              I am a parent or guardian of a 0-12 year old child and live in
              Canada.
            </em>
          </li>
          <li className="list">
            <em>I have reviewed the participant information sheet.</em>
          </li>

          <div className="link-to-surveys">
            <div className="parent-survey" style={{ paddingBottom: "2rem" }}>
              <p className="survey">
                Yes, I would like to participate in this survey!
              </p>

              <div className="btn-align">
                <a href="./demographics" className="survey-button">
                  Start Survey
                </a>
              </div>
            </div>

            <div className="child-survey">
              <p className="survey">
                Yes, I consent to my 5-12 year old child participating in this
                survey!
              </p>
              <div className="btn-align">
                <a href="./childinfo" className="survey-button">
                  Child Survey
                </a>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "2rem", textAlign: "left" }}>
            <h4 style={{ textAlign: "left", marginTop: "2rem" }}>
              If you do not wish to participate, you may exit here.
            </h4>
            <div className="btn-align-e">
              <a href="http://www.google.com" className="exit-button">
                Exit Here
              </a>
            </div>
          </div>
          <h4 style={{ paddingTop: "2rem", textAlign: "center" }}>
            Thank you for your interest in our study!
          </h4>
          <footer style={{ paddingTop: "50px", fontSize: "10px" }}>
            Ethics ID # H22-00267
          </footer>
        </form>
      </div>
    </div>
  );
};

export default About;
