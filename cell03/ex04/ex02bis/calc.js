function calculate() {
    // รับค่าจาก input และ select
    let left = document.getElementById("leftOperand").value;
    let right = document.getElementById("rightOperand").value;
    let operator = document.getElementById("operator").value;

    // แปลงค่าเป็นตัวเลข
    let num1 = parseInt(left);
    let num2 = parseInt(right);

    // ตรวจสอบว่าค่าถูกต้อง (เป็นจำนวนเต็มบวก)
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
        case "%":
            if (num2 === 0) {
                alert("over 9000!");
                console.log("over 9000!");
                return;
            }
            result = operator === "/" ? num1 / num2 : num1 % num2;
            break;
        default:
            alert("Invalid operation");
            return;
    }

    // แสดงผลลัพธ์
    alert("Result: " + result);
    console.log("Result:", result);
}

// ตั้งค่าให้แจ้งเตือนทุก 30 วินาที
setInterval(() => {
    alert("Please, use me...");
}, 30000);