document.addEventListener("DOMContentLoaded", function() {
    const incrementButton = document.getElementById("incrementButton");
    const scoreDisplay = document.getElementById("scoreDisplay");
  
    const username = localStorage.getItem('username');
    if (!username) {
      window.location.href = 'login.html';
      return;
    }  
  
    fetchScore(username);
  
    incrementButton.addEventListener("click", function() {
      incrementScore(username);
    });  
  
    function fetchScore(username) { 
      fetch(`http://basic-web.dev.avc.web.usf.edu/${username}`) 
        .then(response => {
          if (response.ok) { 
            return response.json();
          } else if (response.status === 404) { 
            return { id: username, score: 0 }; 
          } else { 
            throw new Error("Network response was not ok.");   
          } 
        })
        .then(data => {
          console.log('Fetched score:', data.score); 
          updateDisplay(data.score);   
          incrementButton.disabled = false; // Enable the increment button   
        }) 
        .catch(error => {
          console.error('Error fetching score:', error); 
        });  
    } 
  
    function incrementScore(username) {
      const currentScore = parseInt(scoreDisplay.dataset.score, 10);
      const newScore = currentScore + 1;
      console.log('Incrementing score:', currentScore, 'to', newScore);
      
      fetch(`http://basic-web.dev.avc.web.usf.edu/${username}`, { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: newScore })
      })
        .then(response => {
          if (response.ok || response.status === 201) {
            return response.json();
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then(data => {
          console.log('Updated score:', data.score);
          updateDisplay(data.score);
        })
        .catch(error => {
          console.error('Error incrementing score:', error);
        });
    }
  
    function updateDisplay(score) {
      scoreDisplay.dataset.score = score;
      if (score % 15 === 0) {
        scoreDisplay.textContent = "FizzBuzz";
      } else if (score % 3 === 0) {
        scoreDisplay.textContent = "Fizz";
      } else if (score % 5 === 0) {
        scoreDisplay.textContent = "Buzz";
      } else {
        scoreDisplay.textContent = `Score: ${score}`;
      }
    }
  });
  