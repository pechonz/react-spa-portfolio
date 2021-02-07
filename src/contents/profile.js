import React, {Component} from 'react';
import profilepic from '../img/profilepic.jpg'

class Profile extends Component {
  render() {
    return (
        <div id="about" className="condiv home">
          <div><h1 data-aos="fade-up">About me</h1></div>
          <div data-aos="fade-down"><img src={profilepic} alt="profile" className="profileAbout" /></div>
          <div data-aos="fade-up"><hh2><b>{this.props.name}</b> <b>({this.props.nickname})</b> </hh2></div>
          <div data-aos="fade-right"><p1><b>Date of birth</b> : {this.props.born}</p1></div> 
          <div data-aos="fade-left"><p1><b>Age</b> : {this.props.age}</p1></div> 
          <div data-aos="fade-right"><p1><b>Height</b> : {this.props.height} cm <b>Weight</b> : {this.props.weight} kg</p1></div>
          <div data-aos="fade-right"><p1><b>Address</b> : {this.props.address}</p1></div> 
          <div data-aos="fade-left"><p1><b>Religion</b> : {this.props.religion} <b>Nationality</b> : {this.props.nationality}</p1></div>
          <div data-aos="fade-left"><p1><b>Tel</b> : <a href={"tel:" + this.props.telephone}><font color="#FFFFFF">{this.props.telephone}</font></a></p1></div> 
          <div data-aos="fade-right"><p1><b>Email</b> : <a href={"mailto:" + this.props.mail}><font color="#FFFFFF">{this.props.mail}</font></a></p1></div>
          <div data-aos="fade-right"><p1><b>Line ID</b> : <a href={"http://line.me/ti/p/~" + this.props.lineid}><font color="#FFFFFF">{this.props.lineid}</font></a></p1></div>
        </div>
    );
  }
}

export default Profile;