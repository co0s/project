////////////////////////////ВЕРСТКА ПИСЕМ 



1 /*используем старый */DOCTYPE

2 mso-table-lspace / mso-table-lspace /*для сброса стилей*/

3 border-collapse: collapse /* для того чтобы бордеры схлопывались*/

4 /*превью письмя. вводное слово делается так*/<div style="font-size:0px;font-color:#ffffff;opacity:0;visibility:hidden;width:0;height:0;display:none;">Тестовое
		письмо</div> /*скрываем полностью див и пишем то что хотим*/

5 <table cellpadding="0" cellspacing="0" class="table-600" width="600" bgcolor="#ffffff" align="center"> /*никаких промежутков между ячейками и бгколор фон задается тоже атрибутом*/

6 /*верстаем через таблицы как бы таблица в твблице в качестве контейнера*/

7 @media (max-width: 620px) {
	.table-600 {
		width: 280px !important
	}
}  /* когда ширина таблицы дойдет до 620 и меньше то ширина станет 280 пикселей)*/

8 /*шрифты надо прописывать в 2х местах*/[style*="Verdana"] {
	font-family: 'Verdana', arial, sans-serif !important; 
}   
  /*и*/
   <h1 class="title" style="font-family:Verdana, Geneva, Tahoma, sans-serif">I am Beyoncé always.</h1>

9    border-radius /*в аутлуке не работает*/

10 /*вместо */> /*используем */&gt

11 align="center" /* выравнивает по центру */ align="left" /* по левому краю*/

12 /*задавать по кругу в контейнере отступы тогда ну нужно будет денать лишние падинги*/

13 style="padding-bottom: 26px" /*можно прописывать атрибуты к элементам*/