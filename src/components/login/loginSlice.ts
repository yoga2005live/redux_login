interface loginUiComponent {
    name?:String;
    blog?:String;
    following_url?:String;
    followers?:number;
}

export const initialState: loginUiComponent = {
    name: "",
    blog: "",
    following_url: "",
    followers: -1
};