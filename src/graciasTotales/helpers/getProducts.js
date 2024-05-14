import data from '/Curso/pruebaTiendaDos/src/data/data.json'
export const GetAllProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}