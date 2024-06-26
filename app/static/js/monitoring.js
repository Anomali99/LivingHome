document.getElementById("cbx-chart").addEventListener("change", function () {
  var value = this.value;
  var dateBetween = document.querySelector(".date-between");
  var listProduct = document.querySelector(".list-product");

  switch (value) {
    case "1":
    case "3":
    case "4":
    case "5":
      dateBetween.style.display = "none";
      listProduct.style.display = "none";
      var form = document.getElementById("myForm");
      form.submit();
      break;
    case "2":
    case "6":
    case "7":
    case "8":
      dateBetween.style.display = "none";
      listProduct.style.display = "flex";
      break;
    case "9":
      dateBetween.style.display = "block";
      listProduct.style.display = "none";
      break;
  }
});

function selected(id) {
  var item = document.getElementById(`product-${id}`);
  var input = document.getElementById("id_product");
  var form = document.getElementById("myForm");
  items = document.querySelectorAll(".product");
  Array.from(items).forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
  item.style.backgroundColor = "#ddd";
  input.value = id;
  form.submit();
}
