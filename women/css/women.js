/* Phần của hiển thị thông tin sản phẩm*/
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let open = document.getElementById("open");
let open2 = document.getElementById("open2");
let open3 = document.getElementById("open3");
let index = 1;
// hàm 1
function open_text() {
  if (index == 1) {
    text.style = `
                                    width: 20em;
                                    display : block;
                                    margin-bottom : 20px
                                `;
    index++;
    text2.style = `display : none`;
    text3.style = `display : none`;
  } else {
    text.style = `display : none;`;
    index--;
  }
}
// hàm 2
function open_text2() {
  if (index == 1) {
    text2.style = `
                                    width: 20em;
                                    display : block;
                                    margin-bottom : 20px
                                `;
    index++;
    text.style = `display : none`;
    text3.style = `display : none`;
  } else {
    text2.style = `display : none;`;
    index--;
  }
}
// hàm 3
function open_text3() {
  if (index == 1) {
    text3.style = `
                                    width: 20em;
                                    display : block;
                                    margin-bottom : 20px
                                `;
    index++;
    text.style = `display : none`;
    text2.style = `display : none`;
  } else {
    text3.style = `display : none;`;
    index--;
  }
}
