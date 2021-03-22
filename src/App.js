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

var dob = moment('21-May-1993', 'DD MMM YYYY');
var hoptperiod = moment('2-May-2019', 'DD MMM YYYY');

//Profile
var aboutinfo = { 
  name:"Naruephon Sooksinchai", 
  nickname:"Petch" ,
  position:"Web Developer",
  born: (moment(dob).format('DD MMM YYYY')).toString(),
  age: (moment.duration(moment().diff(dob))).years() + " years " + (moment.duration(moment().diff(dob))).months() + " months " + (moment.duration(moment().diff(dob))).days() + " days ",
  address:"Lamphun, Thailand",
  nationality:"Thai",
  religion:"Buddhism",
  height:"167",
  weight:"57",
  hobby:"Coding, Playing Football, Play with my cats.",
  mail:"naruephon.sooksinchai@hotmail.com",
  telephone:"+66998365989",
  lineid:"yaguzaqq"
}

//Experience
var experienceHOPT = {
  title: "System Engineer",
  subtitle: "Hoya Optics (Thailand) Ltd.", 
  from: (moment(hoptperiod).format('MMM YYYY')).toString(), 
  to:"Present" ,
  period:(moment.duration(moment().diff(hoptperiod))).years() + " years " + (moment.duration(moment().diff(hoptperiod))).months() + " months " + (moment.duration(moment().diff(hoptperiod))).days() + " days ",
  details: [
    'Develop SCADA dashboard for display production results and WIP.',
    'Develop KPI dashboard for display KPI results for manager to analyze.',
    'Develop Sale dashboard to follow up export and sales results.',
    'Develop Spending Cost dashboard to almost real time accumulative spending.',
    'Develop Master Items and Process Flow Control system.',
    'Develop Machine state monitoring with raspberry pi and python.',
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
  from:"May 2008" , 
  to:"May 2012", 
  details: [
  ]
};

function App() {
  return (
    <Router>
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
          lineid ={aboutinfo.lineid}
        />
      </Route>
      <Route>
          <Experience
            HOPTtitle={experienceHOPT.title}
            HOPTsubtitle={experienceHOPT.subtitle}
            HOPTlength={experienceHOPT.from + " to " + experienceHOPT.to}
            HOPTperiod={experienceHOPT.period}
            HOPTdetails={experienceHOPT.details}

            RMUTLtitle={experienceRMUTL.title}
            RMUTLsubtitle={experienceRMUTL.subtitle}
            RMUTLlength={experienceRMUTL.from + " to " + experienceRMUTL.to}
            RMUTLdetails={experienceRMUTL.details}
          />
        </Route>
      <Education
            BEtitle={educationBE.title}
            BEsubtitle={educationBE.subtitle}
            BElength={educationBE.from + " to " + educationBE.to}
            BEdetails={educationBE.details}

            VDtitle={educationVD.title}
            VDsubtitle={educationVD.subtitle}
            VDlength={educationVD.from + " to " + educationVD.to}
            VDdetails={educationVD.details}

            VCtitle={educationVC.title}
            VCsubtitle={educationVC.subtitle}
            VClength={educationVC.from + " to " + educationVC.to}
            VCdetails={educationVC.details}
      />
      
      <Skill />
      <Footer />
    </Router>
  );
}


export default App;
