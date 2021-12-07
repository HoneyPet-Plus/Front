import httpClient from "./httpClient";

const END_POINT = "/api/proveedor/";

const getAllProvs = () => httpClient.get(`${END_POINT}all`);
const getProvById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const editProv = (id, newData) => httpClient.put(`${END_POINT}id/${id}`, newData);
const deleteProvById = (idProv, idPublisher) => httpClient.delete((`${END_POINT}${idProv}/${idPublisher}`));
const createProv = (newProv,token) => httpClient.post(`${END_POINT}create`, newProv,{
    headers:{"autorizacion": token}
});
const changeHeroImg = (id, heroImg) => httpClient.put(`${END_POINT}id/${id}`, heroImg, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});


export {
    getAllProvs,
    getProvById,
    editProv,
    deleteProvById,
    createProv,
    changeHeroImg
}