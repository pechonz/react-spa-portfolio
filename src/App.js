import './App.css';
import Navbar from './contents/navbar';
import Home from './contents/home';
import Profile from './contents/profile';
import Experience from './contents/experience';
import Education from './contents/education';
import Skill from './contents/skills';
import Footer from './contents/footer';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment';

var a = moment();
var b = moment('21-May-1993', 'DD-MMM-YYYY');
var age = moment.duration(a.diff(b));
var years = age.years();
var months = age.months();
var days = age.days();

var ages = years + " years " + months + " months " + days + " days ";

//Profile
var aboutinfo = { 
  name:"Naruephon Sooksinchai", 
  nickname:"Petch" ,
  position:"Web Developer",
  born:"21 May 1993",
  age: ages,
  address:"Lamphun, Thailand",
  nationality:"Thai",
  religion:"Buddhism",
  height:"167",
  weight:"57",
  hobby:"Coding, Playing Football, Play with my cats.",
  mail:"naruephon.sooksinchai@hotmail.com",
  telephone:"+66998365989"
}
//Experience
var experienceHOPT = {
  title: "System Engineer",
  subtitle: "Hoya Optics (Thailand) Ltd.", 
  from:"May 2019" , 
  to:"Present" ,
  details: [
    'Develop SCADA dashboard for display production results and WIP.',
    'Develop KPI dashboard for display KPI results for manager to analyze.',
    'Develop Sale dashboard to follow up export and sales results.',
    'Develop Spending Cost dashboard to almost real time accumulative spending.',
    'Database administration (Oracle, Microsoft SQL).',
    'Maintain and manage computer and network systems in the factory.'
  ]
};

var experienceRMUTL = {
  title: "Intern",
  subtitle: "Rajamangala University of Technology Lanna",
  from:"Jun 2016" , 
  to:"Aug 2016", 
  details: [
    'Temperature Control Monitoring System for server room.',
    'Install and maintain the university network system.',
    'Install and maintain the operating system of university computer.'
  ]
};
//Education
var educationBE = {
  title: "Bachelor of Engineering in Computer Engineering",
  subtitle: "Rajamangala University of Technology Lanna",
  from:"Aug 2014" , 
  to:"Feb 2018", 
  details: [
    'Semi-Automatic crayfish farming in small aquarium with IoT technology'
  ]
};

var educationVD = {
  title: "Vocational Diploma in Computer Technical",
  subtitle: "Lamphun Technical College",
  from:"May 2012" , 
  to:"May 2014", 
  details: [
    'President, LTC Association Of Future Thai Professional'
  ]
};

var educationVC = {
  title: "Vocational Certificate in Electronics",
  subtitle: "Lamphun Technical College",
  from:"May 2012" , 
  to:"May 2008", 
  details: [
  ]
};

function App() {
  return (
    <Router>
      <div>
      <Navbar /> 
      <Home />  
      <Route>
        <Profile
          name={aboutinfo.name}
          nickname={aboutinfo.nickname}
          position={aboutinfo.position}
          age={aboutinfo.age}
          born={aboutinfo.born}
          height={aboutinfo.height}
          weight={aboutinfo.weight}
          address={aboutinfo.address}
          telephone={aboutinfo.telephone}
          nationality={aboutinfo.nationality}
          religion={aboutinfo.religion}
          hobby={aboutinfo.hobby}
          mail={aboutinfo.mail}
          telephone={aboutinfo.telephone}
        />
      </Route>
      <Route>
          <Experience
            HOPTtitle={experienceHOPT.title}
            HOPTsubtitle={experienceHOPT.subtitle}
            HOPTperiod={experienceHOPT.from + "-" + experienceHOPT.to}
            HOPTdetails={experienceHOPT.details}

            RMUTLtitle={experienceRMUTL.title}
            RMUTLsubtitle={experienceRMUTL.subtitle}
            RMUTLperiod={experienceRMUTL.from + "-" + experienceRMUTL.to}
            RMUTLdetails={experienceRMUTL.details}
          />
        </Route>
      <Education
            BEtitle={educationBE.title}
            BEsubtitle={educationBE.subtitle}
            BEperiod={educationBE.from + "-" + educationBE.to}
            BEdetails={educationBE.details}

            VDtitle={educationVD.title}
            VDsubtitle={educationVD.subtitle}
            VDperiod={educationVD.from + "-" + educationVD.to}
            VDdetails={educationVD.details}

            VCtitle={educationVC.title}
            VCsubtitle={educationVC.subtitle}
            VCperiod={educationVC.from + "-" + educationVC.to}
            VCdetails={educationVC.details}
      />
      
      <Skill />
      <Footer />
      </div>
    </Router>
  );
}


export default App;
