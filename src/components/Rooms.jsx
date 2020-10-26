import React, { Component } from 'react';
import './rooms.scss'
import Selectbox from './Selectbox';
import { Link } from 'react-router-dom'

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: [],
            fileredHeroes: [],
            speed: {},
            power: {},
            strength: {},
            speedArr: [],
            powerArr: [],
            strengthArr: []
        }
    }

    handleSpeed = (event) => {
        if (event.target.value != null) {
            const selected = event.target.value.split(' ');  // metoda split e ndan stringun, varesisht ti qysh i thu. Metoda split kthen array
            const number = selected[1].split('-');

            const min = parseInt(number[0]);
            const max = parseInt(number[1]);
            
            
            this.setState({ speed: { "min": min, "max": max } })

            let filteredHerosSpeed = this.filterAllHeroes('speed', min, max, ['power', 'strength']);
            this.setState({ fileredHeroes: filteredHerosSpeed })

        }
    }

    isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0;
    }

    filterAllHeroes = (type, min, max, arr) => {
        const { speed, power, strength } = this.state;
        let herosCopyState = [...this.state.heros];
        let filteredHeros = [];
        
        herosCopyState.forEach((hero, index) => {
            if (hero.powerstats[type] <= max && hero.powerstats[type] >= min) {
                
            }
        })


        return filteredHeros;
    }

    handlePower = (event) => {
        if (event.target.value != null) {
            const selected = event.target.value.split(' ');
            const number = selected[1].split('-');

            const min = parseInt(number[0]);
            const max = parseInt(number[1]);

            this.setState({ power: { "min": min, "max": max } })
            // console.log('')

            let filteredHerosPower = this.filterAllHeroes('power', min, max, ['strength', 'speed']);
            this.setState({ fileredHeroes: filteredHerosPower })
        }

    }
    handleStrength = (event) => {
        console.log(event.target.value)
        if (event.target.value != null) {
            const selected = event.target.value.split(' ');
            const number = selected[1].split('-');

            const min = parseInt(number[0]);
            const max = parseInt(number[1]);

            this.setState({ strength: { "min": min, "max": max } })

            let filteredHerosStrength = this.filterAllHeroes('strength', min, max, ['power', 'speed']);
            this.setState({ fileredHeroes: filteredHerosStrength })

        }

    }

    // }


    //// ktu marim json krejt te dhanat
    async componentDidMount() {
        try {
            const url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json?fbclid=IwAR2wTVJSTnkK9Hv8XMKRRM7cEeavO-oEe41MjgtACQUp_33nzQrjGxR_1bk";
            const response = await fetch(url, { method: 'GET' })
            const result = await response.json();
            this.setState({ heros: result, fileredHeroes: result })

        } catch (error) {
            console.log('error:', error);
        }
    }

    single(hero) {
        this.props.history.push({
            pathname: '/heros',
            data: hero
        })
    }

    render() {
        return (
            <div>
                <Selectbox handleSpeed={this.handleSpeed} handlePower={this.handlePower} handleStrength={this.handleStrength} />
                <div className="section-4">

                    <div className="container">
                        <div className='some-page-wrapper'>
                            <div className='row'>
                                {
                                    this.state.fileredHeroes.length === 0
                                        ? <p>Loading..</p>
                                        : this.state.fileredHeroes.map((hero, index) => {
                                            return <div className="column" key={index}>
                                                <Link to={{
                                                    pathname: `heros/${hero.slug}`,
                                                    state: { hero }

                                                }}>
                                                    <div className='img-column overlay'>
                                                        <img alt={hero.name} className="img-rooms" src={(hero.images.lg)} />
                                                    </div>
                                                    <div className='column-text'>
                                                        <h4 className="text-rooms" >{hero.powerstats.speed} Speed</h4>
                                                        <h4 className="text-rooms">{hero.powerstats.power} Power</h4>
                                                        <h4 className="text-rooms">{hero.powerstats.strength} Strength</h4>
                                                        <h4 className="text-rooms">{hero.appearance.gender}</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                        })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button className="buttonmore">LOAD MORE </button>
                    </div>
                </div>
            </div>

        );
    }

}
export default Rooms;







    // var htmlCollection = [...event.target]; 
    // htmlCollection.forEach(html => {
    //     const min = html.getAttribute('data-min')
    //     console.log('html:', html)
    // })
    // const min = event.target.getAttribute('data-min')
    // const max = event.target.getAttribute('data-max')

    // if (type == "Speed") {
    // let filteredHeroSpeed = this.state.heros.filter(hero => {
    //     return hero.powerstats.speed <= min && hero.powerstats.speed >= max;
    // });
    // this.setState({fileredHeroes: filteredHeroSpeed})
    // } else if (type == "Power") {
    //     let filteredHeroPower = this.state.heros.filter(hero => {
    //         return hero.powerstats.power <= min && hero.powerstats.power >= max;
    //     });
    // } else {
    //     let filteredHeroStrength = this.state.heros.filter(hero => {
    //         return hero.powerstats.strength <= min && hero.powerstats.strength >= max;
    //     });
    // }




    //      if (event.target.value == "Speed 1-20") {
    //        let filteredHeroSpeed = this.state.heros.filter(hero => {
    //            return hero.powerstats.speed <= 20 && hero.powerstats.speed >= 1;
    //        });

    //       this.setState({ fileredHeroes: filteredHeroSpeed })
    //      }
    //         else if (event.target.value == "Speed 20-40") {
    //         let filteredHeroSpeed = this.state.heros.filter(hero => {
    //             return hero.powerstats.speed <= 40 && hero.powerstats.speed >= 20;
    //         });

    //        this.setState({ fileredHeroes: filteredHeroSpeed })
    //     }
    //     else if (event.target.value == "Speed 40-60") {
    //         let filteredHeroSpeed = this.state.heros.filter(hero => {
    //             return hero.powerstats.speed <= 60 && hero.powerstats.speed >= 40;
    //         });

    //        this.setState({ fileredHeroes: filteredHeroSpeed })
    //     }
    //     else if (event.target.value == "Speed 60-80") {
    //         let filteredHeroSpeed = this.state.heros.filter(hero => {
    //             return hero.powerstats.speed <= 80 && hero.powerstats.speed >= 60;
    //         });

    //        this.setState({ fileredHeroes: filteredHeroSpeed })
    //     }
    //     else if (event.target.value == "Speed 80-100") {
    //         let filteredHeroSpeed = this.state.heros.filter(hero => {
    //             return hero.powerstats.speed <= 100 && hero.powerstats.speed >= 80;
    //         });

    //        this.setState({ fileredHeroes: filteredHeroSpeed })
    //     }