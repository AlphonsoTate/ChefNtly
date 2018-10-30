import React from "react" 
import {Section,Row, Col, Icon} from "react-materialize";


export default () => (
<Section>
  <Row className='center'>
    <Col s={3}>
      <Icon large>devices</Icon>
      <p>Download The App</p>
    </Col>
    <Col s={3}>
      <Icon large>perm_identity</Icon>
      <p>Register</p>
    </Col>
    <Col s={3}>
      <Icon large>local_pizza</Icon>
      <p>Order</p>
    </Col>
    <Col s={3}>
      <Icon large>thumb_up</Icon><Icon large>thumb_down</Icon>
      <p>Rate Your Chef</p>
    </Col>
  </Row>
</Section>



)