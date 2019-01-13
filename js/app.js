document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
});

  const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.artist.value)
  // console.log(event.target.artwork.value)

  const listItem = document.createElement('div')

  const createListname = document.createElement('p')
  createListname.textContent = `Name: ${event.target.name.value}`
  listItem.appendChild(createListname)

  const createListartist = document.createElement('p')
  createListartist.textContent = `Artist: ${event.target.artist.value}`
  listItem.appendChild(createListartist)

  // const createListimage = document.createElement('p')
  // createListimage.textContent = `Cover Art: ${event.target.artwork.value}`
  // listItem.appendChild(createListimage)

  const list = document.querySelector('#record-collection-form')
  list.appendChild(listItem)

}
