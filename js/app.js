document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
});

  const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.artist.value);
  console.log(event.target.cost.value);
  // console.log(event.target.condition.value);

  const listItem = document.createElement('div')

  const createListname = document.createElement('h2')
  createListname.textContent = `Name: ${event.target.name.value}`
  listItem.appendChild(createListname)

  const createListartist = document.createElement('h3')
  createListartist.textContent = `Artist: ${event.target.artist.value}`
  listItem.appendChild(createListartist)

  const createListcost = document.createElement('h4')
  createListcost.textContent = `Cost £: ${event.target.cost.value}`
  listItem.appendChild(createListcost)

  // const createListcondition = document.createElement('p')
  // createListcondition.textContent = `Conditon: ${event.target.condition.value}`
  // listItem.appendChild(createListcondition)


  const list = document.querySelector('#record-collection-form')
  list.appendChild(listItem)

}
