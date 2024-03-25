import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Stack, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import card from './resources/WeatherCard.png';
import language from './resources/language.png';

const Help = () => {
    const { t } = useTranslation(); // Access the translation function
    const [expandedQuestion, setExpandedQuestion] = useState(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(true);
    };

    const questions = [
        {
            id: 1,
            question: t('help.question1'),
            solutionText: t('help.solution1'),
            solutionImage: language
        },
        {
            id: 2,
            question: t('help.question2'),
            solutionText: t('help.solution2'),
            solutionImage: card
        },
        // Add more questions and solutions as needed
    ];

    const toggleQuestion = (id) => {
        setExpandedQuestion(expandedQuestion === id ? null : id);
    };

    return (
        <div className="App d-flex flex-column min-vh-100">
            <NavbarComponent />
            <Container>
                <Row className="my-5">
                    <Col style={{ textAlign: 'left' }}>
                        <h1>{t('help.anyProblem')}</h1>
                        <ul className="question-list">
                            {questions.map((item) => (
                                <li key={item.id} className="full-width-dropdown">
                                    <DropdownButton
                                        title={item.question}
                                        variant="light"
                                        size="lg"
                                        id={`dropdown-button-${item.id}`}
                                        show={expandedQuestion === item.id}
                                        onClick={() => toggleQuestion(item.id)}
                                    >
                                        <Dropdown.ItemText>
                                            {item.solutionText}
                                            <img src={item.solutionImage} alt="Solution" />
                                        </Dropdown.ItemText>
                                    </DropdownButton>
                                </li>
                            ))}
                        </ul>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" placeholder={t('help.moreQuestionsPlaceholder')} />
                            <Button variant={isButtonClicked ? 'light' : 'secondary'} onClick={handleClick}>
                                {t('help.submit')}
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </div>
    );
};

export default Help;
