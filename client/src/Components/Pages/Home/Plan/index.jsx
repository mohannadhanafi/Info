/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class index extends Component {
    state = {
      title: 'AHC\'s Affordable Insurance Plan!',
      description: 'AHC offers a unique insurance plan with an affordable payment process suitable for all beneficiaries',
      plan: ['$30 enrollment fee', '$30 per month', '$30 copay to any emergency visit or non-specialized physician visit.'],
      video: 'mov_bbb',
    }

    render() {
      const {
        title, description, plan, video,
      } = this.state;
      return (
        <section className="plan">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-md-72">
              <video width="400" controls>
                <source src={`${video}.mp4`} type="video/mp4" />
                <source src={`${video}.ogg`} type="video/ogg" />
                Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-lg-5 offset-lg-1 mb-md-72">
                <h2 className="plan__title">{title}</h2>
                <p className="plan__text lead">{description}</p>
                <ul className="plan-ul">
                {plan.map(item => (
                    <li>{item}</li>
                ))}
                </ul>
                <Link to="/" className="btn btn--lg btn--color">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
}
