import React, {useState} from 'react';
import '../styles/profile.css';
import Navigation from './Navigation';

function Profile () {

    return (
        <div className='App'>
            <div className='Main'>
                <Navigation/>
                <div className='content-container'>
                    <div className='sidebar-container'>
                        {/* PROGRAM */}
                        <div className='sidebar-title'>Program</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="bba">Business</option>
                                <option value="cs">Computer Science</option>
                                <option value="ma">Math</option>
                            </select>
                        </div>

                        {/* YEAR */}
                        <div className='sidebar-title'>Year</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="one">1st Year</option>
                                <option value="two">2nd Year</option>
                                <option value="three">3rd Year</option>
                                <option value="four">4th Year</option>
                                <option value="five">5th Year</option>
                            </select>
                        </div>

                        {/* COURSE */}
                        <div className='sidebar-title'>Course</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="103">CP103</option>
                                <option value="104">CP104</option>
                                <option value="212">CP212</option>
                                <option value="317">CP317</option>
                            </select>
                        </div>

                        {/* BUTTON */}
                        <div className='btn-container'>
                            <button className='save-btn'>Save Profile</button>
                        </div>

                    </div>

                    {/* MAP */}
                    <div className='map-container'>
                        <div>test</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile; 