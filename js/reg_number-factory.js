function regNumberFactory() {
    var regNo = "";
    var storeRegNo = {};
    var checkedTown = [];

    function setReg(regNumber) {
        if (regNumber !== "") {
            regNo = regNumber;

        }
    }

    function getReg() {
        return regNo;

    }

    function addRegNo(regNumber) {
        if (regNumber !== "") {
            if (!storeRegNo[regNumber]) {
                storeRegNo[regNumber] = 1

            } else {
                storeRegNo[regNumber]++;

            }
        }
    }

    function regNoAdded() {
        return storeRegNo;

    }

    function showRegNo(regTown) {
        checkedTown = []
        if (regTown === "capetown") {
            var strStoreRegNo = Object.keys(storeRegNo)
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CA")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }
        }
    }

    function showTown() {
        return checkedTown;
    }

    return {
        setReg,
        getReg,
        addRegNo,
        regNoAdded,
        showRegNo,
        showTown
        
    }
}