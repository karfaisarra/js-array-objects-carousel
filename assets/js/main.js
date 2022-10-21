const images = [
    {
        image:'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image:'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image:'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image:'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image:'img/05.webp',
        title: "Marvels Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];
  
  
  // Selezione elementi della DOM 
  const slidesElement = document.querySelector('.slides'); //dove inserire le immagini .slides usando querySelector()
  const nextElement = document.querySelector('.next'); // la freccia next
  const prevElement = document.querySelector('.prev'); // la freccia prev
  
  
  
  // Seleziono l'indice dell'immagine che voglio attivare
  let activeImage = 0;

  // inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito
  
  for (let i = 0; i < images.length; i++) {
    const slideUrl = images[i].image;
    const titolo = images[i].title;
    const testo = images[i].text;
    //console.log(slideUrl);
    const imgMarkup = 
    `<div class="card ${i === activeImage ? 'active' : ''}">
        <img class="img-fluid " src="./assets/${slideUrl}" alt= "">
        <div class="body_card">
            <h3 class="text-center">${titolo}</h3>
            <p class="text-center">${testo}</p>
        </div>
    </div>`;
    //prendo l'elemento della dom dove inserire le imamgini e le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
  // aggiungo event listener sulla freccia del next
  nextElement.addEventListener('click', function () {
    //console.log('Ho cliccato su next');
  
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > .card.active')
    //console.log(images[activeImage]);
  
    //console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImage++ // activeImage = activeImage + 1
    if (activeImage ==5) {
        activeImage=0;
    }

    //console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('card')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  
  });
  
  
  // aggiungo event listener sulla freccia del prev
  prevElement.addEventListener('click', function () {
    //console.log('Ho cliccato su prev');
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > .card.active')
    //console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    if (activeImage == 0) {
        activeImage = 5;
    }
    activeImage-- // activeImage = activeImage - 1
    

    //console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('card')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  });