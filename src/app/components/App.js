import React, {Component} from "react";
import {Accordion, Card} from 'react-bootstrap';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: {
          value: '',
          required: true,
          error: false
        },
        surname: {
          value: '',
          required: true,
          error: false
        },
        email: {
          value: '',
          required: true,
          error: false
        },
        phone: {
          value: '',
          required: true,
          error: false
        },
        gender: {
          value: '',
          required: true,
          error: false
        },
        birth: {
          value: '',
          required: true,
          error: false
        },
        comments: {
          value: '',
          required: false,
          error: false
        }

    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }


  validate() {
    const email_regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phone_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return new Promise((resolve, reject) => {

      for(let key in this.state) {

        if(!this.state[key].value.length && this.state[key].required) {
          let obj = {};
          obj[key] = {
            value: this.state[key].value,
            error: "This field is required"
          };
          this.setState(obj);
          reject(key)
        }

        else if(!this.state.phone.value.match(phone_regex)) {
          this.setState({
            phone: {
              value: this.state.phone.value,
              error: 'The value is invalid.'
            }
          })
          reject('email')
        }

        else if(!this.state.email.value.match(email_regex)) {
          this.setState({
            email: {
              value: this.state.email.value,
              error: "This field is incorect"
            }
          })
        reject('email')
        }
        // Run number / email verification
      }

      resolve()

    })
  }

  onSubmit(e) {
    e.preventDefault();

    this.validate()

    .then(() => {
      const formData = new FormData();
      for (let key in this.state) {
        formData.append(key, this.state[key].value);
      }
      axios.post('/api/user', formData)
      .then((data) => {
        this.setState({
          user: {}
        })
      })

      .catch(err => {
        console.log(err);
      })
    })

    .catch(err => {
      console.error(`Input: ${err} is invalid.`)
    })
  }

  onInputChange(e) {
    const {target: {name}} = e;
    const {target: {value}} = e;
    let prop = {};

    prop[name] = {value: value, validated: true};

    this.setState((state) => {
      return prop;
    });
  }

  render() {
    return (
      <main className="app-main">
        <div className="app-container">
          <form name="form" onSubmit={this.onSubmit}>
          <Accordion defaultActiveKey="0" >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="tab-name">Step 1: Your details</div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                 <div className="tab-body">
                   <div className="flex-col">
                     <fieldset>
                       <label htmlFor="first-name">First name</label>
                       <input type="text" name="firstname" value={this.state.firstname.value} onChange={this.onInputChange} id="firstName"/>
                       {this.state.firstname.error && <div>{this.state.firstname.error}</div>}
                     </fieldset>
                     <fieldset>
                       <label htmlFor="surname">Surname</label>
                       <input type="text" value={this.state.surname.value} onChange={this.onInputChange} name="surname"/>
                       {this.state.surname.error && <div>{this.state.surname.error}</div>}
                     </fieldset>
                     <fieldset>
                      <label htmlFor="email">Email</label>
                      <input type="email" value={this.state.email.value} onChange={this.onInputChange} name="email"/>
                      {this.state.email.error && <div>{this.state.email.error}</div>}
                     </fieldset>
                   </div>
                   <div className="flex-col">
                     <button type="button" className="next-button"> next > </button>
                   </div>
                 </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <div className="tab-name">Step 2: More comments</div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                   <div className="tab-body">
                     <div className="flex-col">
                       <fieldset>
                         <label htmlFor="phone">Telephone number</label>
                         <input type="tel" value={this.state.phone.value} onChange={this.onInputChange} name="phone"/>
                         <div>{this.state.phone.error && <div>{this.state.phone.error}</div>}</div>
                       </fieldset>
                       <fieldset>
                         <label htmlFor="gender">Gender</label>
                         <select value={this.state.gender.value} onChange={this.onInputChange} name="gender">
                           <option default>Select Gender</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                         </select>
                         <div>{this.state.gender.error && <div>{this.state.gender.error}</div>}</div>
                       </fieldset>
                       <fieldset>
                         <label htmlFor="birth">Date of birth</label>
                         <input type="date" value={this.state.birth.value} onChange={this.onInputChange} name="birth" />
                         <div>{this.state.birth.error && <div>{this.state.birth.error}</div>}</div>
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
                <div className="tab-name">Step 2: Final comments</div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                   <div className="tab-body">
                     <div className="flex-col">
                       <fieldset className="comments-wrapper">
                         <label htmlFor="comments">Comments</label>
                         <textarea name="comments"></textarea>
                       </fieldset>
                     </div>
                     <div className="flex-col">
                       <button type="submit" className="next-button">
                         next >
                       </button>
                     </div>
                   </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </form>
        </div>
      </main>
    );
  }
}
