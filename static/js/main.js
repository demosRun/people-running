$(function () {
  new Swiper('.swiper-container-pPX8XxuUyIehAAEu', {
    pagination: '.pagination-pPX8XxuUyIehAAEu',
    paginationClickable: true,
    autoplay: 3000
  })

  var cooperation = new Swiper('.swiper-cooperation', {
    slidesPerView: 9
  })

  $(".switch1 li").click(function(){
    $(".switch1 li").attr("class","");
    $(".headingNews").hide();
  
    $(this).attr("class","active");
    $(".headingNews").eq($(this).index()).show();
  })

  $('.left-button').click(function(){
    cooperation.swipePrev(); 
  })

  $('.right-button').click(function(){
    cooperation.swipeNext(); 
  })
})