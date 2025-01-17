const dates = document.querySelector(".date");
 let d = new Date();
 dates.innerHTML=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} `; //  on the month i added plus 1 because, in this month of january i should get "0" as the value