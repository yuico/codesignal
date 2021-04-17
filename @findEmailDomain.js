function findEmailDomain(addr) {
  return addr.match(/[\w|-]+\.[a-z]*$/)[0];
}

console.log(findEmailDomain('"much.more unusual"@ya-hoo.com'));
