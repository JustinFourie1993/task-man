import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Task from './Task';
import { axiosReq } from '../api/axiosDefaults';
import styles from "../styles/TasksPage.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const currentUser = useCurrentUser();

    const fetchTasks = useCallback(async () => {
        if (page === 1) setIsLoading(true);
        try {
            let query = `/tasks/?ordering=due_date&page=${page}`;
            if (searchTerm) {
                query += `&search=${searchTerm}`;
            }
            if (category) {
                query += `&category=${category}`;
            }

            const { data } = await axiosReq.get(query);
            setTasks(prev => page === 1 ? data.results : [...prev, ...data.results]);
            setHasMore(data.next !== null);
        } catch (err) {
            // console.log(err);
        } finally {
            if (page === 1) setIsLoading(false);
        }
    }, [searchTerm, category, page]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        setSearchTimeout(setTimeout(() => {
            setSearchTerm(value);
            setPage(1);
            setTasks([]);
        }, 1000));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setPage(1);
        setTasks([]);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchTasks();
    };

    const categories = ["All", "WORK", "PERSONAL", "HOME", "HEALTH", "FINANCE", "EDUCATION", "SHOPPING", "TRAVEL", "HOBBIES", "SOCIAL"];

    if (!currentUser) {
        return (
            <Container className={styles.TasksPage}>
                <Row className="mt-5">
                    <Col md={12} className="text-center">
                        <h2>Please Log In</h2>
                        <p>To view tasks, you need to log in.</p>
                        <Link to="/signin">
                            <Button variant="primary">Log In</Button>
                        </Link>
                        <p className="mt-3">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className={styles.TasksPage}>
            <Row className="my-4">
                <Col md={12}>
                    <Form onSubmit={handleSearchSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search for tasks"
                                onChange={handleSearchChange}
                            />
                        </InputGroup>
                        <Form.Group controlId="categorySelect">
                            <Form.Control as="select" value={category} onChange={handleCategoryChange}>
                                {categories.map(cat => (
                                    <option key={cat} value={cat === "All" ? "" : cat}>{cat}</option>
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
                        next={() => setPage(prevPage => prevPage + 1)}
                        hasMore={hasMore}
                        loader={<div className="text-center">Loading...</div>}
                    >
                        {tasks.map(task => <Task key={task.id} {...task} setTasks={setTasks} taskPage={false} />)}
                    </InfiniteScroll>
                    {!isLoading && tasks.length === 0 && <p>No tasks found.</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default TasksPage;