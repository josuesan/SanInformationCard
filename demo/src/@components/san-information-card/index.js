//Dependencies
import React, { Component } from "react";
import "./san-information-card.css";

class SanInformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: undefined,
        subtitle: undefined,
        description:undefined,
        date:undefined,
        profileImg: undefined,
        bgImg:undefined

    };
  }

  componentDidMount() {
      this.setState({
        title: this.props.title,
        subtitle: this.props.subtitle,
        description:this.props.description,
        date:this.props.date,
        profileImg: this.props.profileImg,
        bgImg:this.props.bgImg
      });
  }

  render(){
      return(
      <div className="san-card">
        <div className="san-card-image-bg">
            <img src={this.state.bgImg} alt="image"/>
        </div>
        <div className="san-card-header">
            <img className="san-card-photo" src={this.state.profileImg} alt="image"/>
        </div>
        <div className="san-card-body">
            <div className="san-card-title">
                <p>{this.state.title}</p>
            </div>
            {this.state.subtitle !== undefined && (
                <div className="san-card-subtitle">
                    <p>{this.state.subtitle}</p>
                </div>
            )}
            <div className="san-card-description">
                <p>{this.state.description}</p>
            </div>
        </div>

        {this.state.subtitle !== undefined && (
            <div className="san-card-footer">
                <p class="san-card-date">{this.state.date}</p>
            </div>
        )}
      </div>
      
      );
  }
}
export default SanInformationCard;