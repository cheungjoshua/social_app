// When page load call imgRender function
// User upload pic with upload function
// push pic to array as object and json.stringtfy
// upload function save image in local storage
// After setItem reload page
// when page after reload call imgRender function

// Get elements
const imageInput = document.querySelector("#image-input");
const imageContainer = document.getElementsByClassName("imageContainer");
const feedList = document.querySelector(".feedList");

// Create a image holder for save inside the local storge
let imgHolder = [];

// Create li item for image holder
const createHtml = (imgObj) => {
  let li = document.createElement("li");
  let html = ` <img src="${imgObj.url}" alt="">
                        <p class="date">${imgObj.date}</p>`;
  li.innerHTML = li.innerHTML + html;
  return li;
};

// Get current date with perfect format
const getDate = () => {
  let nowDate = new Date();
  let year = nowDate.getUTCFullYear();
  let day = nowDate.getUTCDate();
  let month = nowDate.toLocaleString("default", { month: "long" });
  let recentDate = `${month} ${day} ${year}`;
  return recentDate;
};

// Upload image

imageInput.addEventListener("change", function () {
  const read = new FileReader();
  // need it to convert as URL
  read.readAsDataURL(this.files[0]);

  read.addEventListener("load", () => {
    const uploadImg = read.result;
    let currentDate = getDate();

    imgHolder.push({ url: uploadImg, date: currentDate });
    localStorage.clear();
    localStorage.setItem("imgList", JSON.stringify(imgHolder));
    location.reload();
  });
});

// Render image
const imgRender = () => {
  const imgAry = JSON.parse(localStorage.getItem("imgList"));
  if (imgAry != null) {
    imgHolder = imgAry;
    for (let img of imgAry) {
      let li = createHtml(img);
      console.log(li);
      feedList.appendChild(li);
    }
  }
};

imgRender();
