// darkMode switch function
const darkSwitch = document.getElementById("darkSwitch");

// initTheme() function for darkmode switch
function initTheme() {
  const e =
    null !== localStorage.getItem("darkSwitch") &&
    "dark" === localStorage.getItem("darkSwitch");
  (darkSwitch.checked = e),
    e
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
}

// resetTheme() function for darkmode switch
function resetTheme() {
  var modelLabel = document.getElementById("modelLabel");

  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark"),
      localStorage.setItem("darkSwitch", "dark");

    modelLabel.innerHTML = "Dark Mode";
  } else {
    document.body.removeAttribute("data-theme"),
      localStorage.removeItem("darkSwitch");

    modelLabel.innerHTML = "Light Mode";
  }
}

window.addEventListener("load", () => {
  darkSwitch &&
    (initTheme(),
    darkSwitch.addEventListener("change", () => {
      resetTheme();
    }));
});




// function basicAdvance () {
  // $("#basicSwitch").click(function () {
  //   var functionLabel = document.getElementById("functionLabel");
              
  //   if($("#functionLabel").text() == "Basic") { 
  //     functionLabel.innerHTML = "Advance";
  //   } 
  //   else {
  //     functionLabel.innerHTML = "Basic";
  //   }
  // });
// }

// basicMethod switch function
function togglePopularityColumn () {
  // to hide and unhide the child columns
  $('#basicTable').toggle()
  $('#advancedTable').toggle();
}

function toggleAddSearch () {
    // to hide and unhide the search filters
    $('#basic-data-filter-form').toggle();
    $('#advance-data-filter-form').toggle();
    $('#basic-result-input-form').toggle();
    $('#advance-result-input-form').toggle();
}

function togglePagination() {
  // to allow basic and advance viewer to have pagination function
  $('#basicNav').toggle();
  $('#advanceNav').toggle();
}

// execute the necessary functions using jquery onClick the toggle.
function onBasicSwitch () {
  togglePopularityColumn();
  toggleAddSearch();
  togglePagination();
  // basicAdvance()
  return true;
}

function SUMMONALLOUT () {
  $("#basicSwitch").click(onBasicSwitch);
}

// call these functions
$(document).ready(function () {
  SUMMONALLOUT();
  $('#advancedTable').toggle();
  $('#advance-data-filter-form').toggle();
  $('#advance-result-input-form').toggle();
  $('#advanceNav').toggle();
});

