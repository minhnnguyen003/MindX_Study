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

console.log(alternatingSums([60, 40, 55, 75, 64]));

/* 3.Xây dựng website rút gọn link từ API cho sẵn*/

async function getShortenURL() {
    const url = document.getElementById('enterUrl').value;
    const typeUrl = document.getElementById('typeLink').value;
    const resultOK = document.querySelector('.result-ok');
    const resultFalse = document.querySelector('.result-false');
    resultOK.style.display = 'none';
    resultFalse.textContent = "";
    if(url == "") {
        resultFalse.textContent = 'Hãy điền Url bạn muốn rút gọn';
    }
    else {
        const reponse = await fetch(` https://api.shrtco.de/v2/shorten?url=${url}`);
        const resultURL = await reponse.json();
        if(resultURL.ok == true) {
            resultOK.style.display = 'block';
            const resultLink = document.querySelector('.result-ok a')
            if(typeUrl == "1") {
                resultLink.href = `http://${resultURL.result.short_link}`;
                resultLink.textContent = resultURL.result.short_link;
            }
            else if (typeUrl == "2") {
                resultLink.href = `http://${resultURL.result.short_link2}`;
                resultLink.textContent = resultURL.result.short_link2;
            }
            else {
                resultLink.href = `http://${resultURL.result.short_link3}`;
                resultLink.textContent = resultURL.result.short_link3;
            }
        }
        else {
            resultFalse.textContent = 'Không thể rút gọn link';
        }
    }
}

document.getElementById('getLink').addEventListener('click', getShortenURL)
