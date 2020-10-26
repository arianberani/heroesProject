import React, { Component } from 'react';
import './moreinfo.scss'
class Moreinfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.location.state.hero)
        return (
            <div className="container back-color">
                <div className="row">
                    <div className="col-8 img-back-hero"><img alt="" src={this.props.location.state.hero.images.lg} />
                        <h4 className="h4-desc">Description</h4>
                        <p className="p-more">Crafted with great attention to detail, today’s icon set is extremely easy to use and will most probably be the next ultimate resource for any of your design projects. This set of round icons was thoroughly designed by the creative team at Roundicons and has been released exclusively for Smashing Magazine and its readers.</p>
                    </div>
                    <div className="col-4">
                        <div className="tabel-heros">
                            <h4>Features</h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Intelligence</th>
                                        <td>{this.props.location.state.hero.powerstats.intelligence}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Strength</th>
                                        <td>{this.props.location.state.hero.powerstats.strength}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Speed</th>
                                        <td>{this.props.location.state.hero.powerstats.speed}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Durability</th>
                                        <td>{this.props.location.state.hero.powerstats.durability}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Power</th>
                                        <td>{this.props.location.state.hero.powerstats.power}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Combat</th>
                                        <td>{this.props.location.state.hero.powerstats.combat}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Moreinfo;