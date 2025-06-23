const people = [
  {
    name: 'John Doe',
    location: 'New York, USA',
    description: 'Software developer passionate about open-source.',
    image: 'https://source.unsplash.com/300x200/?person,1'
  },
  {
    name: 'Jane Smith',
    location: 'California, USA',
    description: 'Community educator who loves technology.',
    image: 'https://source.unsplash.com/300x200/?person,2'
  },
  {
    name: 'Ahmed Ali',
    location: 'Dubai, UAE',
    description: 'Engineer and content creator in Dubai.',
    image: 'https://source.unsplash.com/300x200/?person,3'
  }
];

const grid = document.getElementById('communityGrid');
const popup = document.getElementById('popup');
const popupName = document.getElementById('popup-name');
const popupDesc = document.getElementById('popup-desc');

people.forEach(person => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" />
    <div class="card-content">
      <h2>${person.name}</h2>
      <p>${person.location}</p>
    </div>
  `;
  card.onclick = () => showPopup(person);
  grid.appendChild(card);
});

function showPopup(person) {
  popupName.textContent = person.name;
  popupDesc.textContent = person.description;
  popup.style.display = 'flex';
}

function hidePopup() {
  popup.style.display = 'none';
}
