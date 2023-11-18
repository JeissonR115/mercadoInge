const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const actionIfNameIsPresent = ({ nameParam, numParam, func }) => {
    const isParam = getParameterByName(nameParam);
    if (isParam === numParam) {
        func();
    }
}

// Función para mostrar el mensaje de error si está presente
window.onload = () => {
    actionIfNameIsPresent({
        nameParam: 'error',
        numParam: '1',
        func: () => alert('Nombre de usuario o contraseña incorrectos')
    });
};
