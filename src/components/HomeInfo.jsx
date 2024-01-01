import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Bonjour, I am <span className="font-semibold">Ankit</span>👋 and welcome
      to my island
      <br />I am a Software Engineer, Coding Dreams into Reality!
      <br />
      Fly around the island to learn more about me, maybe turn on the music too?
    </h1>
  ),
  2: (
    <InfoBox
      text="Journey Through My Diverse Skills and Work Experiences"
      link="/about"
      btnText="Unlock the Code Vault"
    />
  ),
  3: (
    <InfoBox
      text="Dive into My Work: Past Strokes, Present Masterpieces"
      link="/projects"
      btnText="Unravel My Code Canvas"
    />
  ),
  4: (
    <InfoBox
      text="Adventure Awaits! Drop me a line, let's embark on a project journey."
      link="/contact"
      btnText="Let's Spark a Conversation!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
