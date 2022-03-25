import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import '../css/AircraftData.css';

const dummyData = [
    { id: '1',
    model: 'Cougar',
    manufacturer: 'Acro Sport',
    engineClass: 'Piston',
    numberOfPassengers: 20,
    numberOfEngines: 1, 
    weightClass: 'Small Eqpt' },
    { id: '2',
    model: 'Cougar',
    manufacturer: 'Acro Sport',
    engineClass: 'Piston',
    numberOfPassengers: 20,
    numberOfEngines: 1, 
    weightClass: 'Small Eqpt' },
    { id: '3',
    model: 'Cougar',
    manufacturer: 'Acro Sport',
    engineClass: 'Piston',
    numberOfPassengers: 20,
    numberOfEngines: 1, 
    weightClass: 'Small Eqpt' },
    { id: '4',
    model: 'Cougar',
    manufacturer: 'Acro Sport',
    engineClass: 'Piston',
    numberOfPassengers: 20,
    numberOfEngines: 1, 
    weightClass: 'Small Eqpt' },
    { id: '5',
    model: 'Cougar',
    manufacturer: 'Acro Sport',
    engineClass: 'Piston',
    numberOfPassengers: 20,
    numberOfEngines: 1, 
    weightClass: 'Small Eqpt' },
]


export default function AirplaneInfo(props) {
    const headers = Object.keys(dummyData[0]);
    const getHeaders = () => {
        return headers.map((column, index) => {
            return (
                <TableCell key={index}>{column}</TableCell>
            )
        })
    }
    const getRows = () => {
        return dummyData.map((row) => {
            return (
                <TableRow key={row.id}>
                    { Object.keys(row).map((rowAttribute) => <TableCell>{row[rowAttribute]}</TableCell>)}
                </TableRow>
            )
        })
    }
    return (
        <Paper elevation={10}>
        <h5 className="airplaneTabeHeader">Airplaine Information</h5>
        <Table>
            <TableHead>
                { getHeaders() }
            </TableHead>
            <TableBody>
                { getRows() }
            </TableBody>
        </Table>
        </Paper>
    )
}