import React from 'react'
import { Card, Button, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../components/Avatar';
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
        task_file,
        title,
        updated_at,
        profile_id,
        profile_image,
        taskPage,
    } = props
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    return (
        <Card className={styles.Task}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <strong>Category:</strong> {category} <br />
                    <strong>Due Date:</strong> {due_date} <br />
                    <strong>Priority:</strong> {priority} <br />
                    <strong>Status:</strong> {state} <br />
                    {overdue && <span className={styles.Overdue}>Overdue</span>}
                </Card.Text>
                <Card.Text>{content}</Card.Text>
                {is_owner && taskPage && "..."}
            </Card.Body>
        </Card>
    );
};

export default Task;