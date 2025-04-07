import React from "react";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import './styles/About.css'


const About = () =>  {
    return (
        <>
        <div className="about">
        <h1>About me</h1>
          <p>My name is Kaisa Ets, and I am 30 years old. I have previously studied at University of
            Tartu Pärnu College, where I graduated from tourism and hotel management. After working
            in the field for a few years, I attended career counseling. After analyzing the results,
            I decided to take some lT courses to gain more insight. This, in turn, made me want to
            gain a deeper understanding of the subject, so I applied to Tartu Vocational College,
            specializing in software development and was accepted. </p>
        </div>
        {/* <div className="experience">
            <VerticalTimeline><VerticalTimelineElement></VerticalTimelineElement></VerticalTimeline>
        </div>  */}
        </> 

    )
}

export default About