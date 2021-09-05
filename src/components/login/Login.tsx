import {useEffect, useState} from "react";
import {initialState} from "./loginSlice";
import styles from "./Login.module.css";


export function Login() {

    // const gitHubUrl = "https://api.github.com/users/deekshasharma";
    const slelectorLoginCriteria = "http://18.118.120.121:1337/slelector-login-criteria/001";

    useEffect(() => {
        getLoginConfiguration();
    }, []);

    const getLoginConfiguration = async () => {
        const response = await fetch(slelectorLoginCriteria);
        const jsonData = await response.json();
        setLoginUiComponent(jsonData);
    };

    const [loginUiComponent, setLoginUiComponent] = useState(initialState);
    // console.log(loginUiComponent);
    const options: any[] = [];
    loginUiComponent.selector_login_criteria_values?.map(function (obj) {
        options.push((<option value={obj.Name}>{obj.Name}</option>));
    });

    return (
        <div className={styles.Login}>

            <div className={styles.box}>
                <div className={styles.title}>
                    <b>Login</b>
                </div>
                <div>
                    <label className={styles.label} htmlFor="loginDropKey">{loginUiComponent.name}</label>
                    <select name="color" id="loginDropKey" className={styles.dropBox}>
                        {(options)}
                    </select>
                </div>
                <div>
                    <label className={styles.label} htmlFor="loginKey">{loginUiComponent.login_type.auth_key_text}</label>
                    <input type={loginUiComponent.login_type.auth_key_type} id="loginKey" name="loginKey" className={styles.email}/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="loginValue"> {loginUiComponent.login_type.auth_value_type_text}</label>
                    <input type={loginUiComponent.login_type.auth_value_type} id="loginValue" name="loginValue" className={styles.password}/>
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