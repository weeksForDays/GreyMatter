import React, { Component } from 'react';

export default class NewAccount extends Component {
    state = {  } 

    render() { 
        return (
            <div>
                <h2>Create a New Account</h2>

                <label for="fname">First name:</label>
                <input type="text" id="fname" name='fname'></input><br></br>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name='lname'></input><br></br><h2></h2>

                <label for="lname">Address:</label>
                <input type="text" id="address1" name='address1'></input>
                <label for="lname">City:</label>
                <input type="text" id="addressCity" name='addressCity'></input><br></br>
                <label for="lname">State:</label>
                <input type="text" id="addressState" name='addressState'></input>
                <label for="lname">Zip Code:</label>
                <input type="text" id="addressZip" name='addressZip'></input><br></br><h2></h2>
                
                <h3>Are you a Pilot or a Passenger?</h3>
                <button>I am a Pilot</button><br></br>
                <button>I am a Passenger</button><br></br><h2></h2>
                <button>Submit</button>
            </div>
        );
    }
}