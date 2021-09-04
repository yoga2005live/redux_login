interface loginUiComponent {
    loginTextHeader?: String;
    loginUserLabel?: String;
    loginPassLabel?: String;
    loginLeftBtn?: String;
    loginRightBtn?: String;
}

export const initialState: loginUiComponent = {
    loginTextHeader: "",
    loginUserLabel: "",
    loginPassLabel: "",
    loginLeftBtn: "",
    loginRightBtn: ""
};