import * as React from "react"
import App from "../App.js";
import CustomNavbar from '../components/customNavbar/customNavbar.js';

const IndexPage = () => {
  return (
    <>
      <CustomNavbar />
      <App />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Louis Alemar | Front-End Developer</title>
    <script src="https://kit.fontawesome.com/458fac5c51.js" crossorigin="anonymous"></script>
  </>
)
