let judul =["Test Javascript"];
let Create = ["Create by : Tumulo, Septiano Rivo Chandra"];
let ttl = ["Tempat tanggal lahir : Gebe, 07/09/2002"];
let MK = ["Mata Kuliah : Web Design"];

console.log(judul);
console.log(Create);
console.log(ttl);
console.log(MK);

let umur,pilih;

alert("Hi... Nama saya Tumulo, Septiano")
umur = prompt ("Coba tebak umur saya!! : ");

function panggil(){   
  if(umur==18){         
    ket = "Tepat sekali :)";
  }
  else{
    ket = "Kurang tepat :(";
  }
  alert(ket);
}
panggil();

function mode() {
  document.body.classList.add('bg-active');
  document.getElementById("sw-on").classList.add('active');
  document.getElementById("sw-off").classList.remove('active');  
  document.body.style.background="linear-gradient(to left, #000050, #167792)"
  document.querySelector('.kepala').style.backgroundColor="#000040";
}
function dark() {
  document.body.classList.remove('bg-active');
  document.getElementById("sw-off").classList.add('active');
  document.getElementById("sw-on").classList.remove('active');  
  document.body.style.background="#000000"
  document.querySelector('.kepala').style.backgroundColor="#2C3539";
}

function validateform() {
    if(document.forms["formcontact"]["name"].value==""){
        alert("Nama Tidak boleh kosong");
        document.forms["formcontact"]["name"].focus();
        return false;
    }
    if(document.forms["formcontact"]["email"].value==""){
        alert("Email Tidak boleh kosong");
        document.forms["formcontact"]["email"].focus();
        return false;
    }
    else{
        alert("berhasil")
    }
    
}






//PERCOBAAN

// function mode(){
//     document.body.style.background="#00001a"
//     document.querySelector('.kepala').style.backgroundColor="#000040";
// }

// let title=document.getElementsByTagName('h1')[0].innerText;
//  console.log(title);

// title = document.getElementById('h2')[0].innerText;
// console.log(title);

// let value=document.getElementById('email').value;
// console.log(email); 

// function respon() {
//     let value=document.getElementById("email").value;
//     document.getElementsByClassName("respon").innerText=value;
// }

// function helloworld() {
//     let value=document.getElementById("umur").value;
//     document.getElementsByTagName("p")[1].innerText=value; 
// }
// function warna(color){
//     document.body.style.background=color;
// }


// function darkmode() {
//     let value=document.getElementById('dark').value;
//     document.getElementsByTagName('p')[1].innerText=value;
//     document.querySelector('.header').style.color = "red";
//     document.querySelector('.header').style.fontSize="3em";
//     document.querySelector('.header').style.backgroundColor="blue";
     
// }

// if(localStorage.getItem('preferredTheme')=='dark'){
//     setDarkMode(true)
// }
// function setDarkMode(isDark){
//     var darkBtn = document.getElementById('darkBtn')
//     var normalBtn = document.getElementById('normalBtn')

//     if(isDark){
//         normalBtn.style.display="block"
//         darkBtn.style.display="none"
//         localStorage.setItem('preferredTheme','dark');
//     }
//     else{
//         normalBtn.style.display="none"
//         darkBtn.style.display="block"
//         localStorage.removeItem('preferredTheme');
//     }

//     document.body.classList.toggle('darkmode')
// }

// if(localStorage.getItem('theme')=='dark')
//     setDarkMode()

//     function setDarkMode(){
//         let mode= ''
//         let isDark=document.body.classList.toggle('darkmode')

//         if(isDark){
//             mode='Dark'
//             localStorage.setItem('theme','dark')
//         }
//         else{
//             mode='Normal'
//             localStorage.removeItem('theme')
//         }
//         document.getElementById('darkBtn').innerHTML=mode
//     }

// function rubah(){
//     document.querySelector('.nama').style.backgroundColor="black";
// }

// function rubah() {
//     document.querySelector('body').style.backgroundColor="black";
     
// }

// function warna(color){
//     document.body.style.background=color;
// }

// function mode() {
//     document.body.style.backgroundColor="rgb(241, 166, 166)"
//     document.body.style.color="white"
//     // document.querySelector('.border').style.backgroundColor="rgb(241, 166, 166)";
// }
// function rubah() {
//     let value=document.getElementById('umur').value;
//     document.getElementsByTagName('p')[1].innerText=value;
//     document.querySelector('.nav').style.color = "red";
//     document.querySelector('.nav').style.fontSize="3em";
//     document.querySelector('body').style.backgroundColor="blue";
     
// }


// function helloworld() {
//     let value=document.getElementById('umur').value;
//     document.getElementsByTagName('p')[1].innerText=value;
//     document.querySelector('.header').style.color = "red";
//     document.querySelector('.header').style.fontSize="3em";
//     document.querySelector('body').style.backgroundColor="blue";
     
// }


