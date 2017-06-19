/**
 * Created by selbylei on 17/6/11.
 */
//1.构造函数方法
function Cat() {
    this.name = "大猫"
}

Cat.prototype.makeSound = function () {
    console.log("喵喵");
};

// 生成实例，使用new关键字
var cat1 = new Cat();
cat1.makeSound();

//Object.create方法
var Dog = {
    name: "大狗",
    makeSound: function () {
        console.log(this.name);
    },
    changeName: function (str) {
        this.name = str;
    }
};

var dog1 = Object.create(Dog);
var dog2 = Object.create(Dog);
dog1.makeSound();
dog2.changeName("小狗");
dog1.makeSound();


//极简主义法
var Panda = {
    newInstance: function () {
        var panda = {};
        panda.name = "大熊猫";
        panda.makeSound = function () {
            console.log("哇哦哇哦");
        }
        return panda;
    }
};
var panda = Panda.newInstance();
panda.makeSound();


//继承
var Animal = {
    newInstance: function () {
        var animal = {};
        animal.sleep = function () {
            console.log("sleep");
        };
        return animal;
    }
};

var Snake = {
    newInstance: function () {
        var snake = Animal.newInstance();
        snake.name = "大蛇";
        snake.makeSound = function () {
            console.log("呜呜");
        }
        return snake;
    }
};
var snake = Snake.newInstance();
snake.sleep();
snake.makeSound();


//数据共享
var Fish = {
    sound: "喵喵",
    newInstance: function () {
        var fish = {};
        fish.makeSound = function () {
            console.log(Fish.sound);
        };
        fish.changeSound = function (x) {
            Fish.sound = x;
        };

        return fish;
    }
};

var fish1 = Fish.newInstance();
var fish2 = Fish.newInstance();

fish1.makeSound();
fish2.changeSound("啵啵～～");
fish1.makeSound();







