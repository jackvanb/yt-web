import React, { Component } from 'react';
import $ from 'jquery';
import cx from 'classnames';
import PropTypes from 'prop-types';

function scrollToMission() {
    $('html, body').animate({
        scrollTop: $('#missionDiv').offset().top - 55}, 1100, 'swing');
}

function scrollToAbout() {
    $('html, body').animate({
        scrollTop: $('#aboutDiv').offset().top - 55}, 1100, 'swing');
}

export default class HomePage extends Component {
    render() {
        var mobileVsDesktop = this.props.width < 600;
        return (
            <div className="homePage">
                <h1 className="y"> Y</h1>
                <h1 className="ou">OU</h1> 
                <h1 className="t">T</h1>
                <h1 className="rition">RITION</h1>
                <div className="stepsDiv">
                    <div className="steps flex">
                        <a className="step flex" href="#">
                            <h4> Take The Quiz </h4>
                            <img id="step1" className="stepImg" />
                        </a>
                        <div className="stepRectange">
                        </div>
                        <div className="stepArrow flex">
                        </div>
                        <a className="step flex" href="#">
                            <h4> Chat With A <br /> Personal Nutritionist </h4>
                            <img id="step2" className="stepImg" />
                        </a>
                        <div className="stepRectange">
                        </div>
                        <div className="stepArrow flex">
                        </div>
                        <a className="step flex" href="#">
                            <h4> Get Your Personalized <br /> Supplement Delivered </h4>
                            <img id="step3" className="stepImg" />
                        </a>
                    </div>
                </div>
                <div id="missionDiv" className="missionDiv flex">
                    <a onClick={scrollToMission}>
                        <h2 id="missionText"> &darr; OUR MISSION &darr;</h2>
                    </a>
                    <div className="missionStatement flex">
                        <div className={cx('missionLogo', {'missionLogoSmall': mobileVsDesktop})}/>
                        <h2 className="missionP">
                            At YouTrition, we believe that you work too hard to reach anything less than your maximum potential, but training is only half the battle.
                            Nutrition is just as important, so we aim to help athletes and bodybuilders obtain optimal results by providing them with the most effective
                            personalized workout supplements on the work.
                        </h2>
                    </div>
                </div>
                <div id="aboutDiv" className="aboutDiv">
                    <a onClick={scrollToAbout}>
                        <h2 id="aboutText"> &darr; ABOUT US &darr;</h2>
                    </a>
                    <div className="missionStatement flex">
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    width: PropTypes.number,
};