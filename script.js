async function remplir_accessoires() {
    remplir = [];
    let template = document.querySelector("#template_accessoires");
    const response = await fetch('ressources/accessoires.json');
    const acc = await response.json()
    remplir.push(acc);

    for (var i = 0; i < remplir[0].length; i++) {
        let clone = document.importNode(template.content, true);
        console.log(remplir);
        console.log(remplir[0].length);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{accessoires-image}}/g, remplir[0][i].image)
            .replace(/{{accessoires-titre}}/g, remplir[0][i].titre)
            .replace(/{{accessoires-texte}}/g, remplir[0][i].texte)

            clone.firstElementChild.innerHTML = newContent;
            let placer = document.getElementById("grid-container")
            placer.appendChild(clone);
    }

}