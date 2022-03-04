import React from 'react';
import Signup from './Signup';
import AirplaneInfo from './AirplaneInfo';
import {Container} from 'react-bootstrap';
// import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
		<Container 
			className="d-flex align-items-center justify-content-center"
			style={{minHeight: "100vh"}}
		>
			<div>
				<AirplaneInfo />
			</div>
		</Container>
  );
}

export default App;
