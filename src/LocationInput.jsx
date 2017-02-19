import React from 'react';

export class LocationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.city,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.substr(0, 30),
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateLocation(this.state.value);
    }

    render() {
        return (
          <form 
            className="location-input-container"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        );
    }
}

LocationInput.propTypes = {
    updateLocation: React.PropTypes.func,
};
