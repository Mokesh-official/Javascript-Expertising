document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e)
  window.location.href = e.target.id
})
