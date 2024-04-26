class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.year=year;
        this.model=model;
        this.isAvailable= true;
    }
    toogleAvailability(){
        this.isAvailable=!this.isAvailable;

    }
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(`Car details: ${myCar.make} ${myCar.model} (${myCar.year})`);
console.log(`Is available for rent: ${myCar.isAvailable}`);

myCar.toogleAvailability();
console.log(`Is available for rent after toggle: ${myCar.isAvailable}`);   


class Rental{
    constructor(car,rentalName,rentalStart,rentalEnd){
        this,car=car;
        this.rentalName=rentalName;
        this.rentalStrart=rentalStart;
        this,rentalEnd=rentalEnd;
    }
    calculateRentalDuration(){
        const time = this.rentalEnd-this.rentalStrart
        return time
    }

}

const car = { make: 'Toyota', model: 'Camry' };

const rentalStart = new Date('2024-04-25');
const rentalEnd = new Date('2024-04-30');
function daysBtwn(rentalStart,rentalEnd){
    return Math.round(Math.abs((+rentalEnd) - (+rentalStart))/8.64e7);
}
daysBtwn(('2024-04-25'),('2024-04-30'))
const rental = new Rental(car, 'John Doe', rentalStart, rentalEnd);
const rentalDuration= rentalEnd-rentalStart;
console.log(`Rental duration is ${rentalDuration} days`);


class Question{
    constractor(text,option,correctAnswer){
        this.text=text;
        this.option=option;
        this.correctAnswer=correctAnswer;
    }
    checkAnswer(answer){
        if(answer ===this.correctAnswer){
            return answer === this.correctAnswer;

        }
        else{
            return false
        }
     
    }
}
const quiz="Which of the above is Kenya's capital city?";
const choices=["Nairobi","Mumbai","London"];
const result="Nairobi";

const myQuiz= new Question(quiz,choices,result);
const answer = "Nairobi";
console.log(`The correct answer?${myQuiz.checkAnswer(answer)}`);


class Quiz{
    constractor(questions,currentQuestionIndex,score){
        this.questions=questions;
        this.currentQuestionIndex=0;
        this.score=0;
    }
    addQuestion(question){
        this.questions.push(question);

    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(answer){
       const resentquiz= this.questions[this.currentQuestionIndex];
       if(resentquiz.checkAnswer(answer)){
        this.score++;
        console.log("It is the correct answer! Your score is:"+this.score);
       }
       else{
        console.log("Good attempt try again");
       }
    }

}
const attempt=new Quiz();


const question1 = new Question("What is 2 + 2?", 4);
const question2 = new Question("What is the capital of France?", "Paris");

Quiz.addQuestion(question1);
Quiz.addQuestion(question2);

quiz.submitAnswer(4); 
quiz.nextQuestion(); 
quiz.submitAnswer("London"); 