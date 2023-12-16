var Quotesinarray = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and I"m not sure about the universe.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Dr. Seuss', 
     'quote': 'You know you"re in love when you can"t fall asleep because reality is finally better than your dreams.'
    },
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don"t have to remember anything.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'H. Jackson Brown Jr., P.S. I Love You', 
    'quote': 'Twenty years from now you will be more disappointed by the things that you didn"t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'
   },
];


function conntetrownd(){
    var randoml = Number.parseInt(Math.random()*Quotesinarray .length );
if(randoml == roundnum){
    var randoml = Number.parseInt(Math.random()*Quotesinarray .length );
}

    console.log(randoml); console.log(randoml);
    document.querySelector('#connteoutt').textContent = `\"${Quotesinarray [randoml].quote}\"`;
    document.querySelector('#authoroutt').textContent = `-- ${Quotesinarray [randoml].author}`;

    var roundnum =randoml ;
 
    
}
