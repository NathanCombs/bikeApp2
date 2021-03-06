/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
        username: '',
        password: ''

    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

  
}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
     if(this.state.nestedModal == false){ axios.post('/signUpData', {username: this.state.username, password: this.state.password}).then((result)=>{
    })
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false,
      userData: {
          username: '',
          password: ''
      }
    });
    } else {
    this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: false,
        userData: {
            username: '',
            password: ''
        }
    });
}


  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  onUserChange = (e) => {
    this.setState({
        username: (e.target.value)
    });
  }

  onPasswordChange = (e) => {
    this.setState({
        password: (e.target.value)
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Sign Up{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Welcome!</ModalHeader>
          <ModalBody>
            <input type="text" name="username" placeholder= "Username" value={this.state.username} onChange={this.onUserChange} />
            <input type="text" name="password" placeholder= "Password" value={this.state.password} onChange={this.onPasswordChange} />

            <br />
            <Button color="success" onClick={this.toggleNested}>Sign Up</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Signup;