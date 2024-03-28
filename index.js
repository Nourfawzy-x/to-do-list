$(".fa-plus").click(function(){
    var inputValue=$("input").val();
    var toTodItem=`
    <div class="sss row">
    <div class="fisrt-section col-md-6 py-1 my-1 " style="background-color:rgb(35, 1, 35);">
    <input type="checkbox" checked="checked" class="py-1"/>
    <span class="text-white">${inputValue}</span> 
    </div>
    <div class="col-md-5 my-1 py-1 empty-div" style="background-color:rgb(35, 1, 35);"></div>
    <i class=" col-md-1 rubsh fa-solid fa-trash-arrow-up fa-1x py-1 my-1" 
    style="color:red; font-size: 1.2em; background-color:rgb(35, 1, 35);cursor: pointer;"></i>
   </div>
    `
   $(".to-do-list").append(toTodItem);
  $('.input-form').focus(function() {
    $(this).val('');
  });
})
$(".to-do-list").on('click', '.fa-trash-arrow-up', function() {
 let item=$(this).closest(".sss");
item.remove()
  });
    
 