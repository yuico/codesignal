def verify(s):
  parentSet = {'[',']','{','}','(',')','<','>'}
  s = s.strip()
  res = ''
  for i in s:
      if i in parentSet:
          res = res + i
  hashMap = {'[': ']', "{": "}", "(": ")",'<':'>'}
  stack = []
  for i in res:
      if i in hashMap:
          stack.append(i)
      elif len(stack) == 0 or hashMap[stack.pop()] != i:
          return 0
  if len(stack) == 0:
      return 1
  else:
      return 0