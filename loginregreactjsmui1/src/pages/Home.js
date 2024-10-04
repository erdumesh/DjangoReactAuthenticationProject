import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p> <mark>User Authentication Overview:</mark> <br />

The home page will dynamically display content based on the user's authentication status.
If a user is logged in, it may show personalized information, a welcome message, and navigation options to protected areas of the app (e.g., dashboard, profile).
If not logged in, it will prompt the user to log in or sign up.<br />
<mark>Frontend (React):</mark><br />

The home page is built with React, providing a smooth, interactive user experience.
Uses React Router for navigation between different pages.
Fetches user authentication status from the backend using REST API or GraphQL.
Displays links to Login, Signup, and Logout functionality, depending on the user's state.<br />
<mark>Backend (Django):</mark><br />

Django manages user authentication via APIs using Django REST Framework (DRF) or other tools like Django Allauth.
Provides endpoints for login, signup, and token-based authentication (JWT, Session).
Upon successful login, Django issues a token/session, which is stored in React and used for subsequent API requests.<br />

<mark>Token Handling:</mark><br />

Authentication tokens (JWT or session-based) are sent from the backend after login and stored in the browser (localStorage, cookies).
These tokens are used for all authenticated requests to access protected routes.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
