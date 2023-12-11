import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/Task.module.css";
import btnStyles from "../styles/Button.module.css";

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

    const calculateOverdueDays = () => {
        if (!overdue) return 0;
        const due = new Date(due_date);
        const now = new Date();
        const diffTime = Math.abs(now - due);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return is_owner ? (
        <Card className={styles.Task}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
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
                    <Link to={`/tasks/${id}`}>
                        <Button className={btnStyles.Button}>
                            Leave a note
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    ) : (
        <Card className={styles.Task}>
            <Card.Body>
                <Card.Title>Restricted Access</Card.Title>
                <Card.Text>
                    You do not have permission to view the details of this task.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Task;