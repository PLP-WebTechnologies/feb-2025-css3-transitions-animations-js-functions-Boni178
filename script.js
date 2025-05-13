

 
    const flipButton = document.getElementById('flipButton');
    const cardContainer = document.querySelector('.card-container');
    const card = document.getElementById('animalCard');
    const animalSelector = document.getElementById('animalSelector');
    const animalName = document.getElementById('animalName');
    const animalImage = document.getElementById('animalImage');
    const animalNameBack = document.getElementById('animalNameBack');
    const animalDiet = document.getElementById('animalDiet');
    const animalDescription = document.getElementById('animalDescription');

    const animals = {
      lion: {
        name: 'Lion',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
        diet: 'Carnivore — mainly antelopes, zebras, wildebeest.',
        description: 'Known as the king of the jungle, lions live in prides and have a mighty roar heard up to 8 km away.'
      },
      elephant: {
        name: 'Elephant',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg',
        diet: 'Herbivore — grasses, bark, fruit, and roots.',
        description: 'Elephants are the largest land animals with strong social bonds and exceptional memory.'
      },
      panda: {
        name: 'Panda',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
        diet: 'Herbivore — mainly bamboo.',
        description: 'Pandas are known for their black-and-white fur and gentle temperament. They spend most of the day eating bamboo.'
      }
    };


    flipButton.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    animalSelector.addEventListener('change', () => {
      const selected = animalSelector.value;
      const animal = animals[selected];

      animalName.textContent = animal.name;
      animalImage.src = animal.image;
      animalImage.alt = animal.name;
      animalNameBack.textContent = animal.name;
      animalDiet.textContent = animal.diet;
      animalDescription.textContent = animal.description;

      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
      }
    });