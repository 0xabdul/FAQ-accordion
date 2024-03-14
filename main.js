
/*first plus and minus img selecting the dom elements using id*/
let plusone = document.getElementById('pluse-img-one');
let minusone = document.getElementById('minus-img-one');

/*second plus and minus img selecting the dom elements using id*/
let plustwo = document.getElementById('pluse-img-two');
let minustwo= document.getElementById('minus-img-two');

/*third plus and minus img selecting the dom elements using id*/
let plusthree = document.getElementById('pluse-img-three');
let minusthree= document.getElementById('minus-img-three');

/*fourth plus and minus img selecting the dom elements using id*/
let plusfour = document.getElementById('pluse-img-four');
let minusfour= document.getElementById('minus-img-four');

/* selecting the first content*/
let firstcontent= document.getElementById('first-content-hide-open');

/* selecting the second content*/
let secondcontent= document.getElementById('second-content-hide-open');

/* selecting the third content*/
let thirdcontent= document.getElementById('third-content-hide-open');

/* selecting the fourth content*/
let fourthcontent= document.getElementById('fourth-content-hide-open');

/* add event listener for user clicking the plus-img*/
plusone.addEventListener('click',()=>{
 firstcontent.style.display = 'block';
 minusone.style.display = 'block';
 thirdcontent.style.display = 'none';
 secondcontent.style.display = 'none';
 plusone.style.display = 'none';
 plustwo.style.display = 'block';
 plusthree.style.display = 'block';
 plusfour.style.display = 'block';
 minustwo.style.display = 'none';
 minusthree.style.display = 'none';
 minusfour.style.display = 'none';
 fourthcontent.style.display = 'none';
})
plustwo.addEventListener('click',()=>{
 secondcontent.style.display = 'block';
 firstcontent.style.display = 'none';
 fourthcontent.style.display = 'none';
 thirdcontent.style.display = 'none';
 minusone.style.display = 'none';
 minusthree.style.display = 'none';
 minusfour.style.display = 'none';
 plusone.style.display = 'block';
 plusthree.style.display = 'block';
 plusfour.style.display = 'block';
 minustwo.style.display = 'block';
 plustwo.style.display = 'none';
})
plusthree.addEventListener('click',()=>{
 thirdcontent.style.display = 'block';
 fourthcontent.style.display = 'none';
 minusthree.style.display = 'block';
 minusone.style.display = 'none';
 minustwo.style.display = 'none';
 plusone.style.display = 'block';
 plustwo.style.display = 'block';
 plusfour.style.display = 'block';
 minusfour.style.display = 'none';
 secondcontent.style.display = 'none';
 firstcontent.style.display = 'none';
 plusthree.style.display = 'none';
})
plusfour.addEventListener('click',()=>{
 fourthcontent.style.display = 'block';
 minusfour.style.display = 'block';
 minusone.style.display = 'none';
 minustwo.style.display = 'none';
 minusthree.style.display = 'none';
 plusthree.style.display = 'block';
 plusone.style.display = 'block';
 plustwo.style.display = 'block';
 secondcontent.style.display = 'none';
 firstcontent.style.display = 'none';
 thirdcontent.style.display = 'none';
 secondcontent.style.display = 'none';
 plusfour.style.display = 'none';
})
/* end */

/* add event listener for user clicking the minus-img*/
minusone.addEventListener('click',()=>{
 firstcontent.style.display = 'none';
 plusone.style.right = '2rem';
 plusone.style.display = 'block';
 minusone.style.display = 'none';
})
minustwo.addEventListener('click',()=>{
 secondcontent.style.display = 'none';
 plustwo.style.right = '2rem';
 plustwo.style.display = 'block';
 minustwo.style.display = 'none';
})
minusthree.addEventListener('click',()=>{
 thirdcontent.style.display = 'none';
 plusthree.style.right = '2rem';
 plusthree.style.display = 'block';
 minusthree.style.display = 'none';
})
minusfour.addEventListener('click',()=>{
 fourthcontent.style.display = 'none';
 plusfour.style.right = '2rem';
 plusfour.style.display = 'block';
 minusfour.style.display = 'none';
})
      