
let fetchMilkVolumeForItem = item => {
    let milkSlider = document.querySelector('.'+ item + " .milk-range");
    let volumeSlider = document.querySelector('.'+ item + " .volume-range");

    milkSlider.onchange = function() {
        // output.innerHTML = 
        console.log(this.value);
       }
       
       volumeSlider.onchange = function() {
           // output.innerHTML = 
            console.log(this.value);
          }
   }


let eventListenerToPersonaliseItem = item => {
    let personalise = document.querySelector('.'+ item +  ' .personalise');
    let customiseDiv = document.querySelector('.'+ item + ' .customise-div');
    let customiseDivVisibility = customiseDiv.style.display;
    
    personalise.addEventListener('click', ()=>{
        // const {display} = customiseDiv.style;
        console.log(customiseDiv.style.display);
        (customiseDiv.style.display === "none" || " ") ? 
        customiseDiv.style.display = "block" : customiseDiv.style.display = "none";
    
    });
}

let eventListenerToDispenseItem = item => {
    let dispense = document.querySelector('.'+ item +  ' .dispense');
    let milkRange = document.querySelector('.'+ item + ' .customise-div .milk-range');
    let volRange = document.querySelector('.'+ item + ' .customise-div .volume-range');

    dispense.addEventListener('click', ()=>{
    const URL = '/dispense'
    const xhr = new XMLHttpRequest();
    // console.log(xhr)
    // console.log({item: item, milk: milkRange.value, volume: volRange.value});
    var person = {"user_id": "AAR", "item":item, "milk":milkRange.value, "volume":volRange.value};
    var asJSON = JSON.stringify(person);
    console.log(asJSON)
    xhr.open('POST', URL);
    xhr.send(asJSON);
    });
}



eventListenerToPersonaliseItem('item1');
eventListenerToPersonaliseItem('item2');
eventListenerToPersonaliseItem('item3');

eventListenerToDispenseItem('item1');
eventListenerToDispenseItem('item2');
eventListenerToDispenseItem('item3');