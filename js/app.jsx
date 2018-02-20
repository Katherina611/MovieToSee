let $section = $('.movies');
function addUser(){
    let btn =$section.find('input[type=submit]');
    let $movie = $section.find('#addMovie');
    let $description=$section.find('#addDesc');
    let $images=$section.find('#addImg');

    btn.on('click', function(){
        let movieVal = $movie.val();
        let descVAl = $description.val();
        let imgVal = $images.val();

        let $newLi = $('<li>');
        let $newSpan=$('<span>');
        let $newDecription=$('<p>');
        let $newImage=$('<img>');
        let newBtn = $('<button class="button1">Oglądnąłem</button>');
        let editBtn = $('<button class="button2">Edytuj tytuł</button>');
        $newImage.attr('src',imgVal);
        $newSpan.text(movieVal);
        $newDecription.text(descVAl);


        $section.find('ul').append($newLi);
        $newLi.append($newSpan);
        $newLi.append($newDecription);
        $newLi.append($newImage);
        $newLi.append(newBtn);
        $newLi.append(editBtn);
    })

}

$('body').on('click', '.button1', function () {
    $(this).parent().parent().remove();
});
$('body').on('click', '.button2', function () {
    $(this).parent().attr("contenteditable", "true");
    $(this).attr("class", "accept");
    $(this).text("Zatwierdź");

});
$('body').on('click', '.accept', function () {
    $(this).parent().attr("contenteditable", "false");
    $(this).attr("class", "button2");
    $(this).text("Edit");

});

addUser();