const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  let win = arr.find(obj => {return obj.result === "W"})
  
  if (!win) {
    return undefined
  } else {
    return win.year
  }
}

