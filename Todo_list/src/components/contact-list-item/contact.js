import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  showContactHandler = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { contact, onDelete } = this.props;
    const { name, picture, email, cell, location } = contact;
    const c = this.state.showContactInfo ? "arrow rotate" : "arrow";
    return (
      <div className="card" style={{ marginBottom: "10px" }} key={name.first}>
        <div className="card-content">
          <div className="media" style={{ alignItems: "center" }}>
            <div
              className="media-left"
              style={{
                paddingRight: "20px",
                marginRight: "20px",
                borderRight: "2px solid rgba(10, 10, 10, 0.2)"
              }}
            >
              <figure className="image is-48x48">
                <img
                  src={picture.thumbnail}
                  alt={name.first}
                  className="is-rounded"
                />
              </figure>
            </div>
            <div className="media-content" style={{ overflow: "hidden" }}>
              <p className="title is-4 is-capitalized">
                {name.first /*.charAt(0).toUpperCase() + name.slice(1)*/}{" "}
                {name.last /*.charAt(0).toUpperCase() + lastName.slice(1)*/}
                <span className={c} onClick={this.showContactHandler} />
              </p>

              <p className="subtitle is-6 is-capitalized">
                {location.city}, {location.state}
              </p>
            </div>
            <button
              className="delete is-medium"
              style={{
                float: "right"
              }}
              onClick={() => onDelete(name.first)}
            />
          </div>
        </div>
        <div className="card">
          {this.state.showContactInfo && (
            <div className="card-content">
              <div className="panel-block">
                <div className="content">
                  <label
                    className="label"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      paddingRight: "20px",
                      marginRight: "20px",
                      marginBottom: "0",
                      textAlign: "right"
                    }}
                  >
                    Mobile:
                  </label>{" "}
                  <p>{cell}</p>
                </div>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ float: "right", color: "hsl(171, 100%, 41%)" }}
                />
              </div>

              <div className="panel-block">
                <div className="content">
                  <label
                    className="label has-text-right"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      paddingRight: "20px",
                      marginRight: "20px",
                      marginBottom: "0"
                    }}
                  >
                    State:
                  </label>{" "}
                  <p>{location.state}</p>
                </div>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{
                    float: "right",
                    color: "hsl(171, 100%, 41%)"
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
