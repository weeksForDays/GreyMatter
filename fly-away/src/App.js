import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NewAccount from './components/NewAccount';
import ProtectedRoute from './components/ProtectedRoute';
import {Container, Row, Col} from "react-bootstrap";
import { Routes, Route} from 'react-router-dom';
import {UserAuthContextProvider} from './contexts/UserAuthContext';

function App() {
  return (
    <Container>
        <Row>
            <Col>
                <UserAuthContextProvider>
                    <Routes>
                        <Route path='/' element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/NewAccount' element={<NewAccount />} />
                    </Routes>
                </UserAuthContextProvider>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
