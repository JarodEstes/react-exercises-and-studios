export default function BookList() {
   let pageTitle = "Best Books!";
   let book1 = "https://m.media-amazon.com/images/I/61pDNU9qEGL._SL1360_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/613W6rlIiKL._SL1500_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71ygzPIKlHL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cant Hurt Me - by David Goggins!" />
         <img src={book2} alt="Michael Jordan The Life - by Roland Lazenby!" />
         <img src={book3} alt="Why I stand - by Jonathan Issac!" />
      </div>      
   );
}
https://m.media-amazon.com/images/I/613W6rlIiKL._SL1500_.jpg