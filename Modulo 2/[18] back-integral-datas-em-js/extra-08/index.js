const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale');

const data = new Date(2020, 9, 5);

const a = format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
console.log("a)", a);

const b = data.toLocaleDateString(); // fiz diferente para ser um método a mais, mas poderia ser "format" com os parâmetros "dd/MM/yyyy"
console.log("b)", b);

const c = format(data, "d MMM", { locale: ptBR });
console.log("c)", c);

const d = format(data, "dd MMM yyyy", { locale: ptBR });
console.log("d)", d);

const e = format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBR });
console.log("e)", e);

const f = format(data, "dd/MMM", { locale: ptBR });
console.log("f)", f);