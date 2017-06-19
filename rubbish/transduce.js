/**
 * Created by selbylei on 17/6/11.
 */
class Category {
    constructor(val) {
        this.val = val;
    }

    addOne(x) {
        return x + 1;
    }
};

var category = new Category();
console.log(category.addOne(2));