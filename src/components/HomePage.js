import React, { Component } from "react";
import PropTypes from "prop-types";
// import cx from 'classnames';
import $ from "jquery";

function scrollToMission() {
  $("html, body").animate(
    {
      scrollTop: $("#missionDiv").offset().top - 55
    },
    1100,
    "swing"
  );
}

function scrollToAbout() {
  $("html, body").animate(
    {
      scrollTop: $("#aboutDiv").offset().top - 55
    },
    1100,
    "swing"
  );
}

export default class HomePage extends Component {
  render() {
    // var mobileVsDesktop = this.props.width < 600;
    return (
      <div className="homePage page">
        <div id="background"> </div>
        <div className="spaceForNav" />
        <div className="youtrition">
          <h1 className="y"> Y</h1>
          <h1 className="ou">OU</h1>
          <h1 className="t">T</h1>
          <h1 className="rition">RITION</h1>
        </div>
        <div className="stepsDiv">
          <div className="steps flex">
            <a className="step flex" href="quiz">
              <h4> Take The Quiz </h4>
              <img id="step1" className="stepImg" />
            </a>
            <div className="stepRectange" />
            <div className="stepArrow flex" />
            <a className="step flex" href="#">
              <h4>
                {" "}
                Chat With A <br /> Personal Nutritionist{" "}
              </h4>
              <img id="step2" className="stepImg" />
            </a>
            <div className="stepRectange" />
            <div className="stepArrow flex" />
            <a className="step flex" href="#">
              <h4>
                {" "}
                Get Your Personalized <br /> Supplement Delivered{" "}
              </h4>
              <img id="step3" className="stepImg" />
            </a>
          </div>
        </div>
        <div id="missionDiv" className="missionDiv flex">
          <a onClick={scrollToMission}>
            <h2 id="missionText"> &darr; OUR MISSION &darr;</h2>
          </a>
          <div className="statement flex">
            <img className="missionLogo" />
            <div className="missionPbox flex">
              <p className="missionP">
                At YouTrition, we believe that you work too hard to reach
                anything less than your maximum potential, but training is only
                half the battle. Nutrition is just as important, so we aim to
                help athletes and bodybuilders obtain optimal results by
                providing them with the most effective personalized workout
                supplements on the work.
              </p>
            </div>
          </div>
        </div>
        <div id="aboutDiv" className="aboutDiv flex">
          <a onClick={scrollToAbout}>
            <h2 id="aboutText"> &darr; ABOUT US &darr;</h2>
          </a>
          <div className="statement aboutStatement flex">
            <div className="aboutCard">
              <div className="aboutInnerCard flex">
                <div className="cardImg" />
                <div className="cardFade flex">
                  <div className="cardWhite" />
                  <div className="cardNotFade" />
                </div>
                <div className="cardPortrait" id="ben" />
                <div className="cardText">
                  <h2> Ben Spievak </h2>
                  <p className="role"> Founder and CEO </p>
                  My name is Yash Moondhra. I am a student at University of
                  California, Los Angeles. The protein shake bottle is black and
                  yellow with a little of salt.
                </div>
              </div>
            </div>
            <div className="aboutCard">
              <div className="aboutInnerCard flex">
                <div className="cardImg" />
                <div className="cardFade flex">
                  <div className="cardWhite" />
                  <div className="cardNotFade" />
                </div>
                <div className="cardPortrait" id="jack" />
                <div className="cardText">
                  <h2> Jack Van Boening </h2>
                  <p className="role"> Technical Director </p>
                  My name is Yash Moondhra. I am a student at University of
                  California, Los Angeles. The protein shake bottle is black and
                  yellow with a little of salt.
                </div>
              </div>
            </div>
            <div className="aboutCard">
              <div className="aboutInnerCard flex">
                <div className="cardImg" />
                <div className="cardFade flex">
                  <div className="cardWhite" />
                  <div className="cardNotFade" />
                </div>
                <div className="cardPortrait" id="yash" />
                <div className="cardText">
                  <h2> Yash Moondhra </h2>
                  <p className="role"> Software Developer </p>
                  Yash is a student at UCLA majoring in Computer Science. His
                  favorite protein supplement is Double Chocolate Gold Standard
                  Whey.
                </div>
              </div>
            </div>
            <div className="aboutCard">
              <div className="aboutInnerCard flex">
                <div className="cardImg" />
                <div className="cardFade flex">
                  <div className="cardWhite" />
                  <div className="cardNotFade" />
                </div>
                <div className="cardPortrait" id="chandler" />
                <div className="cardText">
                  <h2> Chandler Fournier </h2>
                  <p className="role"> Founder and CEO </p>
                  My name is Yash Moondhra. I am a student at University of
                  California, Los Angeles. The protein shake bottle is black and
                  yellow with a little of salt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*                        <div className={cx('missionLogo', {'missionLogoSmall': mobileVsDesktop})}/>
                        <h2 className="missionP">
                            At YouTrition, we believe that you work too hard to reach anything less than your maximum potential, but training is only half the battle.
                            Nutrition is just as important, so we aim to help athletes and bodybuilders obtain optimal results by providing them with the most effective
                            personalized workout supplements on the work.
                        </h2> */

HomePage.propTypes = {
  width: PropTypes.number
};
