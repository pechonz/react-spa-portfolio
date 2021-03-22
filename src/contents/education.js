import '../App.css';
import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/School';

class Education extends Component {
  render() {
    return (
      <div id="education" className="condiv home">
        <h1 data-aos="fade-up">Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(231, 76, 60)' }}
            date={this.props.BElength}
            iconStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h5 className="vertical-timeline-element-title">{this.props.BEtitle}</h5>
            <h6 className="vertical-timeline-element-subtitle">{this.props.BEsubtitle}</h6>
            <p>
            {this.props.BEdetails.map((value) => {
                return <li>{value}</li>
              }
            )}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(231, 76, 60)' }}
            date={this.props.VDlength}
            iconStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h5 className="vertical-timeline-element-title">{this.props.VDtitle}</h5>
            <h6 className="vertical-timeline-element-subtitle">{this.props.VDsubtitle}</h6>
            <p>
            {this.props.VDdetails.map((value) => {
                return <li>{value}</li>
              }
            )}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(231, 76, 60)' }}
            date={this.props.VClength}
            iconStyle={{ background: 'rgb(231, 76, 60)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h5 className="vertical-timeline-element-title">{this.props.VCtitle}</h5>
            <h6 className="vertical-timeline-element-subtitle">{this.props.VCsubtitle}</h6>
            <p>
            {this.props.VCdetails.map((value) => {
                return <li>{value}</li>
              }
            )}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    );
  }
}

export default Education;