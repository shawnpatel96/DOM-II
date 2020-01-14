// Your code goes here
const busImage = document.querySelector(".bus-logo")    // Grabbing class
 // Event On the Class
busImage.addEventListener("click", () => {     
    busImage.style.transform ="scale(1.2)";
    busImage.style.transition = "transform 0.3s"
});

// Revert back to normal
busImage.addEventListener("mouseleave", ()=> {
    busImage.style.transform = "scale(1)"
  })

/////////////////////////////////////////////////////////////////////////////////////

  document.querySelectorAll(".nav-link").forEach( el => {   // Grabbing Class
    // Event on the Class
    el.addEventListener("mouseenter", () => {
      el.style.color = "red";
      el.style.transform ="scale(2)";
   });

   // Revert back to normal
   el.addEventListener("mouseleave", () =>{
    el.style.transform = "scale(1)";
    el.style.color= "black";
  })
  });

/////////////////////////////////////////////////////////////////////////////////////

  const enlargeText = document.querySelector('.container-text'); // Grabbing Class
// Event on the Class
  enlargeText.addEventListener("dblclick", () => {
  enlargeText.style.transform="scale(2.2)";
  enlargeText.style.color="hotpink";
});
// Revert back to normal
enlargeText.addEventListener("mouseleave", () => {
    enlargeText.style.transform="scale(1)";
    enlargeText.style.color='black';
  });


////////////////////////////////////////////////////////////////////////////////////

  // Propagation test 

const largeText = document.querySelector('.content-section')
largeText.addEventListener("dblclick", () => {
    largeText.style.transform="scale(2.2)";
    
  });
  

  const yellowText = document.querySelector('.text-content')
  yellowText.addEventListener("dblclick", () => {
    yellowText.style.transform="scale(1.2)";
    yellowText.style.color="yellow";
    event.stopPropagation();
  });

  // Revert to normal
  largeText.addEventListener("mouseleave", () => {
    largeText.style.transform="scale(1)";
    largeText.style.color='black';
  }); 

  yellowText.addEventListener("mouseleave", () => {
    yellowText.style.transform="scale(1)";
    yellowText.style.color='black';
  });

/////////////////////////////////////////////////////////////////////////////////

// Prevent Links from refresing the Page
const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Page prevented from refreshing")
})

//////////////////////////////////////////////////////////////////////////////////


// Creating Event Template
 function scroll(event){
     event.preventDefault();
     scale +=event.deltaY *-0.01;
     scale = Math.min(Math.max(.125, scale), 4);
     zoom.style.transform = `scale(${scale})`;
 }

 let scale = 1;
 const zoom=document.querySelector('.img-content');
 zoom.onwheel=scroll;

 //Revert back to normal
 zoom.addEventListener("mouseleave", () => {
    zoom.style.transform="scale(1)";
   
  });

/////////////////////////////////////////////////////////////////////////////////////


const box = document.getElementById('body')   // grabbing ID

box.addEventListener('mousemove', rainbowEvent);
function rainbowEvent(e){
    document.body.style.backgroundColor = "("+e.offsetX+","+e.offsetY+", 40)";
}

/////////////////////////////////////////////////////////////////////////////////////

const buttonEvent = document.getElementById('button');   //grabbing ID

 buttonEvent.addEventListener('mousedown', runEvent)
 buttonEvent.addEventListener('mouseup', runEvent)
 buttonEvent.addEventListener('mouseover', runEvent)
 function runEvent(e) {
     console.log('EVENT: '+e.type)
 }


 ////////////////////////////////////////////////////////////////////////////////////

 window.addEventListener('scroll',()=>{
     const scrollNum= window.scrollY
    
     console.log(scrollNum);
     if(scrollNum === 799){
        alert('You have reached the bottom of the page!')
    }
    if(scrollNum === 1){
        alert('You have reached the Top of the page!')
    }
 });

 ////////////////////////////////////////////////////////////////////////////////////

const message = document.getElementById('message');
const myInput = document.getElementById('myInput');

 myInput.addEventListener('focus', ()=>{
    message.textContent=myInput.value
    console.log('EVENT: focus')
 })