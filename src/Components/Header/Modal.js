import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import Conference from "./Modals/Conference";
import Meetups from "./Modals/Meetups";
import Trainings from "./Modals/Trainings";
import Videos from "./Modals/Videos";
import Webinars from "./Modals/Webinars";
import PmSpeaksSeries from "./Modals/PmSpeaksSeries";
import Blogs from "./Modals/Blogs";
import Podcasts from "./Modals/Podcasts";
import BeASpeaker from "./Modals/BeASpeaker";
import BeAVolunteer from "./Modals/BeAVolunteer";
import AboutUs from "./Modals/AboutUs";

export default function Modal() {
  const [showModals, setShowModals] = useState(false);

  const [trainings, setTrainings] = useState(false);
  const [meetups, setMeetups] = useState(false);
  const [webinars, setWebinars] = useState(false);
  const [conference, setConference] = useState(false);
  const [videos, setVideos] = useState(false);
  const [pmSpeaksSeries, setPmSpeaksSeries] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [podcasts, setPodcasts] = useState(false);
  const [beASpeaker, setBeASpeaker] = useState(false);
  const [beAVolunteer, setBeAVolunteer] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);

  const refShowModals = useRef(null);
  const refClickInside = useRef(null);

  const refTrainings = useRef(null);
  const refMeetups = useRef(null);
  const refWebinars = useRef(null);
  const refConference = useRef(null);
  const refVideos = useRef(null);
  const refPmSpeaksSeries = useRef(null);
  const refBlogs = useRef(null);
  const refPodcasts = useRef(null);
  const refBeASpeaker = useRef(null);
  const refBeAVolunteer = useRef(null);
  const refAboutUs = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    refShowModals.current.contains(e.target)
      ? setShowModals(true)
      : setShowModals(false);

    setTrainings(refTrainings.current?.contains(e.target) || e.target.id === "training");

    setMeetups(refMeetups.current?.contains(e.target) || e.target.id === 'meetups');

    setWebinars(refWebinars.current?.contains(e.target) || e.target.id === 'webinars');

    setConference(refConference.current?.contains(e.target) || e.target.id === 'conference');

    setVideos(refVideos.current?.contains(e.target) || e.target.id === 'videos');

    setPmSpeaksSeries(refPmSpeaksSeries.current?.contains(e.target) || e.target.id === 'pmSpeaksSeries');

    setBlogs(refBlogs.current?.contains(e.target) || e.target.id === 'blogs');
    
    setPodcasts(refPodcasts.current?.contains(e.target) || e.target.id === 'podcasts');

    setBeASpeaker(refBeASpeaker.current?.contains(e.target) || e.target.id === 'beASpeaker');

    setBeAVolunteer(refBeAVolunteer.current?.contains(e.target) || e.target.id === 'beAVolunteer');

    setAboutUs(refAboutUs.current?.contains(e.target) || e.target.id === 'aboutUs');

    if (refClickInside.current.contains(e.target)) {
      setShowModals(true);
    } else {
      setShowModals(false);
    }
  };

  const styles = {
    highlight: {
      backgroundColor: "yellow",
      color: "black",
    },
    empty: {},
  };

  return (
    <div className="modal-head" ref={refClickInside}>
      <div className="header-ul" ref={refShowModals}>
        <ul>
          <li
            id="training"
            // ref={refTrainings}
            style={trainings ? styles.highlight : styles.empty}
          >
            Trainings
          </li>
          <li
            // ref={refMeetups}
            id='meetups'
            style={meetups ? styles.highlight : styles.empty}
          >
            Meetups
          </li>
          <li
            // ref={refWebinars}
            id="webinars"
            style={webinars ? styles.highlight : styles.empty}
          >
            Webinars
          </li>
          <li
            // ref={refConference}
            id="conference"
            style={conference ? styles.highlight : styles.empty}
          >
            Conference
          </li>
          <li 
            // ref={refVideos} 
            id="videos"
            style={videos ? styles.highlight : styles.empty}
          >
            Videos
          </li>
          <li
            // ref={refPmSpeaksSeries}
            id="pmSpeaksSeries"
            style={pmSpeaksSeries ? styles.highlight : styles.empty}
          >
            PM Speaks Series
          </li>
          <li 
          // ref={refBlogs} 
          id="blogs"
          style={blogs ? styles.highlight : styles.empty}>
            Blogs
          </li>
          <li
            // ref={refPodcasts}
            id="podcasts"
            style={podcasts ? styles.highlight : styles.empty}
          >
            Podcasts
          </li>
          <li
            // ref={refBeASpeaker}
            id="beASpeaker"
            style={beASpeaker ? styles.highlight : styles.empty}
          >
            Be A Speaker
          </li>
          <li
            // ref={refBeAVolunteer}
            id="beAVolunteer"
            style={beAVolunteer ? styles.highlight : styles.empty}
          >
            Be A Volunteer
          </li>
          <li
            // ref={refAboutUs}
            id="aboutUs"
            style={aboutUs ? styles.highlight : styles.empty}
          >
            About Us
          </li>
        </ul>
      </div>
      {showModals && (
        <div className="show-modals">
          {trainings && <Trainings trainingRef={refTrainings} />}
          {meetups && <Meetups meetupsRef={refMeetups}/>}
          {webinars && <Webinars webinarsRef={refWebinars}/>}
          {conference && <Conference size="1.6rem" conferenceRef={refConference}/>}
          {videos && <Videos videosRef={refVideos}/>}
          {pmSpeaksSeries && <PmSpeaksSeries pmSpeaksSeriesRef={refPmSpeaksSeries}/>}
          {blogs && <Blogs blogsRef={refBlogs}/>}
          {podcasts && <Podcasts podcastsRef={refPodcasts}/>}
          {beASpeaker && <BeASpeaker beASpeakerRef={refBeASpeaker}/>}
          {beAVolunteer && <BeAVolunteer beAVolunteerRef={refBeAVolunteer}/>}
          {aboutUs && <AboutUs aboutUs={refAboutUs}/>}
        </div>
      )}
    </div>
  );
}
