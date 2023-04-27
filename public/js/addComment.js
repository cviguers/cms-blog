async function newFormHandler(event) {
    event.preventDefault();
  
    const comments = document.querySelector('#comments').value;
  
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        comments,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
     document.location.replace('/');
    } else {
      alert('Failed to add post');
    }
  }
  
  document
    .querySelector('.comments-form')
    .addEventListener('submit', newFormHandler);
  