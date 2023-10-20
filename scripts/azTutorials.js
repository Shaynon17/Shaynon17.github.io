

//so far, singlePlayer() and twoPlayer() will remove all <tr>'s that doesnt have the specefied class.
//The problem, once one button is clicked, when the second filter button is clicked, it doesnt reset the entire table. 


    function singlePlayer() {
const rows = document.querySelectorAll('tr');
    const className = 'solitaire';
rows.forEach(row => {
if (!row.classList.contains(className)) {
        row.remove();
}
});
}

    function twoPlayer() {
        const rows = document.querySelectorAll('tr');
        const className = 'twoPlayer';
        rows.forEach(row => {
            if (!row.classList.contains(className)) {
                row.remove();
            }
        });
    }

// this function reloads the page when i select the "reset" button
// either i need to have ethe onClick event execute the reset function then the other function, or i need to have the page reset and then click anotehr function
//obviously there could be a different answer, try the above two first.
//I think i will need another answer for when i have multiple filter options avaiable. 
function reset() {
    return location.reload(true)
}


    //CAP code that worked directly in my HTML document


    //buttons
//    <button onclick='singlePlayer()' >
//             Solitaire
//         </button><br><br>
//         <button onclick='twoPlayer()'>
//             2 Player
//         </button>



//both functions work

//     <script>
// function singlePlayer() {
// const rows = document.querySelectorAll('tr');
// const className = 'solitaire';
// rows.forEach(row => {
// if (!row.classList.contains(className)) {
// row.remove();
// }
// });
// }
// </script>


// <script>
//     function twoPlayer() {
//         const rows = document.querySelectorAll('tr');
//         const className = 'twoPlayer';
//         rows.forEach(row => {
//             if (!row.classList.contains(className)) {
//                 row.remove();
//             }
//         });
//     }
// </script>
