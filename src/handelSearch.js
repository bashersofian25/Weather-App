import { asyncRequestData } from "./apiRequest"
import { renderAll } from "./render/renderAll";


export const asyncHandelSearch = async () => {
    const searchBar = document.getElementById('search-bar');
    const data = await asyncRequestData(searchBar.value);
    renderAll(data);
};

export const asyncHandelFirstRender = async () => {
    const data = await asyncRequestData('Amman');
    renderAll(data);
}