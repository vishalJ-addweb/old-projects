import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styling/Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { cityRequest, storeAuth } from "../Redux/app/actions";
import Login from "./LoginPage";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const location = [
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
        name: "Mumbai",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png",
        name: "NCR",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
        name: "Bangaluru",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
        name: "Hyderabad",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
        name: "Ahemdabad",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
        name: "Chandigarh",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
        name: "Chennai",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
        name: "Pune",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
        name: "Kolkata",
    },
    {
        link: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
        name: "Kochi",
    },
];
const Navbar = () => {
    const [query, setQuery] = React.useState("");
    const [city, setCity] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [cityName, setCityName] = React.useState("Select City");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [state, setState] = React.useState(false);
    const [auth, setAuth] = React.useState(false);
    const [action, setAction] = React.useState(false);
    const isAuth = useSelector((state) => state.app.isAuth);
    const [user, setUser] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleLocation = (name) => {
        setOpen(false);
        setCityName(name);
    };

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(cityRequest(cityName));
    }, [cityName]);

    const toggleDrawer = (open) => (event) => {
        setState(!state);
    };

    const handleSignIn = (res) => {
        if(res.profileObj){
            // var obj = res.profileObj.name;
            // console.log(obj);
            // setUser(res.profileObj.name);
            setAuth(true);
        }
        setAction(true);
        setState(false);
    };
    const handleCloseLogin = () => {
        setAuth(true);
        setAction(false);
        // setState(false);
    };
    const signOut = () =>{
        setAuth(false);
    }
    React.useEffect(() => {
        dispatch(storeAuth(auth));
    }, [auth]);

    // console.log(isAuth);
    return (
        <div>
            <div className={styles.navbar}>
                <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
                    <Link className={styles.link} to="/">
                        <svg height="40" width="150">
                            <image
                                href="//in.bmscdn.com/webin/common/icons/bms.svg"
                                width="150"
                                height="40"
                            ></image>
                        </svg>
                    </Link>
                    <div className={styles.searchBar}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div
                    style={{ display: "flex", alignItems: "center", fontSize: "17px" }}
                >
                    <div className={styles.location} onClick={handleClickOpen}>
                        <div>{cityName}</div>
                        <ArrowDropDownIcon />
                    </div>
                    {!isAuth && (
                        <button onClick={handleSignIn} className={styles.signBtn}>
                            <p>Sign In</p>

                        </button>
                    )}
                    <Login action={action} handleCloseLogin={handleCloseLogin} />
                    <div
                        onClick={toggleDrawer(true)}
                        onClose={toggleDrawer(false)}
                        className={styles.profile}
                    >
                        {isAuth && <AccountCircleIcon style={{ fontSize: "40px" }} />}
                        {isAuth && <div>Hi, User..</div>}

                        <Drawer anchor="right" open={state}>
                            <div className={styles.drawer}>
                                <div>
                                    <div>Hi User</div>
                                    <Link
                                        style={{ marginLeft: 0, fontSize: "17px" }}
                                        className={styles.link} to='/editprofile'
                                    >
                                        Edit Profile
                                    </Link>
                                    {/* <Route path='/editprofile' component={EditProfile}></Route> */}
                                </div>
                                <AccountCircleIcon style={{ fontSize: "40px" }} />
                            </div>
                            <div className={styles.sideber_content}>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#666"
                                            fill-rule="evenodd"
                                            d="M9.5 2A3.5 3.5 0 0 1 13 5.5V6h3l.375 6H22v3a2 2 0 1 0 0 4v3H2L3 6h3v-.5A3.5 3.5 0 0 1 9.5 2zM21 13H7v1.17a3.001 3.001 0 0 1 0 5.66V21h14v-1.17a3.001 3.001 0 0 1 0-5.66V13zM6 7H3.94l-.876 14H6v-2a2 2 0 1 0 0-4v-3h9.372l-.311-5H13v2h-1V7H7v2H6V7zm8 7.5l.735 1.489 1.643.238-1.19 1.16.281 1.636L14 18.25l-1.47.773.281-1.637-1.189-1.159 1.643-.238L14 14.5zM9.5 3A2.5 2.5 0 0 0 7 5.5V6h5v-.5A2.5 2.5 0 0 0 9.5 3z"
                                        ></path>
                                    </svg>
                                    <Link
                                        to="/profile/booking-history"
                                        style={{color: "black" }}
                                    >
                                        Booking History
                                    </Link>
                                </div>
                                <div className={styles.signout_button}>
                                    <button onClick={signOut}>Sign out</button>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                TransitionComponent={Transition}
            >
                <DialogContent className={styles.Dialog}>
                    <DialogContentText className={styles.location_content}>
                        <SearchIcon />
                        <input
                            style={{
                                border: "none",
                                width: "550px",
                                height: "40px",
                                outline: "none",
                            }}
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Search for your city"
                        />
                    </DialogContentText>
                    <div>Popular cities</div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "baseline",
                            textAlign: "center",
                        }}
                    >
                        {location.map((loc) => (
                            <div style={{ margin: "2px" }}>
                                <img
                                    onClick={() => handleLocation(loc.name)}
                                    src={loc.link}
                                    alt={loc.name}
                                />
                                <div>{loc.name}</div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
            <div className={styles.secondNav}>
                <div>
                    <Link className={styles.link} to="">
                        Movies
                    </Link>
                    <Link className={styles.link} to="">
                        Stream
                    </Link>
                    <Link className={styles.link} to="">
                        Events
                    </Link>
                    <Link className={styles.link} to="">
                        Plays
                    </Link>
                    <Link className={styles.link} to="">
                        Sports
                    </Link>
                    <Link className={styles.link} to="">
                        Activities
                    </Link>
                    <Link className={styles.link} to="">
                        Fanhood
                    </Link>
                    <Link className={styles.link} to="">
                        Buzz
                    </Link>
                </div>
                <div>
                    <Link className={styles.link} to="">
                        Listyourshow
                    </Link>
                    <Link className={styles.link} to="">
                        Corporates
                    </Link>
                    <Link className={styles.link} to="">
                        Offers
                    </Link>
                    <Link className={styles.link} to="">
                        Gift Cards
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
