$(document).ready(function(){
    
    $('#categoriesTable').DataTable();

    $('.edit_btn').on("click",function(){
        $("#category_id").val($(this).data("code"));
        $("#category_name").val($(this).data("name"));
        $("#categoriesModal").modal("show");
    });

    $("#sendEdit_btn").on("click",function(){
        $("#category_id").prop("disabled",false);
        $("#edit_form").submit();
    });
});