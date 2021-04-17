function isMAC48Address(str) {
  return /^([0-9]|[A-F]){2}-([0-9]|[A-F]){2}-([0-9]|[A-F]){2}-([0-9]|[A-F]){2}-([0-9]|[A-F]){2}-([0-9]|[A-F]){2}$/.test(
    str
  );
}
console.log(isMAC48Address('G2-34-56-78-9A-BG'));
