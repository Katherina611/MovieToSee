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

        //rozwiazanie z gwiazdkami//
        let $stars=$('<div class="stars"></div>');
        let $newStar1=$('<span class="star1">★</span>');
        let $newStar2=$('<span class="star2">★</span>');
        let $newStar3=$('<span class="star3">★</span>');
        let $newStar4=$('<span class="star4">★</span>');
        let $newStar5=$('<span class="star5">★</span>');
        $stars.append($newStar1);
        $stars.append($newStar2);
        $stars.append($newStar3);
        $stars.append($newStar4);
        $stars.append($newStar5);


        $section.find('ul').append($newLi);
        $newLi.append($newSpan);
        $newLi.append($newDecription);
        $newLi.append($newImage);
        $newLi.append($stars);
        $newSpan.append(newBtn);
        $newSpan.append(editBtn);
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
$('body').on('click', '.star1', function () {
    if($(this).hasClass('star1')){
        $(this).css('color',"orange");
        $(this).next().css('color',"grey");
        $(this).next().next().css('color',"grey");
        $(this).next().next().next().css('color',"grey");
        $(this).next().next().next().next().css('color',"grey");
    }
});
$('body').on('click', '.star2', function () {
    if($(this).hasClass('star2')){
        $(this).css('color',"orange");
        $(this).prev().css('color',"orange");
        $(this).next().css('color',"grey");
        $(this).next().next().css('color',"grey");
        $(this).next().next().next().css('color',"grey");
    }
});
$('body').on('click', '.star3', function () {
    if($(this).hasClass('star3')){
        $(this).css('color',"orange");
        $(this).prev().css('color',"orange");
        $(this).prev().prev().css('color',"orange");
        $(this).next().css('color',"grey");
        $(this).next().next().css('color',"grey");
    }
});
$('body').on('click', '.star4', function () {
    if($(this).hasClass('star4')){
        $(this).css('color',"orange");
        $(this).prev().css('color',"orange");
        $(this).prev().prev().css('color',"orange");
        $(this).prev().prev().prev().css('color',"orange");
        $(this).next().css('color',"grey");
    }
});
$('body').on('click', '.star5', function () {
    if($(this).hasClass('star5')){
        $(this).css('color',"orange");
        $(this).prev().css('color',"orange");
        $(this).prev().prev().css('color',"orange");
        $(this).prev().prev().prev().css('color',"orange");
        $(this).prev().prev().prev().prev().css('color',"orange");
    }
});

addUser();