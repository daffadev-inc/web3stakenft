import React, {useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Page() {
  const values = [true, 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);


return (
<>
      <Modal show={show} fullscreen={fullscreen} backdrop="static" keyboard={false} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Site Name</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={12} md={4}>
              .col-xs-12 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Lanjutkan
          </Button>
      </Modal.Footer>
      </Modal>
</>
    )
}

export default Page;
