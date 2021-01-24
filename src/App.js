import React from "react";
import "./App.css";
import { BounceLoader } from "react-spinners";
import Header from "./components/header/header.js";
import SearchBar from "./components/searchbar/searchBar.js";
import Card from "./element/card/card.js";
import Preview from "./components/preview/preview.js";
import WeatherDetails from "./components/weather/weather.js";
import Footer from "./components/footer/footer.js";
import Error from "./components/errormessage/error";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarInput: "",
      weatherDetails: {
        temperature: "",
        description: "",
      },
      loading: false,
      error: false,
    };
    this.tryNewCity = this.tryNewCity.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  tryNewCity() {
    this.setState({
      searchBarInput: "",
      weatherDetails: {},
      error: false,
    });
  }
  changeHandler(e) {
    this.setState({
      searchBarInput: e.target.value,
    });
  }
  setWeather = () => {
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    this.setState(
      {
        weatherDetails: {},
        loading: true,
        error: false,
      },
      () => {
        fetch(API_URL)
          .then((res) => res.json())
          .then((result) => {
            if (result.cod === 200) {
              this.setState({
                weatherDetails: {
                  temperature: result.main.temp,
                  description: result.weather[0].main,
                },
                loading: false,
              });
            } else {
              // If city doesn't exist, throw error
              throw result.cod;
            }
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
              error: true,
            });
          });
      }
    );
  };

  render() {
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <BounceLoader />;
    } else if (this.state.error) {
      cardContent = <Error newCityHandler={this.tryNewCity} />;
    } else if (
      this.state.weatherDetails.temperature &&
      this.state.weatherDetails.description !== ""
    ) {
      cardContent = <WeatherDetails data={this.state.weatherDetails} />;
    }
    return (
      <div>
        <Header newCityHandler={this.tryNewCity} error={this.state.error} />
        <main className="AppMain">
          <SearchBar
            value={this.state.searchBarInput}
            aschangeHandler={this.changeHandler}
            btnclickhandle={this.setWeather}
            error={this.state.error}
          />
          <Card>{cardContent}</Card>
        </main>
        <Footer newCityHandler={this.tryNewCity} error={this.state.error} />
      </div>
    );
  }
}

export default App;
