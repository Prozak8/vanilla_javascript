var budgetController = (function() {

})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {

        // 1. Get field input data.
        // 2. Add item to budget controller.
        // 3. Add item to UI.
        // 4. Calculate the budget.
        // 5. Display budget on the UI.

    });

    document.addEventListener('keypress', function(event) {

        console.log(event);

    });

})(budgetController, UIController);