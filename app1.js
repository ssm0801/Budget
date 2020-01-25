// Budget Controller

var budgetControlller = (function() {

})();

// UI Controller
var UIController = (function() {

    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }

    return{
        getInput : function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMStrings : function(){
            return DOMStrings;
        }
    }

})();

//Global Controller
var controller = (function(budgetCtrl,UICtrl) {
    
    var setupEventListener = function(){

        var DOMStrings = UICtrl.getDOMStrings();

        document.querySelector(DOMStrings.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress', function(event){
            if(event.keyCode==13 || event.which==13){
            ctrlAddItem();
            }
        });
        
    };

    var ctrlAddItem = function(){

        var input = UICtrl.getInput();
        console.log(input);
        // 1. get input data
        
        // 2. add item to budget controller

        // 3. add item to UI

        // 4. calculate the budget

        // 5. display budget on UI

    };

    return{
        init : function(){
            setupEventListener();
        }
    }
    
})(budgetControlller,UIController);

controller.init();