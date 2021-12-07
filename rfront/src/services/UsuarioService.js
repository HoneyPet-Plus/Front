import httpClient from "./httpClient";

const END_POINT = "/api/usuario/";

const favProveedor = (idUser,idProv) => httpClient.post((`${END_POINT}favoritos/${idUser}/${idProv}`));

export {
    favProveedor
}