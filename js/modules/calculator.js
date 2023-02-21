function calculator(){
    const genderWrapper = document.querySelector(".calculating__choose");
    //genderWrapper.nextElementSibling.nodeName
    function getClosestsibiling(genderBox) {
        if (genderBox.nextElementSibling) {
            return genderBox.nextElementSibling;
        } else {
            return genderBox.previousElementSibling
        }
    }
    
    
    genderWrapper.addEventListener("click", (event) => {
    
        //console.log(getClosestsibiling(event.target));
    
        if (event.target && event.target.tagName === "DIV") {
            removeClass(event.target);
        }
    
    });
    
    const activityWrapper = document.querySelector(".calculating__choose_big");
    //activityWrapper.parentElement.children
    
    const removeClass = function (activityBox) {
        for (let box of activityBox.parentElement.children) {
            if (box != activityBox && box.classList.contains("calculating__choose-item_active")) {
                box.classList.remove("calculating__choose-item_active");
                activityBox.classList.add("calculating__choose-item_active");
            }
        }
    
    }
    
    
    activityWrapper.addEventListener("click", (event) => {
    
        if (event.target && event.target.tagName === "DIV") {
            removeClass(event.target);
        }
    });
    
    const result = document.querySelector('.calculating__result span');
    let sex,height,weight,age,ratio;
    
    
    
    
    
    
    
    function calctTotal(){
    
        height = +document.querySelector('#height').value,
        weight = +document.querySelector('#weight').value,
        age = +document.querySelector('#age').value;
        sex = getValueFromDiv(genderWrapper);
        console.log(sex);
        ratio = getValueFromDiv(activityWrapper);
    
    
        if(!(sex || height!=='' || weight!=='' || age!=='' || ratio)){
            result.textContent = ' ';
            return
        }
        else if(sex === 'man'){
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
        else{result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    
        }
    }
    
    
    
    
        const inputsFields = document.querySelector('.calculating__choose_medium');
    
        inputsFields.childNodes.forEach(el =>{
            if(el.nodeName === 'INPUT'){
                el.addEventListener('input',()=>{
                    console.log('el')
                    calctTotal();
                });
            }
        })
    
    
    
        
    
    
        function getValueFromDiv(parent){
            for(let box in parent.childNodes){
                if(parent.children[box].classList.contains('calculating__choose-item_active')){
                    return parent.children[box].getAttribute('data-ratio');
                }
            }
        }
    
        const calculatingField = document.querySelector('.calculating__field');
        calculatingField.addEventListener('click',()=>{
            calctTotal();
        })
     
       
        
    
}

export default calculator;