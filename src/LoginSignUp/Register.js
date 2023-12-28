import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";

const token = localStorage.getItem("token");

function RegisterButton() {
    const Navi = useNavigate();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const changeHandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (token) {
            Navi("/");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name.length === 0) {
            alert("Name field must have max 10 characters long");
            Navi("/register");
        } else if (data.email.length === 0 || data.email.length > 25) {
            alert("email field must have min 6 and max 15 characters long");
            Navi("/register");
        } else if (data.password.length === 0 || data.password.length > 15) {
            alert("password field must have min 6 and max 10 characters long");
            Navi("/register");
        } else if (data.phone.length === 0 || data.phone.length > 10) {
            alert("phoneNo. must have 10characters long");
            Navi("/register");
        } else {
            axios.post("https://handson4.onrender.com/api/register", data)
                .then((res) => {
                    alert(res.data.msg);
                    setData(res.data);
                    localStorage.setItem("token", res.data.token);
                    console.log(res.data.token);
                    if (res.data.msg === "user already registered") {
                        Navi("/register");
                    } else if (res.data.token) {
                        Navi("/login");
                    }
                })

                .catch((err) => console.log(err, "axios error"));
        }

        setData({
            name: "",
            phone: "",
            email: "",
            password: "",
        });
        console.log(data);
    };

    return (
        <div className="register">
            {/* <div className="under_register">
                <h1 className="heading">Register Account</h1>
                <h2 style={{ color: "gray" }}>Hello Friends</h2>
                <h3 style={{ color: "gray" }}>
                    Enter your personal details and start journey with us
                </h3>
            </div> */}
            <div className="under_div">
                <h1 className="create_acc" style={{ color: "gray" }}>
                    Create Account
                </h1>
                <form action="/" method="POST" onSubmit={handleSubmit}>
                    {/* */}

                    <label htmlFor="name" className="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={data.name}
                        autoComplete="off"
                        onChange={changeHandle}
                        className="nameinput"
                    />
                    <br />

                    <label htmlFor="emailregister" className="emailregister">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your mail"
                        id="emailregister"
                        value={data.email}
                        autoComplete="off"
                        onChange={changeHandle}
                        className="emailinput"
                    />
                    <br />
                    <label htmlFor="passwordregiter" className="passwordregiter">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        id="passwordregiter"
                        autoComplete="off"
                        onChange={changeHandle}
                        className="passwordinput"
                    />
                    <br />
                    <label htmlFor="numregister" className="numregister">
                        Number
                    </label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter your number"
                        id="numregister"
                        value={data.phone}
                        autoComplete="off"
                        onChange={changeHandle}
                        className="phoneinput"
                    />
                    <br />
                    <button type="submit" className="submitbtn">
                        Register
                    </button>
                    <br />
                    <NavLink to="/login" className="gotoregister">go to login page</NavLink>
                </form>
            </div>
        </div>
    );
}
export default RegisterButton;