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
            date={this.props.HOPTlength}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h5 className="vertical-timeline-element-title">{this.props.HOPTtitle}</h5>
            <h6 className="vertical-timeline-element-subtitle">{this.props.HOPTsubtitle}</h6>
            <h6 className="vertical-timeline-element-subtitle">{this.props.HOPTperiod}</h6>
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
            date={this.props.RMUTLlength}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h5 className="vertical-timeline-element-title">{this.props.RMUTLtitle}</h5>
            <h6 className="vertical-timeline-element-subtitle">{this.props.RMUTLsubtitle}</h6>
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