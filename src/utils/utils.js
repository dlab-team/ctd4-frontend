export const closeSession = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
}