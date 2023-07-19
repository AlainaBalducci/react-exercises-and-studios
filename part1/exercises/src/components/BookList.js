export default function BookList() {
   let pageTitle = "Books I want to Read!";
   let book1 = "https://m.media-amazon.com/images/I/41y31M-zcgL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/41Ek9KKVYSL._SX715_BO1,204,203,200_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/41WznOEKmAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Book to learn JavaScript and JQuery" />
         <img src={book2} alt="A Book to learn PHP and MySql" />
         <img src={book3} alt="A Book to learn HTML and CSS" />
      </div>      
   );
}