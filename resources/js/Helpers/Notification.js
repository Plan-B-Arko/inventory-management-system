class Notification {

    success() {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Done',
            tiemout: 1000,
        }).show();
    }


    alert() {

        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Are You Sure ?',
            tiemout: 1000,
        }).show();

    }

    warning() {

        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: 'Something Went wrong !',
            timeout: 1000,
        }).show();

    }
    image_validation() {

        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'Upload Image less than 1MB',
            timeout: 1000,
        }).show();

    }
    cart_success() {

        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Add to Cart',
            timeout: 1000,
        }).show();

    }
    cart_delete() {

        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Deleted',
            timeout: 1000,
        }).show();

    }
    increment_done() {

        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Cart Quantity Increment Successfully',
            timeout: 1000,
        }).show();

    }
    decrement_done() {

        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Cart Quantity Decrement Successfully',
            timeout: 1000,
        }).show();

    }


}
export default Notification = new Notification()