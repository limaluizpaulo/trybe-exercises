function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
   function createDays (){
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

      let days = document.querySelector('#days');
      for (let index = 0; index < dezDaysList.length; index++) {
          let day = document.createElement("li");
          day.innerText = dezDaysList[index];
          day.className = 'day';
          days.appendChild(day);


        if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
          day.innerText = dezDaysList[index];
          day.className = day.className + ' ' + 'holiday'
          days.appendChild(day);
        } 
        
        if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
          day.innerText = dezDaysList[index];
          day.className = day.className + ' ' + 'friday'
          days.appendChild(day);
        } 
        }
      }

        createDays();

        function holliday (string){
          let btn = document.querySelector('.buttons-container');
          let button = document.createElement( 'BUTTON')
          button.innerHTML = string;
          button.id = 'btn-holiday';
          btn.appendChild(button)
          
        }

        holliday('Feriado')


        let btn = document.querySelector('#btn-holiday');
        btn.addEventListener('click', hollidayColor)

        function hollidayColor(){
        let feriado = document.querySelectorAll(".holiday");
        for (i in feriado) {
          if (feriado[i].style.backgroundColor === "rgb(76, 164, 109)") {
            feriado[i].style.backgroundColor = "rgb(238, 238, 238)";
          } else {
            feriado[i].style.backgroundColor = "rgb(76, 164, 109)";
          }
        }
      }

      function friday (string){
        let btn = document.querySelector('.buttons-container');
        let button = document.createElement( 'BUTTON')
        button.innerHTML = string;
        button.id = 'btn-friday';
        btn.appendChild(button)
        
      }

      friday('Sexta-Feira')

      let btn2 = document.querySelector('#btn-friday');
        btn2.addEventListener('click', fridayColor)

        function fridayColor(){
        let sexta = document.querySelectorAll(".friday");
        for (i in sexta) {
          if (sexta[i].style.backgroundColor === "rgb(50, 50, 50)") {
            sexta[i].style.backgroundColor = "rgb(238, 238, 238)";
          } else {
            sexta[i].style.backgroundColor = "rgb(50, 50, 50)";
          }
        }
      }





