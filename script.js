window.onload = function () {

    let letras = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }


    let texto = document.querySelector('.texto');
    let btnEncriptar = document.querySelector('.encriptar');
    let btnDesencriptar = document.querySelector('.desencriptar');
    let areaTexto = document.querySelector('#areaTexto');


    btnEncriptar.addEventListener('click', function () {

        encriptadora(texto)


    })

    function encriptadora(palabra) {

        let palabraNueva = palabra.value.toLowerCase().split('')

        for (let i = 0; i < palabraNueva.length; i++) {
            for (const key in letras) {

                if (palabraNueva[i] === key) {

                    palabraNueva[i] = letras[key]
                }

            }

        }

        let resultado = palabraNueva.join('')

        areaTexto.textContent = resultado




    }



    btnDesencriptar.addEventListener('click', function () {

        desencriptadora(texto)


    })



    function desencriptadora(palabra) {

        let palabra2 = palabra.value.toLowerCase()

        let textoEncriptado = palabra2.replace(/ai/img,'a')
        textoEncriptado = textoEncriptado.replace(/enter/img,'e')
        textoEncriptado = textoEncriptado.replace(/imes/img,'i')
        textoEncriptado = textoEncriptado.replace(/ober/img,'o')
        textoEncriptado = textoEncriptado.replace(/ufat/img,'u')



        areaTexto.textContent = textoEncriptado

      

    }
















}