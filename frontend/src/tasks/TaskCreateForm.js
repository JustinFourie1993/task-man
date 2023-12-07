import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import styles from '../styles/TaskCreateEditForm.module.css'; 
import btnStyles from "../styles/Button.module.css";


const TaskCreateForm = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        category: '',
        content: '',
        task_file: null,
        priority: '',
        due_date: '',
    });
    
    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'task_file') {
            URL.revokeObjectURL(name)
            setTaskData({
                ...taskData,
                [name]: event.target.files[0],
            });
        } else {
            setTaskData({
                ...taskData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(taskData).forEach(key => formData.append(key, taskData[key]));

        try {
            await axios.post('/api/tasks/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Handle success, like redirecting or displaying a success message
        } catch (error) {
            // Handle error, like displaying error messages
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className="p-4">
                    <h1 className={styles.Header}>Create Task</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                name="title"
                                value={taskData.title}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                className={styles.Input}
                                name="category"
                                value={taskData.category}
                                onChange={handleChange}>
                                <option value="">Choose...</option>
                                <option value="WORK">Work</option>
                                <option value="PERSONAL">Personal</option>
                                {/* ... other category options ... */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className={styles.Input}
                                name="content"
                                value={taskData.content}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>File</Form.Label>
                            <Form.Control
                                type="file"
                                className={styles.Input}
                                name="task_file"
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                as="select"
                                className={styles.Input}
                                name="priority"
                                value={taskData.priority}
                                onChange={handleChange}>
                                <option value="">Select Priority</option>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                {/* ... other priority options ... */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                className={styles.Input}
                                name="due_date"
                                value={taskData.due_date}
                                onChange={handleChange} />
                        </Form.Group>

                        <div className={btnStyles.centerButton}>
                            <Button className={`${btnStyles.Button} ${btnStyles.wide}`} type="submit">
                                Create Task
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default TaskCreateForm;