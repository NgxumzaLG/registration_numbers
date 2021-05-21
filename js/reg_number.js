// Reference all the elements
    var regTextbox = document.querySelector(".regText");
    var addRegButton = document.querySelector(".addRegBtn");
    var finalRegField = document.querySelector('.finalReg');
    var radioTown = document.querySelector('.radio-town');
    var showButton = document.querySelector('.showBtn');
    var showAllButton = document.querySelector('.showAllBtn');
    var testingField = document.querySelector('.testing');
    var errorsfield = document.querySelector('.errors')

// Add event listener to the buttons when is clicked
    addRegButton.addEventListener('click', regNumber)
    showButton.addEventListener('click', showTownReg)

//  Instantiate the instance of the factory function

    let instRegistration = regNumberFactory();

// Additional Global Variables
var strCheckedRadioTownBtn = "";

// function for Add registration button

    function regNumber() {

        instRegistration.setReg(regTextbox.value);
        instRegistration.addRegNo(regTextbox.value)

        // finalRegField.innerHTML = instRegistration.getReg()

        if (regTextbox.value !== "") {
            let newRegNo = document.createElement('plates');

            newRegNo.textContent = instRegistration.getReg();
    
            finalRegField.appendChild(newRegNo);

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

       
        // testingField.innerHTML = instRegistration.regNoAdded();
        // console.log(instRegistration.regNoAdded());

    }


// function for Add registration button

    function showTownReg() {

        var checkedRadioTownBtn = document.querySelector("input[name='towns']:checked");

        if(checkedRadioTownBtn){
            strCheckedRadioTownBtn = checkedRadioTownBtn.value;

       }

        instRegistration.showRegNo(strCheckedRadioTownBtn);

        // console.log(instRegistration.showTown());


    }