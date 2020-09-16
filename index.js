/*function takeANumber(current_line,new_name) {
  current_line.push(new_name);
  return `Welcome, ${new_name}. You are number ${current_line.length} in line.`
}*/
var counter = 0

function takeaNumber(current_line) {
  counter += 1
  current_line.push(counter)
  return `You are number ${counter} in line`
}





function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


function currentLine(current_line) {
  
  if (current_line.length === 0) {
    return "The line is currently empty."
  } else 
  {
    var newstring = "The line is currently: ";
    for(let i = 0; i < current_line.length; i++) {
      newstring += `${i+1}. ${current_line[i]}, `
    }
    var new2 = newstring.slice(0,-2);
    return new2
}
  }
