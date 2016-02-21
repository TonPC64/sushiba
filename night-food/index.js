var Nightmare = require('nightmare');
var vo = require('vo');

vo(function* () {
  var nightmare = Nightmare({ show: true });
  var link = yield nightmare
    .goto('http://localhost')
    .wait(1000)
    .click('div.col-sm-2.buttonSushi')
    .wait(1000)
    .click('button.btn.Sushi0')
    .wait(1000)
    .click('div.col-sm-2.buttonBento')
    .wait(1000)
    .click('button.btn.Bento0')
    .wait(1000)
    .click('div.col-sm-2.buttonNoodle')
    .wait(1000)
    .click('button.btn.Noodle0')
    .wait(1000)
    .click('button.btn.Noodle0')
    .wait(1000)
    .click('div.col-sm-2.buttonDrink')
    .wait(1000)
    .click('button.btn.Drink0')
    .wait(10000)
    .click('div.col-sm-2.buttonSushi')
    .wait(1000)
    .click('button.btn.Sushi2')
    .wait(1000)

  yield nightmare.end();
  return link;
})(function (err, result) {
  if (err) return console.log(err);
  console.log(result);
});
