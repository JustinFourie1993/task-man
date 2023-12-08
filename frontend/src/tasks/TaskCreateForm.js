import React, { useRef, useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import styles from '../styles/TaskCreateEditForm.module.css'; 
import btnStyles from "../styles/Button.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';


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
    const { title, category, content, task_file, priority, due_date } = taskData
    const task_fileInput = useRef(null)
    const history = useHistory()


    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeFile = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(task_file);
            setTaskData({
                ...taskData,
                task_file: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('category', category)
        formData.append('content', content)
        formData.append('task_file', task_fileInput.current.files[0])
        formData.append('priority', priority)
        formData.append('title', due_date)

        try {
            const { data } = await axiosReq.post("/tasks/", formData);
            history.push(`/tasks/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
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
                                onChange={handleChangeFile}
                                ref={task_fileInput} />
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