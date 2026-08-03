console.log("Hello, world! I'm linked! - Orchid");

//update url with iframe select
  function mainGo(page) {
  document.getElementById("main").src = page;

  const hash = page.replace(/\.html$/, "");
  location.hash = hash;
}

//correct page on refresh
  window.addEventListener("DOMContentLoaded", () => {
  const page = location.hash
    ? location.hash.substring(1) + ".html"
    : "main.html";

  document.getElementById("main").src = page;
});

//navigation button work
  window.addEventListener("hashchange", () => {
  const page = location.hash
    ? location.hash.substring(1) + ".html"
    : "main.html";

  document.getElementById("main").src = page;
});

//menu sort 
filterSelection("all");
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
      }
      
      // Show filtered elements
      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
        }
      }
      
      // Hide elements that are not selected
      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }
      
      // Add active class to the current control button (highlight it)
      var navButtons = document.getElementById("navButtons");
      var button = navButtons.getElementsByClassName("button");
      for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }

//search by keyword and button text
function searchKey() {
    const filter = document.getElementById("searchBox").value.toLowerCase();
    const buttons = document.querySelectorAll("#collection .projectTitle");

    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        const keywords = (button.dataset.keywords || "").toLowerCase();

        const searchable = `${text} ${keywords}`;

        button.style.display = searchable.includes(filter) ? "" : "none";
    });
}
      
//change color scheme
function colorMode() {
  var element = document.body;
  element.classList.toggle("color-mode");
  var icons = document.getElementsByClassName("icons");
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("invert-color");
  }
}
