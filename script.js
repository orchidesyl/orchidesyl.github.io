console.log("Hello, world! I'm linked! - Orchid");

function mainGo(url) {
    document.getElementById('main').src = url;
}

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

//search by keyword
function searchKey() {
  // Declare variables
  var input, filter, button, collection, projectTitle, i, txtValue;
  input = document.getElementById('searchBox');
  filter = input.value.toUpperCase();
  collection = document.getElementById("collection");
  projectTitle = collection.getElementsById('projectTitle');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < projectTitle.length; i++) {
    button = projectTitle[i].getElementsByTagName("button")[0];
    txtValue = button.textContent || button.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      projectTitle[i].style.display = "";
    } else {
      projectTitle[i].style.display = "none";
    }
  }
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
