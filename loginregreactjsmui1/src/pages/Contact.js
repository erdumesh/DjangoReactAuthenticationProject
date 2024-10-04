import { Grid } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1>Contact Page</h1>
          <hr />
          <h2>Umesh Soni Django React Developer</h2>
          <h3>Profile</h3>
          <p>
            {" "}
            A passionate Full Stack Developer with experience in building and
            deploying web applications using React.js for front-end development
            and Django for back-end services. Proficient in creating responsive
            user interfaces, managing state with React hooks, and integrating
            RESTful APIs with modern front-end frameworks. Skilled in designing
            robust back-end architectures, database management with MySQL, and
            deploying full-stack applications. Eager to contribute to dynamic
            teams, solve challenging problems, and grow in the field of web
            development.
          </p>
          <h2>Professional Experience</h2>
          <p>
           <h3> Keen Infotech</h3> Python and React Full Stack Developer Intern Worked
            on Front-end development using React.js and backend development
            using Django Framework.
            <br />
             <h3>Brainwave India</h3> Python Intern Worked on
            Power BI, Python, MySql, Django, React, Tailwind CSS
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
