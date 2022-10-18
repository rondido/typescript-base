class Man{
    run(){
        return 'Animal이 달리다'
    }
}

class Cat extends Man{
    run(){
        return 'Cat가 달리다'
    }
}

class Woman extends Man{
    run(){
        return 'Woman이 달린다'
    }
}

const w = new Woman();
const m = new Man();
const c = new Cat();

console.log(m.run()); // man이 달린다.
console.log(c.run()); // Cat이 달린다.
console.log(w.run()); // Woman이 달린다.