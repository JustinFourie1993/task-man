import React from 'react'
import { Card } from 'react-bootstrap';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/Task.module.css"

const Task = (props) => {
    const{
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
    } = props
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner || owners?.includes(currentUser?.username);
    return (
        <Card className={styles.Task}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Card.Text>{content}</Card.Text>
                    <strong>Category:</strong> {category} <br />
                    <strong>Due Date:</strong> {due_date} <br />
                    <strong>Overdue:</strong> {overdue} <br />
                    <strong>Priority:</strong> {priority} <br />
                    <strong>Status:</strong> {state} <br />
                    {overdue && <span className={styles.Overdue}>Overdue</span>}
                </Card.Text>
                {is_owner && taskPage && "..."}
            </Card.Body>
        </Card>
    );
};

export default Task;