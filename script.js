// ========================================
// 🌌 UNIVERSO PARA EUNICE
// ========================================


// ========================================
// ⭐ CREAR ESTRELLAS
// ========================================

for (let i = 0; i < 400; i++) {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    // Tamaños diferentes
    const tamaño = Math.random() * 4 + 1;

    estrella.style.width = tamaño + "px";
    estrella.style.height = tamaño + "px";

    // Posición aleatoria
    estrella.style.left =
        Math.random() * window.innerWidth + "px";

    estrella.style.top =
        Math.random() * window.innerHeight + "px";

    // Parpadeo diferente
    estrella.style.animationDelay =
        Math.random() * 5 + "s";

    estrella.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.getElementById("universo")
        .appendChild(estrella);
}


// ========================================
// 🌠 ESTRELLAS FUGACES
// ========================================

function crearEstrellaFugaz() {

    const estrella = document.createElement("div");

    estrella.classList.add("estrellaFugaz");

    estrella.style.left = "-100px";

    estrella.style.top =
        Math.random() * (window.innerHeight * 0.6) + "px";

    document.getElementById("universo")
        .appendChild(estrella);

    let x = -100;

    let y = parseFloat(estrella.style.top);

    const mover = setInterval(() => {

        x += 12;
        y += 5;

        estrella.style.left = x + "px";
        estrella.style.top = y + "px";

        if (x > window.innerWidth + 100) {

            clearInterval(mover);

            estrella.remove();
        }

    }, 20);
}


// Una estrella fugaz cada cierto tiempo
setInterval(crearEstrellaFugaz, 4500);


// ========================================
// 💚 MENSAJES
// ========================================

const titulo = document.getElementById("titulo");

const mensajes = [

    "Para mi niña 💚",

    "Para mi Eunice 🌻",

    "Tengo algo que mostrarte...",

    "✨"

];

let indice = 0;


function cambiarMensaje() {

    titulo.style.opacity = "0";

    setTimeout(() => {

        titulo.innerHTML = mensajes[indice];

        titulo.style.opacity = "1";

        indice++;

        if (indice < mensajes.length) {

            setTimeout(cambiarMensaje, 2500);

        } else {

            // Cuando termina la historia
            setTimeout(() => {

                document.getElementById("btnCarta")
                    .style.display = "block";

            }, 1800);

        }

    }, 700);
}


cambiarMensaje();


// ========================================
// 🌻 GIRASOLES
// ========================================

function crearGirasol() {

    const girasol = document.createElement("div");

    girasol.classList.add("girasol");

    girasol.innerHTML = "🌻";

    girasol.style.left =
        Math.random() * window.innerWidth + "px";

    girasol.style.fontSize =
        Math.random() * 25 + 20 + "px";

    document.getElementById("universo")
        .appendChild(girasol);

    let y = -60;

    const velocidad =
        Math.random() * 1.5 + 0.5;

    const caer = setInterval(() => {

        y += velocidad;

        girasol.style.top = y + "px";

        if (y > window.innerHeight + 60) {

            clearInterval(caer);

            girasol.remove();
        }

    }, 20);
}


setInterval(crearGirasol, 1600);


// ========================================
// 💌 CARTA
// ========================================

const boton =
    document.getElementById("btnCarta");

const sobre =
    document.getElementById("sobre");

const texto =
    document.getElementById("textoCarta");


boton.addEventListener("click", () => {

    // Ocultar botón
    boton.style.display = "none";

    // Mostrar carta
    sobre.style.display = "block";

    // Escribir carta
    texto.innerHTML = `

        Mi niña... 💚<br><br>

        Si llegaste hasta aquí,
        significa que abriste algo que hice
        especialmente para ti.<br><br>

        Tal vez esto no sea el regalo
        más caro del mundo...<br><br>

        Pero cada estrella,
        cada girasol y cada línea de código
        está aquí porque pensé en ti. 🌻<br><br>

        Quería hacerte algo diferente,
        algo que fuera solamente tuyo.<br><br>

        Porque tú no eres cualquier persona
        para mí.<br><br>

        Eres mi niña. 💚<br><br>

        Y aunque a veces te diga Eunice
        y solo yo pueda llamarte así JAJAJA,
        sabes perfectamente que eres tú
        cuando lo digo. 😂💚<br><br>

        Con muchísimo cariño...<br><br>

        Sebastián 💚

    `;


    // Después de unos segundos
    setTimeout(() => {

        crearBotonFinal();

    }, 7000);

});


// ========================================
// 🌻 BOTÓN FINAL
// ========================================

function crearBotonFinal() {

    const botonFinal =
        document.createElement("button");

    botonFinal.id = "botonFinal";

    botonFinal.innerHTML =
        "Una última cosita... 🌻";

    document.getElementById("universo")
        .appendChild(botonFinal);


    botonFinal.addEventListener("click", () => {

        sobre.style.display = "none";

        botonFinal.remove();

        mostrarFinal();

    });

}


// ========================================
// ❤️ FINAL
// ========================================

function mostrarFinal() {

    titulo.innerHTML =
        "Para mi Eunice 💚";

    titulo.style.opacity = "1";


    const final =
        document.createElement("div");

    final.id = "final";

    final.innerHTML = `

        <div class="corazon">💚</div>

        <h2>
            QUIERO VERLA,
            CONOCERLA,
            QUE ES NEGRA JAJAJA 😂
        </h2>

        <p>
            Y algún día vamos a cumplir
            todas esas cosas que decimos. 🌻
        </p>

        <p>
            Te quiero muchísimo, mi flaca. 💚
        </p>

    `;


    document.getElementById("universo")
        .appendChild(final);


    // Corazones flotando
    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            crearCorazon();

        }, i * 300);

    }

}


// ========================================
// 💚 CORAZONES
// ========================================

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazonFlotante");

    corazon.innerHTML = "💚";

    corazon.style.left =
        Math.random() * window.innerWidth + "px";

    document.getElementById("universo")
        .appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 5000);

}