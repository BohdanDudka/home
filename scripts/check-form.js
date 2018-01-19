function Form(sSelector) {
    var f = this;
    f.form = $(sSelector);
    f.textfields = f.form.find('.ContactUs__fill');
    // f.messageError = f.form.find('.b-form__message_error');
    
    f.check = function (event) {
        event.preventDefault();

        var formError = false;

        f.textfields.each(function () {
            var currentTextField = $(this);
            var textFieldError = f.checkTextField(currentTextField);

            if(textFieldError) {
                formError = true;
            }
        });

    }

    f.checkTextField = function (textfield) {
        var regexp = {
             "your name"     : "^[A-Za-z ]{2,15}$"
            ,"your subject"  : "^[A-Za-z ]{2,15}$"
            ,"your e-mail"   : "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
            ,"company name"  : "^[A-Za-z ]{2,15}$"
        }
            , currentTextfield = textfield.length ? textfield : $(this)
            ,currentRe = new RegExp(regexp[currentTextfield.attr('name')])
            ,textFieldError = !currentTextfield.val().match(currentRe);

        currentTextfield.toggleClass("b-textfield_error", textFieldError);

        return textFieldError;
    }
    f.form.submit(f.check);
    f.textfields.blur(f.checkTextfield);

}