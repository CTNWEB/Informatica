const if1 = document.getElementById("if1")
const tx1 = document.getElementById("tx1")
if1.addEventListener('click', function() {
    if (tx1.style.display === 'none' || tx1.style.display === '') {
        tx1.style.display = 'block';
    } 
    else {
        tx1.style.display = 'none';
        }
    });
    const if2 = document.getElementById("if2")  
    const tx2 = document.getElementById("tx2") 
    tx2.style.display= "none"
    if2.addEventListener('click', function() {
        if (tx2.style.display === 'none' || tx2.style.display === '') {
            tx2.style.display = 'block';
        } 
        else {
            tx2.style.display = 'none';
            }
        });