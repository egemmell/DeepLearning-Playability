import "../css/contact.css"

function Contact() {

  return (
	<body className="contactbody">
    <div className="info_contacts">
		<form className="contact-form">
			<h4>Principal Investigator:</h4>
			<p>
			Michael Brauer, ScD<br></br>
			School of Population and Public Health, University of British Columbia<br></br>
			<a href="mailto:michael.brauer@ubc.ca">michael.brauer@ubc.ca</a><br></br>
			(604)822-9585
			</p>
			<h4>Co-Investigator and primary contact person for study:</h4>
			<p>
			Emily Gemmell, PhD candidate <br></br>
			School of Population and Public Health, University of British Columbia<br></br>
			<a href="mailto:emily.gemmell@ubc.ca">emily.gemmell@ubc.ca</a><br></br>
			(604)209-9233
			</p>
		</form>
    </div>
	</body>
  );
}
export default Contact;
