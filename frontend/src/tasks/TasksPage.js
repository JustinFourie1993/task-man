import appStyles from "../App.module.css";
import styles from "../styles/TasksPage.module.css";

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Task from './Task'; 
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { axiosReq } from '../api/axiosDefaults'; 

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const currentUser = useCurrentUser();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await axiosReq.get('/tasks/');
                setTasks(data.results || []);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTasks();
    }, []);

  
    const userTasks = tasks.filter(task =>
        task.owner === currentUser.username || task.owners.includes(currentUser.username));

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Your Tasks</h2>
                    {userTasks.length > 0 ? (
                        userTasks.map(task => (
                            <Task key={task.id} {...task} taskPage={false} />
                        ))
                    ) : (
                        <p>No tasks found.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TasksPage;