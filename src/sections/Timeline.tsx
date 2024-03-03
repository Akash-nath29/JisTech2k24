import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StarIcon from '@mui/icons-material/Star';
import '../components/Hero/ShineAnimation.css';

const timeline = () => {
  return (
    <div className='text-violet-400 shine-animation-for-timeline'>
    <h1 className="text-4xl text-white text-center mb-10 ">Timeline</h1>
    <VerticalTimeline>
        
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    date="7th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    icon={<LaptopIcon />}
    

    
  >
    <h1 className="vertical-timeline-element-title">10am</h1>
    
    <p>
      Hackathon Starts
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    
    date="8th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    icon={<AccessAlarmIcon />}
  >
    <h3 className="vertical-timeline-element-title">3pm</h3>
    
    <p>
      Hackathon Ends
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="9th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    icon={<SmartToyIcon />}

  >
    <h3 className="vertical-timeline-element-title">10 am</h3>
    
    <p>
      JIStech event 1
    </p>
  </VerticalTimelineElement>


<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="9th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    icon={<SportsEsportsIcon />}
    // Use the imported WorkIcon component
>
    <h3 className="vertical-timeline-element-title">2pm</h3>
    
    <p>
        JIStech event 2
    </p>
</VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="10th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    icon={<SportsEsportsIcon />}
  >
    <h3 className="vertical-timeline-element-title">10 am</h3>
    
    <p>
      JIStech event 3
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="11th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    icon={<SportsEsportsIcon />}
  >
    <h3 className="vertical-timeline-element-title">10 am</h3>
    
    <p>
      JIStech event 4
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="12th September 2024"
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    contentStyle={{ background: '#5608cd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #5608cd' }}
    icon={<SportsEsportsIcon />}
  >
    <h3 className="vertical-timeline-element-title">10 am</h3>
    
    <p>
      JIStech event 5
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#5608cd', color: '#fff' }}
    icon={<StarIcon />}
    
  />
</VerticalTimeline>
</div>
  )
}

export default timeline
