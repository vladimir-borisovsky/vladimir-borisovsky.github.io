window.onload = function() {
    var
        qwizStart               = document.querySelector('.qwiz-start'),
        qwizBg                  = document.querySelector('.qwiz-bg'),
        qwizQuestionsBox        = document.querySelector('.qwiz-questions-box'),
        qwizPaginationLineInner = document.querySelector('.qwiz-pagination-line-inner'),
        qwizPage                = 1,
        qwizPageCounter         = document.querySelector('.qwiz-pagination-first-namber'),
        canselButton            = document.querySelector('.qwiz-buttons .cansel'),
        prevButton              = document.querySelectorAll('.qwiz-buttons .prev'),
        nextButton              = document.querySelectorAll('.qwiz-buttons .next'),
        sendButton              = document.querySelector('.qwiz-buttons .send'),
        homeButton              = document.querySelector('.qwiz-buttons .home'),
        qwizCheckBoxes          = document.querySelectorAll('.qwiz-questions-box input[type="checkbox"]');

    qwizStart.onclick = function() {
        qwizBg.classList.add('qwiz-bg_active');
    }

    canselButton.onclick = function() {
        var
            qwizQuestion7QwizBudget = document.querySelector('.qwiz-question-5 input[name="qwiz-budget"]'),
            qwizQuestion7QwizName = document.querySelector('.qwiz-question-6 input[name="qwiz-name"]'),
            qwizQuestion7QwizPhone = document.querySelector('.qwiz-question-7 input[name="qwiz-phone"]'),
            qwizQuestion7QwizPhoneRecuired = document.querySelector('.qwiz-phone-recuired');

        qwizBg.classList.remove('qwiz-bg_active');

        for (i = 0; i < qwizCheckBoxes.length; i++) {
            qwizCheckBoxes[i].checked = false;
        }

        qwizQuestion7QwizBudget.value = '';
        qwizQuestion7QwizName.value = '';
        qwizQuestion7QwizPhone.value = '';
        qwizQuestion7QwizPhoneRecuired.style.opacity = '0';
    }

    for (var i = 0; i < prevButton.length; i++) {
        prevButton[i].onclick = function() {
            if (qwizPage == 2) {
                qwizQuestionsBox.style.transform = 'translateX(0)';
                qwizPaginationLineInner.style.width = '12.5%';
                qwizPageCounter.innerHTML = 1;
            }
            if (qwizPage == 3) {
                qwizQuestionsBox.style.transform = 'translateX(-12.5%)';
                qwizPaginationLineInner.style.width = '25%';
                qwizPageCounter.innerHTML = 2;
            }
            if (qwizPage == 4) {
                qwizQuestionsBox.style.transform = 'translateX(-25%)';
                qwizPaginationLineInner.style.width = '37.5%';
                qwizPageCounter.innerHTML = 3;
            }
            if (qwizPage == 5) {
                qwizQuestionsBox.style.transform = 'translateX(-37.5%)';
                qwizPaginationLineInner.style.width = '50%';
                qwizPageCounter.innerHTML = 4;
            }
            if (qwizPage == 6) {
                qwizQuestionsBox.style.transform = 'translateX(-50%)';
                qwizPaginationLineInner.style.width = '62.5%';
                qwizPageCounter.innerHTML = 5;
            }
            if (qwizPage == 7) {
                qwizQuestionsBox.style.transform = 'translateX(-62.5%)';
                qwizPaginationLineInner.style.width = '75%';
                qwizPageCounter.innerHTML = 6;
            }
            if (qwizPage == 8) {
                qwizQuestionsBox.style.transform = 'translateX(-75%)';
                qwizPaginationLineInner.style.width = '87.5%';
                qwizPageCounter.innerHTML = 7;
            }
            if (qwizPage > 1) {
                qwizPage--;
            }
        }
    }

    for (var i = 0; i < nextButton.length; i++) {
        nextButton[i].onclick = function() {
            if (qwizPage < 8) {
                qwizPage++;
            }
            if (qwizPage == 2) {
                qwizQuestionsBox.style.transform = 'translateX(-12.5%)';
                qwizPaginationLineInner.style.width = '25%';
                qwizPageCounter.innerHTML = 2;
            }
            if (qwizPage == 3) {
                qwizQuestionsBox.style.transform = 'translateX(-25%)';
                qwizPaginationLineInner.style.width = '37.5%';
                qwizPageCounter.innerHTML = 3;
            }
            if (qwizPage == 4) {
                qwizQuestionsBox.style.transform = 'translateX(-37.5%)';
                qwizPaginationLineInner.style.width = '50%';
                qwizPageCounter.innerHTML = 4;
            }
            if (qwizPage == 5) {
                qwizQuestionsBox.style.transform = 'translateX(-50%)';
                qwizPaginationLineInner.style.width = '62.5%';
                qwizPageCounter.innerHTML = 5;
            }
            if (qwizPage == 6) {
                qwizQuestionsBox.style.transform = 'translateX(-62.5%)';
                qwizPaginationLineInner.style.width = '75%';
                qwizPageCounter.innerHTML = 6;
            }
            if (qwizPage == 7) {
                qwizQuestionsBox.style.transform = 'translateX(-75%)';
                qwizPaginationLineInner.style.width = '87.5%';
                qwizPageCounter.innerHTML = 7;
            }
        }
    }

    sendButton.onclick = function() {
        var
            qwizQuestion7QwizBudget = document.querySelector('.qwiz-question-5 input[name="qwiz-budget"]'),
            qwizQuestion7QwizName = document.querySelector('.qwiz-question-6 input[name="qwiz-name"]'),
            qwizQuestion7QwizPhone = document.querySelector('.qwiz-question-7 input[name="qwiz-phone"]'),
            qwizQuestion7QwizPhoneRecuired = document.querySelector('.qwiz-phone-recuired');

        if (qwizQuestion7QwizPhone.value == '') {
            qwizQuestion7QwizPhoneRecuired.style.opacity = '1';
        } else {
            qwizPage++;
            qwizQuestionsBox.style.transform = 'translateX(-87.5%)';
            qwizPaginationLineInner.style.width = '100%';
            qwizPageCounter.innerHTML = 8;

            var
                qwizQuestion1       = document.querySelector('.qwiz-question-1 .qwiz-title').innerHTML,
                qwizQuestion1Title  = '<br>' + '<b>' + qwizQuestion1 + ':' + '</b>' + '<br>',
                qwizQuestion1Inputs = document.querySelectorAll('.qwiz-question-1 input[type="checkbox"]:checked'),
                qwizQuestion1Values = '',

                qwizQuestion2       = document.querySelector('.qwiz-question-2 .qwiz-title').innerHTML,
                qwizQuestion2Title  = '<br>' + '<b>' + qwizQuestion2 + ':' + '</b>' + '<br>',
                qwizQuestion2Inputs = document.querySelectorAll('.qwiz-question-2 input[type="checkbox"]:checked'),
                qwizQuestion2Values = '',

                qwizQuestion3       = document.querySelector('.qwiz-question-3 .qwiz-title').innerHTML,
                qwizQuestion3Title  = '<br>' + '<b>' + qwizQuestion3 + ':' + '</b>' + '<br>',
                qwizQuestion3Inputs = document.querySelectorAll('.qwiz-question-3 input[type="checkbox"]:checked'),
                qwizQuestion3Values = '',

                qwizQuestion4       = document.querySelector('.qwiz-question-4 .qwiz-title').innerHTML,
                qwizQuestion4Title  = '<br>' + '<b>' + qwizQuestion4 + ':' + '</b>' + '<br>',
                qwizQuestion4Inputs = document.querySelectorAll('.qwiz-question-4 input[type="checkbox"]:checked'),
                qwizQuestion4Values = '',

                qwizQuestion5       = document.querySelector('.qwiz-question-5 .qwiz-title').innerHTML,
                qwizQuestion5Title  = '<br>' + '<b>' + qwizQuestion5 + ':' + '</b>' + '<br>',
                qwizQuestion5Input = document.querySelector('.qwiz-question-5 input[name="qwiz-budget"]').value + '<br>',

                qwizQuestion6       = document.querySelector('.qwiz-question-6 .qwiz-title').innerHTML,
                qwizQuestion6Title  = '<br>' + '<b>' + qwizQuestion6 + ':' + '</b>' + '<br>',
                qwizQuestion6Input = document.querySelector('.qwiz-question-6 input[name="qwiz-name"]').value + '<br>',

                qwizQuestion7       = document.querySelector('.qwiz-question-7 .qwiz-title').innerHTML,
                qwizQuestion7Title  = '<br>' + '<b>' + qwizQuestion7 + ':' + '</b>' + '<br>',
                qwizQuestion7Input = document.querySelector('.qwiz-question-7 input[name="qwiz-phone"]').value + '<br>',

                qwizQuestionAll = '';

            for (var i = 0; i < qwizQuestion1Inputs.length; i++) {
                qwizQuestion1Values += qwizQuestion1Inputs[i].value + '<br>';
            }

            for (var i = 0; i < qwizQuestion2Inputs.length; i++) {
                qwizQuestion2Values += qwizQuestion2Inputs[i].value + '<br>';
            }

            for (var i = 0; i < qwizQuestion3Inputs.length; i++) {
                qwizQuestion3Values += qwizQuestion3Inputs[i].value + '<br>';
            }

            for (var i = 0; i < qwizQuestion4Inputs.length; i++) {
                qwizQuestion4Values += qwizQuestion4Inputs[i].value + '<br>';
            }

            qwizQuestionAll = qwizQuestion1Title + qwizQuestion1Values + qwizQuestion2Title + qwizQuestion2Values + qwizQuestion3Title + qwizQuestion3Values + qwizQuestion4Title + qwizQuestion4Values + qwizQuestion5Title + qwizQuestion5Input + qwizQuestion6Title + qwizQuestion6Input + qwizQuestion7Title + qwizQuestion7Input;

            console.log(qwizQuestionAll);

            for (i = 0; i < qwizCheckBoxes.length; i++) {
                qwizCheckBoxes[i].checked = false;
            }

            

            qwizQuestion7QwizBudget.value = '';
            qwizQuestion7QwizName.value = '';
            qwizQuestion7QwizPhone.value = '';
            qwizQuestion7QwizPhoneRecuired.style.opacity = '0';
        }
    }

    homeButton.onclick = function() {
        qwizBg.classList.remove('qwiz-bg_active');
        setTimeout(function() {
            qwizPage = 1;
            qwizQuestionsBox.style.transform = 'translateX(0)';
            qwizPaginationLineInner.style.width = '12.5%';
            qwizPageCounter.innerHTML = 1;
        }, 1000);
    }
}

