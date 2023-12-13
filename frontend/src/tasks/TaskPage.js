import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NoteCreateForm from "../notes/NoteCreateForm";
import { useCurrentUser } from "../contexts/CurrentUserContext";

import appStyles from "../App.module.css";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../api/axiosDefaults';
import Task from './Task';

function TaskPage() {
    const { id } = useParams();
    const [task, setTask] = useState(null); 
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
                console.log(err);
            }
        };

        fetchTask();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                {task && <Task {...task} setTasks={setTask} taskPage onTaskPage={true} />}
                <Container className={appStyles.Content}>
                    {currentUser ? (
                        <NoteCreateForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            post={id}
                            setTask={setTask}
                            setNotes={setNotes}
                        />
                    ) : notes.results.legnth? (
                        "Notes"
                    ) : null}
                    {notes.results.length ? (
                        notes.results.map(note => (
                            <p key={note.id}>
                                {note.owner}: {note.content}
                            </p>
                        ))
                    ) :  (
                        <span>No notes yet</span>
                    ) }
                </Container>
            </Col>
        </Row>
    );
}

export default TaskPage;