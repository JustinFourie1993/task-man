import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Alert } from 'react-bootstrap';
import appStyles from "../App.module.css";
import styles from '../styles/SignForms.module.css';
import btnStyles from "../styles/Button.module.css";
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../api/axiosDefaults';

const TaskCreateForm = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        category: '',
        content: '',
        priority: '',
        due_date: '',
    });

    const [errors, setErrors] = useState({});
    const [feedbackMessage, setFeedbackMessage] = useState({ type: "", message: "" });
    const { title, category, content, priority, due_date } = taskData;
    const history = useHistory();

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title.trim());
        formData.append('category', category);
        formData.append('content', content.trim());
        formData.append('priority', priority);

        // Format due_date in ISO 8601 format before appending
        if (due_date) {
            const isoFormattedDate = new Date(due_date).toISOString();
            formData.append('due_date', isoFormattedDate);
        }

        try {
            const { data } = await axiosReq.post("/tasks/", formData);
            setFeedbackMessage({ type: "success", message: "Task created successfully!" });
            setTimeout(() => {
                history.push(`/tasks/${data.id}`);
            }, 2000);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
                setFeedbackMessage({ type: "danger", message: "Failed to create task. Please try again." });
            }
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2">
                <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                    <h1 className={styles.Header}>Create Task</h1>
                    {feedbackMessage.message && <Alert variant={feedbackMessage.type}>{feedbackMessage.message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                            {errors?.title?.map((message, idx) => (
                                <Alert key={idx} variant="warning">{message}</Alert>
                            ))}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                className={styles.Input}
                                name="category"
                                value={category}
                                onChange={handleChange}>
                                <option value="">Choose...</option>
                                <option value="WORK">Work</option>
                                <option value="PERSONAL">Personal</option>
                                <option value="HOME">Home</option>
                                <option value="HEALTH">Health</option>
                                <option value="FINANCE">Finance</option>
                                <option value="EDUCATION">Education</option>
                                <option value="SHOPPING">Shopping</option>
                                <option value="TRAVEL">Travel</option>
                                <option value="HOBBIES">Hobbies</option>
                                <option value="SOCIAL">Social</option>
                            </Form.Control>
                            {errors?.category?.map((message, idx) => (
                                <Alert key={idx} variant="warning">{message}</Alert>
                            ))}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className={styles.Input}
                                name="content"
                                value={content}
                                onChange={handleChange}
                            />
                            {errors?.content?.map((message, idx) => (
                                <Alert key={idx} variant="warning">{message}</Alert>
                            ))}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                as="select"
                                className={styles.Input}
                                name="priority"
                                value={priority}
                                onChange={handleChange}>
                                <option value="">Select Priority</option>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </Form.Control>
                            {errors?.priority?.map((message, idx) => (
                                <Alert key={idx} variant="warning">{message}</Alert>
                            ))}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                className={styles.Input}
                                name="due_date"
                                value={due_date}
                                onChange={handleChange}
                            />
                            {errors?.due_date?.map((message, idx) => (
                                <Alert key={idx} variant="warning">{message}</Alert>
                            ))}
                        </Form.Group>

                        <div className={btnStyles.centerButton}>
                            <Button variant="secondary" onClick={() => history.goBack()}>Cancel</Button>
                            <Button type="submit" className={btnStyles.Button}>Create Task</Button>
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default TaskCreateForm;