document.querySelector("#textbox_btn").addEventListener("click", () => {
    const value = document.querySelector("#textbox").value;
    document.querySelector("#textbox_result").textContent = value;
});

document.querySelector("#range_btn").addEventListener("click", () => {
    const value = document.querySelector("#range").value;
    document.querySelector("#range_result").textContent = value;
});

document.querySelector("#tarearea_btn").addEventListener("click", () => {
    const value = document.querySelector("#tarearea").value;
    document.querySelector("#tarearea_result").textContent = value;
});

document.querySelector("#radiobtn_btn").addEventListener("click", () => {
    const checked = document.querySelector('input[name="sport"]:checked');
    const value = checked ? checked.value : "";
    document.querySelector("#radiobtn_result").textContent = value;
});

document.querySelector("#checkbox_btn").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[name="language"]:checked');
    const values = Array.from(checkboxes).map(cb => cb.value);
    document.querySelector("#checkbox_result").textContent = values.join(",");
});

document.querySelector("#select1_btn").addEventListener("click", () => {
    const value = document.querySelector("#select1").value;
    document.querySelector("#select1_result").textContent = value;
});

document.querySelector("#selectm_btn").addEventListener("click", () => {
    const select = document.querySelector("#selectm");
    const selected = Array.from(select.selectedOptions).map(opt => opt.value);
    document.querySelector("#selectm_result").textContent = selected.join(",");
});
