import httpClient from "./httpClient";

const END_POINT = "/api/usuario/";

const deleteUsuarioById = (idUser, token) => httpClient.delete(`${END_POINT}id/${idUser}`,{
    headers:{ "autorizacion": token }
});
const favProveedor = (idUser,idProv) => httpClient.post((`${END_POINT}favoritos/${idUser}/${idProv}`));

const obtenerFavoritos = (idUser,token) => httpClient.get((`${END_POINT}favoritos/${idUser}`),{
    headers:{ "autorizacion": token }
});

const eliminarProvFavorito = (idUser,idProv,token) => httpClient.post((`${END_POINT}eliminar/favoritos/${idUser}/${idProv}`),{
    headers:{ "autorizacion": token }
});


export {
    favProveedor, 
    deleteUsuarioById,
    obtenerFavoritos,
    eliminarProvFavorito
}