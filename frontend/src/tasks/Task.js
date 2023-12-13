import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/Task.module.css";
import btnStyles from "../styles/Button.module.css";
import { MoreDropdown } from '../components/MoreDropdown';
import { axiosRes } from '../api/axiosDefaults';

const Task = (props) => {
    const history = useHistory()

    const handleEdit = () => {
        history.push(`tasks/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/tasks/${id}/`);
            if (isFromTaskPage) {
                history.goBack(); 
            }
        } catch (err) {
            console.log(err);
        }
    };

    const {
        category,
        content,
        due_date,
        id,
        overdue,
        owner,
        owners,
        priority,
        state,
        title,
        profile_id,
        profile_image,
        taskPage,
        isFromTaskPage,
    } = props;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner || owners?.includes(currentUser?.username);

    const calculateOverdueDays = () => {
        if (!overdue) return 0;
        const due = new Date(due_date);
        const now = new Date();
        const diffTime = Math.abs(now - due);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return  (
        <Card className={styles.Task}>
            <Card.Body>
                <Row>
                    <Col xs={10} sm={11}>
                        <Card.Title className={styles.taskTitle}><h4>{title}</h4></Card.Title>
                        <Card.Text>{content}</Card.Text>
                        {is_owner && taskPage && (
                            <>
                                <strong>Category:</strong> {category} <br />
                                <strong>Due Date:</strong> {due_date} <br />
                                {overdue && (
                                    <span className={styles.Overdue}>
                                        Overdue by {calculateOverdueDays()} days
                                    </span>
                                )}
                                <strong>Priority:</strong> {priority} <br />
                                <strong>Status:</strong> {state} <br />
                            </>
                        )}
                        <div className={styles.Comment}>
                            {!taskPage && (
                                <Link to={`/tasks/${id}`}>
                                    <Button className={btnStyles.Button}>
                                        View Task
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </Col>
                    <Col xs={2} sm={1} className="text-right">
                        <MoreDropdown 
                        handleEdit={handleEdit} 
                        handleDelete={handleDelete}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    ) 
};

export default Task;