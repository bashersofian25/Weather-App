import "./style.css";
import { asyncHandelSearch } from "./handelSearch";
import searchIcon from './assets/magnify.svg';

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', asyncHandelSearch);
const searchIconTag = document.getElementById('search-icon');
searchIconTag.src = searchIcon;







