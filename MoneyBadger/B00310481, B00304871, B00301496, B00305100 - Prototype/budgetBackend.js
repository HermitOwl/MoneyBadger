document.onload = function(){
    //Initial Login Page
    var nameStart = document.getElementById("nameStart");
    var passwordStart = document.getElementById("passwordStart");
    var passwordConfirm = document.getElementById("passwordConfirm");
    var initialLoginConfirmButton = document.getElementById("initialLoginConfirm");

    //Login Page
    var userName = document.getElementById("name");
    var password = document.getElementById("password");
    var loginConfirm = document.getElementById("loginConfirm");

    //Main Menu
    var totalIncome = document.getElementById("totalIncome").valueOf();
    var totalExpenditure = document.getElementById("totalExpenditure").valueOf();
    var totalSavings = document.getElementById("totalSavings").valueOf();

    //Settings Page
    var changeDetailsButton = document.getElementById("changeDetails");
        //changeDetailsButton.onclick =
    var csvExportButton = document.getElementById("csvExport");
        //csvExportButton.onclick =
    var budgetResetButton = document.getElementById("budgetReset");
        //budgetResetButton.onclick =
    var userResetButton = document.getElementById("userReset");
        //userResetButton.onclick =

    //Add Income Page
    var addIncomeNameField = document.getElementById("addIncomeName");
    var addIncomeQuantityField = document.getElementById("addIncomeAmount");
    var addIncomeDateField = document.getElementById("addIncomeDate");
    var addIncomeFreqField = document.getElementById("addIncomeFrequency");
    var addIncomeConfirmButton = document.getElementById("addIncomeConfirm");
    addIncomeConfirmButton.onclick = addAsset(addIncomeNameField.value, addIncomeQuantityField.value, true, addIncomeFreqField.value, addIncomeDateField.value);

    //Add Expenditure Page
    var addExpenditureNameField = document.getElementById("addExpenditureName");
    var addExpenditureQuantityField = document.getElementById("addExpenditureAmount");
    var addExpenditureDateField = document.getElementById("addExpenditureDate");
    var addExpenditureFreqField = document.getElementById("addExpenditureFrequency");
    var addExpenditureConfirmButton = document.getElementById("addExpenditureConfirm");
    addExpenditureConfirmButton.onclick = addAsset(addExpenditureNameField.value, addExpenditureQuantityField.value, true, addExpenditureFreqField.value, addExpenditureDateField.value);
};

function IOControl(userFilePath){
	this.userFilePath = userFilePath;
	this.userFile ="";
};

//B00304871
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
//

// Asset Object - Leon Irving B00301496

/*
Instantiates a new Asset object based on its name, quantity, and isIncome.
The method also sets reminder to a blank state with just dueDate and frequency fields set.
 */
var Asset = function(name, quantity, isIncome, frequency, date) {
    this.name = name;
    this.quantity = quantity;
    this.isIncome = isIncome;
    this.reminder = new Reminder(name, "", date, frequency);
};

/*
Calls the Reminder() method and sets reminder to the parameters listed.
*/
Asset.prototype.setReminder = function(name, description, date, frequency){
    this.reminder.name = name;
    this.reminder.description = description;
    this.reminder.date = date;
    this.reminder.frequency = frequency;
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

function UserBudget(userName, userPassword, filePath)
{
    this.userName = userName;
    this.userPassword = userPassword;
    this.saveFileLocation = filePath +"/" + userName;
    this.Income = [];
    this.Expenditure = [];
}

UserBudget.prototype.addAsset = function(name, quantity, isIncome, frequency, dueDate)
{
    var a = new Asset(name, quantity, isIncome, frequency, dueDate);
    if (a.isIncome = true)
    {
        this.Income.push(a);
    }
    else
        this.Expenditure.push(a);
};

UserBudget.prototype.setAsset = function (index, name, quantity, isIncome, frequency, dueDate)
{
    if(isIncome){
        if(this.Income.length !== 0)
            for(var i=0; i< this.Income.length; i++){
                if(i === index){
                    this.Income[i] = new Asset(name, quantity, isIncome,frequency, dueDate)
                }
            }
    }
    else
    {
        if(this.Expenditure.length !== 0)
            for(i=0; i< this.Expenditure.length; i++){
                if(i === index){
                    this.Expenditure[i] = new Asset(name, quantity, isIncome,frequency, dueDate)
                }
            }
    }
};

function getAsset (Iindex, isIncome)
{
    if(isIncome){
        return Income.splice(Iindex,1);
    }
    else
    {
        return Expenditure.splice(Iindex,1);
    }
}

UserBudget.prototype.removeIncome = function(index, isIncome)
{
    if (isIncome = true)
    {
        this.Income = Income.splice(index,1);
    }
    else
        this.Expenditure = Expenditure.splice(index,1);
};

var totalIncome = 0;

UserBudget.prototype.tallyIncome = function()
{
   //this.Income.forEach();

    /*
    function incomeSum(key)
    {
        totalIncome += this.key.quantity
    }
    */

    for (var i = 0; i > this.Income.length; i++){
        totalIncome += this.Income[i].quantity;
    }

    return totalIncome;

   //return this.Income[0].quantity;
};

var totalExpenditure = 0;

UserBudget.prototype.tallyExpenditure = function ()
{
    var totalExpenditure = 0;
    this.Expenditure.forEach(expenditureSum);

    function expenditureSum()
    {
        totalExpenditure += this.quantity
    }
    return totalExpenditure;
};

function tallySavings ()
{
    tallyIncome();
    tallyExpenditure();
    var totalSavings = totalIncome - totalExpenditure;
    return totalSavings;

}

function getAssetByMonth(item){
    if(item.Reminder.date.getMonth()=== currentMonth){

        if( item.Reminder.date.getYear()=== currentYear){

            return true;
        }
    }
    else{
        return false;
    }

}

function getIncomeHistory (index)
{
    //First get the month

    var date = new Date();
    var indexMonth =  date.getMonth()- index;
    while(indexMonth <0)
    {
        var currentYear = date.getYear()-1;
        indexMonth += 11;
    }

    var temp = Income.filter(getAssetByMonth);

}

function getExpenditureHistory (index) {
//First get the month

    var date = new Date();
    var indexMonth = date.getMonth() - index;
    while (indexMonth < 0) {
        var currentYear = date.getYear() - 1;
        indexMonth += 11;
    }

    var temp = Expenditure.filter(getAssetByMonth);
}