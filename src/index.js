import "./style.css";
import { asyncHandelSearch, asyncHandelFirstRender } from "./handelSearch";
import searchIcon from './assets/magnify.svg';
import { renderAll } from "./render/renderAll";


asyncHandelFirstRender();
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', asyncHandelSearch);
const searchIconTag = document.getElementById('search-icon');
searchIconTag.src = searchIcon;







