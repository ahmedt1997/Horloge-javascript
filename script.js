const a = document.querySelector('.clock');






const timer = () =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   // console.log(hours,":",minutes,":",seconds);


   const template = `<span>${hours} : </span>  
                     <span>${minutes} : </span> 
                     <span>${seconds}</span>
   
   `


   a.innerHTML =template;
};



setInterval(timer,1000);


