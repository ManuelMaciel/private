/**
 * ManuelMaciel
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/music.mp3' //musica de fondo


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 1, 14) // Nuestra fecha
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 10500) // El tiempo, en milisegundos, que la música de fondo se retrasa en reproducirse después de que la página se carga.
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // La sustitución regular de múltiples espacios añadidos entre las líneas de código, sin eliminar las nuevas líneas la salida tendrá una pausa notable: en realidad está emitiendo múltiples espacios
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // Salida completa de las etiquetas html, por ejemplo, <p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //Operador de bits: añadir o quitar el subrayado "_" basado en la paridad del Intervalo establecido para hacer la entrada más realista
                if (index < str.length - 1) { //Imprimir los caracteres que comienzan con el penúltimo carácter sin un guión bajo para evitar la posibilidad de emitir un guión bajo adicional para el terminador
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 100)
            };
            // Retraso en el inicio de 1s
            setTimeout(timer, 100);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>Juntitos ❤: <span className="date-text">{d}</span> Días <span className="date-text">{hour}</span> Horas <span className="date-text">{minute}</span> Minutos <span className="date-text">{second}</span> Segundos </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>Hola princesita 🥰</h1>
                    <p >Antes de empezar a escribirte voy a poner un poco de Musica!</p>
                    <p>Hoy estamos cumpliendo nuestro primer añito juntitos bby, un añito juntos mi amor 🥰🥰🥰!，
                   hemos tenido risas, momentos felices al igual que momentos donde hemos peleado y distanciadonos, pero lo que me pone más feliz que al final del dia siempre podemos arreglar nuestros problemas 🥰. </p>
                    <p> Me alegra tanto que el destino nos haya puesto juntos mí amor, y yo quiero continuar conociendote hoy y siempre, imaginarme un futuro contigo, son esas cosas que quiero que sucedan, y mí amor siempre voy a luchar por eso
                </p>
                    <p>Todo lo que hemos compartido ha significado mucho para mi. Compartir los fines de semana con la persona que más amo es un regalo para mí, un regalo que me llena de felicidad, las palabras hermosas que me decís,
                        los abrazos tan bonitos que me das, las veces que me retas por algo, todo es perfecto cuando estoy contigo.
                </p>
                    <p>Te doy las gracias por un año de estar juntos y porque durante todo este tiempo me has hecho conocer la felicidad que solo vos me podes dar, por más añitos juntos mi amor 🥰🥰🥰 
                </p>
                    <p>Para serte sincero no soy nada bueno haciendo cartas, asi que mejor te diseño una pagina para decirte lo mucho que te amo 🥰🥰🥰
                </p>
                    <p>Con todo mi ❤️, tu novio hermoso, o sea Jesús 🥰🥰🥰</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>Te amo siempre mi amor ❤️❤️❤️</p>
                        <p>14 de enero de 2021</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main