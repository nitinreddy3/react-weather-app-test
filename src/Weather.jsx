import React from 'react';
import $ from 'jquery';
import { currentWeatherUrl, APIKEY } from './apiRoutes';
//import { WeatherIcon } from './WeatherIcon';
import { kelvinToCelsius, kelvinToFahrenheit } from './helpers';
import { LocationInput } from './LocationInput';

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: [],
        };
        this.fetchWeatherForLocation = this.fetchWeatherForLocation.bind(this);
    }

    componentDidMount() {
        this.fetchWeatherForLocation(this.props.city);
    }

    fetchWeatherForLocation(location) {
        $.ajax({
            url: `${currentWeatherUrl + location}&APPID=${APIKEY}`,
            dataType: 'json',
            cache: false,
            success: (response) => {
                console.log(response);
                this.setState({
                    weatherData: response,
                    weatherId: response.weather[0].id,
                    weatherDescription: response.weather[0].description,
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,
                });
            },
            error: (xhr, status, err) => {
                console.warn(xhr.responseText);
                console.error(this.props.url, status, err.toString());
            },
        });
    }

    render() {
        let temperatureInfo = <Temperature kelvin={this.state.temperature} />;

        if (navigator.language === 'en-US') {
            temperatureInfo = <TemperatureUS kelvin={this.state.temperature} />;
        }

        console.log(navigator.language);

        return (
          <div className="weather-container" >
            <WeatherIcon weatherId= {this.state.weatherId} />
            <WeatherDescription weatherDescription={this.state.weatherDescription} />
            {temperatureInfo}
            <Location 
              city={this.state.city}
              country={this.state.country}
            />

            <LocationInput 
                updateLocation={this.fetchWeatherForLocation}
                city={this.props.city}
            />
          </div>
        );
    }
}

const WeatherIcon = ({ weatherId }) => <i className={`wi wi-owm-${weatherId}`}></i>;

const WeatherDescription = ({ weatherDescription }) => <p>{weatherDescription}</p>;

const Temperature = ({ kelvin }) => (
  <div className="temperature-container">
    <span className="temperature">{kelvinToCelsius(kelvin)}</span>
    <span className="temp-symbol">°C</span>
  </div>
);

const TemperatureUS = ({ kelvin }) => (
  <div className="temperature-container">
    <span className="temperature">{kelvinToFahrenheit(kelvin)}</span>
    <span className="temp-symbol">°F</span>
  </div>
);

const Location = ({ city, country }) => <p className="location-name" >{city}, {country}</p>;


Weather.propTypes = {
    url: React.PropTypes.string,
    city: React.PropTypes.string,
    country: React.PropTypes.string,
};

Weather.defaultProps = {
    url: `${currentWeatherUrl}berlin,de&APPID=${APIKEY}`,
    city: 'Berlin',
    country: 'DE',
};

WeatherIcon.propTypes = {
    weatherId: React.PropTypes.number,
}

WeatherDescription.propTypes = {
    weatherDescription: React.PropTypes.string,   
}

Temperature.propTypes = {
    kelvin: React.PropTypes.number,
};

TemperatureUS.propTypes = {
    kelvin: React.PropTypes.number,
};

Location.propTypes = {
    city: React.PropTypes.string,
    country: React.PropTypes.string,
};

