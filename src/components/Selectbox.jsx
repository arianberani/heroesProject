import React, { Component } from 'react';
import './selectbox.scss'

class Selectbox extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm">
                        <div className="select" >
                            <select onChange={this.props.handleSpeed} className="form-control form-control-lg">
                                <option>Speed</option>
                                <option >Speed 1-20</option>
                                <option  >Speed 20-40  </option>
                                <option >Speed 40-60</option>
                                <option >Speed 60-80</option>
                                <option >Speed 80-100</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="select">
                            <select onChange={this.props.handlePower} className="form-control form-control-lg">
                                <option>Power</option>
                                <option>Power 1-20</option>
                                <option >Power 20-40</option>
                                <option >Power 40-60</option>
                                <option >Power 60-80</option>
                                <option >Power 80-100</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="select">
                            <select onChange={this.props.handleStrength} className="form-control form-control-lg">
                                <option >Strength</option>
                                <option >Strength 1-20</option>
                                <option>Strength 20-40</option>
                                <option>Strength 40-60</option>
                                <option >Strength 60-80</option>
                                <option >Strength 80-100</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="checkgender">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Male</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Female</label>
                    </div> */}
                </div>
            </div>




        );
    }
}

export default Selectbox;