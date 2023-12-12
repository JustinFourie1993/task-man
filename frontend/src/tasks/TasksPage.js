import appStyles from "../App.module.css";
import styles from "../styles/TasksPage.module.css";

import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Task from './Task';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { axiosReq } from '../api/axiosDefaults';

const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ category: '', priority: '', state: '', overdue: '' });
    const currentUser = useCurrentUser();

    const fetchTasks = useCallback(debounce(async () => {
        try {
            let query = '/tasks/?ordering=due_date';
            if (searchTerm) {
                query += `&search=${searchTerm}`;
            }
            if (filter.category) {
                query += `&category=${filter.category}`;
            }


            const { data } = await axiosReq.get(query);
            setTasks(data.results || []);
        } catch (err) {
            console.log(err);
        }
    }, 500), [searchTerm, filter]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
    };

    
    const categories = ["All", "WORK", "PERSONAL", "HOME", "HEALTH", "FINANCE", "EDUCATION", "SHOPPING", "TRAVEL", "HOBBIES", "SOCIAL"];

    return (
        <Container>
            <Row className="my-4">
                <Col md={12}>
                    <Form onSubmit={handleSearchSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search for tasks"
                                onChange={handleSearchChange}
                            />
                            <Button type="submit" variant="outline-secondary">Search</Button>
                        </InputGroup>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" name="category" onChange={handleFilterChange}>
                                {categories.map(category => (
                                    <option key={category} value={category === "All" ? "" : category}>{category}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                     
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {tasks.length > 0 ? (
                        tasks.map(task => (
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