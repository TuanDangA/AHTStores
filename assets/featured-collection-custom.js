function chooseVariant(product, variant){
    var image = document.getElementsByClassName("product-image-{{ product.id }}");
    for (let index = 0; index < product.variants.lengt; index++) {
        if (product.variants[i] == variant) {
            image.innerHTML = "<a href="{{ product.url }}"><img src="{{ product.variants[i].featured_image | img_url }}" alt=""></a>";
        }
    }
}