let count1 = 9;
let count2 = 12;
let count3 = 3; 

// function like( element ) {
//     if( element == 1 ) {
//         let select1 = document.querySelector( '#like-counter-' );
//         count1 ++;
//         select1.innerText = count1 + ' like(s)';
//     }
//     if( element == 2 ) {
//         let select1 = document.querySelector( '#like-counter-2' );
//         count2 ++;
//         select1.innerText = count2 + ' like(s)';
//     }
//     if( element == 3 ) {
//         let select1 = document.querySelector( '#like-counter-3' );
//         count3 ++;
//         select1.innerText = count3 + ' like(s)';
//     }
// }

function like( element ) {
    let stringK = element.toString();
    let select = document.querySelector( '#like-counter-' + stringK );
    let count = parseInt( select.innerText );
    count++;
    select.innerText = count + ' like(s)';
}