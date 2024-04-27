function addDescriptionInput() {
    const form = document.querySelector('form');
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Enter fruit description...';
  
    const addButton = form.querySelector('button');
    form.insertBefore(descriptionInput, addButton);
  }
  
  
  // Show the fruit description in italics, after fruit name
  function showDescription() {
    const fruitItems = document.getElementsByClassName('fruit');
    const fruitDesc = [
      'Banana is long in length',
      'Apple is too costly',
      'Orange is one of the most popular fruits',
      'King of fruits',
    ];
    for (let i = 0; i < fruitItems.length; i++) {
      const para = document.createElement('p');
      para.setAttribute('style', 'font-style: italic');
      para.setAttribute('class', 'fruit-desc');
      const textForPara = document.createTextNode(fruitDesc[i]);
      para.appendChild(textForPara);
  
      fruitItems[i].appendChild(para);
    }
  }
  
  // Create a filter that shows only those fruits whose either name or description or both matches the entered text
  const filter = document.getElementById('filter');
  filter.addEventListener('keyup', function (event) {
    const textEnter = event.target.value.toLowerCase();
  
    const fruitItems = document.getElementsByClassName('fruit');
    for (let i = 0; i < fruitItems.length; i++) {
      const currentName = fruitItems[i].firstChild.textContent.toLowerCase();
      const currentDesc = fruitItems[i].getElementsByClassName('fruit-desc')[0].textContent.toLowerCase();
  
      if (currentName.includes(textEnter) || currentDesc.includes(textEnter)) {
        fruitItems[i].style.display = 'list-item';
      } else {
        fruitItems[i].style.display = 'none';
      }
    }
  });
  
  