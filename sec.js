document.addEventListener('DOMContentLoaded', () => {
    // Example data structure
    const movieData = [
      {
        title: 'Oppenheimer',
        description: 'The story of the enigmatic physicist who developed the atomic bomb during World War II.',
        image: 'https://via.placeholder.com/300x200?text=Oppenheimer'
      },
      {
        title: 'Barbie',
        description: 'A vibrant, imaginative adventure of the famous doll as she navigates the real world.',
        image: 'https://via.placeholder.com/300x200?text=Barbie'
      },
      {
        title: 'Avatar: The Way of Water',
        description: 'The epic return to Pandora as Jake Sully and Neytiri explore new aquatic worlds.',
        image: 'https://via.placeholder.com/300x200?text=Avatar'
      },
      // Add more movies as needed
    ];
  
    // Function to update the movie card based on the selected movie
    function updateMovieCard(movie) {
      document.querySelector('.left-div .movie-title').textContent = movie.title;
      document.querySelector('.left-div p:nth-of-type(1)').textContent = `Rating: ${movie.rating || 'N/A'}`;
      document.querySelector('.left-div p:nth-of-type(2)').textContent = `Duration: ${movie.duration || 'N/A'}`;
      document.querySelector('.left-div p:nth-of-type(3)').textContent = `Genre: ${movie.genre || 'N/A'}`;
      document.querySelector('.left-div p:nth-of-type(4)').textContent = `Language: ${movie.language || 'N/A'}`;
      document.querySelector('.left-div p:nth-of-type(5)').textContent = `Showtimes: ${movie.showtimes || 'N/A'}`;
      document.querySelector('.left-div p:nth-of-type(6)').textContent = `Theater: ${movie.theater || 'N/A'}`;
      document.querySelector('.right-div img').src = movie.image;
      document.querySelector('.right-div img').alt = movie.title;
    }
  
    // Event listeners for movie selection
    document.querySelectorAll('.movie-title').forEach(titleElement => {
      titleElement.addEventListener('click', () => {
        const movieTitle = titleElement.textContent;
        const selectedMovie = movieData.find(movie => movie.title === movieTitle);
        if (selectedMovie) {
          updateMovieCard(selectedMovie);
        }
      });
    });
  });
  