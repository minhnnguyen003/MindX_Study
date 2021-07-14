let check = (column, row) => {
    if(column >=1 && column <=3 && row >=1 && row <=5) return 1;
    return false;
  }
  
  let processChange = () => {
    let column = Number(prompt("Enter column (from 1 to 3)"));
    let row = Number(prompt("Enter row (from 1 to 5)"));
    if(!check(column, row)){
      alert("Input not correct!");
    }
    else {
      let content = prompt("Enter new content");
      let position = column + (row - 1) * 3 - 1;
      let listTd = document.querySelectorAll("td");
      console.log(position);
    }
  }