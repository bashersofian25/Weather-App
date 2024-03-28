export const createCard = (DayInfo) => {
    const card = document.createElement('div');
    card.classList.add('card');


    const day = document.createElement('h3');
    day.innerText = `${DayInfo.day}`;

    const condition = document.createElement('p');
    condition.innerText = `${DayInfo.condition.text}`;

    const icon = document.createElement('img');
    icon.classList.add('card-icon')
    icon.src = DayInfo.condition.icon;

    const tempBox = document.createElement('div');
    tempBox.classList.add('temp-container');

    const maxTemp = document.createElement('span');
    maxTemp.classList.add('max');
    maxTemp.innerText = `${DayInfo.maxTemp}°`;

    const minTemp = document.createElement('span');
    minTemp.classList.add('min');
    minTemp.innerText = `${DayInfo.minTemp}°`;


    tempBox.append(maxTemp);
    tempBox.append(minTemp);

    card.append(day);
    card.append(condition);
    card.append(icon);
    card.append(tempBox);

    return card;
}
