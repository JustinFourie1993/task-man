import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NoteCreateForm from "../notes/NoteCreateForm";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/Task.module.css";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';
import Task from './Task';
import Note from '../notes/Note';

function TaskPage() {
    
    const history = useHistory()
    const { id } = useParams();
    const [task, setTask] = useState({ results: [] }); 
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [notes, setNotes] = useState({ results: [] });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const [{ data: task }, { data: notes }] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`),
                    axiosReq.get(`/notes/?task=${id}`),
                ]);
                setTask(task);
                setNotes(notes);
            } catch (err) {
                // console.log(err);
            }
        };

        fetchTask();
    }, [id]);

    const handleNewNote = (newNote) => {
        setNotes(prevNotes => ({
            ...prevNotes,
            results: [newNote, ...prevNotes.results],
        }));
    };

    return (
        <Row className="h-100">
            
            <Col  className="py-2 p-0 p-lg-2">
                <div className={styles.Back}>
                    <Button className={`${btnStyles.Button} ${btnStyles.wide}`}
                        onClick={() => history.goBack()}>
                        Go Back
                    </Button>
                </div>
                {task && <Task {...task} setTasks={setTask} taskPage onTaskPage={true} />}
                
                <Container className={appStyles.Content}>
                    {currentUser ? (
                        <NoteCreateForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            task={id}
                            setTask={setTask}
                            onNoteCreate={handleNewNote}
                        />
                    ) : notes.results.length ? (
                        "Notes"
                    ) : null}
                    {notes.results.length ? (
                        notes.results.map(note => (
                            <Note key={note.id} {...note} setNotes={setNotes} />
                        ))
                    ) : (
                        <span></span>
                    )}
                </Container>
            </Col>
            
            
    
        </Row>
    );
}

export default TaskPage;