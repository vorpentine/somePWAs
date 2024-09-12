const chestData = [
  // Port Town
  {
    area: "Port Town",
    chests: [
      { name: "In a stall next to a Pirate Millionaires" },
      { name: "Four near the Pistol Billionaires 1" },
      { name: "Four near the Pistol Billionaires 2" },
      { name: "Four near the Pistol Billionaires 3" },
      { name: "Four near the Pistol Billionaires 4" },
      { name: "Behind the Mountain to the right on stone" },
    ],
  },
  // Hydra Island
  {
    area: "Hydra Island",
    chests: [
      { name: "On the cliff of the Huge Mountain" },
      { name: "At the left entrance of the Arena" },
      { name: "On the side of a house near the Giant Islanders" },
      { name: "On the side of a house near the top of the waterfall" },
      { name: "On the Island Empress's Palace" },
    ],
  },
  // Great Tree
  {
    area: "Great Tree",
    chests: [
      { name: "Inside the Kilo Admiral's Cave" },
      { name: "On the spawn hill of the banana and Elite Pirates, Also closest hill to Hydra Island" },
      { name: "On the same hill where there is the Marine Rear Admiral" },
      { name: "On the hill behind the entrance for Kilo Admiral" },
      { name: "On an island to the left of the Set Home Point" },
      { name: "Behind the entrance of the tree" },
      { name: "Below the entrance of the tree" },
      { name: "Near the Crew Captain" },
    ],
  },
  // Floating Turtle
  {
    area: "Floating Turtle",
    chests: [
      { name: "On the Right Tower near the Musketeer Pirates" },
      { name: "Two are in Longma's room 1" },
      { name: "Two are in Longma's room 2" },
      { name: "On the broken bridge near the Fishman Captain" },
      { name: "In the fence near the entrance of Beautiful Pirate's Domain" },
      { name: "At the back of the entrance" },
      { name: "On the top of mansion" },
      { name: "In the mansion near Tort" },
      { name: "In front of a wooden house near the Musketeer Pirates" },
      { name: "On the tower nearest to the Mansion" },
      { name: "On the tower nearest to the Jungle Pirates" },
      { name: "To the right of Longma" },
    ],
  },
  // Haunted Castle
  {
    area: "Haunted Castle",
    chests: [
      { name: "Next to the railing near the Reborn Skeletons" },
      { name: "In the basement with the Possessed Mummy" },
      { name: "In the feet of a tree in the Living Zombie area" },
      { name: "In the same room as Home Points and Haunted Castle Quest Giver 1" },
      { name: "In the Ports of the Island" },
      { name: "Near the Demonic Souls, go up the stairs you should see it" },
      { name: "On a tree near Living Zombie" },
      { name: "Two in the same room with Death King 1" },
      { name: "Two in the same room with Death King 2" },
      { name: "Below the bridge near Soul Reaper door" },
      { name: "In the barrelman at the peak of the island there are 3 chests" },
    ],
  },
  // Peanut Land
  {
    area: "Peanut Land",
    chests: [
      { name: "Near a Peanut Scouts" },
      { name: "On some hill-like rocks near to Peanut Scout" },
      { name: "Behind a rock near the Peanut President" },
      { name: "Behind a rock near Peanut Scout" },
      { name: "Behind a bread-building" },
      { name: "On the stone-like tree near the peanut presidents" },
    ],
  },
  // Ice Cream Land
  {
    area: "Ice Cream Land",
    chests: [
      { name: "Near the Port" },
      { name: "Three near the Ice Cream Commanders 1" },
      { name: "Three near the Ice Cream Commanders 2" },
      { name: "Three near the Ice Cream Commanders 3" },
      { name: "On the building coated in orange Ice Cream near the Cake Queen" },
    ],
  },
  // Cake Land
  {
    area: "Cake Land",
    chests: [
      { name: "Behind a cookie near the Head Bakers" },
      { name: "On top of some barrels in the Largest House" },
      { name: "Behind a cookie near the Cookie Crafters" },
      { name: "Behind the largest building" },
      { name: "On the Building in the center of the Cake Guard" },
    ],
  },
  // Cocoa Land
  {
    area: "Cocoa Land",
    chests: [
      { name: "Two behind a building near the Candy Rebels 1" },
      { name: "Two behind a building near the Candy Rebels 2" },
      { name: "One in the opposite direction of the two chests from above" },
      { name: "On top of a building battled with a purple liquid" },
      { name: "On a rock next to the mountain" },
      { name: "On the tree on a hill to the right of chocolate bar battlers" },
    ],
  },
  // Castle on the Sea
  {
    area: "Castle on the Sea",
    chests: [
      { name: "Near the fighting style teachers" },
      { name: "On the left side of the building of the Elite Hunter" },
      { name: "Right next to the shelf behind the Butler" },
      { name: "By the four towers of the sea (except one, where it is empty)" },
      { name: "Two on the Square in the middle of each of the gardens 1" },
      { name: "Two on the Square in the middle of each of the gardens 2" },
      { name: "On top of the Tallest building on the left" },
    ],
  },
  // Tiki Outpost
  {
    area: "Tiki Outpost",
    chests: [
      { name: "On a tower behind the Tiki Quest Giver 1" },
      { name: "To the right side of the big gates" },
      { name: "To the left side of the big gates" },
      { name: "In a small building to the right of the behind big gate" },
      { name: "On a grassy building above the Sun-kissed Warriors (With a tree inside of it)" },
      { name: "On a small tower behind the lowest Isle Champions" },
      { name: "On top of the anchor inside the middle tower" },
    ],
  },
];

const chestContainer = document.getElementById('chest-container');
const resetButton = document.getElementById('reset-button');

var index=1;

function createChestElement(chest) {
  const chestElement = document.createElement('div');
  chestElement.classList.add('chest');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = localStorage.getItem(`${chest.area}-${chest.name}`) === 'true';
  checkbox.addEventListener('change', () => {
    localStorage.setItem(`${chest.area}-${chest.name}`, checkbox.checked);
  });

  const label = document.createElement('label');
  label.textContent = index+': '+chest.name;
  index++;

  chestElement.appendChild(checkbox);
  chestElement.appendChild(label);

  return chestElement;
}

function createAreaElement(area) {
  const areaElement = document.createElement('div');
  areaElement.classList.add('area');

  const areaTitle = document.createElement('h2');
  areaTitle.textContent = area.area;

  const chestList = document.createElement('div');

  area.chests.forEach((chest) => {
    chestList.appendChild(createChestElement(chest));
  });

  areaElement.appendChild(areaTitle);
  areaElement.appendChild(chestList);

  return areaElement;
}

chestData.forEach((area) => {
  chestContainer.appendChild(createAreaElement(area));
});

resetButton.addEventListener('click', () => {
  localStorage.clear();
  chestData.forEach((area) => {
    area.chests.forEach((chest) => {
      localStorage.removeItem(`${chest.area}-${chest.name}`);
    });
  });
  // Update checkboxes visually based on reset state
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

