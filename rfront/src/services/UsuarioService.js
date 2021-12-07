import httpClient from "./httpClient";

const END_POINT = "/api/usuario/";

const deleteProvById = (idUser, token) => httpClient.delete(`${END_POINT}id/${idUser}`,{
    headers:{ "autorizacion": token }
});
const favProveedor = (idUser,idProv) => httpClient.post((`${END_POINT}favoritos/${idUser}/${idProv}`));

export {
    favProveedor, 
    deleteProvById
}