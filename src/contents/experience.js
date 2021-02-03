import '../App.css';
import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="condiv home">
        <h1 data-aos="fade-up">Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={this.props.HOPTperiod}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{this.props.HOPTtitle}</h3>
            <h5 className="vertical-timeline-element-subtitle">{this.props.HOPTsubtitle}</h5>
            <p>
            {this.props.HOPTdetails.map((value) => {
                return <li>{value}</li>
              }
            )}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={this.props.RMUTLperiod}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{this.props.RMUTLtitle}</h3>
            <h5 className="vertical-timeline-element-subtitle">{this.props.RMUTLsubtitle}</h5>
            {this.props.RMUTLdetails.map((value) => {
                return <li>{value}</li>
              }
            )}
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    );
  }
}

export default Experience;