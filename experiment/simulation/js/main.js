let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

ids = ["container", "tube", "straight", "straight-curve", "curve"];

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
  if (id == "straight-curve") {
    asyncMove("straight-curve1");
  }
  if (id == "straight-curve1") {
    asyncMove("straight-curve2");
  }
  if (id == "straight-curve2") {
    asyncMove("straight-curve3");
  }
  if (id == "straight-curve3") {
    asyncMove("straight-curve4");
  }
};

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
  flow_ids = [
    "straight-curve1",
    "straight-curve2",
    "straight-curve3",
    "straight-curve4",
  ];
  flow_ids.forEach((element) => {
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
  const flow = document.getElementById("dropdown1").value;
  await Promise.all([
    asyncMove("container"),
    asyncMove("tube"),
    asyncMove(flow),
  ]);
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};
