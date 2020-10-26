import React, { Component } from 'react';
import './language.scss'

class Language extends Component {
    state = {  }
    render() { 
        return ( 
         
            <div className="section-1">
                <div className="container">
                    <div className="item">English</div>
                    <div className="item">French </div>
                    <div className="item push">
                        <ul className="language">
                            <li className="language-li">View Cart:</li>
                            <li className="language-li">3 Items</li>
                            <li className="language-li">$412</li>
                        </ul>
                    </div>
                </div>
            </div> 
           
            );
    }
}
 
export default Language;