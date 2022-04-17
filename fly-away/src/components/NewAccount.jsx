import React, { Component } from 'react';
import {Card, Button, Form, Alert, Dropdown, DropdownButton, DropdownItem} from 'react-bootstrap';
import '../css/login.css';
import '../css/NewAccount.css';
import {useFirestore} from '../contexts/FirestoreContext.js';

export default class NewAccount extends Component {

    state = {
        userType: "Unknown",
        pilotQual: "Certification:",
        FirstName: "",
        LastName: "",
        Address: "",
        City: "",
        USState: "",
        ZipCode: "",
        Airport: "",
        ICAO: "",
        AircraftType: "",
        AircraftID: ""
    } 

	// const [Address, setAddress] = useState("");
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

    handleSubmit = (e) =>{
        e.preventDefault();

        const {createUser} = useFirestore();
        createUser(
            this.state.userType,
            "test@test.com",
            19037908,
            this.state.FirstName,
            this.state.LastName,
            this.state.Address,
            this.state.City,
            this.state.USState,
            this.state.ZipCode,
            this.state.Airport,
            this.state.ICAO,
            this.state.AircraftType,
            this.state.AircraftID
        );
    }

    //Setter Methods for form completion

    setFirstName = (e) =>{
        const FirstName = e.target.value;
        this.setState(FirstName);
    }

    setLastName = (e) =>{
        const LastName = e.target.value;
        this.setState(LastName);
    }

    setAddress = (e) =>{
        const Address = e.target.value;
        this.setState(Address);
    }

    setCity = (e) =>{
        const City = e.target.value;
        this.setState(City);
    }

    setUSState = (e) =>{
        const USState = e.target.value;
        this.setState(USState);
    }

    setZipCode = (e) =>{
        const ZipCode = e.target.value;
        this.setState(ZipCode);
    }

    setAirport = (e) =>{
        const Airport = e.target.value;
        this.setState(Airport);
    }

    setICAO = (e) =>{
        const ICAO = e.target.value;
        this.setState(ICAO);
    }

    setAircraftType = (e) =>{
        const AircraftType = e.target.value;
        this.setState(AircraftType);
    }

    setAircraftID = (e) =>{
        const AircraftID = e.target.value;
        this.setState(AircraftID);
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
                            onClick={this.handleCommercialPilotInst}
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
                            onChange={ (e) => this.setAirport(e.target.value)}		
                        />
                        <Form.Control
                            className="formSmall"
                            type='AirportICAO' 
                            placeholder='ICAO'
                            onChange={ (e) => this.setICAO(e.target.value)}		
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="aircraft">
                        <Form.Control
                            className="formMedium"
                            type='AircraftType' 
                            placeholder='Primary Aircraft Type'
                            onChange={ (e) => this.setAircraftType(e.target.value)}		
                        />
                        <Form.Control
                            className="formSmall"
                            type='AircraftID' 
                            placeholder='Aircraft ID'
                            onChange={ (e) => this.setAircraftID(e.target.value)}		
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3 flex" controlId="name">
                        <Form.Control
                            className="formMedium"
                            type='FirstName' 
                            placeholder='First Name'
                            onChange={(e) => this.setFirstName(e.target.value)}
                        />
                        <Form.Control
                            className="formMedium"
                            type='LastName' 
                            placeholder='Last Name'
                            onChange={ (e) => this.setLastName(e.target.value)}					
                        />
                     </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="address1">
                        <Form.Control
                            className="formMedium"
                            type='Address' 
                            placeholder='Address'
                            onChange={ (e) => this.setAddress(e.target.value)}					
                        />
                        <Form.Control
                            className="formMedium"
                            type='City' 
                            placeholder='City'
                            onChange={ (e) => this.setCity(e.target.value)}						
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 flex" controlId="USState">
                        <Form.Control
                            className="formSmall"
                            type='USState' 
                            placeholder='State'
                            onChange={ (e) => this.setUSState(e.target.value)}					
                        />
                        <Form.Control
                            className="formSmall"
                            type='ZipCode' 
                            placeholder='Zip'
                            onChange={ (e) => this.setZipCode(e.target.value)}					
                        />
                        <Form.Control
                            className="formMedium"
                            type='PhoneNumber' 
                            placeholder='Phone #'
                            onChange={ (e) => this.setPhoneNumber(e.target.value)}					
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
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </Form>
            </div>
        );
    }
}