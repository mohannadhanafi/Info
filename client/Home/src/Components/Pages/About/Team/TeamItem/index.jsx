/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class index extends Component {
  state = {}

  render() {
    const { team } = this.props;
    return (
      <div className="row">
        {team.length && (
          team.map(item => (
            <div className="col-md-4">
              <div className="team box-shadow hover-down">
                <div className="team__img-holder">
                  {item.image && (
                  <img src={`/api/v2/getFile/${item.image}`} alt="" className="team__img" />
                  )}
                </div>
                <div className="team__body">
                  <span className="team__occupation">
                    {item.title}
                  </span>
                  <h5 className="team__name">{item.name}</h5>
                  <p className="team__text">{item.bio}</p>
                  <div className="socials">
                    <a href={item.twitter} className="social social-twitter" aria-label="twitter" title="twitter" target="_blank" tabIndex="0"><i className="ui-twitter" /></a>
                    <a href={item.facebook} className="social social-facebook" aria-label="facebook" title="facebook" target="_blank" tabIndex="0"><i className="ui-facebook" /></a>
                    <a href={item.youtube} className="social social-youtube" aria-label="youtube" title="google plus" target="_blank" tabIndex="0"><i className="ui-youtube" /></a>
                    <a href={item.instagram} className="social social-instagram" aria-label="instagram" title="instagram" target="_blank" tabIndex="0"><i className="ui-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}
