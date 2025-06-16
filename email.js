var shown = false;
function showHideEmail() {
    if (shown) {
      document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
       var myemail = "<a href='mailto:hurstts" + "@" + 
          "mail.uc.edu'>hurstts" + "@" + "mail.uc.edu</a>";
      document.getElementById('email').innerHTML = myemail;
      shown = true;
    }
}
