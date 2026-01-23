function getValueFromInput(inputSelector, resultSelector) {
    const value = document.querySelector(inputSelector).value;
    document.querySelector(resultSelector).textContent = value;
}

function getValueFromRadioOrCheckbox(name, resultSelector, isCheckbox = false) {
    if (isCheckbox) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        const values = Array.from(checkboxes).map(cb => cb.value);
        document.querySelector(resultSelector).textContent = values.join(",");
    } else {
        const checked = document.querySelector(`input[name="${name}"]:checked`);
        const value = checked ? checked.value : "";
        document.querySelector(resultSelector).textContent = value;
    }
}

function getValueFromSelect(selectSelector, resultSelector, isMultiple = false) {
    const select = document.querySelector(selectSelector);
    if (isMultiple) {
        const selected = Array.from(select.selectedOptions).map(opt => opt.value);
        document.querySelector(resultSelector).textContent = selected.join(",");
    } else {
        document.querySelector(resultSelector).textContent = select.value;
    }
}

document.querySelector("#textbox_btn").addEventListener("click", () => {
    getValueFromInput("#textbox", "#textbox_result");
});

document.querySelector("#range_btn").addEventListener("click", () => {
    getValueFromInput("#range", "#range_result");
});

document.querySelector("#tarearea_btn").addEventListener("click", () => {
    getValueFromInput("#tarearea", "#tarearea_result");
});

document.querySelector("#radiobtn_btn").addEventListener("click", () => {
    getValueFromRadioOrCheckbox("sport", "#radiobtn_result");
});

document.querySelector("#checkbox_btn").addEventListener("click", () => {
    getValueFromRadioOrCheckbox("language", "#checkbox_result", true);
});

document.querySelector("#select1_btn").addEventListener("click", () => {
    getValueFromSelect("#select1", "#select1_result");
});

document.querySelector("#selectm_btn").addEventListener("click", () => {
    getValueFromSelect("#selectm", "#selectm_result", true);
});
