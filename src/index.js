import "./styles/styles.sass"
import "./styles/styles.css"

let forms = document.querySelectorAll("form")
let overlay = document.querySelector(".overlay")
let modal = document.querySelector(".thanks")
let inputs = document.querySelectorAll(".form__telInput")
console.log(forms)
function validate(e){    
    e.preventDefault()
    let currForm = e.target 
    if(currForm.querySelector(".form__error")){
        currForm.querySelector(".form__error").remove()
    }  
    let value = currForm.querySelector(".form__telInput").value

    let checkSymbols = true;
    let symbols = `!"@#№$;%^:&&?*()_-=`
    for(let symb of symbols){
        if(value.includes(symb)){
            checkSymbols = false
            break;
        }
    }
    
    let checkLetters = value.split(``).filter(item=> item==+item).length > 0 ? true : false
    let checkSize = value.length < 6 ? false : value.length > 12 ? false:true

    let checkPlus = value.includes("+") ? true : false

  
    if(!checkSymbols){
        createError("Введены недопустимые символы")
        return;
    }
    if(!checkLetters){
        createError("Допускаются только цифры")
        return;
    }
    if(!checkPlus){
        createError("Номер должен начинаться с +")
        return;
    }
    if(!checkSize){
        createError("Номер неверной длины")
        return;
    }
    
  

    function createError(msg){
        let error = document.createElement('div')
        error.innerHTML = msg;
        error.classList.add("form__error")
        currForm.prepend(error);
    }
    overlay.style.display = `block`
    modal.style.display = "block"
    currForm.querySelector(".form__telInput").value = ""

    setTimeout(() => {
        overlay.style.display = `none`
        modal.style.display = "none"
    }, 2000);
}

forms.forEach((item)=>{    
    item.addEventListener('submit',validate)
});

inputs.forEach((item)=>{
    item.addEventListener(`focus`,function(e){
        item.value = "+7"
    })
})



let burgers = document.querySelectorAll(".burger")
let logo = document.querySelector(".nav__logoWrapper")
function onBurgerClick(e){   
    e.preventDefault()   
    let currBurger = window.innerWidth > 450 ? burgers[1]: burgers[0]
    currBurger.removeEventListener(`click`,onBurgerClick)
    // logo.removeEventListener(`click`,onBurgerClick)
    let navAnchors = document.querySelector(".nav__anchorsWrapper")   
    if(currBurger.contains(e.target) || e.target.contains(currBurger)){        

        let spans = currBurger.querySelectorAll("span")
        spans[1].style.display = `none`
        spans[0].style.transform = `rotate(45deg) translate(2px, 1px)` 
        spans[2].style.transform = `rotate(-45deg) translate(1px, 0px)`
        spans[2].style.marginTop = '0'
    
    
    
        navAnchors.style.display = `flex`
    
        function back(e){     
            e.preventDefault()   
            spans[0].style.transform = `none` 
            spans[2].style.transform = `none`
            spans[2].style.marginTop = '5px'
            spans[1].style.display = `block`
            navAnchors.style.display = `none`
            currBurger.removeEventListener(`click`,back)
            // logo.removeEventListener(`click`,back)
            currBurger.addEventListener(`click`,onBurgerClick)
            // logo.addEventListener(`click`,onBurgerClick)
          }
          currBurger.addEventListener(`click`,back)
        //   logo.addEventListener(`click`,back)  

    }else{
        return
    }




}

burgers.forEach((item)=>{
    item.addEventListener(`click`,onBurgerClick)
})
