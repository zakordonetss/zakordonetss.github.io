$(document).ready(function () {

    $(".scrollbar__link:first-child").click(function(e) {
        e.preventDefault();
        $(".product-photo__large-inner").animate({opacity: 0}, 200);
        setTimeout(() => {
            $(".product-photo__large-inner").animate({opacity: 1}, 200);
            $(".product-photo__large-inner").removeClass('product-photo__large-inner_active');
            $(".product-photo__large-inner:first-child").addClass('product-photo__large-inner_active');
        }, 200);
    })

    $(".scrollbar__link:nth-child(2)").click(function(e) {
        e.preventDefault();
        $(".product-photo__large-inner").animate({opacity: 0}, 200);
        setTimeout(() => {
            $(".product-photo__large-inner").animate({opacity: 1}, 200);
            $(".product-photo__large-inner").removeClass('product-photo__large-inner_active');
            $(".product-photo__large-inner:nth-child(2)").addClass('product-photo__large-inner_active');
        }, 200);
    })

    $(".scrollbar__link:nth-child(3)").click(function(e) {
        e.preventDefault();
        $(".product-photo__large-inner").animate({opacity: 0}, 200);
        setTimeout(() => {
            $(".product-photo__large-inner").animate({opacity: 1}, 200);
            $(".product-photo__large-inner").removeClass('product-photo__large-inner_active');
            $(".product-photo__large-inner:nth-child(3)").addClass('product-photo__large-inner_active');
        }, 200);
    })


    // PRODUCTS ============================

    $(".var__link:first-child").click(function(e) {
        e.preventDefault();
        $(".product").animate({opacity: 0}, 300);
        setTimeout(() => {
            $(".product").animate({opacity: 1}, 300);
            $(".product").removeClass('product_active');
            $(".product:first-child").addClass('product_active');
        }, 300);
    })

    $(".var__link:nth-child(2)").click(function(e) {
        e.preventDefault();
        $(".product").animate({opacity: 0}, 300);
        setTimeout(() => {
            $(".product").animate({opacity: 1}, 300);
            $(".product").removeClass('product_active');
            $(".product:nth-child(2)").addClass('product_active');
        }, 300);
    })

    $(".var__link:nth-child(3)").click(function(e) {
        e.preventDefault();
        $(".product").animate({opacity: 0}, 300);
        setTimeout(() => {
            $(".product").animate({opacity: 1}, 300);
            $(".product").removeClass('product_active');
            $(".product:nth-child(3)").addClass('product_active');
        }, 300);
    })



    // BUTTONS ===============================

    let data =  {
        variantID: 0,
        quantity: 0
    }

    $(".button__btn_build").click(function() {
        if (data.variantID && data.quantity) {
            $.ajax({
                url:'https://jsonplaceholder.typicode.com/posts',
                method:'POST',
                dataType: 'json',
                processData: false,
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(){
                    let orderMassage = 
                        `The order has been sent.
                        Order details:
                        Model: ${data.variantID}
                        Quantity: ${data.quantity}
                        `
                    alert(orderMassage);
                },
                error: function(er) {
                    console.log(er);
                    alert('Something went wrong');
                }
            });
        } else alert('You have not chosen anything')
    })

    $(".button__btn_add").click(function() {
        let btn = $(this);
        data.variantID = btn.val();
        data.quantity += 1;
    })
    
});



