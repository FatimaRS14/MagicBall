const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');

const ask = function(){
        let pregunta = questionInput.value;
        if(pregunta){
            let respuesta = magicBall();
            answerInput.value = respuesta;
        } else{
            answerInput.value = "No puedo responder a eso";
        }


}
const magicBall = function(){

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'Es acertado';
        break;
    case 1:
        eightBall = 'Eso es de afuerzas';
        break;
    case 2:
        eightBall = 'Repite tu pregunta :))';
        break;
    case 3:
        eightBall = 'Sigue soñando :p';
        break;
    case 4:
        eightBall = 'Ni lo sueñes';
        break;
    case 5:
        eightBall = 'jaj Sigue participando';
        break;
    case 6:
        eightBall = 'Si bueno quien tiene hambre';
        break;
    case 7:
        eightBall = 'Joder claro que si :3';
        break;
    }
    return eightBall;
    }
