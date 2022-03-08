/////////////////////////////
//1 and 3
/////////////////////////////
// function clear(elem) { 
//     while(elem.firstChild){
//         elem.firstChild.remove()
//     }
// }
// clear(elem); 
////////////////////////////
//HTML of table is incorrect so "aaa" is moved up
////////////////////////////
// const list = document.createElement("ul")
// document.body.append(list)
// while(1){
//     const input = prompt("Enter list item")
//     if(!input) break;
//     list.append(document.createElement("li"))
//     list.lastChild.textContent = input;
// }
////////////////////////////
// let data = {
//     "Fish": {
//         "trout": {},
//         "salmon": {}
//     },

//     "Tree": {
//         "Huge": {
//             "sequoia": {},
//             "oak": {}
//         },
//         "Flowering": {
//             "apple tree": {},
//             "magnolia": {}
//         }
//     }
// };
// function createTree(container, data){
//     const listContainer = document.createElement("ul")
//     container.append(listContainer)
//     for(i of Object.keys(data)){
//         const item = document.createElement("li")
//         item.textContent = i;
//         listContainer.append(item)
//         console.log(i)
//         createTree(item, data[i])
//     }
// }
// let container = document.getElementById('container');
// createTree(container, data);
////////////////////////////
// const lis = document.getElementsByTagName("li")
// for(list of lis){
//     const count = list.getElementsByTagName("li").length
//     if(count) list.firstChild.after(document.createTextNode("[" + count + "]"));
// }
////////////////////////////
// function createCalendar(elem, year, month) {
//     const day = new Date(year + "-" + month + "-1")
//     console.log(day);
//     const tHead = document.createElement("tr")
//     elem.append(tHead)
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "MO"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "TU"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "WE"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "TH"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "FR"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "SA"
//     tHead.append(document.createElement("th"))
//     tHead.lastChild.textContent = "SU"
//     const firstRow = document.createElement("tr")
//     elem.append(firstRow)
//     for (let i = 0; i < 7; i++) {
//         let realDay = day.getDay() - 1;
//         if (realDay === -1) realDay = 6;
//         if (i < realDay) {
//             firstRow.append(document.createElement("td"))
//         } else {
//             const d = document.createElement("td")
//             firstRow.append(d)
//             d.textContent = day.getDate();
//             day.setDate(day.getDate() + 1)
//         }
//     }
//     while (day.getMonth() === month-1) {
//         let realDay = day.getDay() - 1;
//         if (realDay === -1) realDay = 6;
//         const row = document.createElement("tr")
//         elem.append(row)
//         for (let i = 0; i < 7; i++) {
//             const d = document.createElement("td")
//             row.append(d)
//             d.textContent = day.getDate();
//             day.setDate(day.getDate() + 1)
//         }
//     }
// }
// createCalendar(calendar, 2012, 9);
////////////////////////////
// let hour = 0;
// let minute = 0;
// let second = 0;
// let container = document.createElement("div")
// document.body.prepend(container)
// container.append(document.createElement("span"))
// container.innerHTML += ":"
// container.append(document.createElement("span"))
// container.innerHTML += ":"
// container.append(document.createElement("span"))
// let spans = Array.from(container.getElementsByTagName("span"))
// spans[0].textContent = "00"
// spans[0].style.color = "red"
// spans[1].textContent = "00"
// spans[1].style.color = "green"
// spans[2].textContent = "00"
// spans[2].style.color = "blue"
// let ticking = false;
// function clockStart() {
//     ticking = true;
//     const time = new Date();
//     hour = time.getHours();
//     minute = time.getMinutes();
//     second = time.getSeconds();
//     spans[0].innerHTML = (hour > 9) ? hour : "0" + hour;
//     spans[1].textContent = (minute > 9) ? minute : "0" + minute;
//     spans[2].textContent = (second > 9) ? second : "0" + second;
//     setTimeout(() => {
//         if(ticking) clockStart();
//     }, 100);
// }
// function clockStop() {
//     ticking = false;
//     console.log("stop");
// }
////////////////////////////
// one.outerHTML += "<li>2</li><li>3</li>"
////////////////////////////
//Էս վերջինը չհհասկացա ինչ ա ուզում))