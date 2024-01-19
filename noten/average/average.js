let avg_all_grade_weights = document.getElementById("average-grade-weights");
let avg_all_grades = document.getElementById("average-grades");
let avg_rounding_select = document.getElementById("average-round-select");
let avg_result = document.getElementById("average-result");

let avg_new_button = document.getElementById("average-new");
avg_new_button.onclick = () => {
    var avg_new_grade_weight = document.createElement("input");
    avg_new_grade_weight.classList.add("form-control");
    avg_new_grade_weight.classList.add("mt-1");
    avg_new_grade_weight.classList.add("mb-2");
    avg_new_grade_weight.setAttribute("type", "number");
    avg_new_grade_weight.setAttribute("placeholder", "%");

    avg_all_grade_weights.appendChild(avg_new_grade_weight);

    var avg_new_grade = document.createElement("input");
    avg_new_grade.classList.add("form-control");
    avg_new_grade.classList.add("mt-1");
    avg_new_grade.classList.add("mb-2");
    avg_new_grade.setAttribute("type", "number");
    avg_new_grade.setAttribute("placeholder", "1-6");

    avg_all_grades.appendChild(avg_new_grade);
}

let avg_delete_button = document.getElementById("average-delete");
avg_delete_button.onclick = () => {
    avg_all_grade_weights.removeChild(avg_all_grade_weights.lastChild)
    avg_all_grades.removeChild(avg_all_grades.lastChild);
}

let avg_reset_button = document.getElementById("average-reset");
avg_reset_button.onclick = () => {
    while (avg_all_grade_weights.children.length > 1) {
        avg_all_grade_weights.removeChild(avg_all_grade_weights.lastChild);
        avg_all_grades.removeChild(avg_all_grades.lastChild);
    }
}

function truncateDecimals (num, digits) {
    var numS = num.toString(),
        decPos = numS.indexOf('.'),
        substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
        trimmedResult = numS.substr(0, substrLength),
        finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

    return parseFloat(finalResult);
}

let avg_calculate_button = document.getElementById("average-calculate");
avg_calculate_button.onclick = () => {
    var s = 0;
    for (var i = 0; i < avg_all_grade_weights.children.length; i++) {
        var weight = avg_all_grade_weights.children[i].value;
        var grade = avg_all_grades.children[i].value;
        s += (weight/100)*grade;
    }
    s = truncateDecimals(s, 1)
    console.log(s);
    if (avg_rounding_select.value == 0) {
        avg_result.value = parseFloat(s.toString()).toFixed(0);
    }
    if (avg_rounding_select.value == 2) {
        avg_result.value = parseFloat(s.toString()).toFixed(1);
    }
}