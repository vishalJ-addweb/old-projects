import axios from 'axios';
import React, { Component } from 'react'
import AddDataForm from './AddDataForm';
import EditUser from './EditUser';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersItems: [],
            isAddData: false,
            isEditing: false,
            editUserData: {}
        };
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const resp = await axios.get('http://localhost:3005/users');
        this.setState({
            usersItems: resp.data
        })
    }



    deleteHandler = async (id) => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        this.getAllUsers();
    }

    saveUserDataHandler = async (enteredUserData) => {
        const userData = {
            ...enteredUserData
        }
        await axios.post('http://localhost:3005/users', userData);
        this.getAllUsers();
        this.setState({
            isAddData: false
        })
    }

    startAddDataHandler = () => {
        this.setState({
            isAddData: true
        })
    }

    stopAddDataHandler = () => {
        this.setState({
            isAddData: false
        })
    }

    stopEditData = () => {
        this.setState({
            isEditing: false
        })
    }

    updateDataHandler = () => {
        this.setState({
            isEditing: false
        })
        this.getAllUsers();
    }

    editHandler = async (response) => {
        // const userData = {
        //     ...response
        // }
        // console.log(userData);
        this.setState({
            isEditing: true,
            editUserData: response
        })
        // this.props.onEditData(userData);
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.isAddData && <button onClick={this.startAddDataHandler}>Add New User</button>}
                    {this.state.isAddData && <AddDataForm onSaveUserData={this.saveUserDataHandler} onCancel={this.stopAddDataHandler} />}
                </div>
                <div>
                    {this.state.isEditing ? <EditUser editUser={this.state.editUserData} onCancel={this.stopEditData} onEditSuccess={this.updateDataHandler} /> : null}
                </div>
                <ul  >
                    {this.state.usersItems.map((item) => {
                        return (
                            <li key={item.id} style={{ listStyle: "none", display: "flex" }}>
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                                <div><button onClick={() => this.editHandler(item)}>Edit</button></div>
                                <div><button onClick={() => this.deleteHandler(item.id)} >Delete</button></div>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default Users
