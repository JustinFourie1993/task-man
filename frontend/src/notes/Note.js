import React, { useState } from "react";
import { Media } from 'react-bootstrap';
import { axiosRes } from '../api/axiosDefaults';
import { MoreDropdown } from '../components/MoreDropdown';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/Note.module.css";
import NoteEditForm from './NoteEditForm';

const Note = ({ owner, updated_at, content, id, setNotes }) => {
    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/notes/${id}/`);
            setNotes(prevNotes => ({
                ...prevNotes,
                results: prevNotes.results.filter(note => note.id !== id),
            }));
        } catch (err) {
            console.log(err);
    
        }
    };

    return (
        <>
            <hr />
            <Media>
                
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <NoteEditForm 
                            id={id}
                            content={content}
                            setNotes={setNotes}
                            setShowEditForm={setShowEditForm} />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Note;