function renderData(data)
{
  const title = document.querySelector('section#movieDetails h4');
  title.textContent = data.title;
  const summary = document.querySelector('section#movieDetails p');
  summary.textContent = data.summary;
}

const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit',(e) => {
    e.preventDefault();
    // console.log(e)
    const input = e.target.querySelector('#searchByID').value;
    console.log(input);

    fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    .then(data => renderData(data))

  })

  
}

document.addEventListener('DOMContentLoaded', init);