function showMessage(choice) {
  const questionSection = document.getElementById('question-section');
  const messageSection = document.getElementById('message-section');
  const messageElement = document.getElementById('message');

  questionSection.style.display = 'none';

  if (choice === 'yes') {
    messageElement.textContent = 'I LOVE YOU SO FUCKING MUCH AND HAPPY THAT UR IN MY LIFE AGAIN UR SO COOL AND CUTE AND HOT AND I LOVE U DUMMY';
  } else {
    messageElement.textContent = 'NUH UH YOU CANT SAY NO YOURE STILL GONNA BE MY VALENTINE STUPUD. I LOVE YOU SO MUCH';
  }

  messageSection.style.display = 'block';
}
