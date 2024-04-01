const dummyText = [
  "Chupa chups pie liquorice I love jelly beans muffin lollipop. Sesame snaps fruitcake lollipop toffee I love cake cake pudding donut. Croissant tiramisu halvah pie lemon drops marshmallow chocolate bar halvah cupcake. Pie pastry toffee tootsie roll jelly beans jelly beans jelly beans I love. Chupa chups danish candy shortbread jelly beans. Soufflé jelly beans topping sesame snaps dessert. Lemon drops topping fruitcake bear claw jujubes soufflé cake powder. Fruitcake I love jujubes sweet roll chocolate cake. Brownie biscuit jelly-o sugar plum chocolate cake cotton candy tootsie roll. Chupa chups ice cream pie I love shortbread tootsie roll muffin.",
  "Tiramisu I love I love chocolate jelly chocolate. Candy canes chupa chups halvah marzipan I love. Tiramisu danish marshmallow carrot cake I love chocolate cake candy canes. Soufflé cheesecake sugar plum topping icing bear claw icing marzipan. Biscuit jelly marshmallow cookie apple pie sweet roll caramels caramels. Dessert cake dessert carrot cake jujubes I love liquorice sesame snaps. Sugar plum cotton candy apple pie pie apple pie cupcake chupa chups I love. Sweet marshmallow oat cake danish I love. Jelly beans gummi bears cake fruitcake I love muffin danish oat cake jelly beans.",
  "Sweet roll I love I love chocolate chocolate cake. Apple pie candy apple pie lollipop marshmallow. Chupa chups dragée jujubes bear claw brownie. Jelly I love candy oat cake I love. Cake caramels cheesecake muffin cake. I love chupa chups croissant biscuit gummies dessert biscuit macaroon. Sesame snaps bear claw chocolate cake pastry lollipop danish carrot cake donut jujubes. Chocolate bar chocolate bar tiramisu toffee lollipop pudding gummies oat cake brownie. Donut cupcake candy canes lemon drops tootsie roll macaroon gingerbread dragée.",
  "Cheesecake marshmallow tart tootsie roll danish I love carrot cake. Donut lemon drops soufflé candy canes tart. Cupcake tart chupa chups pie gummies gingerbread sugar plum fruitcake. Macaroon caramels bonbon brownie macaroon liquorice carrot cake sweet roll. I love cookie I love topping jelly-o cheesecake oat cake jelly beans muffin. Shortbread sesame snaps bear claw chocolate cake I love I love jelly-o cookie.",
  "I love cupcake donut tootsie roll oat cake pudding croissant sugar plum I love. Jelly muffin oat cake lemon drops donut brownie bear claw shortbread icing. Chupa chups shortbread cake halvah I love chocolate bar icing. Jelly beans chocolate cake gummi bears cupcake pudding cookie oat cake oat cake I love. Tiramisu wafer tiramisu powder tiramisu jelly beans. Brownie jelly-o tart chocolate jelly-o.",
  "Dragée sweet roll cookie cake tiramisu. Lollipop jelly beans I love jujubes chupa chups fruitcake cake. Gummi bears cupcake sesame snaps chupa chups soufflé carrot cake sesame snaps tootsie roll. Jujubes ice cream lemon drops lollipop pudding candy. Muffin liquorice dessert ice cream candy. Oat cake gummies chupa chups donut pie chocolate cake gingerbread biscuit cake.",
  "Shortbread dessert gummi bears ice cream candy cake. Cupcake chocolate bar I love halvah liquorice. Lollipop liquorice liquorice lollipop donut chupa chups chocolate bar toffee. Chupa chups cheesecake fruitcake chupa chups soufflé powder jujubes bonbon. Cupcake brownie cookie I love dessert shortbread dessert. Marshmallow soufflé jujubes gingerbread liquorice liquorice. Chocolate bar gingerbread halvah jelly-o croissant jelly beans jelly beans. I love gummies gummi bears muffin cake sugar plum cookie.",
  "Chupa chups candy soufflé I love carrot cake shortbread jujubes. Powder sweet icing jujubes cake jujubes powder tart caramels. Soufflé jelly oat cake pudding pastry fruitcake dragée I love. Tootsie roll pudding cupcake pie cake chupa chups jelly beans jelly jelly-o. Gummi bears sweet roll donut caramels shortbread chocolate cake croissant pie I love. Liquorice halvah liquorice sweet roll I love macaroon.",
  "Gingerbread sweet roll powder dessert donut shortbread sweet roll ice cream apple pie. Soufflé ice cream powder liquorice caramels macaroon. I love chocolate sweet marzipan pastry. Jelly cake I love brownie lollipop. Cake tiramisu cake cotton candy candy canes. I love I love sweet carrot cake I love cupcake ice cream. Danish gummi bears dessert brownie danish gummi bears I love dragée. Jelly shortbread wafer cupcake I love chocolate bar. I love sweet roll cupcake cake pie brownie.",
  "Soufflé muffin sugar plum croissant sweet roll chocolate bar cookie tootsie roll tiramisu. Soufflé soufflé pastry tart muffin. Jelly beans muffin tiramisu cookie halvah I love marzipan I love donut. Pie macaroon pie I love wafer cheesecake biscuit marzipan. Cake I love cookie soufflé cake cheesecake jujubes I love. Apple pie dessert dessert sweet cotton candy I love apple pie. Chupa chups I love toffee sugar plum lollipop soufflé.",
];

const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * dummyText.length);

  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<p>${dummyText[random]}</p>`;
  } else {
    const slicedArray = dummyText.slice(0, value);
    const finalArray = slicedArray
      .map(function (singleDummy) {
        return `<p>${singleDummy}</p>`;
      })
      .join("");

    // displaying final dummy text
    result.innerHTML = finalArray;
  }
});
