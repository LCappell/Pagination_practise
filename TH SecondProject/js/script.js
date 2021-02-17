// Set variables on the required areas of our HTML
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

// Set maximum students per page
const studentPerPage = 9;


function showPage(list, page) {
   const startIndex = ((page * 9) - 9);
   const endIndex = (page * 9); 

  
   studentList.innerHTML = '';

   // Loops through the array

   for(let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {

         /*
            variables below are student's information provided by the 
            list parameter 
         */ 

         // Set variable to our array items 
         const array = list[i]
         
         // Combine first and last night - code is more readable 
         const fullName = `${array.name.first} ${array.name.last}`

       

         /*
            Layout will be shown with all the student info into list items
         */
         const layout = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${array.picture.medium} alt="Profile Picture">
                  <h3>${fullName}</h3>
                  <span class="email">${array.email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${array.registered.date}</span>
               </div>
            </li>
         `;
         
         studentList.insertAdjacentHTML('beforeend', layout);  
      }
   }
}

/*
   Function creates the elements for buttons on the page
*/

function addPagination(list) {

   // Get the required number of pages/buttons

   const numOfPages = Math.ceil(list.length/ studentPerPage);

   

   // Make linkList area empty so we can later add new layout
   linkList.innerHTML = '';

   
     // For loop is creating individual buttons on page and then adding the layour of the button HTML
   
   for (let i = 1; i <= numOfPages; i++) {
      const pageNumber = [i];
      const buttonHTML =
         `<li>
            <button type="button">${pageNumber}</button>
         </li>`;
      linkList.insertAdjacentHTML('beforeend', buttonHTML);

      const pageButton = document.querySelector('button');
      pageButton.className = 'active';
      }

     
       //  Event listener on the buttons in order to change page once clicked 
     
   
      linkList.addEventListener('click', (e) => {
         const clickEvent = e.target;
         if(clickEvent.tagName == 'BUTTON') {
            const activeButton = document.querySelector('.active');
            //Empty the className 
            activeButton.className = '';
            // Attach the required className
            clickEvent.className = 'active';
            const clickEventContent = clickEvent.textContent;

            showPage(list, clickEventContent);
         }
      });
   }

// Call Functions
   showPage(data, 1)
   addPagination(data)