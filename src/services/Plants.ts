// TODO: arregla typos de "error", maneja caso de error y exito
export async function getPlants(): Promise<any> {
    const response = await fetch ('http://192.168.131.101:8080/dca/api/plants');
    if (!response.ok) return;
        throw new Error ('Not working');
    const data = await response.json();
    return data;
};
