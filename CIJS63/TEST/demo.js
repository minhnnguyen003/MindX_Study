// A. Problem Solving


// 1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.

function adjacentElementsProduct(inputArray) {
    const lengthArray = inputArray.length;
    if (lengthArray < 2) return -1;
    else {
        let max = -Infinity;
        for(let i = 0; i < lengthArray - 1; ++i) {
            let mul = inputArray[i] * inputArray[i+1];
            max = max < mul ? mul : max;
        }
        return max;
    } 
}

console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

/* 2.Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 3, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.
*/

function alternatingSums(arr) {
    if(arr.length < 1) return -1;
    else {
        let sumLeft = 0, sumRight = 0;
        arr.forEach((value, index) => {
            if(index%2) sumRight += value;
            else sumLeft += value;
        });
        return [sumLeft, sumRight];
    }
}

console.log(alternatingSums([2, 3, 12, 1, 4]));