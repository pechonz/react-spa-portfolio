
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav class="sticky">
                <ul class="menu">
                    <li><a href="#home"><i class="fa fa-home"></i></a></li>
                    <li><a href="#about"><i class="fa fa-address-card"></i></a></li>
                    <li><a href="#experience"><i class="fa fa-briefcase"></i></a></li>
                    <li><a href="#education"><i class="fa fa-graduation-cap"></i></a></li>
                    <li><a href="#skill"><i class="fa fa-code"></i></a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;