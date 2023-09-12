function myfunction() {
  var a = document.getElementsByName('check');
  var newvar = 0;
  var count;
  for (count = 0; count < a.length; count++) {
    if (a[count].checked == true)
      newvar = newvar + 1;
  }
  if (newvar >= 4) {
    document.getElementById('notvalid').innerHTML = "*Please Select Only Three"
    return false;
  }

}
