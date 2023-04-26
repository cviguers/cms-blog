async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;


    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // The Controller will handle this 'put' request.
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // If the response is ok, that means that the blog was updated successfully. 
    if (response.ok) {
      document.location.replace(`/posts/${id}`);
    } else {
      alert('Failed to edit post');
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('id')) {
      const id = event.target.getAttribute('id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
};
  
document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);
  
document
  .querySelector('.deleteBtn')
  .addEventListener('click', delButtonHandler);