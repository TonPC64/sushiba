angular.module('shibaApp', [])
  .controller('shibaCtrl', function ($scope) {
    $scope.food = [{name: 'หมูชุบแป้งทอด',      type: 0,price: 129, pic: 'img/appetizer/86A74191-1C09-42F5-B698-3089753E9998.png'},
      {name: 'เทมปุระกุ้ง',       type: 0,price: 159, pic: 'img/appetizer/497D66EB-8739-4A8D-9D22-7DA7129E61C8.png'},
      {name: 'เทมปุระรวม',        type: 0,price: 139, pic: 'img/appetizer/580799CC-B585-4AA6-A433-C79050BC8ED7.png'},
      {name: 'แคลิฟอร์เนียไข่กุ้ง', type: 0,price: 148, pic: ' img/appetizer/09F24DD8-DD16-4EB4-AEC7-55FBECFAC8D5.png'},
      {name: 'เกี๊ยวซ่า',        type: 0,price: 77,pic: ' img/appetizer/732D6ED0-947B-4955-9342-D5ECC4123D44.png'},
      {name: 'ทาโกะยากิ',        type: 0,price: 119,pic: ' img/appetizer/9B3A843F-7A27-4864-82F9-896408BF8F32.png'},
      {name: 'เห็ดเออริจินผัดเนย',  type: 0,price: 70,pic: ' img/appetizer/F803A51C-9657-4F3E-ADD8-6883EA498D72.png'},
      {name: 'เห็ดเข็มทองผัดเนย',   type: 0,price: 65,pic: ' img/appetizer/598E3B42-1F7C-4F25-8DEE-AB7F31674EE1.png'},
      {name: 'ปลาหมึกทอด',       type: 0,price: 125,pic: 'img/appetizer/018870D1-CED2-47B1-ADE3-0C3871D958F5.png'},
      {name: 'มันฝรั่งชุบแป้งทอด',  type: 0,price: 97,pic: ' img/appetizer/57B8F441-16D2-465B-A514-0A7E048AD867.png'},
      {name: 'ราเม็งแชมป์เปี้ยน',    type: 1,price: 148,pic: 'img/noodle/89AB4410-5F1E-41B9-B979-C562E615E337.png'},
      {name: 'คะระ ราเม็งแชมป์เปี้ยน', type: 1,price: 148,pic: 'img/noodle/DF377D08-D68B-406C-85F5-BB8BA2C74AC1.png'},
      {name: 'อุด้งหมูสุกี้ยากี้',  type: 1,price: 145,pic: ' img/noodle/F868712C-FEAB-438B-A25F-7C4056D27812.png'},
      {name: 'อุด้งเทมปุระ',       type: 1,price: 135,pic: 'img/noodle/4EF2E9C5-C7E8-4903-99D3-7D465580FC11.png'},
      {name: 'ยากิโซบะกระทะร้อนห่อไข่',type: 1,price: 129,pic: 'img/noodle/9A1C2DCE-EAB0-4009-9095-F2B02D410633.png'},
      {name: 'ชาเขียวเย็น',         type: 2,price: 26,pic: 'img/drink/4A2495EB-9FC4-4AD0-A3DB-05DE96097EA2.png'},
      {name: 'ชาเขียวร้อน',         type: 2,price: 26,pic: ' img/drink/91A225AB-0FEF-4F97-A6E7-FA9B1A75B152.png'},
      {name: 'น้ำส้มคั้น',        type: 2,price: 56,pic: ' img/drink/2938B904-2FAD-4352-9ED7-44B6856E7921.png'},
      {name: 'น้ำมะม่วงมหาชนก',     type: 2,price: 50,pic: 'img/drink/025BBEB1-71FB-4221-AA9D-8DAE4802078E.png'},
      {name: 'กาแฟเย็น',          type: 2,price: 46,pic: ' img/drink/415685B6-88CE-42E9-AEE9-042250D33C3B.png'},
      {name: 'ข้าวราดหน้าไก่ใส่ใข่',  type: 3, price: 129,pic: 'img/rice/75632C3B-9861-4285-B61B-4BB4A72ECBF1.png'},
      {name: 'ข้าวหน้าเนื้อ',       type: 3, price: 150,pic: 'img/rice/92F1C7EE-D59C-41E0-95C0-198D1C3B66BE.png'},
      {name: 'ข้าวราดหน้าไก่ทอดราดซอสนัมบัง',type: 3, price: 169,pic: 'img/rice/D2496E8A-54C4-4634-AAFA-CF88FC6FFBED.png'},
      {name: 'ข้าวราดหน้าหมูชุปแป้งทอด',type: 3, price: 150,pic: 'img/rice/AF45C1CF-AE2E-47AE-A417-136C2B0AA25F.png'},
      {name: 'ข้าวหน้าหมู',         type: 3, price: 139,pic: 'img/rice/96A1FC05-B83A-4FEF-9583-66033E38CEF3.png'}]

    $scope.choose = []

    var calcTotal = function (array) {
      var total = 0
      for (var i = 0; i < array.length; i++) {
        total += array[i].price
      }
      return total
    }

    var discount = function (price, percent) {
      return price * (percent / 100)
    }

    $scope.calcBill = function (foods) {
      var food = foods.filter(isFood)
      var drink = foods.filter(isDrink)
      var totalFood = calcTotal(food)
      var totalDrink = calcTotal(drink)
      var discountFood = 0
      var discountDrink = 0

      if (totalDrink + totalFood >= 200) {
        discountFood = discount(totalFood, 10)
        discountDrink = discount(totalDrink, 10)
      }
      else if (totalDrink + totalFood >= 100) {
        discountFood = discount(totalFood, 10)
      }
      return {total: (totalFood + totalDrink),
        allFood: foods,
        food: food,
        drink: drink,
        totalFood: totalFood,
        totalDrink: totalDrink,
        discountFood: discountFood,
        discountDrink: discountDrink,
      discount: (totalFood + totalDrink) - (discountFood + discountDrink)}
    }

    $scope.addToBill = function (food) {
      $scope.choose.push(food)
    }
    $scope.removeFromBill = function (index) {
      $scope.choose.splice(index, 1)
    }

    var isFood = function (choose) {
      if (choose.type === 0) return choose.type === 0
      else if (choose.type === 1) return choose.type === 1
      else if (choose.type === 3) return choose.type === 3
    }

    var isDrink = function (choose) {
      return choose.type === 2
    }

    $scope.show_sushi = function () {
      var sushi = $scope.food.filter(function (type_0) {
        return type_0.type === 0
      })
      return sushi
    }
    $scope.show_noodle = function () {
      var noodle = $scope.food.filter(function (type_1) {
        return type_1.type === 1
      })
      return noodle
    }
    $scope.show_bento = function () {
      var bento = $scope.food.filter(function (type_2) {
        return type_2.type === 2
      })
      return bento
    }
    $scope.show_drink = function () {
      var drink = $scope.food.filter(function (type_3) {
        return type_3.type === 3
      })
      return drink
    }

    $scope.sushi = function () {
      $scope.sushi = 1

    }

  })
