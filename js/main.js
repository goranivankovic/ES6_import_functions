import gender from './gender.js';
import job from './profesion.js'



let root = document.getElementById('root');



let name ='John';
let lastname = 'Doe';
root.innerHTML=`<h3>My name is ${name} ,
my lastname is ${ lastname} ,  i am ${gender} years old <br>
${job}
</h3> `;