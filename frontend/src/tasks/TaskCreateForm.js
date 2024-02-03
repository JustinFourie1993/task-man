import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Spinner, Alert } from 'react-bootstrap';
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { title, category, content, priority, due_date } = taskData;
    const history = useHistory();

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        let formErrors = {};

        if (!title.trim()) {
            formErrors.title = "Title is required";
            isValid = false;
        }
        if (!content.trim()) {
            formErrors.content = "Content is required";
            isValid = false;
        }

        if (due_date) {
            const selectedDate = new Date(due_date);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);  // Reset time part to compare only dates

            if (selectedDate < currentDate) {
                formErrors.due_date = "Due date cannot be in the past";
                isValid = false;
            }
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('title', title.trim());
        formData.append('category', category);
        formData.append('content', content.trim());
        formData.append('priority', priority);
        formData.append('due_date', due_date);

        try {
            const { data } = await axiosReq.post("/tasks/", formData);
            history.push(`/tasks/${data.id}`);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2">
                <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                    <h1 className={styles.Header}>Create Task</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                className={`${styles.Input} ${errors.title ? 'is-invalid' : ''}`}
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                className={`${styles.Input} ${errors.category ? 'is-invalid' : ''}`}
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
                            {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className={`${styles.Input} ${errors.content ? 'is-invalid' : ''}`}
                                name="content"
                                value={content}
                                onChange={handleChange}
                            />
                            {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                as="select"
                                className={`${styles.Input} ${errors.priority ? 'is-invalid' : ''}`}
                                name="priority"
                                value={priority}
                                onChange={handleChange}>
                                <option value="">Select Priority</option>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </Form.Control>
                            {errors.priority && <div className="invalid-feedback">{errors.priority}</div>}
                        </Form.Group>

                        <Form.Group className={styles.FormGroup}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                className={`${styles.Input} ${errors.due_date ? 'is-invalid' : ''}`}
                                name="due_date"
                                value={due_date}
                                onChange={handleChange}
                            />
                            {errors.due_date && <div className="invalid-feedback">{errors.due_date}</div>}
                        </Form.Group>

                        <div className={btnStyles.centerButton}>
                            <Button variant="secondary" onClick={() => history.goBack()} disabled={isSubmitting}>
                                Cancel
                            </Button>
                            <Button type="submit" className={btnStyles.Button} disabled={isSubmitting}>
                                {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Create Task'}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default TaskCreateForm;