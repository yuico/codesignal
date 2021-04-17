function validTime(time) {
  arr = time.split(':').map(Number);
  return !(arr[1] > 59 || arr[0] > 23);
}
