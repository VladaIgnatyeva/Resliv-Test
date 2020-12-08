(function () {
    const search = new URLSearchParams(location.search);
   // const search = new URLSearchParams("size=L&color=1&color=4&manufacturer=aaa&manufacturer=eee&sale=true");
    const form = document.querySelector("form");
    for (const [key, value] of search) {
        const e = form.elements[key];

        if (!e) continue;

        switch (e.constructor) {
            case RadioNodeList:
                for (const node of e) {
                    if (node.value === value)
                        node.checked = true;
                }
                break;

            case HTMLSelectElement:
                for (const option of e) {
                    if (option.value === value)
                        option.selected = true;
                }
                break;

            case HTMLInputElement:
                e.value = value;
                if (e.type === "checkbox")
                    e.checked = true;
                break;
        }
    }

    addEventListener("input", ({ target }) => {
        if (!target.matches("form [name]")) return;

        const url = `${new URLSearchParams(new FormData(target.form))}`;
        console.log(url);
    });
})()

