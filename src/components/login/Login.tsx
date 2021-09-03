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
            <header className={styles.LoginHeader}>
                <h2>GitHub User Data</h2>
            </header>
            <div className={styles.userContainer}>
                <h5 className={styles.infoItem}>{loginUiComponent.name}</h5>
                <h5 className={styles.infoItem}>{loginUiComponent.blog}</h5>
                <h5 className={styles.infoItem}>{loginUiComponent.followers}</h5>
                <h5 className={styles.infoItem}>{loginUiComponent.following_url}</h5>
            </div>
        </div>
    );
}