import React, { Component } from 'react';
import {Card, Button, Form, Alert, Dropdown, DropdownButton, DropdownItem} from 'react-bootstrap';
import '../css/login.css';
import '../css/NewAccount.css';

export default class NewAccount extends Component {

    state = {
        userType: "Unknown",
        pilotQual: "Certification:"
    } 

<<<<<<< Updated upstream
    // const [FirstName, setFirstName] = useState("");
	// const [LastName, setLastName] = useState("");
	// const [Address, setAddress] = useState("");
	// const [City, setCity] = useState("");
	// const [USState, setUSState] = useState("");
	// const [ZipCode, setZipCode] = useState("");
	// const [PhoneNumber, setPhoneNumber] = useState("");

=======
>>>>>>> Stashed changes
    //Event Handlers Go Here
    handlePilot = () =>{
        const userType = "Pilot";
        this.setState({userType});
    }

    handlePassenger = () =>{
        const userType = "Passenger";
        this.setState({userType});
    }

    handlePrivatePilot = () =>{
        const pilotQual = "Private Pilot";
        this.setState({pilotQual});
    }

    handlePrivatePilotInst = () =>{
        const pilotQual = "Private Pilot with Insturment Rating";
        this.setState({pilotQual});
    }

    handleCommercialPilot = () =>{
        const pilotQual = "Commercial Pilot";
        this.setState({pilotQual});
    }

    handleCommercialPilotInst = () =>{
        const pilotQual = "Commercial Pilot with Insturment Rating";
        this.setState({pilotQual});
    }

    handleATP = () =>{
        const pilotQual = "Airline Transport Pilot";
        this.setState({pilotQual});
    }

    //Other Functions Go Here
    updateUserType(){
        if(this.state.userType == "Pilot"){
            return "I am a Pilot";
        }else if(this.state.userType == "Passenger"){
            return "I am a Passenger";
        }else{
            return "Are you registering as a Passenger or as a Pilot?"
        }
    } 

    ifIsPilot(){
        if(this.state.userType == "Pilot"){
            return(
                <div>
                    <DropdownButton 
                        className="mb-3 formMedium"
                        variant="secondary"
                        id="dropdown-basic-button" 
                        title={this.state.pilotQual}>
                        <Dropdown.Item
                            onClick={this.handlePrivatePilot}
                            >Private Pilot
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={this.handlePrivatePilotInst}
                            >Private Pilot with Insturment Rating
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={this.handleCommercialPilot}
                            >Commercial Pilot
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={this.handleCommercialPilotInst}
                            >Commercial Pilot with Insturment Rating
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={this.handleATP}
                            >Airline Transport Pilot
                        </Dropdown.Item>
                    </DropdownButton>
                    <Form.Group className="mb-3 flex" controlId="airport">
                        <Form.Control
                            className="formMedium"
                            type='AirportName' 
                            placeholder='Home Airport (Name)'
                        />
                        <Form.Control
                            className="formSmall"
                            type='AirportICAO' 
                            placeholder='ICAO'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="aircraft">
                        <Form.Control
                            className="formMedium"
                            type='AircraftType' 
                            placeholder='Primary Aircraft Type'
                        />
                        <Form.Control
                            className="formSmall"
                            type='AircraftID' 
                            placeholder='Aircraft ID'
                        />
                    </Form.Group>
                </div>
            )
        }
    }

    render() { 
        return (
            <div className="p-4 centeronscreen centertext loginwidth">
                <h2 className="mb-3">Create a New Account</h2>
                <Form>
                    <Form.Group className="mb-3 flex" controlId="name">
                        <Form.Control
                            className="formMedium"
                            type='FirstName' 
                            placeholder='First Name'
                            //onChange={ (e) => setFirstName(e.target.value)}
                        />
                        <Form.Control
                            className="formMedium"
                            type='LastName' 
                            placeholder='Last Name'
                            //onChange={ (e) => setLastName(e.target.value)}					
                        />
                     </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="address1">
                        <Form.Control
                            className="formMedium"
                            type='Address' 
                            placeholder='Address'
                              //onChange={ (e) => setAddress(e.target.value)}					
                        />
                        <Form.Control
                            className="formMedium"
                            type='City' 
                            placeholder='City'
                            //onChange={ (e) => setCity(e.target.value)}						
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="USState">
                        <Form.Control
                            className="formSmall"
                            type='USState' 
                            placeholder='State'
                            //onChange={ (e) => setUSState(e.target.value)}					
                        />
                        <Form.Control
                            className="formSmall"
                            type='ZipCode' 
                            placeholder='Zip'
                            //onChange={ (e) => setZipCode(e.target.value)}					
                        />
                        <Form.Control
                            className="formMedium"
                            type='PhoneNumber' 
                            placeholder='Phone #'
                            //onChange={ (e) => setPhoneNumber(e.target.value)}					
                        />
                    </Form.Group>
                    <DropdownButton 
                        className="mb-3 formMedium"
                        id="dropdown-basic-button" 
                        title={this.updateUserType()}>
                        <Dropdown.Item
                            onClick={this.handlePilot}
                            >I am a Pilot
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={this.handlePassenger}
                            >I am a Passenger
                        </Dropdown.Item>
                    </DropdownButton>
                    <div>{this.ifIsPilot()}</div>
                </Form>
            </div>
        );
    }
}