import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile() {
   let listItem = oceans.map(oceans => 
      <div key={oceans.id} className={`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`} >
         <img src={oceans.image} alt={oceans.name} className='img'/>
         <h1>{oceans.name}</h1>
      </div>
      );
   return(
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>  
   );
}

export default Profile;