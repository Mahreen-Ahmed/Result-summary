const markslist = document.querySelector('ul');

fetch('/data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(marks => {
            markslist.insertAdjacentHTML('beforeend', `<li class="summarytag ${marks.class}"><span class="category"><img src="${marks.icon}" alt="icon-reaction"
              class="icon">${marks.category}</span>
          <p class="score">${marks.score}<span>/ 100</span></p>
        </li>`)
        });

    })