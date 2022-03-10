import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import FirestorePage from './components/FirestorePage';
import ProtectedRoute from './components/ProtectedRoute';
import {Container, Row, Col} from "react-bootstrap";
import { Routes, Route} from 'react-router-dom';
import {UserAuthContextProvider} from './contexts/UserAuthContext';
import {ObfuscationContextProvider} from './contexts/ObfuscationContext';

function App() {
  return (
    <Container>
        <Row>
            <Col>
                <ObfuscationContextProvider>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route path='/' element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            } />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<Signup />} />
                            <Route path='/firestoretest' element={
                                <ProtectedRoute>
                                    <FirestorePage />
                                </ProtectedRoute>
                            } />
                        </Routes>
                    </UserAuthContextProvider>
                </ObfuscationContextProvider>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
