const addMovieModal = document.getElementById('add-modal');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');


const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};
const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movie.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
}

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}
const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    // deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};


const clearMovieInput = () => {
    for (const usrInput of userInput) {
        usrInput.value = '';
    }

};
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};
const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};
const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
}
const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInput();
}
const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrlValue = userInput[1].value;
    const ratinglValue = userInput[2].value;
    if (titleValue.trim() === '' ||
        imageUrlValue.trim === '' ||
        ratinglValue.trim() === '' ||
        +ratinglValue < 1 ||
        +ratinglValue > 5
    ) {
        alert('Please enter valid rating (1-5)!');
        return;
    }
    const newMovie = {
        ID: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratinglValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();

};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler)
