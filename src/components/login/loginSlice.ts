interface loginUiComponent {
    aplication_code?: string
    enable?: boolean
    // id?: string
    in_use?: boolean
    name?: string
    selector_login_criteria_values?: [dropboxValues]
    login_type: login_type
    login_icon?: string
}

interface dropboxValues {
    Name?: string
    description?: string
    published_at?: string
    createdAt?: string
    updatedAt?: string
    selector_login_criterion?: string
}

interface login_type {
    auth_key?: string
    auth_key_type?: string
    auth_value_type?: string
    auth_key_text?: string
    auth_value_type_text?: string
}

export const initialState: loginUiComponent = {
    aplication_code: "",
    enable: false,
    // id: "",
    in_use: false,
    name: "",
    selector_login_criteria_values: [{Name: "", description: ""}],
    login_type: {auth_key: "", auth_key_text: "", auth_key_type: "", auth_value_type: "", auth_value_type_text: ""},
    login_icon: ""
};