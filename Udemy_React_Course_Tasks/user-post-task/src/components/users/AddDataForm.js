import React, { Component } from 'react';
import axios from 'axios';

export class AddDataForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            setName: "",
            setUserName: "",
            setEmail: "",
            setAddress: {
                setStreet: "",
                setSuite: "",
                setCity: "",
                setZipCode: "",
                geo: {
                    setLat: "",
                    setLng: ""
                }
            },
            setPhone: "",
            setWebsite: "",
            setCompany: {
                setCompName: "",
                setCatchPhrase: "",
                setBS: ""
            }
        }
    }

    getAllUsers = async () => {
        const resp = await axios.get('http://localhost:3005/users');
        this.setState({
            usersItems: resp.data
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: this.state.setName,
            userName:this.state.setUserName,
            email: this.state.setEmail,
            address:{
                street:this.state.setAddress.setStreet,
                suite:this.state.setAddress.setSuite,
                city:this.state.setAddress.setCity,
                zipcode:this.state.setAddress.setZipCode,
                geo:{
                    lat:this.state.setAddress.geo.setLat,
                    lng:this.state.setAddress.geo.setLng
                }
            },
            phone:this.state.setPhone,
            website:this.state.setWebsite,
            company:{
                name:this.state.setCompany.setCompName,
                catchPhrase:this.state.setCompany.setCatchPhrase,
                bs:this.state.setCompany.setBS
            }
        }
        this.props.onSaveUserData(userData);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Name</label>
                            <input type="text" value={this.state.setName} onChange={(e) => {
                                this.setState({
                                    setName: e.target.value
                                })
                            }} />
                        </div>
                        <div>
                            <label>UserName</label>
                            <input type="text" value={this.state.setUserName} onChange={(e) => {
                                this.setState({
                                    setUserName: e.target.value
                                })
                            }} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" value={this.state.setEmail} onChange={(e) => {
                                this.setState({
                                    setEmail: e.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>Address :</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Street</label>
                            <input type="text" value={this.state.setAddress.setStreet} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.setStreet = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                        <div>
                            <label>Suite</label>
                            <input type="text" value={this.state.setAddress.setSuite} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.setSuite = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text" value={this.state.setAddress.setCity} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.setCity = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                        <div>
                            <label>ZipCode</label>
                            <input type="text" value={this.state.setAddress.setZipCode} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.setZipCode = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                    </div>
                    <div>GeoLocation In Address :</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Lat</label>
                            <input type="text" value={this.state.setAddress.geo.setLat} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.geo.setLat = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                        <div>
                            <label>Lng</label>
                            <input type="text" value={this.state.setAddress.geo.setLng} onChange={(e) => {
                                var setAddress = { ...this.state.setAddress };
                                setAddress.geo.setLng = e.target.value;
                                this.setState({
                                    setAddress
                                })
                            }} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Phone</label>
                            <input type="text" value={this.state.setPhone} onChange={(e) => {
                                this.setState({
                                    setPhone: e.target.value
                                })
                            }} />
                        </div>
                        <div>
                            <label>Website</label>
                            <input type="text" value={this.state.setWebsite} onChange={(e) => {
                                this.setState({
                                    setWebsite: e.target.value
                                })
                            }} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>Company :</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Name</label>
                            <input type="text" value={this.state.setCompany.setCompName} onChange={(e) => {
                                var setCompany = { ...this.state.setCompany }
                                setCompany.setCompName = e.target.value
                                this.setState({
                                    setCompany
                                })
                            }} />
                        </div>
                        <div>
                            <label>CatchPhrase</label>
                            <input type="text" value={this.state.setCompany.setCatchPhrase} onChange={(e) => {
                                var setCompany = { ...this.state.setCompany }
                                setCompany.setCatchPhrase = e.target.value
                                this.setState({
                                    setCompany
                                })
                            }} />
                        </div>
                        <div>
                            <label>BS</label>
                            <input type="text" value={this.state.setCompany.setBS} onChange={(e) => {
                                var setCompany = { ...this.state.setCompany }
                                setCompany.setBS = e.target.value
                                this.setState({
                                    setCompany
                                })
                            }} />
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <div>
                    <button type="button" onClick={this.props.onCancel}>Cancel</button>
                    <button type="submit">Add User</button>
                </div>
            </form>
        )
    }
}

export default AddDataForm