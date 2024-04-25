if (location.pathname == "/index.html") {
   
let name1 = document.querySelector(".name")
let inpname1 = document.querySelector("#name")
let btnname1 = document.querySelector("#btnName")

let n;


inpname1.addEventListener("keyup" , (e) =>{
    n = e.target.value;
})
btnname1.addEventListener("click" , () =>{
    if (n == "Alex") {
        btnname1.setAttribute("href" , "./password.html")
    } else {
        alert("user is not defined")
        btnname1.setAttribute("href" , "#")
    }
})
 
} else if (location.pathname == "/password.html"){
    let name1 = document.querySelector(".name")
    let inpname1 = document.querySelector("#name")
    let btnname1 = document.querySelector("#btnName")

    let p;
    
    
    inpname1.addEventListener("keyup" , (e) =>{
        p = e.target.value;
    })
    btnname1.addEventListener("click" , () =>{
        if (p == 7777) {
            btnname1.setAttribute("href" , "./olish.html")
        } else {
            alert("not defined")
            btnname1.setAttribute("href" , "#")
        }
    })   
}
if (location.pathname == "/olish.html"){
    let name1 = document.querySelector(".name")
    let inpname1 = document.querySelector("#name")
    let btnname1 = document.querySelector("#btnName")
    
    let p;
    
    
    inpname1.addEventListener("keyup" , (e) =>{
        p = e.target.value;
    })
    btnname1.addEventListener("click" , () =>{
        if (p < 10001) {
            btnname1.setAttribute("href" , "./javob.html")
        } else {
            alert("you don't have that much money")
            btnname1.setAttribute("href" , "#")
        }
    })  
    
}
if (location.pathname == "/javob.html" ) {
    const boredi =document.querySelector(".boredi")
    const xarajat =document.querySelector(".xarajat")
    const qoldi =document.querySelector(".qoldi")
   
    miqdor = 10000
    boredi.innerHTML = "Bor edi: " +`${miqdor}`
    // xarajat.innerHTML = ("xarjat qildi:"+" "+`${}`)
    // qoldi.innerHTML = ("qoldi:"+ " " + `${}`) 
    
}






