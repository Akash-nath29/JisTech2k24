/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { eventTimelineDetails } from "../events";
import { FaClock } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";



const EventCard = (event:any) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    const containerVariants = {
      collapsed: {
        height: 0,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
      expanded: {
        height: "auto",
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    };
  
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={event.date}
        iconStyle={{ background: "white" }}
        icon={
          <span className=" text-violet-700 ">
            <FaClock />
          </span>
        }
      >
        <div>
          <h3 className="text-[24px] font-bold text-white">{event.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {event.desc}
          </p>
        </div>
  
        <motion.div
          className="ml-5 mt-5 space-y-2"
          variants={containerVariants}
          initial="collapsed"
          animate={expanded ? "expanded" : "collapsed"}
        >
          {(expanded ? event.events : event.events.slice(0, 3)).map(
            (e:any, index:any) => (
              <div
                key={`event-event-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                <span className="px-2 py-1 bg-slate-800 text-white">
                  {e.time}
                </span>
                {" - "}
                {e.event}
              </div>
            )
          )}
        </motion.div>
  
        {event.events.length > 3 && (
          <button className="text-white mt-4 px-3 py-2" onClick={toggleExpand}>
            {expanded ? "Hide" : "View Detailed"}
          </button>
        )}
      </VerticalTimelineElement>
    );
  };





const eventTimeline = () => {
  return (
    <section id="eventTimeline" className="poppins-regular mt-20"> 
        <h1 className="text-7xl portrait:text-5xl font-bold text-white mb-8">Event Timeline</h1>
        <VerticalTimeline>
          {eventTimelineDetails.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </VerticalTimeline>
    </section>
  );
};

export default eventTimeline;
