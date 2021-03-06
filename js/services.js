(function () {

    "use strict";

    const app = angular.module("app");
    app.service("EmpService", function () {
        let itemPear = [
            {
                id: '1',
                name: 'PearWatch 2',
                price: '1525zł',
                description: 'Najnowszy model w dobrej cenie',
                photo: './grafika/items/pearwatch1.png'


    		},
            {
                id: '2',
                name: 'PearWatch +',
                price: '1715zł',
                description: 'Wyższy model+ w lepszej cenie',
                photo: './grafika/items/pearwatch2.png'
    		},
            {
                id: '3',
                name: 'PearWatch 3',
                price: '2585zł',
                description: 'Możesz oczekiwać więcej',
                photo: './grafika/items/pearwatch3.png'
    		},
            {
                id: '4',
                name: 'PearPC',
                price: '2999zł',
                description: 'Niezawodny laptop na lata',
                photo: './grafika/items/pearpc1.png'
    		},
            {
                id: '5',
                name: 'PearPC Air',
                price: '4525zł',
                description: 'Lekki, nowoczesny laptop',
                photo: './grafika/items/pearpc2.png'
    		},
            {
                id: '6',
                name: 'PearPC Pro',
                price: '12300zł',
                description: 'Najbardziej zaawansowany',
                photo: './grafika/items/pearpc3.png'
    		},
            {
                id: '7',
                name: 'iPear Pro',
                price: '3585zł',
                description: 'Najlepszy model w klasie',
                photo: './grafika/items/ipear1.png'
    		},
            {
                id: '8',
                name: 'iPear Mini',
                price: '1299zł',
                description: 'Mały wymiar, wielkie możliwości',
                photo: './grafika/items/ipear3.png'
    		},
            {
                id: '9',
                name: 'iPear Air 2',
                price: '2214zł',
                description: 'Lekki, wytrzymały, pro',
                photo: './grafika/items/ipear2.png'
    		},
            {
                id: '10',
                name: 'PearPhone 7',
                price: '2585zł',
                description: 'Najnowszy model na rynku',
                photo: './grafika/items/pearphone1.png'
    		},
            {
                id: '11',
                name: 'PearPhone 6',
                price: '1599zł',
                description: 'Świetny wybór dla wymagających',
                photo: './grafika/items/pearphone2.png'
    		},
            {
                id: '12',
                name: 'PearPhone SE',
                price: '999zł',
                description: 'Wysoka jakość w dobrej cenie',
                photo: './grafika/items/pearphone3.png'
            },
    	];


        this.getItems = function () {
            return itemPear;
        };

    });
})();
