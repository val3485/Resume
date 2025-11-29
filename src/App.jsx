import "./index.css" 
import profile from "./assets/pexels-shtefutsa-20264868.jpg"
import { Progress } from "@/components/ui/progress"
import { useState ,useEffect} from "react"
import { GraduationCap, NotebookPen, University } from "lucide-react"

const progress = [
  {
    language: "Vue", 
    val: 83
  }, 
  {
    language: "JSON", 
    val: 50,
  }, 
  {
    language: "Angular", 
    val: 67,
  }, 
  {
    language: "PHP", 
    val: 49,
  }, 
  {
    language: "API", 
    val: 70,
  }, 
  {
    language: "Jquery", 
    val: 82,
  }, 
  {
    language: "JS", 
    val: 89,
  }, 
  {
    language: "HTML", 
    val: 60,
  }, 
]

function App() {


  return (
    <>
      <div className="home-con" >
        <div >
          <img src={profile} className="profile" />
        </div>

        <div className="summary">

          <div className="details">
            <h1 className="font-[anton]">Salve C. Lubiano</h1>
            <div className="font-[fruit]">
              <p>salvelubiano@gmail.com</p>
              <p>Senior Front End</p>
            </div>
          </div>

          <div className="about font-[fruit]">
            <p>10 years work experience as Front-End Web Developer, 
              3 years on Customer Service including Sales and Tech 
              Support and a couple of months as English teacher for 
              International students (Koreans). 
            </p>

            <h2> <span> 10+</span>  Work Experience</h2>
          </div>

          <div className="bars">
              {progress.map((prog) => (
                <div>
                  <h3>{prog.language}</h3>
                  <Progress value={prog.val} className="bar"/>
                </div>
              )) }
          </div>
          
          

        </div>
        
        <div className="w-screen mb-20   lg:ml-20 tablet:ml-15">
           <div className="hobbies">
            
            <div>
              <div>
                <div><img src="/📸.png"/></div>
                <h1>Photography</h1>
              </div>
            </div>

            <div>
              <div>
                <div><img src="/🎨.png"/></div>
                <h1>Graphic Designs</h1>
              </div>
            </div>

            <div>
              <div>
                <div><img src="/📹.png"/></div>
                <h1>Content Creation</h1>
              </div>
            </div>

            <div>
              <div>
                <div><img src="/📱.png"/></div>
                <h1>Social Media Ads</h1>
              </div>
            </div>

            <div>
              <div>
                <div><img src="/🎯.png"/></div>
                <h1>Logo making and Social Media</h1>
              </div>
            </div>

          </div>

          <div className="educ">
              <div className="card">
                <GraduationCap className="icon"/>
                <h1>College</h1>
                <p>Bachelor of Science in Computer Engineering</p>
              </div>

              <div className="card">
                <University className="icon"/>
                <h1>High School</h1>
                <p>Rizal Technological Laboratory High School</p>
              </div>

              <div className="card">
                <NotebookPen className="icon" />
                <h1>Vocational</h1>
                <p>AJB Training Center, Vocational Course - Caregiving
                  S.Y 2021 - 2022</p>
              </div>
          </div>

         
        </div>
      </div>


    </>
  )
}

export default App
