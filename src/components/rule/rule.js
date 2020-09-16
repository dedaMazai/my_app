import React, {Component} from 'react';

import './rule.css';
export default class Rule extends Component {
    render() {
        return (
            <div className="blok">
                <h1>
                    Правила:
                </h1>
                <p>
                    Если вы берете заказ на размещением фотографии (+ коментария под ней на рекламодателя), ссылки в статусе и размещением поста на странице с ежеднемным его обновлением все эти условия необходимы быть выполнены в течении 10 минут с того момента как вы взяли задание.
                    Обновление поста обязательно должно существляться ежедневно, путём полного удаления старого и созданием нового.
                    Невыполнение одного из этих условий подразумевается под нарушением правил.
                    Если при проверке профиля обнаруживается, что человек не был в сети более 2-х дней или профиль закрыт, то это тоже считается нарушением правил.
                </p>
                <p>
                    Ежедневно 2 раза в день (это может быть утро, день вечер или даже ночь) происходит проверка каждого аккаунта на выполнение вышеизложеных правил. Если происходит нарушение правил сайта один раз, то высвечивается предупреждение на главной странице, если фиксируется нарушение 2-й раз происходит блокировка аккаунта.
                    При 1-й блокировке аккаунт замораживается на 1 месяц, при 2-й на 3 месяца, при 3-й 6 месяцев и при 4-й блокировке аккаунт замораживается на всегда.
                </p>
            </div>
        )
    }

};