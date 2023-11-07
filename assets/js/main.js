/*=============== показать меню ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Добавить класс show-menu в навигационное меню Появления меню адаптивног при на жатии на ганбургер 
        nav.classList.toggle('show-menu')
        // Добавьте значок show-для отображения и скрытия значка меню Изменения значка он крутится и изчезает
        toggle.classList.toggle('show-icon')
    })
 }
//  id Значка ганбургера и выподающее меню
 showMenu('nav-toggle','nav-menu') 
 
 /*=============== ПОКАЗАТЬ ВЫПАДАЮЩЕЕ в мобильном меню показать  под меню МЕНЮ Этот класс постоянный а show-dropdown активный класс появляющийся===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Выберите каждый элемент выпадающего списка dropdown__button конкретный элемент на который наводим и от него выподает или добавляется класс активный
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Выберите каждое нажатие кнопки
     dropdownButton.addEventListener('click', () =>{
         // 7. Выберите текущий класс отображения в раскрывающемся списке При  клике на li у li  появляется класс .show-dropdown и подменю разварачивается
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Вызовите функцию toggleItem
         toggleItem(item)
 
         // 8. Удалите класс show-dropdown из других элементов
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 // 3. Создайте функцию для отображения выпадающего списка
 const toggleItem = (item) =>{
     // 3.1. Выберите каждый выпадающий контент Это весь блок выподающего под меню
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. Если тот же элемент содержит класс show-dropdown, удалите
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Добавьте максимальную высоту к содержимому выпадающего списка и добавьте класс show-dropdown Добавляется высота и тем самым она раскрывается плавно
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== УДАЛЕНИЕ ВЫПАДАЮЩИХ СТИЛЕЙ ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Функция удаления выпадающих стилей в мобильном режиме при изменении размера браузера
 const removeStyle = () =>{
     // Проверка, достигает ли медиазапрос 1118 пикселей
     if(mediaQuery.matches){
         // Удалите стиль высоты выпадающего контейнера
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Удалите класс show-dropdown из выпадающего списка item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)

 

/**
 * header sticky & back to top   Липкое меню
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





// slider

$('.one-time').slick({
    dots: true,
    arrows : false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    dotsClass: 'slick-dot',
    responsive: [
       
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2
        //   }
        // },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            slidesToScroll: 1
          }
        }
      ]
  });

