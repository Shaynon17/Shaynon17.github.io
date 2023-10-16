

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
