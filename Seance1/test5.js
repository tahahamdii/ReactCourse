const nombres = [1,"deux","3",4,"cinq"];
for (let i = 0 ; i < nombres.length ; i++) {
    console.log(nombres[i]);
}

for (const n of nombres) {
    console.log(n);
}