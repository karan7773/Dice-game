// var r1= Math.floor(Math.random()*6)+1;
// switch(r1){
//     case 1:
//         document.querySelector(".img1").setAttribute('src',"images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img1").setAttribute('src',"images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img1").setAttribute('src',"images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img1").setAttribute('src',"images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img1").setAttribute('src',"images/dice5.png");
//         break;
//     case 6:
//         document.querySelector(".img1").setAttribute('src',"images/dice6.png");
//         break;
//     default:
//         document.querySelector(".img1").setAttribute('src',"images/dice5.png");
// }
// var r2= Math.floor(Math.random()*6)+1;
// switch(r2){
//     case 1:
//         document.querySelector(".img2").setAttribute('src',"images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img2").setAttribute('src',"images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img2").setAttribute('src',"images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img2").setAttribute('src',"images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img2").setAttribute('src',"images/dice5.png");
//         break;
//     case 6:
//         document.querySelector(".img2").setAttribute('src',"images/dice6.png");
//         break;
//     default:
//         document.querySelector(".img2").setAttribute('src',"images/dice5.png");
// }
// if(r1>r2){
//     document.querySelector('h1').innerText="Player 1 wins";
// }else if(r1<r2){
//     document.querySelector('h1').innerText="Player 2 wins";
// }
// else{
//     document.querySelector('h1').innerText="Draw";
// }


var r1=Math.floor(Math.random()*6)+1;
var ri="dice"+r1+".png";
document.querySelectorAll('img')[0].setAttribute('src',"images/"+ri);
var r2=Math.floor(Math.random()*6)+1;
var ri2="dice"+r2+".png";
document.querySelectorAll('img')[1].setAttribute('src',"images/"+ri2);
if(r1>r2){
    document.querySelector('h1').innerText="🚩 Player 1 wins";
}else if(r1<r2){
    document.querySelector('h1').innerText="Player 2 wins 🚩";
}
else{
    document.querySelector('h1').innerText="Draw!";
}