import React from 'react';
import { Card } from 'react-bootstrap';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/Task.module.css";

const Task = (props) => {
    const {
        category,
        content,
        created_at,
        due_date,
        id,
        overdue,
        owner,
        owners,
        priority,
        state,
        title,
        updated_at,
        profile_id,
        profile_image,
        taskPage,
    } = props;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner || owners?.includes(currentUser?.username);

    const calculateOverdueDays = (dueDate) => {
        const due = new Date(dueDate);
        const now = new Date();
        const diffTime = Math.max(due - now, 0);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <Card className={styles.Task}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <strong>Category:</strong> {category} <br />
                <strong>Due Date:</strong> {due_date} <br />
                {overdue && (
                    <span className={styles.Overdue}>
                        Overdue by {calculateOverdueDays(due_date)} days
                    </span>
                )}
                <strong>Priority:</strong> {priority} <br />
                <strong>Status:</strong> {state} <br />
                {is_owner && taskPage && "..."}
            </Card.Body>
        </Card>
    );
};

export default Task;