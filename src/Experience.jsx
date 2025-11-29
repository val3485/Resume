
import { Link } from 'react';
import "./index.css" 

function Experience() {
  const list =[
    {
      company: "GHD PTY Ltd, Makati City — Senior Front-End Web Developer",
      date: "NOV 2022 - Present",
      role: "Front-End Developer",
      tasks : [      
        "Build responsive web apps with Vue.js, Angular, Tailwind, Vuetify, jQuery, HTML, CSS, Bootstrap",
        "Turn Figma designs into functional layouts and reusable components",
        "Connect to APIs and fix frontend bugs",
        "Collaborate using GIT and JIRA",
      ],
      proj : [
        "Bids and Tenders Canada – Online bidding platform",
        "Forms Studio – Responsive forms with Vue 3 + Tailwind",
        "WordPress/Elementor – Custom sites, e.g.,Davao Orchard"
      ],
    },
    {
      company: "Acquire Asia Philippines, Ortigas City — Australian Account ",
      date: "JULY 2016 - Nov 2022",
      role: " Front-End Web Developer",
      tasks : [      
        "Develop and maintain websites using CodeIgniter, Laravel, Drupal, WordPress, PHP, Angular, HTML, CSS, JavaScript, jQuery, and Bootstrap",
        "Implement marketing-approved XD designs into responsive, functional layouts",
        "Build and manage blogs from scratch (e.g., Yomojo News)",
        "Test and debug responsive layouts across devices using BrowserStack",
        "Collaborate using GIT and track tasks via JIRA"
      ],
      proj : [
        "YOMOJO Telco – CodeIgniter-based website (yomojo.com.au)",
        "Ozsalemobile – Laravel platform",
        "Blinkit – Drupal support (blinkit.net.au)",
        "Acquire Internal System – PHP + Angular + Bootstrap"
      ],
    },
    {
      company: "Shore Solutions Inc, Taguig City",
      date: "AUGUST 2012 - JULY 2016",
      role: " ITS Web Development Consultant",
      tasks : [      
        "Convert PSD to HTML/CSS, implement UI for web & mobile, customize Bootstrap",
        "Develop WordPress themes from scratch",
        "Use PHP, .NET, Java Spring, jQuery, JavaScript for frontend tweaks",
        "Collaborate using SVN and JIRA",
        "Basic on-site SEO and responsive testing",
      ],
      proj : [
        "Various client websites",
        "Internal BPO systems"
      ],
    },
    {
      company: "ICT Marketing Services Inc, Ortigas",
      date: "AUGUST 2005 - OCTOBER 2006",
      role: "Customer Service Representative",
      tasks : [      
        "Responsible for meeting sales quota.",
        "Responsible for marketing/selling the products per campaign.",
        "Making sure that no misleading information must be given to customers upon closing the sales."
      ],
      proj : [
        "N/A"
      ],
    },
    {
      company: "WELS ACADEMY, Ortigas",
      date: "JULY 2005 - SEPTEMBER 2005",
      role: "English Teacher",
      tasks : [      
        "Teaches different levels and ages of Korean students",
        "Teaches grammar and conversation.",
        "Reports progress of every student to principal."
      ],
      proj : [
        "N/A"
      ],
    },
    {
      company: "Client Logic, Ortigas",
      date: "MAY 2003 - JAN 2005",
      role: "English Teacher",
      tasks : [      
        "Assist customers in troubleshooting desktop/laptop and monitors.",
        "Charge the customer thru credit card if their unit is out of warranty.",
        "Logging all the troubleshooting steps done with their computer and monitor.",
        "Register first time caller customer.",
        "Act as Product Specialist if there is no product specialist around.",
        "Assist customers in troubleshooting DELL desktop/laptop and DELL branded printers.",
        "Assist in removing viruses from customers' computers.",
        "Logging all calls and all the troubleshooting steps done.",
        "Creating dispatches on the damage part, and sending technicians to replace parts of the computer depending on the contract.",
        "Handling and pacifying irate customers."
      ],
      proj : [
        "N/A"
      ],
    },
  ]


  return (
    <>

    <div className='line  '>

    {list.map((i, index) => (
      <div className="info" key={index}>

          <div className='dot'/>
          <h1>{i.company}</h1>
          <h2>{i.date}</h2>

          <h3>{i.role}</h3>

          <ul className='list-disc'>
            {i.tasks.map((d, idx) => (
              <li key={idx}> {d}</li>
            ))}
          </ul>

          <h3>Projects: </h3>

          <ul className='list-disc'>
            {i.proj.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
      </div>
    ))}

      </div>
    </>
  )
}

export default Experience