// Reference all the elements
    var regTextbox = document.querySelector('.regText');
    var addRegButton = document.querySelector('.addRegBtn');
    var finalRegField = document.querySelector('.finalReg');
    var radioTown = document.querySelector('.radio-town');
    var showButton = document.querySelector('.showBtn');
    var showAllButton = document.querySelector('.showAllBtn');
    var testingField = document.querySelector('.testing');
    var errorsfield = document.querySelector('.errors')

// Add event listener to the buttons when is clicked
    addRegButton.addEventListener('click', regNumber);
    showButton.addEventListener('click', showTownReg);
    showAllButton.addEventListener('click', showAllTownReg);

// Additional Global Variables
    var strCheckedRadioTownBtn = "";
    let enteredRegNo;

// localStorage 
    if (localStorage['registration numbers']) {
        enteredRegNo = JSON.parse(localStorage.getItem("registration numbers"));

    }

//  Instantiate the instance of the factory function
    let instRegistration = regNumberFactory(enteredRegNo);

// function to create and appendChild element

function disapendObject(myObject){
    var changed = Object.keys(myObject);
    for (var i=0; i < changed.length; i++) {
        let newRegNo = document.createElement('plates');

        newRegNo.textContent = changed[i];
        finalRegField.appendChild(newRegNo);

    }
}

function disapendArray(myArray){
    if (myArray.length != 0) {
        for (var i=0; i < myArray.length; i++) {
            let newRegNo = document.createElement('plates');
    
            newRegNo.textContent = myArray[i];
            finalRegField.appendChild(newRegNo);
    
        }
    } else {
        setTimeout(function() {
            finalRegField.innerHTML = "No registration number from this town";
            finalRegField.classList.add('error');
            finalRegField.classList.remove('proceed');

        }, 0);

        setTimeout(function() { 
            finalRegField.innerHTML = "";
            finalRegField.classList.remove('error');
            finalRegField.classList.remove('proceed');

        }, 3500);
    }
}

// function for Add registration button

    function regNumber() {
        finalRegField.innerHTML = "";

        // instRegistration.setReg(regTextbox.value);
        

        if (regTextbox.value !== "") {

            if (instRegistration.addRegNo(regTextbox.value)){
                disapendObject(instRegistration.regNoAdded());
               
                setTimeout(function() {
                    errorsfield.innerHTML = instRegistration.getMessage();
                    errorsfield.classList.add('proceed');
    
                }, 0);

                setTimeout(function() { 
                    errorsfield.innerHTML = "";
                    errorsfield.classList.remove('error');
                    errorsfield.classList.remove('proceed');
    
                }, 3500);

            } else {
                setTimeout(function() {
                    errorsfield.innerHTML = instRegistration.getMessage();
                    errorsfield.classList.add('error');
                    errorsfield.classList.remove('proceed');
    
                }, 0);

                setTimeout(function() { 
                    errorsfield.innerHTML = "";
                    errorsfield.classList.remove('error');
                    errorsfield.classList.remove('proceed');
    
                }, 3500);
            }

            
            // let newRegNo = document.createElement('plates');

            // newRegNo.textContent = instRegistration.getReg();
    
            // finalRegField.appendChild(newRegNo);

        } else {
            setTimeout(function() {
                errorsfield.innerHTML = "Error! Registration number not entered";
                errorsfield.classList.add('error');

            }, 0);

            setTimeout(function() {
                errorsfield.innerHTML = "Please enter the registration number";
                errorsfield.classList.remove('error');
                errorsfield.classList.add('proceed')

            }, 3000);

            setTimeout(function() { 
                errorsfield.innerHTML = "";
                errorsfield.classList.remove('error');
                errorsfield.classList.remove('proceed');

            }, 5750);
        }

        localStorage.setItem("registration numbers", JSON.stringify(instRegistration.regNoAdded()));

    }


// function for Show registration button

    function showTownReg() {
        finalRegField.innerHTML = "";

        var checkedRadioTownBtn = document.querySelector("input[name='towns']:checked");

        if(checkedRadioTownBtn) {
            strCheckedRadioTownBtn = checkedRadioTownBtn.value;

       }

       if (strCheckedRadioTownBtn !== "") {
            instRegistration.showRegNo(strCheckedRadioTownBtn);

            disapendArray(instRegistration.showTown());

       } else {
            setTimeout(function() {
                finalRegField.innerHTML = "Error! town not selected";
                finalRegField.classList.add('error');

            }, 0);

            setTimeout(function() {
                finalRegField.innerHTML = "Please select any town";
                finalRegField.classList.remove('error');
                finalRegField.classList.add('proceed')

            }, 3000);

            setTimeout(function() { 
                finalRegField.innerHTML = "";
                finalRegField.classList.remove('error');
                finalRegField.classList.remove('proceed');

            }, 5750);

       }
        

    }

//  function for Show All registration button

    function showAllTownReg() {
        finalRegField.innerHTML = "";
        var objectTown = Object.keys(instRegistration.regNoAdded());
        if (objectTown.length != 0) {
            disapendObject(instRegistration.regNoAdded());

        } else {
            setTimeout(function() {
                finalRegField.innerHTML = "No Registration number yet";
                finalRegField.classList.add('error');

            }, 0);

            setTimeout(function() { 
                finalRegField.innerHTML = "";
                finalRegField.classList.remove('error');
                finalRegField.classList.remove('proceed');

            }, 3500);
        }

    }