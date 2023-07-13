import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="2010 - 2014"
          iconStyle={{ background: "#3e897a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Prasadi Academy, Lalitpur</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="2010 - 2014"
          iconStyle={{ background: "#3e897a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Prasadi Academy, Lalitpur</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="2010 - 2014"
          iconStyle={{ background: "#3e897a", color: "#fff" }}
          icon={<WorkOutlineOutlinedIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Prasadi Academy, Lalitpur</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience