javascript
let btn = document.getElementById("searchBtn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {

    let stations = document.getElementsByClassName("card");
    let found = false;

    for (let i = 0; i < stations.length; i++) {

        let status = stations[i].getElementsByTagName("p")[0];

        if (status.className == "open") {

            let name = stations[i].getElementsByTagName("h2")[0].innerText;

            result.innerHTML = "أقرب محطة متاحة: " + name;

            found = true;
            break;
        }
    }

    if (found == false) {
        result.innerHTML = "لا توجد محطات مفتوحة حالياً";
    }

});

