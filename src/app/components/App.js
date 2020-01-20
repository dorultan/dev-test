import React, {Component} from "react";
import {Accordion, Card} from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <main className="app-main">
        <div className="app-container">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="tab-name">Step 1: Your details</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                 <div className="tab-body">
                   <div className="flex-col">
                     <fieldset>
                       <label for="first-name">First name</label>
                       <input type="text" name="first-name"/>
                     </fieldset>
                     <fieldset>
                       <label for="surname">First name</label>
                       <input type="text" name="surname"/>
                     </fieldset>
                     <fieldset>
                      <label for="email">Email</label>
                      <input type="email" name="email"/>
                     </fieldset>
                   </div>
                   <div className="flex-col">
                     <button type="button" className="next-button">
                       next >
                     </button>
                   </div>
                 </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span className="tab-name">Step 2: More comments</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                   <div className="tab-body">
                     <div className="flex-col">
                       <fieldset>
                         <label for="phone">Telephone number</label>
                         <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone"/>
                       </fieldset>
                       <fieldset>
                         <label for="phone">Telephone number</label>
                         <select>
                           <option default>Select Gender</option>
                           <option>Male</option>
                           <option>Female</option>
                         </select>
                       </fieldset>
                       <fieldset>
                         <label for="date">Date of birth</label>
                         <input type="date" name="date"/>
                       </fieldset>
                     </div>
                     <div className="flex-col">
                       <button type="button" className="next-button">
                         next >
                       </button>
                     </div>
                   </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span className="tab-name">Step 2: Final comments</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                   <div className="tab-body">
                     <div className="flex-col">
                       <fieldset className="comments-wrapper">
                         <label for="comments">Comments</label>
                         <textarea name="comments"></textarea>
                       </fieldset>
                     </div>
                     <div className="flex-col">
                       <button type="button" className="next-button">
                         next >
                       </button>
                     </div>
                   </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </main>
    );
  }
}
