// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienza la historia</h1>\
        <img #paraguas src='media/img/paraguas.png' class='float_right paraguas'>\
        <p>Son las 08:00 am y tienes que ir a clase. Decides vestirte y coger las cosas para clase.</p>\
        \
        <p>Tu madre te ha dicho que va a llover, puedes coger el <a href='./paraguas' class='once'>paraguas</a>, o bien tienes prisa y haces caso omiso</p>\
        <p class='transient'><a href='situation2'>Pulsa para continuar</a></p>", {
            actions: {
                'paraguas': function(character, system, action) {
                    system.setQuality("paraguas", true);
                    system.setCharacterText("<p>Perfecto. Ahora tienes un paraguas. Bien hecho al hacer caso a tu madre.</p>");
                }
            }
        }
    ),

    situation2: new undum.SimpleSituation(
        "<h1>Camino a clase</h1>\
        <p>Vas caminando por la calle con tu compañero de clase y veis un\
        maletín colgado de la rama de un árbol.</p>", {
            enter: function(character, system, from) {
                if (character.qualities.paraguas) {
                    system.doLink("puzzlecandado");
                } else {
                    system.doLink("retroceder1");
                }
            }
        }

    ),

    puzzlecandado: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Primer puzzle</h1>\
        <div class='acertijo'\
        <p>Con el paraguas lográs alcanzarlo pero el maletín tiene un candado por lo\
        que necesitarás averiguar la clave para poder abrirlo. Justo por la parte trasera\
        parece que pone un acertijo</p>\
        <p>¿Cuántas veces se le puede restar 1 al número 100?</p>\
        </div>\
        <p>Ahora te toca seleccionar la clave correcta, las claves que se te ocurren son:\
        <br>\
        <a class='once' href='final1'>100 veces</a>\
        <br>\
        <a class='once' href='situacionentradas'>1 veces</a>\
        <br>\
        <a class='once' href='final2'>99 veces</a>\
        </p>\
        </div>"
    ),

    retroceder1: new undum.SimpleSituation(
        "<div class='transient'>\
        <hr>\
        <p>No obstante, como no le hiciste caso a tu madre\
            no puedes alcanzarlo sin el paraguas.</p>\
        <h1>FIN</h1>\
        </div>"
    ),

    final1: new undum.SimpleSituation(
        "<div class='transient'>\
        <p>Bueno parece ser que no es tu día,\
            será mejor que vuelvas rápido a la clase de matemáticas.</p>\
        <h1>FIN</h1>\
        </div>"
    ),

    final2: new undum.SimpleSituation(
        "<div class='transient'>\
        <p>Bueno parece ser que no es tu día,\
            será mejor que vuelvas rápido a la clase de matemáticas.</p>\
        <h1>FIN</h1>\
        </div>"
    ),

    situacionentradas: new undum.SimpleSituation(
        "<div class='transient'>\
        <p>Perfecto,\
            efectivamente si le restas 1 al número 100 pasa a ser 99 y dejaría de ser el 100.\
            Al abrir el maletín te encuentras 5 entradas para el concierto de AC/DC y junto a \
            estos está la cartera de la persona a la que pertenece con su documentación.\
            Debates con tu compañero si devolverlo a la persona a la que pertenece.\
            Finalmente decidís:</p>\
        <ul>\
        <li><a href='devolvermaletin'>Decidís ir a la casa del dueño a devolverlo todo</a></li>\
        <li><a href='robarentradas'>Cogeis las entradas y decidís dejar el maletín dónde estaba</a></li>\
        </ul>\
        </div>"
    ),

    devolvermaletin: new undum.SimpleSituation(
        "<div class='transient'>\
        <br>\
        <h1>Buena decisión</h1>\
        <hr>\
        <p>Llegas a la casa del dueño y por haberle ayudado a encontrar el maletín os quiere regalar \
        unas entradas pero os propone un puzzle para comprobar si habeís sido vosotros los que habeís \
        descrifrado el del candado. <a href='puzzlefinal'>Realizar puzzle</a></p>\
        </div>"
    ),

    robarentradas: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Mala decisión</h1>\
        <hr>\
        <p>Ibas bien,\
            la policía te ha visto urgando en el maletín y esta noche la vas a pasar en el calabozo.\
            Te quedas sin ir al concierto.</p>\
        <h1>FIN</h1>\
        </div>"
    ),

    puzzlefinal: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Puzzle</h1>\
        <hr>\
        <img #puzzle src='media/img/puzzle.jpeg' class='puzzle'>\
        <ul>\
        <li><a href='final3'>Escalón número 13</a></li>\
        <li><a href='final4'>Escalón número 5</a></li>\
        <li><a href='recibirentradas'>Escalón número 9</a></li>\
        </ul>\
        </div>"
    ),

    final3: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Respuesta</h1>\
        <img #respuesta src='media/img/respuesta_puzzle.jpeg' class='puzzle'>\
        <h1>FIN</h1>\
        </div>"
    ),

    final4: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Respuesta</h1>\
        <img #respuesta src='media/img/respuesta_puzzle.jpeg' class='puzzle'>\
        <h1>FIN</h1>\
        </div>"
    ),

    recibirentradas: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Concierto</h1>\
        <img #respuesta src='media/img/respuesta_puzzle.jpeg' class='puzzle'>\
        <p>Conseguís las entradas y finalmente podeis ir al concierto. \
        Lo pasais genial e incluso conseguís unas camisetas firmadas. \
        <a href='volvercasa'>Pulsa para volver a casa</a></p>\
        </div>"
    ),

    volvercasa: new undum.SimpleSituation(
        "<div class='transient'>\
        <h1>Final del juego</h1>\
        <img #respuesta src='media/img/respuesta_puzzle.jpeg' class='puzzle'>\
        <p>Has pasado un muy buen día gracias a las buenas decisiones y \
        por tus dotes deductivas.</p>\
        <h1>FIN</h1>\
        </div>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    paraguas: new undum.OnOffQuality(
        "Paraguas", { priority: "0001", group: 'inventario', onDisplay: "&#10003;" }
    )

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("paraguas", false)
    system.setCharacterText("<p>¡Comienza la historia!</p>");
};