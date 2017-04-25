    $(document).ready(function(){
            var categories = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('category_name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '/getCategories'
            });
            categories.initialize();

            var elt = $('#categories');
            elt.tagsinput({
            itemValue: 'category_id',
            itemText: 'category_name',
            typeaheadjs: {
                name: 'categories',
                displayKey: 'category_name',
                source: categories.ttAdapter()
            }
            });

            webshims.setOptions('forms-ext', {
                replaceUI: 'auto',
                types: 'number'
            });
            webshims.polyfill('forms forms-ext');

            $("#sendForm").on("click",function(){
                var productsData = {
                    name: $("#name").val(),
                    price: $("#price").val(),
                    available: $("#available").prop('checked'),
                    best_seller: $("#best_seller").prop('checked'),
                    image: $("#image").val(),
                    description: $("#description").val(),
                    categories: $("#categories").tagsinput("items")
                }
                console.log(productsData);
                $.ajax({
                    type: 'POST',
                    url: '/createProduct',
                    dataType: "json",
                    data: {info: JSON.stringify(productsData)},
                    done: function(data){
                        alert("Data Loaded: " + data);
                    },
                    error: function(data){
                        console.log("Error: " + JSON.stringify(data));
                    }
                });
            })
        });