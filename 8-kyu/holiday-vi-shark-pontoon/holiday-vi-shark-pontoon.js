function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) {
    sharkSpeed /= 2;
  }
​
  const timeYou = pontoonDistance / youSpeed;
  const timeShark = sharkDistance / sharkSpeed;
​
  return timeYou < timeShark ? "Alive!" : "Shark Bait!";
}