(function () {

    "use strict";

    const app = angular.module("app");
    app.service("EmpService", function () {
    	let itemPear = [
    		{	
    			id: '1',
    			name: 'PearPhone',
    			price: '4525zł',
    			description: 'Najlepszy model, najnowszy model',
    			photo: './grafika/item1.jpg',
    				
    		
    		},
    		{
    			id: '2',
    			name: 'Pear',
    			price: '1214zł',
    			description: 'Lorem ipsum dolor sit amet, consectetur',
    			photo: './grafika/item2.jpg'
    		},
    		{ 
    			id: '3',
    			name: 'PearPC Air',
    			price: '7585zł',
    			description: 'Lorem ipsum dolor si',
    			photo: './grafika/item3.jpg'
    		},
    		{
    			id: '4',
    			name: 'iPear Mini',
    			price: '999zł',
    			description: 'Lorem ipsum dolor sit ame',
    			photo: './grafika/item3.jpg'
    		},
    		{	
    			id: '5',
    			name: 'PearPC',
    			price: '4525zł',
    			description: 'Najlepszy model, najnowszy model',
    			photo: './grafika/item3.jpg'
    		},
    		{
    			id: '6',
    			name: 'Pear',
    			price: '1214zł',
    			description: 'Lorem ipsum dolor sit amet, consectetur',
    			photo: './grafika/item1.jpg'
    		},
    		{ 
    			id: '7',
    			name: 'PearPC Air',
    			price: '7585zł',
    			description: 'Lorem ipsum dolor si',
    			photo: './grafika/item3.jpg'
    		},
    		{
    			id: '8',
    			name: 'iPear Mini',
    			price: '999zł',
    			description: 'Lorem ipsum dolor sit ame',
    			photo: './grafika/item2.jpg'
    		},
    		{
    			id: '9',
    			name: 'Pear',
    			price: '1214zł',
    			description: 'Lorem ipsum dolor sit amet, consectetur',
    			photo: './grafika/item1.jpg'
    		},
    		{ 
    			id: '10',
    			name: 'PearPC Air',
    			price: '7585zł',
    			description: 'Lorem ipsum dolor si',
    			photo: './grafika/item1.jpg'
    		},
    		{
    			id: '11',
    			name: 'iPear Mini',
    			price: '999zł',
    			description: 'Lorem ipsum dolor sit ame',
    			photo: './grafika/item3.jpg'
    		},
            {
                id: '12',
                name: 'iPear Mini',
                price: '999zł',
                description: 'Lorem ipsum dolor sit ame',
                photo: './grafika/item3.jpg'
            },
                    {   
                id: '13',
                name: 'PearPhone',
                price: '4525zł',
                description: 'Najlepszy model, najnowszy model',
                photo: './grafika/item1.jpg',
                    
            
            },
            {
                id: '14',
                name: 'Pear',
                price: '1214zł',
                description: 'Lorem ipsum dolor sit amet, consectetur',
                photo: './grafika/item2.jpg'
            },
            { 
                id: '15',
                name: 'PearPC Air',
                price: '7585zł',
                description: 'Lorem ipsum dolor si',
                photo: './grafika/item3.jpg'
            },
            {
                id: '16',
                name: 'iPear Mini',
                price: '999zł',
                description: 'Lorem ipsum dolor sit ame',
                photo: './grafika/item3.jpg'
            },
            {   
                id: '17',
                name: 'PearPC',
                price: '4525zł',
                description: 'Najlepszy model, najnowszy model',
                photo: './grafika/item3.jpg'
            },
            {
                id: '18',
                name: 'Pear',
                price: '1214zł',
                description: 'Lorem ipsum dolor sit amet, consectetur',
                photo: './grafika/item1.jpg'
            },
            { 
                id: '19',
                name: 'PearPC Air',
                price: '7585zł',
                description: 'Lorem ipsum dolor si',
                photo: './grafika/item3.jpg'
            },
            {
                id: '20',
                name: 'iPear Mini',
                price: '999zł',
                description: 'Lorem ipsum dolor sit ame',
                photo: './grafika/item2.jpg'
            },
            {
                id: '21',
                name: 'Pear',
                price: '1214zł',
                description: 'Lorem ipsum dolor sit amet, consectetur',
                photo: './grafika/item1.jpg'
            },
            { 
                id: '22',
                name: 'PearPC Air',
                price: '7585zł',
                description: 'Lorem ipsum dolor si',
                photo: './grafika/item1.jpg'
            },
            {
                id: '23',
                name: 'iPear Mini',
                price: '999zł',
                description: 'Lorem ipsum dolor sit ame',
                photo: './grafika/item3.jpg'
            },
            {
                id: '24',
                name: 'iPear Mini',
                price: '999zł',
                description: 'Lorem ipsum dolor sit ame',
                photo: './grafika/item3.jpg'
            }
    	];
	
	
    this.getItems = function() {
    	return itemPear;
   		};

    });	
})();