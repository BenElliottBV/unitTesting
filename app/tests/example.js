var mainViewModel = require("../main-view-model").createViewModel();

QUnit.test("Hello World Sample Test:", function (assert) {
    console.log(mainViewModel);
    assert.equal( mainViewModel.counter, 42, "Counter, 42; equal succeeds." );
    assert.equal( mainViewModel.message, "42 taps left", "Message, 42 taps left; equal succeeds." ); 
});
