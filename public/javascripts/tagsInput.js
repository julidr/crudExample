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
        });