let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

/**
 * "first-tube",
 * "second-tube",
 * "third-tube",
 * "fourth-tube",
 * "fifth-tube",
 * "sixth-tube",
 * "seventh-tube",
 */
ids = ["container", "tube"];

/* Original working function */

// let asyncMove = async (id, curPosition=0, finalPosition=1) => {
//   let path = document.getElementById(id);
//     while(true){
//       if (curPosition > finalPosition)
//         break
//       curPosition += 0.01;
//       path.setAttribute("offset", curPosition);
//       await sleep(0.5)
//     }
// }

let asyncMove = async (id, curPosition = 0, finalPosition = 1) => {
  let path = document.getElementById(id);
  while (true) {
    speed2 = document.getElementById("water-flow").value;
    speed2 = speed2 * 0.0002;
    speed2 = speed2 == 0 ? 0.0002 : speed2;
    if (curPosition > finalPosition) break;
    curPosition += speed2;
    path.setAttribute("offset", curPosition);
    await sleep(0.5);
  }
};

asyncMove("container");
asyncMove("tube");
let startAnimation = async () => {
  for (let i = 0; i < ids.length; i++) {
    id = ids[i];
    let path = document.getElementById(id);
    let finalPosition = 1;
    let curPosition = 0;
    while (true) {
      speed2 = document.getElementById("water-flow").value;
      speed2 = speed2 * 0.0002;
      speed2 = speed2 == 0 ? 0.0002 : speed2;
      if (curPosition > finalPosition) break;
      curPosition += speed2;
      path.setAttribute("offset", curPosition);
      await sleep(0.5);
    }
  }
};

let resetEverything = () => {
  tube_ids = [];
  tube_ids.forEach((element) => {
    let path = document.getElementById(element);
    path.setAttribute("offset", 0);
  });
  ids.forEach((ele) => {
    let path = document.getElementById(ele);
    path.setAttribute("offset", 0);
  });
};
disablestart = false;
let startAn = async () => {
  resetEverything();
  document.getElementById("startbutton").disabled = true;
  document.getElementById("resetbutton").disabled = true;
  await startAnimation();
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};
