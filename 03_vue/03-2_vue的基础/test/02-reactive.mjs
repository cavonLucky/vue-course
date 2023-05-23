import { reactive, ref } from "vue";

const stu = reactive({
  name: '程续缘yyds'
})

const count = ref(0); // {value: 0}

console.log(stu);
console.log(count);
console.log(count.value);

const person = ref({ name: '读书的s', age: 11 });
console.log(person.value);
console.log(person.value.name);