import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);

        return (
            <tr key={name}>
                <td>{ name }</td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    {/* {this.props.weather.map(item => this.renderWeather(item))} same thing as line above */} 
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) { // this is saying pull the weather property off of state
    return { weather } // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);