function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Teléfono: 3624 555555';

    const address = document.createElement('p');
    address.textContent = 'Dirección: Avenida Edison y calle 20';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'images/restaurant-location.png';
    restaurantLocation.alt = "Ubicación de PizzaMac";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;