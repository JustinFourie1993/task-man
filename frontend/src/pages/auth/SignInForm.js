import React, {  useState } from "react";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from "../../styles/SignForms.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios"

import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { setTokenTimestamp } from '../../utils/utils';

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            setTokenTimestamp(data)
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className='d-none'>Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text" placeholder="username"
                                name="username"
                                value={username}
                                onChange={handleChange} />

                        </Form.Group>
                        {errors.username?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        )}

                        <Form.Group controlId="password">
                            <Form.Label className='d-none'>Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.password?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        )}

                        <div className={btnStyles.centerButton}>
                            <Button className={`${btnStyles.Button} ${btnStyles.wide}`} type="submit">
                                Sign In
                            </Button>
                        </div>
                        {errors.non_field_errors?.map((message, idx) =>
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        )}
                    </Form>

                </Container>
                
            </Col>
           
        </Row>
    );
}

export default SignInForm;