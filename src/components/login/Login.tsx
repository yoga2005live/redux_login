import {useEffect, useState} from "react";
import {initialState} from "./loginSlice";
import styles from "./Login.module.css";


export function Login() {

    const gitHubUrl = "https://api.github.com/users/deekshasharma";

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setLoginUiComponent(jsonData);
    };

    const [loginUiComponent, setLoginUiComponent] = useState(initialState);

    return (
        <div className={styles.Login}>

            <div className={styles.box}>
                <div className={styles.title}>
                    <b>Dashboard</b>
                </div>
                {/*<input type="email" name="email" value="email" onFocus="field_focus(this, 'email');"*/}
                {/*       onblur="field_blur(this, 'email');" className={styles.email}/>*/}

                {/*<input type="email" name="email" value="email" onFocus={() => {*/}
                {/*    console.log("email onFocus")*/}
                {/*}} onBlur={() => {*/}
                {/*    console.log("email onBlur")*/}
                {/*}} className={styles.email}/>*/}

                {/*<label className={styles.email} htmlFor="cars">Choose a car:</label>*/}
                {/*<select className={styles.email} name="cars" id="cars">*/}
                {/*    <option value="volvo">Volvo</option>*/}
                {/*    <option value="saab">Saab</option>*/}
                {/*    <option value="mercedes">Mercedes</option>*/}
                {/*    <option value="audi">Audi</option>*/}
                {/*</select>*/}
                <div>
                    <label className={styles.label} htmlFor="loginDropKey"> Market Type</label>
                    <select name="color" id="loginDropKey" className={styles.dropBox}>
                        <option value="">---</option>
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label} htmlFor="loginKey"> User to Login</label>
                    <input type="email" id="loginKey" name="loginKey" className={styles.email}/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="loginValue"> Password</label>
                    <input type="password" id="loginValue" name="loginValue" className={styles.password}/>
                </div>

                <a href="#">
                    <div className={styles.btn}>Sign In</div>
                </a>
                <a href="#">
                    <div className={styles.btn2}>Sign Up</div>
                </a>
            </div>
        </div>
    );
}