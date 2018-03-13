function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
};

function Reminder(name, description, date, frequency){

    this.name = name;
    this.description = description;
    this.date = date;
    this.frequency = frequency
}

//would spawn after current reminder
Reminder.spawnNextReminder = function() {

    var currReminder = Reminder;
    var now = new Date();
    var dateOne;
    var dateTwo;
    var newDate = new Date();

    //gets reminder for frequency 1 for every reminder then goes through if statements using that date as currReminder.
    new Reminder().date = new Date(now.getDay(),now.getMonth()+1,now.getFullYear());

    //once a month - usual payment method
    if (Reminder.frequency = 1)
    {
        currReminder = new Reminder();
        return currReminder;
    }

    //twice a month
    if (Reminder.frequency = 2)
    {
        dateOne = now;
        dateTwo = currReminder;

        //gives the difference in hours between now and next reminder
        var diff = Math.abs(dateOne.getTime() - dateTwo.getTime()) / 3600000;

        //divides hours by two
        var time = diff / 2;

        //adds time to 'now' var
        var n = now.getTime() + time;

        //makes var newDate a Date type
        n = newDate;

        new Reminder().date = n;
        return Reminder;
    }

    //four times a month
    if (Reminder.frequency = 3)
    {

    }
};

//https://stackoverflow.com/questions/499838/javascript-date-next-month
//https://stackoverflow.com/questions/19225414/how-to-get-the-hours-difference-between-two-date-objects

// Asset Object - Leon Irving B00301496

/*
Instantiates a new Asset object based on its name, quantity, and isIncome.
The method also sets reminder to a blank state with just dueDate and frequency fields set.
 */
var Asset = function(name, quantity, isIncome, Reminder) {
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder("", "", new Date(), 0);
};

/*
Calls the Reminder() method and sets reminder to the parameters listed.
 */
Asset.prototype.setReminder = function(name, description, date, frequency) {
	this.reminder = new Reminder(name, description, date, frequency);
};

/*
Resets the reminder to a blank state.
 */
Asset.prototype.removeReminder = function() {
    this.reminder.name = "";
    this.reminder.description = "";
    this.reminder.date = new Date();
    this.reminder.frequency = 0;
};

var addIncomeName, addIncomeAmount, addIncomeDate, addIncomeButton;

function addIncome(addIncomeName, addIncomeAmount, addIncomeDate){
    var asset = new Asset(addIncomeName.value, addIncomeAmount.value, addIncomeDate.date);
    console.log(asset);
}

window.onload = function(){
    console.log("test");
	addIncomeName = document.getElementById("addIncomeName");
    addIncomeAmount = document.getElementById("addIncomeAmount");
    addIncomeDate = document.getElementById("addIncomeDate");
    addIncomeButton = document.getElementById("addIncomeConfirm");
    addIncomeButton.onclick = addIncome(addIncomeName, addIncomeAmount, addIncomeDate);
};

function UserBudget(userName, userPassword, filePath){
	this.userName = userName;
	this.userPassword = userPassword;
	this.saveFileLocation = filePath +"/" + userName;
};
