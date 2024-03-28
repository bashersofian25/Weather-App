
import { renderDays } from "./renderDays";
import { renderToday } from "./renderCurrent";

export const renderAll = (data) => {
    renderToday(data);
    renderDays(data);
};  