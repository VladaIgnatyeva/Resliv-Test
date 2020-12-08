(function () {
    const input = document.getElementById('name_input');
    const value = input.getAttribute('value');

    input.oninput = () => {
        if (value !== input.value) {
            input.classList.add("red");
        } else if (input.classList.contains("red")) {
            input.classList.remove("red");
        }
    };
}());
