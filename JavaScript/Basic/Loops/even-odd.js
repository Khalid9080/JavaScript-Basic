

// -------------------- even ----------------------

for (let i = 0; i <= 20; i = i + 2) {
    console.log(i);
}


// tese are same thing--

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// ------------------ odd ---------------------

for (let i = 1; i <= 20; i = i + 2) {
    console.log(i);
}

// tese are same thing--

for (let i = 0; i < 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
