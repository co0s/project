let UserName = 'вЛад';
let UserSurname = 'Петров';

let TransformedUserName = UserName.substring(0,1).toUpperCase() + UserName.substring(1).toLowerCase();
let TransformedUserSurname = UserSurname.substring(0,1).toUpperCase() + UserSurname.substring(1).toLowerCase();

console.log(TransformedUserName);
console.log(TransformedUserSurname);

let TransformedUserNameCorrection = (TransformedUserName === UserName) ? 'Имя осталось без изменений' : 'Имя было изменено';
let TransformedUserSurnameCorrection = (TransformedUserSurname === UserSurname) ? 'Фамилия осталась без изменений' : 'Фамилия была изменена';

console.log(TransformedUserNameCorrection);
console.log(TransformedUserSurnameCorrection);
