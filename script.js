const imageInput = document.querySelector("#image-input");

imageInput.addEventListener("change", function () {
  const read = new FileReader();
  read.readAsDataURL(this.files[0]);
  console.log(this.files[0].name);
  let nowDate = new Date();
  let year = nowDate.getUTCFullYear();
  let day = nowDate.getUTCDate();
  let month = nowDate.toLocaleString("default", { month: "long" });
  let fulldate = `${year}/${month}/${day}`;
  read.addEventListener("load", () => {
    // console.log(read.result)
    const uploadImg = read.result;
    // console.log(uploadImg);
    document.querySelector(
      ".imageContainer"
    ).style.backgroundImage = `url(${uploadImg})`;
    let html = document.querySelector(".date");
    html.innerHTML = fulldate;
  });

  console.log(year, month, day);
});
