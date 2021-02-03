import '../App.css';
import React, {Component} from 'react';
import profilepic from '../img/profilepic.jpg'

class Profile extends Component {
  render() {
    return (
        <div id="about" className="condiv home">
          <div><h1 data-aos="fade-up">About me</h1></div>
          <div data-aos="fade-up"><hh2><b>{this.props.name}</b> <b>({this.props.nickname})</b> </hh2></div>

          <div data-aos="fade-down"><img src={profilepic} alt="profile" className="profilepic" /></div>

          <div data-aos="fade-right"><p1><b>Date of birth</b> : {this.props.born}</p1></div> 
          <div data-aos="fade-left"><p1><b>Age</b> : 27 years old</p1></div> 
          <div data-aos="fade-right"><p1><b>Height</b> : {this.props.height} cm <b>Weight</b> : {this.props.weight} kg</p1></div>
          <div data-aos="fade-right"><p1><b>Address</b> : {this.props.address}</p1></div> 
          <div data-aos="fade-left"><p1><b>Religion</b> : {this.props.religion}</p1></div>
          <div data-aos="fade-left"><p1><b>Nationality</b> : {this.props.nationality}</p1></div>
          <div data-aos="fade-left"><p1><b>Tel</b> : {this.props.telephone}</p1></div> 
          <div data-aos="fade-right"><p1><b>Email</b> : <a href={"mailto:" + this.props.mail}>{this.props.mail}</a></p1></div> 
        </div>
    );
  }
}

export default Profile;