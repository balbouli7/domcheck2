// document.addEventListener("DOMContentLoaded", function() {
//     var theBox = document.getElementById("color-box")
//     var myBtn = document.getElementById("change-color-btn")

//     function getRandomColor() {
//         const char = "0123456789ABCDEF";
//         var color = "#";
//         for (let i = 0; i < 6; i++) {
//             color += char[i]
//         }
//         return color
//     }

//     myBtn.addEventListener("click", function() {
//         theBox.style.backgroundColor = getRandomColor()
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    var theBox = document.getElementById("color-box");
    var myBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const char = "0123456789ABCDEF";
        var color = "#";
        for (let i = 0; i < 6; i++) {
            color += char[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    myBtn.addEventListener("click", function() {
        theBox.style.backgroundColor = getRandomColor();
    });
});
