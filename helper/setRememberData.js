import Router from "next/router";

export const setRememberMe = () => {
    const user = localStorage.getItem('token');
    if (user) {
        const item = JSON.parse(user);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem('token');
            Router.push('/login');
        }
    }
}