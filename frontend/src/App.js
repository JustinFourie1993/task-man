import styles from "./App.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import TaskCreateForm from './tasks/TaskCreateForm';
import TaskPage from './tasks/TaskPage';
import TasksPage from './tasks/TasksPage';
import TaskEditForm from './tasks/TaskEditForm';
import NotFound from './components/NotFound';





function App() {
    return (
                
                <div className={styles.App}>
                
                    <NavBar />
                    <Container className={styles.Main}>
                        <Switch>
                            <Route exact path="/" render={() => <TasksPage /> } />
                            <Route exact path="/signin" render={() => <SignInForm />} />
                            <Route exact path="/signup" render={() => <SignUpForm />} />
                            <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
                            <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
                            <Route exact path="/tasks/:id" render={() => <TaskPage />} />
                            <Route render={() => <NotFound />} />
                        </Switch>
                    </Container>
                    
                  
                </div> 
                
    );
}

export default App;