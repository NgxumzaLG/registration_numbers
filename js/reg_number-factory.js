function regNumberFactory(regNoData) {
    var storeRegNo = regNoData || {};
    var checkedTown = [];

    function addRegNo(regNumber) {
        if (regNumber !== "") {
            if (!storeRegNo[regNumber]) {
                storeRegNo[regNumber] = 1;

            } else {
                storeRegNo[regNumber]++;

            }
        }
    }

    function regNoAdded() {
        return storeRegNo;

    }

    function showRegNo(regTown) {
        checkedTown = [];
        if (regTown === "capetown") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CA")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "bellville") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CY")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "paarl") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CJ")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        } else if (regTown === "stellenbosch") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CL")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }
        }
    }

    function showTown() {
        return checkedTown;
    }

    return {
        addRegNo,
        regNoAdded,
        showRegNo,
        showTown
        
    }
}