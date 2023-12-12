import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Task from './Task';
import { axiosReq } from '../api/axiosDefaults';
import appStyles from "../App.module.css";
import styles from "../styles/TasksPage.module.css";

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
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const fetchTasks = useCallback(debounce(async () => {
        try {
            let query = `/tasks/?ordering=due_date&page=${page}`;
            if (searchTerm) {
                query += `&search=${searchTerm}`;
            }

            const { data } = await axiosReq.get(query);
            if (data.results.length === 0) {
                setHasMore(false);
            } else {
                setTasks(prevTasks => [...prevTasks, ...data.results]);
                setPage(prevPage => prevPage + 1);
            }
        } catch (err) {
            console.log(err);
        }
    }, 500), [searchTerm, page]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setTasks([]);
        setPage(1);
        setHasMore(true);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchTasks();
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
                            <Form.Control as="select" name="category" onChange={handleSearchChange}>
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
                    <InfiniteScroll
                        dataLength={tasks.length}
                        next={fetchTasks}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p>You have seen all tasks.</p>}
                    >
                        {tasks.map(task => (
                            <Task key={task.id} {...task} taskPage={false} />
                        ))}
                    </InfiniteScroll>
                </Col>
            </Row>
        </Container>
    );
};

export default TasksPage;